import { gql } from '@apollo/client'

export const BLOG_QUERY = gql`
query blogQuery($id: String!) {
    nodeQuery(filter: {conditions: [{field: "type", value: ["blog"]}, {field: "nid", value: [$id]}]}) {
      entities {
        __typename
        entityLabel
        entityCreated
        ... on NodeBlog {
          fieldBlogImage {
            url
          }
          body {
            value
          }
        }
      }
    }
  }
`