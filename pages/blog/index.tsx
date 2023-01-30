import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { getPosts } from "../../services";
import PostCard from "../../components/PostCard";
import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
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

const Blog = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [activedPage, setActivedPage] = useState<number>(1);
  const [skip, setSkip] = useState<number>(0);

  useEffect(() => {
    getPosts(0)
      .then((postData) => {
        setData(postData);
      })
      .catch((e) => setError(e));
  }, []);

  // set skipped value
  useEffect(() => {
    setSkip((activedPage - 1) * 10);
  }, [activedPage]);

  // fetch new page
  useEffect(() => {
    setLoading(true);
    getPosts(skip)
      .then((postData) => {
        setData(postData);
        setLoading(false);
      })
      .catch((e) => setError(e));
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [skip]);

  const selectPage = (page: number) => {
    setActivedPage(page);
  };

  const previousPage = () => {
    setActivedPage(activedPage - 1);
  };

  const nextPage = () => {
    setActivedPage(activedPage + 1);
  };

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
      {isLoading ? (
        <div className={styles["loading"]}>
          <h2>Loading more blogs...</h2>
        </div>
      ) : error ? (
        <div className={styles["error"]}>
          <h2>Oops! We met some issues, please try to refresh the page...</h2>
        </div>
      ) : (
        <>
          <Container className={styles["list"]}>
            {data?.edges?.map((post: any) => {
              const { slug, title, excerpt, featured, date } =
                post.node as IPostCard;

              return (
                <PostCard
                  key={slug}
                  slug={slug}
                  title={title}
                  excerpt={excerpt}
                  featured={featured}
                  date={date}
                />
              );
            })}
          </Container>

          <Pagination
            postsPerPage={10}
            totalPosts={data?.aggregate?.count}
            activedPage={activedPage}
            paginate={selectPage}
            hasNextPage={data?.pageInfo?.hasNextPage}
            hasPreviousPage={data?.pageInfo?.hasPreviousPage}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </>
      )}
    </div>
  );
};

export default Blog;
