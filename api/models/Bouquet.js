const mongoose = require('mongoose');
const { Schema } = mongoose;

const bouquetSchema = new Schema({
    name: String,
    items: [
        {
            flower: String,
            color: String,
        }
    ]
})

const Bouquet = mongoose.model("Bouquet", bouquetSchema)
module.exports = Bouquet