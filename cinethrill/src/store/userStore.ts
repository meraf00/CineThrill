import { User } from '@/libs/models/user';
import { create } from 'zustand';

export interface UserState {
  user: User | null;
}

export interface UserAction {
  loadUser: () => void;
  setUser: (user: User | null) => void;
}

export interface UserStore extends UserAction, UserState {}

export const useUserStore = create<UserStore>((set) => ({
  user: null,

  loadUser: () => {
    const user = localStorage.getItem('user');
    if (user) {
      set({ user: JSON.parse(user) });
    }
  },

  setUser: (user: User | null) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
    set({ user });
  },
}));
