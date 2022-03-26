const express =require("express")
// require express module 
const app =express();
// invoke this function
// import dotenv file here to use enviornmental variable

const dotenv =require('dotenv');


// require mongoose package

const mongoose =require('mongoose')

// import Routes
const authRoute= require('./routes/auth');

dotenv.config()

// connect to database
mongoose.connect("process.env.DB_CONNECT"
,{userNewUrlParser:true},()=>{
    console.log("connected to databse")
});

// middleware

app.use(express.json());



// now we are going to create route middlewares 
app.use('/api/user',authRoute);


// to start sever we use app.listen()
app.listen(3000,()=>{
    console.log("things are working well")
})