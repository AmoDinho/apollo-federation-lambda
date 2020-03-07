import { hello, getBookings } from "./query";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context),
        getBookings: (root, args, context) => getBookings(args, context)
    }
}
