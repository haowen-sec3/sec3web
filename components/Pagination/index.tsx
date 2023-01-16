import React from "react";
import styles from "./pagination.module.scss";

interface Props {
  postsPerPage: number;
  totalPosts: number;
  activedPage: number;
  paginate: (number: number) => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
}

const Pagination = ({
  postsPerPage,
  totalPosts,
  activedPage,
  paginate,
  hasNextPage,
  hasPreviousPage,
  previousPage,
  nextPage,
}: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles["pagination"]}>
      {hasPreviousPage && (
        <a className={styles["page-item"]} onClick={() => previousPage()}>
          <svg
            className={styles["pagination-icon"]}
            height="12px"
            width="12px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            transform="translate(0, 1)"
          >
            <path
              fill="none"
              stroke="currentColor"
              fillRule="evenodd"
              d="M8 10L4 6l4-4"
            ></path>
          </svg>
        </a>
      )}
      {pageNumbers.map((number) => (
        <a
          key={number}
          className={`${
            activedPage === number
              ? styles["actived-page-item"]
              : styles["page-item"]
          }`}
          onClick={() => paginate(number)}
        >
          {number}
        </a>
      ))}
      {hasNextPage && (
        <a className={styles["page-item"]} onClick={() => nextPage()}>
          <svg
            className={styles["pagination-icon"]}
            height="12px"
            width="12px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            transform="translate(0, 1)"
          >
            <path
              fill="none"
              stroke="currentColor"
              fillRule="evenodd"
              d="M4 2l4 4-4 4"
            ></path>
          </svg>
        </a>
      )}
    </div>
  );
};

export default Pagination;
