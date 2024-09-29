const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing.js");


main()
    .then(() => {
        console.log("Connection is successful with mongoose"); 

    })
    .catch((err) => {
        console.log("Database connection error: ", err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}


const intiaLiseDb = async() =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was Saved");

}

intiaLiseDb();