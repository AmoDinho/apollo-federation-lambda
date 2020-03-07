export const hello = (args, context) => {
    return "Your GraphQL API is now LIVE!🎈 "
}

export const getListings = (args, context) => {
    const listings = [{
        ID: 1,
        listingName: "Apollo crater",
        guide: "Nelson Biko",
        price: "3243434.98"
    },
    {
        ID: 2,
        listingName: "Sea of Tranquility",
        guide: "Hellen Hendler",
        price: "345343.98"
    }]
    return listings
}