const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const connectDb = async ()=> {
    try {
        const conn =  await mongoose.connect('mongodb+srv://Danish:danish3042002@notes.csjlebi.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
        console.log(`Mongodb connection :${conn}`);
    } catch (error) {
        console.error(`error : ${error.message}`);
        process.exit();
    }

}

module.exports = connectDb;