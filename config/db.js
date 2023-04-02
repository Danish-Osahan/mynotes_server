const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const connectDb = async ()=> {
    try {
        const conn =  await mongoose.connect(process.env.CONN,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log(`Mongodb connection :${conn}`);
    } catch (error) {
        console.error(`error : ${error.message}`);
        process.exit();
    }

}

module.exports = connectDb;