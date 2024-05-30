'use client';

import { authenticate } from '@/lib/action';
import styles from './login.module.css';
import { useFormState } from 'react-dom';
import { Toaster, toast } from 'sonner';

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <Toaster richColors />
      <h1>
        Login <span className={styles.title}>Todolist</span>
      </h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button className={styles.login}>Login</button>
      {state && toast.error(state)}
    </form>
  );
};

export default LoginForm;
