// api/src/services/posts/posts.js

import { request } from 'src/lib/db'
import { gql } from 'graphql-request'

export const listings = async () => {
  const query = gql`
  {
    listings{
      data {
        title
        description
        location
        company
      }
  }
  }
  `

  const data = await request(query, 'https://graphql.fauna.com/graphql')

  return data['listings']
}