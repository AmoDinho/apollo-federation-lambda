import { hello, GetBookings } from "./query";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context),
        GetBookings: (root, args, context) => GetBookings(args, context)
    }
}
