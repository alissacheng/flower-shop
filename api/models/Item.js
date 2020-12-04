const mongoose = require('mongoose');
const { Schema } = mongoose;
require("./Color");
require('./Flower');

const itemSchema = new Schema({
    flower: {
        type: Schema.Types.ObjectId,
        ref: "Flower",
        required: true,
    },
    color: {
        type: Schema.Types.ObjectId,
        ref: "Color",
        required: true,
    }
    
})

// const Item = mongoose.model("Item", itemSchema)
module.exports = itemSchema