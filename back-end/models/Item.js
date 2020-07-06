const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
    quantity_unit: {type: String, required: true},
    buy_price_per_unit: {type: Number, required: true},
    sell_price_per_unit: {type: Number, required: true},
},{
    timestamps: true
})


module.exports = mongoose.model('Items', ItemSchema);