const mongoose = require('mongoose');
const { Schema } = mongoose;
const addressSchema = require('./Address');

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    firstName: String,
    lastName: String,
    address: addressSchema,
    bouquets: [{
        type: Schema.Types.ObjectId,
        ref: 'Bouquet',
    }],

})

const User = mongoose.model("User", userSchema)
module.exports = User