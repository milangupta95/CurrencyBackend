const mongoose = require('mongoose');

module.exports.connectToDatabase = (database_uri) => {
    mongoose.connect(database_uri).then(() => {
        console.log("Successfully Connected to Database");
    }).catch(err => {
        console.log(err.message);
    });
}