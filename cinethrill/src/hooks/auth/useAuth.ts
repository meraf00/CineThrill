'use client';
import { login, signup } from '@/api/auth/auth';
import { QUERY_KEYS } from '@/api/consts';
import { User } from '@/libs/models/user';
import { useUserStore } from '@/store/userStore';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { redirect } from 'next/navigation';

export function useSignup() {
  const queryClient = useQueryClient();
  const setUser = useUserStore((state) => state.setUser);

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data: User) => {
      setUser(data);
      queryClient.setQueryData([QUERY_KEYS.user], data);
      redirect('/');
    },
    onError: (error) => {},
  });

  return mutation;
}

export function useLogin(navigateTo: string) {
  const queryClient = useQueryClient();
  const setUser = useUserStore((state) => state.setUser);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data: User) => {
      setUser(data);
      queryClient.setQueryData([QUERY_KEYS.user], data);
      redirect(navigateTo);
    },
    onError: (error: any) => {
      //   console.log(error.response.data.message);
    },
  });

  return mutation;
}

export function useLogout() {
  const queryClient = useQueryClient();
  const setUser = useUserStore((state) => state.setUser);

  const mutation = useMutation({
    onMutate: () => {
      queryClient.setQueryData([QUERY_KEYS.user], null);
    },
    onSuccess: () => {
      setUser(null);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.user] });
      redirect('/');
    },
    onError: (error) => {},
  });

  return mutation;
}

export function useUser() {
  const user = useUserStore((state) => state.user);
  return user;
}
