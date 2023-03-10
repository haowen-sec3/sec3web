import { graphql } from "graphql";
import { request, gql } from "graphql-request";

export const graphqlAPI: string =
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "";

export const getPosts = async (skip: number) => {
  const query = gql`
    query PostCards($skip: Int!) {
      postsConnection(orderBy: date_DESC, first: 10, skip: $skip) {
        edges {
          node {
            author {
              id
              name
              title
              biography
            }
            slug
            title
            excerpt
            featured
            date
            createdAt
          }
        }
        aggregate {
          count
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { skip });

  return result.postsConnection;
};

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featured
        author {
          name
          title
        }
        date
        createdAt
        slug
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getPostPaths = async () => {
  const query = gql`
    query PostPath {
      postsConnection() {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getOtherPosts = async (slug: string) => {
  const query = gql`
    query GetOtherPosts($slug: String!) {
      postsConnection(
        where: { slug_not: $slug }
        orderBy: date_DESC
        first: 3
      ) {
        edges {
          node {
            title
            date
            slug
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.postsConnection.edges;
};

export const getPageContent = async (slug: string) => {
  const query = gql`
    query GetPageContent($slug: String!) {
      page(where: { slug: $slug }) {
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.page;
};
