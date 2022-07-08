let express = require("express")
let router = express.Router()
let userController = require("../contoller/userController/userController")




router.post("/singup", userController.createUser)
router.post("/login", userController.loginUser)
router.get("/getAllUsers", userController.getAllUsers)
router.post("/delete/:userId", userController.deleteUsers)

module.exports = router