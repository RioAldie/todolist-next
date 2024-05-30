'use server';

import { signIn } from '@/app/auth';

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
    return true;
  } catch (err) {
    if (err.message.includes('CredentialsSignin')) {
      return 'Wrong Credentials';
    }
    throw err;
  }
};
