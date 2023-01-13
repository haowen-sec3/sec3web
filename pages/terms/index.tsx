import { RichText } from "@graphcms/rich-text-react-renderer";
import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { getPageContent } from "../../services";
import Container from "../../components/Container";
import styles from "./terms.module.scss";
import BgTerms from "../../assets/images/bg-terms.png";

function Terms({ terms }: any) {
  const [contents, setContents] = React.useState<string[]>([]);
  useEffect(() => {
    if (contents) {
      document.querySelectorAll("h2").forEach((h2) => {
        const content: string = h2.textContent!;
        h2.setAttribute("id", content);
        setContents((prevContents) => prevContents.concat(content));
      });
    }
  }, []);

  return (
    <div className={styles["terms"]}>
      <Head>
        <title>Terms of Service | sec3</title>
        <meta
          content="Terms of Service  | sec3 Software, X-ray &amp; WatchTower"
          name="description"
        />
        <meta content="Terms of Service  | sec3" property="og:title" />
        <meta
          content="Terms of Service  | sec3 Software, X-ray &amp; WatchTower"
          property="og:description"
        />
        <meta content="Terms of Service  | sec3" property="twitter:title" />
        <meta
          content="Terms of Service  | sec3 Software, X-ray &amp; WatchTower"
          property="twitter:description"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles["top"]}>
        <Image
          className={styles["image-header1"]}
          src={BgTerms}
          loading="lazy"
          alt=""
        />
        <Image
          className={styles["image-header2"]}
          src={BgTerms}
          loading="lazy"
          alt=""
        />
        <strong>
          <h1>Terms of Service</h1>
        </strong>
      </div>

      <div className={styles["body"]}>
        <Container>
          <div className={styles["table-toc"]}>
            <div className={styles["privacy-policy-sticky"]}>
              <p>contents</p>
              {[...Array.from(new Set(contents))].map((content) => (
                <div className={styles["policy-title"]}>
                  <a href={`#${content}`}>{content}</a>
                </div>
              ))}
            </div>
            <div className={styles["privacy-policy-content"]}>
              <RichText
                content={terms.content.raw}
                renderers={{
                  p: ({ children }) => (
                    <p className={styles["paragraph"]}>{children}</p>
                  ),
                  a: ({ children, href }) => (
                    <a
                      className={styles["link"]}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({ children }) => (
                    <div className={styles["blockquote"]}>{children}</div>
                  ),
                  bold: ({ children }) => <strong>{children}</strong>,
                  code_block: ({ children }) => (
                    <pre className={styles["code-block"]}>
                      <code>{children}</code>
                    </pre>
                  ),
                }}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Terms;

export async function getStaticProps() {
  const terms = await getPageContent("terms");

  return {
    props: { terms },
  };
}
