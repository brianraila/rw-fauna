import gql from 'graphql-tag'

export const schema = gql`

type Listing {
  title: String!,
  description: String!,
  location: String!,
  company: String!
}

type ListingsPage {
  data: [Listing]
}

type Query{
  listings: ListingsPage
  jobs: [Listing]
}
`