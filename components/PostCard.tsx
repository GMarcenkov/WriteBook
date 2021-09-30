import type { NextPage } from "next";
import styles from "./PostCard.module.css";
// import Link from "next/Link";
type Props = {
  post: {
    id: string;
    title: string;
    description: string;
    text: string;
  };
  handleDeletePost: (id: string) => void;
};

const PostCard: NextPage<Props> = ({ post, handleDeletePost }) => {
  const { id, title, description } = post;

  return (
    <div className={styles.card}>
      <a href={`/post/${id}`}>
        <div className={styles.info}>
          <h2>{title} &rarr;</h2>
          <p>{description}</p>
        </div>
      </a>
      <div className={styles.delete_card} onClick={() => handleDeletePost(id)}>
       Delete
      </div>
    </div>
  );
};

export default PostCard;
