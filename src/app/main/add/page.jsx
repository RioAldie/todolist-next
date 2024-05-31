'use client';

import styles from '@/components/add/add.module.css';
import { addNewTask } from '@/lib/action';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { Toaster, toast } from 'sonner';

const AddTask = () => {
  const [state, formAction] = useFormState(addNewTask, undefined);

  useEffect(() => {
    if (state && state !== undefined) {
      toast.success('success');
    }
    if (state?.error) {
      toast.error('something wrong');
    }
  }, [state]);
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
      <Toaster richColors />
    </main>
  );
};

export default AddTask;
