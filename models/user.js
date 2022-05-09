const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type :String,
        required:[true,"name is required"],
        trim:true,
        maxlength : 20,
        minlength : 4
    },
    role : String,
    password : String,
    
})

module.exports = mongoose.model("user",userSchema) //this user name is used when creating collections