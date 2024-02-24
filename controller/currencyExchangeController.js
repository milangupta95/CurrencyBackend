const coinApi = require("../config/axiosconfig");

module.exports.currenyExchange = async (req, res) => {
    try {
        // res of each coin from API
        const { fromCurrency, toCurrency, date } = req.body;
        const res_of_from = await coinApi.get(`/coins/${fromCurrency}/history?date=${date}`);
        const res_of_to = await coinApi.get(`/coins/${toCurrency}/history?date=${date}`);

        // Assuming BTC as Base coin converting both to btc and then getting exhchanged Price
        const curr_price_from_in_btc = res_of_from.data.market_data.current_price.btc;
        const curr_price_to_in_in_btc = res_of_to.data.market_data.current_price.btc;
        const exchanged_price = (curr_price_from_in_btc * 1.0) / curr_price_to_in_in_btc;

        // sending response
        res.status(200).json({
            exchanged_price: exchanged_price
        })
    } catch (err) {
        // response when error occured
        res.status(500).json({
            message: err.message
        })
    }
}
