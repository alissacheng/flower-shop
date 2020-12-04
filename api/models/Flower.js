const mongoose = require('mongoose');
const { Schema } = mongoose;

const flowerSchema = new Schema({
    name: String,
    colors: [String],
    season: {
        winter: Boolean,
        spring: Boolean,
        summer: Boolean,
        fall: Boolean

    },
    scent: {
        type: String,
        default: "none"
    },

})

const Flower = mongoose.model("Flower", flowerSchema)
module.exports = Flower