const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: String,


    image: {
        type: String,
        default: "https://img.freepik.com/free-photo/nature-landscape-hawaii-with-digital-art-style_23-2151793619.jpg?t=st=1727479094~exp=1727482694~hmac=bc1a046a970eb16ed760d773a3b453ed03752e51b4706cc1c2c5fea7ebfdbbf1&w=900",
        set: (v) =>
            v == "" ? "https://img.freepik.com/free-photo/nature-landscape-hawaii-with-digital-art-style_23-2151793619.jpg?t=st=1727479094~exp=1727482694~hmac=bc1a046a970eb16ed760d773a3b453ed03752e51b4706cc1c2c5fea7ebfdbbf1&w=900" : v
    },


    price: Number,
    location: String,
    country: String


}
)


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;