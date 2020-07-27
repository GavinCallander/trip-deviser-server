const MONGOOSE = require('mongoose');

let tripSchema = new MONGOOSE.Schema({
    name: {
        type: String,
        required: [true, 'name required']
    },
    timeframe: {
        type: String
    },
    locations: [{
        type: MONGOOSE.Schema.Types.ObjectId,
        ref: 'Location'
    }],
    imgs: [{
        type: MONGOOSE.Schema.Types.ObjectId,
        ref: 'Img'
    }]
});

module.exports = MONGOOSE.model('Trip', tripSchema);