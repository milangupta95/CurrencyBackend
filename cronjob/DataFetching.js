const coinModel = require('../model/coinModel');
const coinApi = require('../config/axiosconfig');
require("dotenv").config();

module.exports.fetch_data = async () => {
    try {
        const res = await coinApi.get("/coins/list");
        const coins_from_api = res.data;
        const coins_from_database = await coinModel.find();
        const data_to_inserted = coins_from_api.filter((coin) => {
            return (coins_from_database.find(({id}) => {id !== coin.id})) === null;
        });

        const data_to_be_deleted = coins_from_database.filter((coin) => {
            return (coins_from_api.find(({id}) => {id !== coin.id})) === null;
        });

        if(data_to_inserted.length === 0 && data_to_be_deleted.length === 0) {
            console.log("Everything up to date");
        } else if(data_to_be_deleted.length === 0) {
            await coinModel.insertMany(data_to_inserted);
            console.log("All Missing Data have Been Inserted");
        } else if(data_to_inserted.length === 0) {
            await coinModel.deleteMany(data_to_be_deleted);
            console.log("Some Data have Been Deleted From Database");
        } else {
            await coinModel.insertMany(data_to_inserted);
            await coinModel.deleteMany(data_to_be_deleted);
            console.log("Some Data have Been Deleted and inserted into Database");
        }
    } catch (err) {
        console.log(err.message);
    }
}