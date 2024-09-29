const sampleListings = [
    {
        title: "Cozy Cottage",
        description: "A quaint cottage nestled in the mountains, perfect for a weekend getaway.",
        image: "https://images.unsplash.com/photo-1524749214-3b8b1a6c4f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHwxfHx8fHx8fHwxNjA3OTg4NzU5&ixlib=rb-1.2.1&q=80&w=1080",
        price: 120,
        location: "Blue Ridge Mountains",
        country: "USA"
    },
    {
        title: "Beachfront Paradise",
        description: "Enjoy stunning ocean views from this beautiful beachfront property.",
        image: "https://images.unsplash.com/photo-1544183182-7a6c2eb8a394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHwyfHx8fHx8fHwxNjA3OTg5Mzc2&ixlib=rb-1.2.1&q=80&w=1080",
        price: 250,
        location: "Malibu",
        country: "USA"
    },
    {
        title: "Urban Loft",
        description: "A modern loft in the heart of the city, close to all attractions.",
        image: "https://images.unsplash.com/photo-1515071942182-185e7e6594da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHwzMHx8fHx8fHwxNjA3OTg5Nzgw&ixlib=rb-1.2.1&q=80&w=1080",
        price: 180,
        location: "New York City",
        country: "USA"
    },
    {
        title: "Charming Cabin",
        description: "A charming log cabin with a fireplace, perfect for cozy nights.",
        image: "https://images.unsplash.com/photo-1536192521041-8b8ff9e5c78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHw0MHx8fHx8fHwxNjA3OTg5ODc0&ixlib=rb-1.2.1&q=80&w=1080",
        price: 150,
        location: "Aspen",
        country: "USA"
    },
    {
        title: "Luxury Villa",
        description: "A luxurious villa with a private pool and stunning views.",
        image: "https://images.unsplash.com/photo-1552950776-5f367e8c0e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHw1MHx8fHx8fHwxNjA3OTg5ODg4&ixlib=rb-1.2.1&q=80&w=1080",
        price: 500,
        location: "Santorini",
        country: "Greece"
    },
    {
        title: "Chic Apartment",
        description: "Stylish apartment in a vibrant neighborhood.",
        image: "https://images.unsplash.com/photo-1521333023137-2c5ed648de34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHwyfHx8fHx8fHwxNjA3OTg5Mzg0&ixlib=rb-1.2.1&q=80&w=1080",
        price: 200,
        location: "Los Angeles",
        country: "USA"
    },
    {
        title: "Mountain Retreat",
        description: "Experience nature in this cozy mountain retreat.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHw3MHx8fHx8fHwxNjA3OTg5Mzk3&ixlib=rb-1.2.1&q=80&w=1080",
        price: 220,
        location: "Rocky Mountains",
        country: "USA"
    },
    {
        title: "Seaside Cottage",
        description: "A charming seaside cottage with beautiful ocean views.",
        image: "https://images.unsplash.com/photo-1550805480-0548c34b7462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHw4MHx8fHx8fHwxNjA3OTg5NDA2&ixlib=rb-1.2.1&q=80&w=1080",
        price: 170,
        location: "Cape Cod",
        country: "USA"
    },
    {
        title: "Stylish Studio",
        description: "Modern studio apartment in a trendy district.",
        image: "https://images.unsplash.com/photo-1569409157838-5ff0ebbf6721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHw5MHx8fHx8fHwxNjA3OTg5NDA5&ixlib=rb-1.2.1&q=80&w=1080",
        price: 190,
        location: "San Francisco",
        country: "USA"
    },
    {
        title: "Rustic Farmhouse",
        description: "A charming farmhouse surrounded by nature.",
        image: "https://images.unsplash.com/photo-1535076913600-b60ab8c8f248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHwxMHx8fHx8fHwxNjA3OTg5NDE5&ixlib=rb-1.2.1&q=80&w=1080",
        price: 130,
        location: "Napa Valley",
        country: "USA"
    },
    {
        title: "City View Condo",
        description: "Condo with breathtaking views of the city skyline.",
        image: "https://images.unsplash.com/photo-1531494344305-9f4e4e337fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHwxMXx8fHx8fHwxNjA3OTg5NDI5&ixlib=rb-1.2.1&q=80&w=1080",
        price: 300,
        location: "Chicago",
        country: "USA"
    },
    {
        title: "Countryside Escape",
        description: "Escape to the countryside in this cozy cabin.",
        image: "https://images.unsplash.com/photo-1553305460-31d7e0eae7f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHwxMnx8fHx8fHwxNjA3OTg5NDMz&ixlib=rb-1.2.1&q=80&w=1080",
        price: 140,
        location: "Kentucky",
        country: "USA"
    },
    {
        title: "Tranquil Oasis",
        description: "Relax in this tranquil oasis surrounded by nature.",
        image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHw5Mnx8fHx8fHwxNjA3OTg5NDQ5&ixlib=rb-1.2.1&q=80&w=1080",
        price: 160,
        location: "Sedona",
        country: "USA"
    },
    {
        title: "Charming Villa",
        description: "A charming villa with beautiful gardens and a swimming pool.",
        image: "https://images.unsplash.com/photo-1576663013840-9f97f6a8fca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDF8MHwxfGFsbHwxM3x8fHx8fHwxNjA3OTg5NDQ3&ixlib=rb-1.2.1&q=80&w=1080",
        price: 420,
        location: "Florence",
        country: "Italy"
    }
]


module.exports = {data:sampleListings};