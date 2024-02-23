const express = require('express');
const mongoose = require('mongoose');
const {connectToDatabase} = require("./config/database")

require('dotenv').config()
const app = express();


//setup Database connections
const database_url = process.env.DATABASE_URL;
connectToDatabase(database_url);

//routes
app.get("/",(req,res) => {
    res.status(200).json({
        "message" : "Welcome To Home Page"
    });
});

// listen on port-> 3000
const port = process.env.PORT;
app.listen(port,() => {
    console.log(`App is Listening on PORT ${port}`);
})