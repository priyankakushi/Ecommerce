const { boolean } = require("joi")
let mongoose = require("mongoose")


const otpSchema = mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    otp:{
        type: String,
        required: true
    },
    expiresIn:{
        type: Date,
        required: true
    },
    isUsed:{
        type: boolean,
        default: false
    }
})


let otp = mongoose.model("otp", otpSchema)

module.exports = otp