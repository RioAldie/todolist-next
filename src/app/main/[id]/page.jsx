'use client';
import styles from '@/components/add/add.module.css';
import { editTask } from '@/lib/action';
import { revalidatePath } from 'next/cache';

import {
  redirect,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { useEffect, useState } from 'react';

import { useFormState } from 'react-dom';
import { Toaster, toast } from 'sonner';

const EditTask = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [state, formAction] = useFormState(editTask, undefined);
  const [queryId, setQueryId] = useState('');
  const [queryTitle, setQueryTitle] = useState('');
  const [queryBody, setQueryBody] = useState('');

  useEffect(() => {
    const pathSegments = pathname.split('/');
    const id = pathSegments[pathSegments.length - 1];

    const title = searchParams.get('title');
    const body = searchParams.get('body');

    setQueryId(id || '');
    setQueryTitle(title || '');
    setQueryBody(body || '');

    if (state) {
      toast.success('Success');
    }
  }, [pathname, searchParams, state]);

  return (
    <main className={styles.main}>
      <Toaster richColors />
      <div className={styles.section}>
        <form action={formAction} className={styles.container}>
          <h1>Edit Task</h1>
          <input type="text" defaultValue={queryTitle} name="title" />
          <textarea
            type="text"
            name="body"
            defaultValue={queryBody}
            rows={10}
          />
          <input type="hidden" name="id" value={queryId} />
          <button className={styles.save}>Save</button>
        </form>
      </div>
    </main>
  );
};

export default EditTask;
