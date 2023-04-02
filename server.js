const express = require('express');
// const notes = require('./data/notes');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/db');
const userRouter = require('./routes/userRouter');
const notesRouter = require('./routes/notesrouter');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const path = require('path');




const app = express();

connectDb();
dotenv.config();


app.use(cors());
app.use(express.json());

app.use("/api/users",userRouter);
app.use("/api/notes",notesRouter);



app.get('/', (req,res)=>{
    res.send('API is running..');
});

const PORT=process.env.PORT||6000;
app.listen(PORT,console.log(`server started on  port ${PORT}`));

app.use(notFound)
app.use(errorHandler)
