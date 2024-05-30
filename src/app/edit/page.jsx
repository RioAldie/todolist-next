import styles from '@/components/add/add.module.css';

const EditTask = () => {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <form className={styles.container}>
          <h1>Edit Task</h1>
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

export default EditTask;
