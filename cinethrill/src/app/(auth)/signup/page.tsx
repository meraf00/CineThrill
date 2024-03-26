'use client';

import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import Link from 'next/link';
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div
      className="relative w-full max-w-96 p-[0.14rem] rounded-lg overflow-hidden
    after:absolute after:w-full after:h-full 
    after:top-0 after:left-0 after:rounded-lg after:-z-10
    after:bg-gradient-primary after:animate-spin-slow"
    >
      <div className="p-4 rounded-lg bg-gradient-to-br from-blueblack-light to-blueblack">
        <h1 className="text-center font-bold text-2xl">Create new account</h1>
        <form className="mt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="transition-all duration-300 ease-in-out">
              <Input
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
            <Button>Sign up</Button>
          </div>

          <div className="text-center text-opacity-70 text-white text-xs gap-2 border-t border-opacity-15 border-white pt-2">
            Already have an account?{' '}
            <Link href="/login" className="hover:text-teal">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
