const schema = `


type Booking {
     ID: Int!
     listingID: Int!
     listingName: String
     customer: String
     date: String
     price: String
     size: Int
}
"""
A hello world Query
"""
type Query {
     hello: String!
     getBookings: [Booking]
}



`

export { schema }
