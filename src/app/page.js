import { tasks } from '@/lib/dummy';
import styles from './page.module.css';
import TaskCard from '@/components/task/taskCard';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <p className={styles.title}>
          Todolist<span style={{ color: 'blue' }}>.</span>{' '}
        </p>
        <button className={styles.button}>Add New Task</button>
      </div>

      <div className={styles.container}>
        {tasks.map((task, i) => {
          return (
            <TaskCard
              title={task?.title}
              body={task?.body}
              date={task?.date}
              key={i}
            />
          );
        })}
      </div>
    </main>
  );
}
