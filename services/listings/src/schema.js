const schema = `

type Listing @key(fields: ID) {
     ID: Int!
     listingName: String
     guide: String
     price: String 
}


"""
A hello world Query
"""
type Query {
     hello: String!
     getListings: [Listing]
}

`

export { schema }
