const coinApi = require("../config/axiosconfig");

module.exports.currenyExchange = async (req, res) => {
    try {
        const { fromCurrency, toCurrency, date } = req.body;
        const res_of_from = await coinApi.get(`/coins/${fromCurrency}/history?date=${date}`);
        const res_of_to = await coinApi.get(`/coins/${toCurrency}/history?date=${date}`);

        const curr_price_from_in_btc = res_of_from.data.market_data.current_price.btc;
        const curr_price_to_in_in_btc = res_of_to.data.market_data.current_price.btc;

        console.log(curr_price_from_in_btc + " " + curr_price_to_in_in_btc);

        const exchanged_price = (curr_price_from_in_btc * 1.0) / curr_price_to_in_in_btc;
        console.log(exchanged_price);
        res.status(200).json({
            exchanged_price: exchanged_price
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}