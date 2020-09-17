import { gql } from '@apollo/client'

export const BLOG_IDS_QUERY = gql`
query blogNids {
  nodeQuery(limit: 100, filter: {conditions: [{field: "type", value: ["blog"]}]}) {
    entities {
     entityId
  	}
	}
}
`