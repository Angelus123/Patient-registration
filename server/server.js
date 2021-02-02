import dotenv from "dotenv";
import app from "./index";
import mongoose from "mongoose";
// const config = require('./config/database')
// Make connection to DB 
// database:'mongodb://localhost:27017/simpledb'
// mongoose.connect(config.database,{useNewUrlParser:true})
// let db = mongoose.connection;
// //Check for DB connection? 

// // Check for DB errors
// db.once('open',()=>console.log('mongoDB ok'))
// db.on('err', () => console.log(err));


dotenv.config({ path: "./server/config.env" });


const port = process.env.PORT;

const DB = process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(()=> console.log(" Db connection done successfully"));

const server = app.listen(port, () =>
  process.stdout.write(`Listening on port ${port} ...\n******************** \n`)
);                                                                                                                                                                                                                                                                                            