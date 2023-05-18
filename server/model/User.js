const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name:{
        type:String, 
        require:true, 
        unique:true
    },

    email: {
        type: String,
        require:true,
        unique: true,
    },

    password: {
        type: String,
        require: true,
    },

    isAdmin: {
        type: Boolean,
        default: true,
    },

},{timestamps:true});

module.exports = mongoose.model("User", UserSchema)