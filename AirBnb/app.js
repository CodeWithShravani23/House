const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

let port = 8080;


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

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

//Root Route

app.get("/", (req, res) => {
    res.send("Root is groot");
});


//Index Route

app.get("/listings", async(req,res)=>{
    let allListings = await Listing.find({})
    res.render("listings/index.ejs",{allListings});
})


//Create Route

app.get("/listings/new",(req,res) =>{
    res.render("listings/new.ejs");
})

//Show Route


app.get("/listings/:id",async(req,res)=>{
    let {id} = req.params
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
})


//Create Route

app.post("/listings",async(req,res) =>{
    const newlisting = new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");
})


//Edit Route

app.get("/listings/:id/edit", async(req,res)=>{
    let {id} = req.params;
    id = id.trim();
    const listing = await Listing.findById(id);
    res.render("listings/edite.ejs",{listing})
})


//Update

app.put("/listings/:id",async(req,res) =>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/listings");
})

//Delte

app.delete("/listings/:id",async(req,res) =>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})

// app.get("/testListing",async(req,res)=>{
//     let sampleListing = new Listing({
//         title:"My Villa",
//         description:"Goa Sea facing",
//         price:40000,
//         location:"Calagute,Goa",
//         country:"India"
//     });

//     await sampleListing.save();
//     console.log("Sample listing was saved");
//     res.send("Test Successfull");
// })


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});