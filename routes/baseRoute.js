const express = require('express')
const { currenyExchange } = require("../controller/currencyExchangeController");
const { getCompaniesList } = require('../controller/companiesController');

const baseRouter = express.Router();

baseRouter.get("/",(req,res) => {
    res.status(200).json({
        "message" : "Welcome To Home Page"
    });
});
baseRouter.get("/currency_exhange",currenyExchange);
baseRouter.get("/companies/public_treasury",getCompaniesList);

module.exports = baseRouter;