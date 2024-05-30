import LogoutButton from '@/components/login/logoutButton';
import styles from '@/components/main/main.module.css';
import TaskCard from '@/components/task/taskCard';
import { getTasks } from '@/lib/data';

const Main = async () => {
  const data = await getTasks();

  console.log('task', data);
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <p className={styles.title}>
          Todolist<span style={{ color: 'red' }}>.</span>{' '}
        </p>
        <button className={styles.button}>Add New Task</button>
      </div>

      <div className={styles.container}>
        {data?.map((task, i) => {
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
      <LogoutButton />
    </main>
  );
};

export default Main;
