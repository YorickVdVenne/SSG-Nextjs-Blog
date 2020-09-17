import { gql } from '@apollo/client'

export const ALL_POSTS_QUERY = gql`
query {
  nodeQuery(offset: 0, limit: 9999, filter: {conditions: [{field: "type", value: ["blog"]}]
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
  taxonomyTermQuery(offset: 0, filter: {conditions: [{ field: "vid", value: ["subject"]}]}) {
    entities {
      entityLabel
    }
  }
}
`