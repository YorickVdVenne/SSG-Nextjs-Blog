import { gql } from '@apollo/client'

export const LATEST_POSTS_QUERY = gql`
query {
  nodeQuery(offset: 0, limit: 6, filter: {conditions: [{field: "type", value: ["blog"]}]
  }, sort:[{
    field: "created", direction: ASC
  }]) {
    entities {
      __typename
      entityLabel
      entityId
      entityCreated
      ... on NodeBlog {
        fieldBlogImage{
          url
        }
        fieldBlogSubject {
          entity {
            entityLabel
          }
        }
      }
    }
  }
}
`