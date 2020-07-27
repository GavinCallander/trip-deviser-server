const MONGOOSE = require('mongoose');

let locationSchema = new MONGOOSE.Schema({
    city: {
        type: String,
        required: [true, 'city required']
    },
    state: {
        type: String,
    },
    country: {
        type: String,
        required: [true, 'country required']
    },
    lat: {
        type: Number,
        required: [true, ';lat required']
    },
    long: {
        type: Number,
        required: [true, 'long required']
    }
});

module.exports = MONGOOSE.model('Location', locationSchema);