import { GraphQLClient } from 'graphql-request'

export const request = async (query = {}) => {
  const endpoint = 'https://graphql.fauna.com/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer fnAD7gjoZ2ACBaUi0vvlXCEd-PqRvk7qg0lHBuqU'
    },
  })
  try {
    return await graphQLClient.request(query)
  } catch (error) {
    console.log(error)
    return error
  }
}