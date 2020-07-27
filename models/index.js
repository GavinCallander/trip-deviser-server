const MONGOOSE = require('mongoose');


MONGOOSE.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports.Img = require('./img');
module.exports.Profile = require('./profile');
module.exports.Trip = require('./trip');
module.exports.User = require('./user');