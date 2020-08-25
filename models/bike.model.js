const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bike = new Schema({
    bike_name: {
        type: String
    },
    bike_type: {
        type: String
    },
    bike_f_wheel_size: {
        type: String
    },
    bike_r_wheel_size: {
        type: String
    },
    bike_size: {
        type: String
    },
    bike_pedal: {
        type: String
    },
    bike_saddle: {
        type: String
    },
    bike_groupset: {
        type: String
    },
    bike_fork: {
        type: String
    },
    bike_brakes: {
        type: String
    },
    bike_stem_length: {
        type: String
    },
});

module.exports = mongoose.model('Bike', Bike);