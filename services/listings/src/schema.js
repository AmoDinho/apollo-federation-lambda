const typeDefs = `

type Listing @key(fields: "ID") {
     ID: Int!
     listingName: String
     guide: String
     price: String 
}


"""
A hello world Query
"""
extend type Query {
     hello: String!
     getListings: [Listing]
}

`

export { typeDefs }
