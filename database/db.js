const mongoose = require('mongoose')

const connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.ibjpqmd.mongodb.net/NOTESMANAGEMENTSYSTEM?retryWrites=true&w=majority`
   
    // const URL = `mongodb+srv://chetanbramhanwade:HZ5PDM8ecxt3N2GJ@cluster0.ibjpqmd.mongodb.net/NOTESMANAGEMENTSYSTEM?retryWrites=true&w=majority`
   
    try {
        //conneect is asynchronous function it return the promise

        //Try something else because they will be removed in the next major update
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Database connection sucessfully");
    } catch (err) {
        console.log("Error while connectiong database", err);
    }
}

module.exports = connection;