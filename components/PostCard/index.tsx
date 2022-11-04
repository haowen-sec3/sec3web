import React from "react";
import Link from "next/link";
import moment from "moment";

type Post = {
  title: string;
  excerpt: string;
  createdAt: string;
};

const PostCard = (props: Post) => {
  return (
    <div>
      <div>
        <span className="date">
          {moment(props.createdAt).format("MMM DD, YYYY")}
        </span>
        <div className="featured"></div>
      </div>
      <div className="title">{props.title}</div>
      <div className="excerpt">{props.excerpt}</div>
      <div className="button">
        <Link className="btn-text" href={"/blog/xxx"}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
