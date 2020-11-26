// web/src/components/ListingsCell/ListingsCell.js

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
    <div style={{maxWidth:"50%", margin:"auto"}}>
      {data.map(listing => (
        <>
        <div style={{border: "black 1pt solid", padding: ".7em", backgroundColor:"cyan"}}>
        <h4>{listing.title}</h4>
        <hr />
        <p>{listing.description}</p>
        <p>Organization: {listing.company} <br/>
        Location: {listing.location}</p>
        </div>
        <br/>
        </>
      ))}
    </div>
  )
}