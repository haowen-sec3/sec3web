import React from "react";
import PostCard from "../../components/PostCard";
import { getPosts } from "../../services";

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

const Blog = ({ posts }: any) => {
  return (
    <div>
      {posts.map((post: any) => (
        <PostCard {...post} />
      ))}
    </div>
  );
};

export default Blog;
