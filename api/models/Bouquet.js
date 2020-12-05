const mongoose = require('mongoose');
const { Schema } = mongoose;
require ('./Item');

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