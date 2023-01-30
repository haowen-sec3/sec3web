import Link from "next/link";
import moment from "moment";
import styles from "./postCard.module.scss";

type Props = {
  slug: string;
  title: string;
  excerpt: string;
  featured: boolean;
  date: string;
};

const PostCard = (props: Props) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.top}>
        <span className={styles.date}>
          {moment(props.date).format("MMMM DD, YYYY")}
        </span>
        {props.featured && <span className={styles.featured}>★Featured★</span>}
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.excerpt}>{props.excerpt}</div>
      <Link
        className={styles.button}
        href={`/blog/${props.slug}`}
        onClick={() => console.log(11)}
      >
        <div className={styles["btn-text"]}>Read more</div>
        <div className={styles["btn-icon"]}>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 8H13.5"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9 3.5L13.5 8L9 12.5"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
