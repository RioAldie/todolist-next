import { deleteTask } from '@/lib/action';
import styles from './task.module.css';
import Link from 'next/link';

const TaskCard = (props) => {
  const { title, date, body, id } = props;

  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <h3 className={styles.title}>{title}</h3>
        <h6 className={styles.date}>{date}</h6>
      </div>
      <p className={styles.body}> {body}</p>
      <div className={styles.action}>
        <Link
          className={styles.edit}
          href={{
            pathname: `/main/${id}`,
            query: { title: title, body: body },
          }}>
          Edit
        </Link>

        <form action={deleteTask}>
          <input type="hidden" name="id" value={id} />
          <button className={styles.delete}>Delete</button>
        </form>
      </div>
    </div>
  );
};

export default TaskCard;
