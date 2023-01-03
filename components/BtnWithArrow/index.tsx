import { MouseEventHandler } from "react";
import styles from "./btnWithArrow.module.scss";

type props = {
  text: string;
  url?: string;
  className?: string;
  target?: string;
  handleClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
};

const BtnWithArrow = ({ text, url, className, target, handleClick }: props) => {
  return (
    <div className={`${styles["btn-with-arrow"]} ${className}`}>
      <a
        href={url}
        target={`${target ? target : "_blank"}`}
        onClick={handleClick}
      >
        <div>{text}</div>
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </a>
    </div>
  );
};

export default BtnWithArrow;
