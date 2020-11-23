const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    country: String,
    password: String,
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type:Boolean,
        default: false
    }
},{
    versionKey: false,
    timestamps: true
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;