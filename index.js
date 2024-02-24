const express = require('express');
const mongoose = require('mongoose');
const {connectToDatabase} = require("./config/database");
const { fetch_data } = require('./cronjob/DataFetching');
const cron = require('node-cron');
const baseRouter = require('./routes/baseRoute');

require('dotenv').config()
const app = express();
app.use(express.json());

//setup Database connections
const database_url = process.env.DATABASE_URL;
connectToDatabase(database_url);


// Schedule a Cron Job To Updated The data Hourly
cron.schedule("0 * * * *",fetch_data);



//routes

app.use("/",baseRouter);


// listen on port-> 3000
const port = process.env.PORT;
app.listen(port,() => {
    console.log(`App is Listening on PORT ${port}`);
})