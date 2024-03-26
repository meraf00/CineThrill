import validator from 'validator';

const validateLogin = (data: any) => {
  const errors = [];

  if (!validator.isEmail(data.email)) {
    errors.push('Email is invalid');
  }

  if (!data.email) {
    errors.push('Email is required');
  }

  if (!data.password) {
    errors.push('Password is required');
  }

  if (data.password.length < 6) {
    errors.push('Password must be at least 6 characters');
  }

  return errors;
};

export { validateLogin };
