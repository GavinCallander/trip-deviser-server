const MONGOOSE = require('mongoose');

let profileSchema = new MONGOOSE.Schema({
    bio: {
        type: String,
        maxlength: [256, 'Bio cannot exceed 256 characters']
    },
    dob: {
        type: Date
    },
    trips: [{
        type: MONGOOSE.Schema.Types.ObjectId,
        ref: 'Trip'
    }],
    cover_img: {
        type: MONGOOSE.Schema.Types.ObjectId,
        ref: 'Img'
    },
    profile_img: {
        type: MONGOOSE.Schema.Types.ObjectId,
        ref: 'Img'
    }
});

module.exports = MONGOOSE.model('Profile', profileSchema);