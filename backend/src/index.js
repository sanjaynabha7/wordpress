const express = require('express')
const mongoose = require('mongoose')
const dotenv  = require('dotenv')
const routs = require("../api/routers");
const cors = require("cors")
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,useCreateIndex: true}).then(() => {
    console.log('DB Connected');
  }).catch(e => {
    console.log('Unable to connect to the db server');
    console.log(e)
  }); 
 
const app = express()
app.use(express.json());  
app.use(cors());    
 

// require all routes
app.use("/api", routs);

app.listen(5000, () => { console.log("Server is running")} ) 