const MONGOOSE = require('mongoose');

let imgSchema = new MONGOOSE.Schema({
    name: {
        type: String
    },
    url: {
        type: String,
        required: [true, 'URL required']
    }
});

module.exports = MONGOOSE.model('Img', imgSchema);