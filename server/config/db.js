const mongoose = require("mongoose")

const connectToMongoDB = async () =>{
    try{
        await mongoose.connect("mongodb://localhost/bakery", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    console.log("connected to mongo db")
    }   catch (err) {
        console.log(err)
    }
}
    

module.exports = { connectToMongoDB }