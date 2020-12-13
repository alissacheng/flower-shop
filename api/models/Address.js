const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema ({
    address: String,
    UnitNo: String,
    city: String,
    province: String,
    country: String,
    postalCode: String
})

//no need to transform into a model
//mongoose.model("address", addressSchema)
module.exports = addressSchema;