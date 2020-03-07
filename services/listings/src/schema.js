const schema = `

type Listing @key(fields: ID) {
     ID: Int!
     listingName: String
     guide: String
     prize: String 
}


"""
A hello world Query
"""
type Query {
     hello: String!
}

`

export { schema }
