import { RichText } from "@graphcms/rich-text-react-renderer";
import React from "react";
import { getPageContent } from "../../services";
import { useEffect, useState } from "react";
import styles from "./banner.module.scss";

function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    getPageContent("home").then((banner) => {
      setBanner(banner.content.raw);
    });
  }, []);

  return (
    <div className={styles["banner"]}>
      <RichText
        content={banner}
        renderers={{
          h5: ({ children }) => (
            <h5 className={styles["context"]}>{children}</h5>
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
        }}
      />
    </div>
  );
}

export default Banner;
