import { axiosInstance } from '../consts';

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignup {
  name: string;
  email: string;
  password: string;
}

const login = async (data: ILogin) => {
  const response = await axiosInstance.post(`/auth/login`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    return response.data.data;
  } else {
    throw new Error('Failed to login');
  }
};

const signup = async (data: ISignup) => {
  const response = await axiosInstance.post('/auth/signup', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error('Failed to signup');
  }
};

export { login, signup };
