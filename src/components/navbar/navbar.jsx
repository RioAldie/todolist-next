import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={'/'}>
        <div className={styles.title}>Todolist</div>
      </Link>
    </div>
  );
};

export default Navbar;
