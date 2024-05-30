import styles from './task.module.css';

const TaskCard = (props) => {
  const { title, date, body } = props;
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <h3 className={styles.title}>{title}</h3>
        <h6 className={styles.date}>{date}</h6>
      </div>
      <p className={styles.body}>
        {' '}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Ratione cupiditate commodi, obcaecati accusantium enim eaque
        facere laboriosam consequuntur dolores. Tempore cumque et quis
        nobis suscipit aperiam magnam provident officia nesciunt!
      </p>
      <div className={styles.action}>
        <button className={styles.edit}>Edit</button>
        <button className={styles.delete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
