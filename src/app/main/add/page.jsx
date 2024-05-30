'use client';

import styles from '@/components/add/add.module.css';
import { addNewTask } from '@/lib/action';
import { useFormState } from 'react-dom';

const AddTask = () => {
  const [state, formAction] = useFormState(addNewTask, undefined);

  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <form action={formAction} className={styles.container}>
          <h1>Add New Task</h1>
          <input type="text" name="title" placeholder="title" />
          <textarea
            type="text"
            name="body"
            placeholder="task"
            rows={10}
          />
          <button className={styles.save}>Save</button>
        </form>
      </div>
    </main>
  );
};

export default AddTask;
