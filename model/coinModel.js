const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true,"Coin Id is Required"]
    },
    name: {
        type: String,
        required: [true,"Coin Name is Required"]
    }
});

const coinModel = mongoose.model('coin',coinSchema);
module.exports = coinModel;