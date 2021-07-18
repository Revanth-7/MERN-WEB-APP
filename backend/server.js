const express=require('express');
const cors=require('cors'); // cross origin resource sharing it allows to accept request from frontend to backend..
const mongoose=require('mongoose');

require('dotenv').config();
// dot env is for environment variables 
const app=express();
const port=process.env.PORT || 5000; //heroku/ will assign the process.env.PORT 

app.use(cors());//middleware
app.use(express.json());//used to process json


const uri=process.env.ATLAS_URI;  // mongodb link stored here
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});// to avoid depreceated warning
//useNewUrlParser?: boolean
//Determines whether or not to use the new url parser.
//.useCreateIndex?: boolean it defines the index present in the schema

const connection=mongoose.connection;//storing connection objects/events

connection.once('open',()=>{  //once connection is open we put success in log
    console.log("MONGODB SUCCESS");
})

const exercisesRouter=require('./routes/exercises');//requiring file in routes folder
const usersRouter=require("./routes/users");//requiring file in routes folder


app.use('/exercises',exercisesRouter);//with the corresponding url it will load the respetive file
app.use('/users',usersRouter);//with the corresponding url it will load the respetive file

app.listen(port,()=>{//listens to server

    console.log(`Server is running on port:${port}`);
})