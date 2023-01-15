import { RichText } from "@graphcms/rich-text-react-renderer";
import React, { useEffect } from "react";
import Image from "next/image";
import { getPageContent } from "../../services";
import Container from "../../components/Container";
import styles from "../terms/terms.module.scss";
import BgTerms from "../../assets/images/bg-terms.png";
import Head from "next/head";

function Privacy({ privacy }: any) {
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
        <title>Privacy Policy | sec3</title>
        <meta content="Privacy Policy | sec3" property="og:title" />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/628a87ede461d3798486d3e3_Screen%20Shot%202022-05-22%20at%201.55.47%20PM.png"
          property="og:image"
        />
        <meta content="Privacy Policy | sec3" property="twitter:title" />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/628a87ede461d3798486d3e3_Screen%20Shot%202022-05-22%20at%201.55.47%20PM.png"
          property="twitter:image"
        />
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
          <h1>Privacy Policy</h1>
        </strong>
      </div>

      <div className={styles["body"]}>
        <Container>
          <div className={styles["table-toc"]}>
            <div className={styles["privacy-policy-sticky"]}>
              <p>contents</p>
              {[...Array.from(new Set(contents))].map((content) => (
                <div key={content} className={styles["policy-title"]}>
                  <a href={`#${content}`}>{content}</a>
                </div>
              ))}
            </div>
            <div className={styles["privacy-policy-content"]}>
              <RichText
                content={privacy.content.raw}
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

export default Privacy;

export async function getStaticProps() {
  const privacy = await getPageContent("privacy-policy");

  return {
    props: { privacy },
  };
}
