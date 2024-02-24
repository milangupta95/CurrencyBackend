const express = require('express')
const { currenyExchange } = require("../controller/currencyExchangeController");
const { getCompaniesList } = require('../controller/companiesController');

const baseRouter = express.Router();

baseRouter.get("/",(req,res) => {
    res.status(200).json({
        "message" : "Welcome To Home Page"
    });
});
baseRouter.post("/currency_exhange",currenyExchange);
baseRouter.get("/companies/public_treasury/:currency",getCompaniesList);

module.exports = baseRouter;