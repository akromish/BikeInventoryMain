const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bike = new Schema({
    bike_name: {
        type: String
    },
    bike_type: {
        type: String
    },
    bike_wheel_size: {
        type: String
    },
    bike_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Bike', Bike);