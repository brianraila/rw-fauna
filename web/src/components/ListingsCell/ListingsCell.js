// web/src/components/PostsCell/PostsCell.js

export const QUERY = gql`
  query LISTINGS {
    listings {
      data {
        title
        description
        location
        company
      }
    }
  }
`

export const Loading = () => <div>Loading Job Listings...</div>
export const Empty = () => <div>No Job Listings yet!</div>
export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ listings }) => {
  const {data} = listings
  return (
    <div>
      {data.map(listing => (
        <>
        <h4>{listing.title}</h4>
        <p>{listing.description}</p>
        <p>Location: {listing.location}</p>
        <p>Org: {listing.company}</p>
        </>
      ))}
    </div>
  )
}