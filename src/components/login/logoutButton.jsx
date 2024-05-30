import { signOut } from '@/app/auth';
import styles from './login.module.css';

const LogoutButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}>
      <button className={styles.logout}>Logout</button>
    </form>
  );
};

export default LogoutButton;
