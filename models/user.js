let mongoose = require("mongoose")
let userTypes = require("../enums/userTypes/userTypes")
let customerGender = require("../enums/customerGender/customerGender")

let User = mongoose.Schema({
    
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String 
    },
    mobile:{
        type: String,
        maxLength: 10,
        minLength: 10
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true,
        enum: [customerGender.MALE, customerGender.FEMALE]
    },
    userType:{
        type: String,
        enum: [userTypes.CUSTOMER, userTypes.SELLER]
    }
})

let user = mongoose.model("user", User)

module.exports = user