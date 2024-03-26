'use client';

import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { useLogin } from '@/hooks/auth/useAuth';
import { validateLogin } from '@/libs/validation/auth';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);

  const login = useLogin('/');

  const handleLogin = (e: any) => {
    e.preventDefault();

    const err = validateLogin({ email, password });

    if (err.length > 0) {
      setErrors(err);
      return;
    }

    login.mutate({ email, password });
  };

  useEffect(() => {
    errors.map((err) =>
      toast.error(err, {
        style: {
          background: '#333',
          color: '#fff',
        },
      })
    );

    if (login.isError && login?.error?.response) {
      toast.error(login.error.response.data.message, {
        style: {
          background: '#333',
          color: '#fff',
        },
      });
    }

    toast.success('Logged in successfully', {
      style: {
        background: '#333',
        color: '#fff',
      },
    });
  }, [errors, login.error, login.isSuccess]);

  console.log(login.isSuccess);

  return (
    <div
      className="relative w-full max-w-96 p-[0.14rem] rounded-lg overflow-hidden
    after:absolute after:w-full after:h-full 
    after:top-0 after:left-0 after:rounded-lg after:-z-10
    after:bg-gradient-primary after:animate-spin-slow"
    >
      <div className="p-4 rounded-lg bg-gradient-to-br from-blueblack-light to-blueblack">
        <h1 className="text-center font-bold text-2xl">Welcome back!</h1>
        <form className="mt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="transition-all duration-300 ease-in-out">
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              className={
                'transition-all duration-300 ease-in-out focus-within:mt-5 ' +
                (password !== '' ? 'mt-5' : '')
              }
            >
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={handleLogin}>Login</Button>
            <Link href="#" className="text-right text-xs hover:text-teal">
              Forgot password?
            </Link>
          </div>

          <div className="text-center text-opacity-70 text-white text-xs gap-2 border-t border-opacity-15 border-white pt-2">
            Don't have an account?{' '}
            <Link href="/signup" className="hover:text-teal">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
