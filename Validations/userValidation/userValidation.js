const joi = require("joi")
let customerGender = require("../../enums/customerGender/customerGender")
let userTypes = require("../../enums/userTypes/userTypes")

const createUserValidator = (body) => {
    const createUserSchema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string(),
        mobile: joi.string().required().max(10).min(10),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
        confirmPassword: joi.ref("password"),
        gender: joi.string().valid(customerGender.FEMALE, customerGender.MALE),
        userType: joi.string().valid(userTypes.CUSTOMER, userTypes.SELLER)
    })

    return createUserSchema.validate(body)
}


const loginValidator = (body) => {
    const userLoginSchema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required()
    })

    return userLoginSchema.validate(body)
}


module.exports = {
    createUserValidator,
    loginValidator
}