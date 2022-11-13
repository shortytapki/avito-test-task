import GradientText from '../GradientText/GradientText';
import styles from './Post.module.css';

const Post = ({ number, children }) => {
  const { by, time, title, score } = children;
  const createdAt = new Date(time * 1000).toLocaleString().slice(0, 17);
  return (
    <div className="wrap">
      <article className={styles.post}>
        <p className={styles.number}>
          <GradientText>{number}</GradientText>
        </p>
        <section className={styles.content}>
          <h2 className={styles.text}>{title}</h2>
          <div className={styles.info}>
            <p className={styles.text}>
              Posted by <strong>{by} </strong>
              at {createdAt} <br />
              {score < 2 ? `${score} point` : `${score} points`}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Post;
