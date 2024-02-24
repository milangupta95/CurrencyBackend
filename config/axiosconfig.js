const axios = require('axios');
require('dotenv').config();

const api_key = process.env.API_KEY;
const coinApi = axios.create({
    baseURL: `https://api.coingecko.com/api/v3/`,
});

module.exports = coinApi;