let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")



async function hashPassword(password){

    let saltRound = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(password, saltRound)

    return hashedPassword
}


let comparePassword = (password, hashPassword) => {

    let comparedPassword = bcrypt.compareSync(password, hashPassword)

    return comparedPassword
}





let creteJwtToken = (payload, secretKey) => {

    if (!payload) throw "Payload is must required"
    if(!secretKey) throw "SecretKey is must required"

    let jwtOptions = {expiresIn: "3h"}
    let token = jwt.sign(payload, secretKey, jwtOptions)

    return {
        tokenType: "Bearer",
        token: token,
        jwtOptions: 10800000
    }
}




const generateOtp = () => {
    let otp = Math.floor(100000 + Math.random() * 900000)
    return otp    
} 









module.exports = {
    hashPassword,
    comparePassword,
    creteJwtToken,
    generateOtp
}