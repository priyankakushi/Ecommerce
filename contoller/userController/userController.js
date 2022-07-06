
let validation = require("../../Validations/userValidation/userValidation")
let utility = require("../../utility/utility")
let User = require("../../models/user")

const createUser = async (req, res) => {

    const { error } = validation.createUserValidator(req.body)
    if (error) return res.json({ success: false, response: error.details[0].message })

    let findUser = await User.findOne({ email: req.body.email })
    if (findUser) return res.json({ success: false, response: `This ${email} Is Already Exist` })

    req.body.password = await utility.hashPassword(req.body.password)

    let newCreateUser = new User({
        ...req.body
    })

    try {
        let createUser = await User.create(newCreateUser)
        createUser = createUser.toObject()
        delete createUser.password

        res.json({ success: true, response: createUser })

    } catch (err) {
        res.json({ success: false, response: "Internal Server Error" })
    }
}


const loginUser = async (req, res) => {

    const { error } = validation.loginValidator(req.body)
    if (error) return res.json({ success: false, response: error.details[0].message })

    let findUser = await User.findOne({email: req.body.email})

    if (!findUser) return res.json({success: false, response: `This ${email} does not exist, first create your account`})

    let dbpassword = findUser.password
    let password = req.body.password


    let comparePassword = utility.comparePassword(password, dbpassword)
    
    if(!comparePassword) return res.json({success: false, response: "Your passwowrd is incorrect"})

    let payload = ({id: findUser.id, email: findUser.email, userType: findUser.userType})
    let secretKey = process.env.SECRET_KEY

    let token = utility.creteJwtToken(payload, secretKey)

    res.json({success: true, response: token})
}


module.exports = {
    createUser,
    loginUser
}