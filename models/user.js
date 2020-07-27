const BCRYPT = require('bcryptjs');
const MONGOOSE = require('mongoose');

let userSchema = new MONGOOSE.Schema({
    firstname: {
        type: String,
        required: [true, 'first name required']
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'email required']
    },
    password: {
        type: String,
        minlength: [8, 'password minimum 8 characters'],
        required: [true, 'password required']
    },
    profile: {
        type: MONGOOSE.Schema.Types.ObjectId,
        ref: Profile
    }
});

userSchema.pre('save', function(next) {
    if (this.isNew) {
        this.password = BCRYPT.hashSync(this.password, 12)
    }
    next();
});

userSchema.set('toJSON', {
    transform: (doc, user) => {
        delete user.password
        return user
    }
});

userSchema.methods.isAuthenticated = function(typedPassword) {
    return BCRYPT.compareSync(typedPassword, this.password);
};

module.exports = MONGOOSE.model('User', userSchema);