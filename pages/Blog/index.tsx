import Image from "next/image";
import Head from "next/head";
import { getPosts } from "../../services";
import PostCard from "../../components/PostCard";
import Container from "../../components/Container";
import BgDetail from "../../assets/images/bg-blog-detail.png";
import BgList from "../../assets/images/bg-blog-list.png";
import styles from "./blogList.module.scss";

type IPostCard = {
  author: Object;
  slug: string;
  title: string;
  excerpt: string;
  featured: boolean;
  date: string;
};

const Blog = ({ posts }: any) => {
  return (
    <div className={styles["blogs"]}>
      <Head>
        <title>Blog - sec3</title>
        <meta
          content="sec3 Blogs - learn more about Solana security and best practices."
          name="description"
        />
        <meta content="Blog - sec3" property="og:title" />
        <meta
          content="sec3 Blogs - learn more about Solana security and best practices."
          property="og:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/63178530795d9bab7efc1663_Screen%20Shot%202022-09-06%20at%2012.34.21%20PM%20copy.png"
          property="og:image"
        />
        <meta content="Blog - sec3" property="twitter:title" />
        <meta
          content="sec3 Blogs - learn more about Solana security and best practices."
          property="twitter:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/63178530795d9bab7efc1663_Screen%20Shot%202022-09-06%20at%2012.34.21%20PM%20copy.png"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Image
        src={BgDetail}
        loading="lazy"
        sizes="100vw"
        alt="bg-bottom"
        className={styles["bg-detail"]}
      />
      <Image
        src={BgList}
        loading="lazy"
        sizes="100vw"
        alt="bg-bottom"
        className={styles["bg-list"]}
      />
      <div className={styles.title}>
        <h1>Blogs</h1>
      </div>
      <Container className={styles["list"]}>
        {posts.map((post: any) => {
          const { slug, title, excerpt, featured, date } =
            post.node as IPostCard;

          return (
            <PostCard
              slug={slug}
              title={title}
              excerpt={excerpt}
              featured={featured}
              date={date}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
