const mongoose = require('mongoose');
const { Schema } = mongoose;
require("./Color");
require('./Flower');

const itemSchema = new Schema({
    flower: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
    
})

const Item = mongoose.model("Item", itemSchema)
module.exports = Item