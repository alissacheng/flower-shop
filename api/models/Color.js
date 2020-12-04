const mongoose = require('mongoose');
const { Schema } = mongoose;

const colorSchema = new Schema({
    name: String,
    flowers: [String],

})

const Color = mongoose.model("Color", colorSchema)
module.exports = Color