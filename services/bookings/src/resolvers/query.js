export const hello = (args, context) => {
    return "Your GraphQL API is now LIVE!🎈 "
}

export const GetBookings = (args, context) => {
    const bookings = [{
        ID: 1,
        listingID: 1,
        listingName: "Apollo crater",
        customer: "Jeff Bezos",
        date: "23-April-2056",
        price: "34500.00",
        size: 4
    },
    {
        ID: 2,
        listingID: 2,
        listingName: "Sea of Tranqility",
        customer: "Victor Chaitezvi",
        date: "05-June-2056",
        price: "3000233.00",
        size: 7
    }
    ]
    return bookings
}