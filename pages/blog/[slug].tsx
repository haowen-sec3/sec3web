import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { getPostPaths, getPostDetails, getOtherPosts } from "../../services";
import Container from "../../components/Container";
import BtnWithArrow from "../../components/BtnWithArrow";
import { getFormatDate } from "../../utils";
import styles from "./blogDetail.module.scss";
import BgBottom from "../../assets/images/bg-blog-bottom.png";
import BgDetail from "../../assets/images/bg-blog-detail.png";
import Loader from "../../components/Loader";

const BlogDetail = ({ post, otherPosts }: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className={styles["blog-detail"]}>
      <Head>
        <title>{post.title}</title>
        <meta content="" name="description" />
        <meta content={post.title} property="og:title" />
        <meta content="" property="og:description" />
        <meta content="" property="og:image" />
        <meta content={post.title} property="twitter:title" />
        <meta content="" property="twitter:description" />
        <meta content="" property="twitter:image" />
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
      <div className={styles["top"]}>
        <Container className={styles["wrapper"]}>
          <div className={styles["title"]}>{post.title}</div>
          <h6 className={styles["date"]}>{getFormatDate(post.date)}</h6>
        </Container>
      </div>

      <div className={styles["content"]}>
        <Container className={styles["container"]}>
          <RichText
            content={post.content.raw}
            renderers={{
              h1: ({ children }) => (
                <h1 className={styles["section-title"]}>{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className={styles["subtitle"]}>{children}</h2>
              ),
              h3: ({ children }) => (
                <h2 className={styles["subtitle"]}>{children}</h2>
              ),
              h4: ({ children }) => (
                <h2 className={styles["subtitle"]}>{children}</h2>
              ),
              h6: ({ children }) => (
                <div className={styles["caption"]}>{children}</div>
              ),
              p: ({ children }) => (
                <p className={styles["paragraph"]}>{children}</p>
              ),
              a: ({ children, href }) => {
                const isImageFromMedium =
                  href?.endsWith(".png") && href?.includes("medium.com");
                if (isImageFromMedium) {
                  return (
                    <img
                      src={
                        href?.includes("/700/")
                          ? href.replace("/700/", "/1200/")
                          : href
                      }
                    />
                  );
                } else {
                  return (
                    <a
                      className={styles["link"]}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {children}
                    </a>
                  );
                }
              },
              img: ({ src, altText }) => <img src={src} alt={altText} />,
              blockquote: ({ children }) => (
                <div className={styles["blockquote"]}>{children}</div>
              ),
              bold: ({ children }) => <strong>{children}</strong>,
              code_block: ({ children }) => (
                <pre className={styles["code-block"]}>
                  <code>{children}</code>
                </pre>
              ),
              table: ({ children }) => (
                <table className={styles["table"]}>{children}</table>
              ),
              table_head: ({ children }) => (
                <thead className={styles["thead"]}>{children}</thead>
              ),
              table_header_cell: ({ children }) => (
                <th className={styles["th"]}>{children}</th>
              ),
              table_body: ({ children }) => (
                <tbody className={styles["tbody"]}>{children}</tbody>
              ),
              table_row: ({ children }) => (
                <tr className={styles["tr"]}>{children}</tr>
              ),
              table_cell: ({ children }) => (
                <td className={styles["td"]}>{children}</td>
              ),
              class: ({ children, className }) => (
                <div
                  className={`${
                    className?.toLowerCase() === "caption" && styles["caption"]
                  }`}
                >
                  {children}
                </div>
              ),
            }}
          />
        </Container>
      </div>

      <div className={styles["bottom"]}>
        <Image
          src={BgBottom}
          loading="lazy"
          sizes="100vw"
          alt="bg-bottom"
          className={styles["bg-bottom"]}
        />
        <Container>
          <h6 className={styles["label"]}>Other Posts</h6>
          <div className={styles["list"]}>
            {otherPosts.map((post: any) => (
              <div key={post.node.title} className={styles["list-item"]}>
                <div className={styles["title"]}>{post.node.title}</div>
                <BtnWithArrow
                  text="Read"
                  url={post.node.slug}
                  className="m-t-2"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogDetail;

// Fetch data at build time
export async function getStaticProps({ params }: any) {
  const post = await getPostDetails(params.slug);
  const otherPosts = (await getOtherPosts(params.slug)) || [];

  return {
    props: { post, otherPosts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = (await getPostPaths()) || [];

  return {
    paths: posts.map(({ node: { slug } }: any) => ({
      params: {
        slug,
      },
    })),
    fallback: true,
  };
}
