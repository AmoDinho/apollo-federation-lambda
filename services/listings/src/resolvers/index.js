import { hello, getListings } from "./query";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context),
        getListings: (root, args, context) => getListings(args, context)
    }
}
