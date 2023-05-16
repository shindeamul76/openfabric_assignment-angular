const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
    },
    category: {type: String},
    color: {type: String,},
    price: {type: Number, require: true},

}, {timestamps:true});

module.exports = mongoose.model('Product', ProductSchema)