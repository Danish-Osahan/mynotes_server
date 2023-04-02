const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const connectDb = async ()=> {
    try {
        const conn =  await mongoose.connect('mongodb+srv://Danish:danish3042002@cluster0.59kwwks.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
        // mongoose.set('strictQuery', true)
        mongoose.set('strictQuery', false);
        console.log(`Mongodb connection :${conn}`);
    } catch (error) {
        console.error(`error : ${error.message}`);
        process.exit();
    }

}

module.exports = connectDb;