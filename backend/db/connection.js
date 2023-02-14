const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect("mongodb://localhost:27017/todo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connection is Successful...")
    }).catch((err) => {
        console.log(`Somthing wont wrong...`)
    })
}

module.exports = connectDB