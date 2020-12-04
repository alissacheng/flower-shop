const mongoose = require('mongoose');
const { Schema } = mongoose;
require ('./Item');

const bouquetSchema = new Schema({
    name: String,
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item',
    }]
})

const Bouquet = mongoose.model("Bouquet", bouquetSchema)
module.exports = Bouquet