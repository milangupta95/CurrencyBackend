const express = require('express')
const { currenyExchange } = require("../controller/currencyExchangeController");

const baseRouter = express.Router();

baseRouter.get("/",(req,res) => {
    res.status(200).json({
        "message" : "Welcome To Home Page"
    });
});
baseRouter.get("/currency_exhange",currenyExchange);
module.exports = baseRouter;