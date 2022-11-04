import { graphql } from "graphql";
import { request, gql } from "graphql-request";

const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? "";

export const getPosts = async () => {
  const query = gql`
    query PostCards {
      postsConnection {
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
            createdAt
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges.node;
};
