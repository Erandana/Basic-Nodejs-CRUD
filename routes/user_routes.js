const express = require('express')
const userRouter = express.Router()
const userController = require("../controllers/user_controller")

userRouter.post("/",userController.createUser)
userRouter.get("/",userController.getAllUsers)
userRouter.delete("/:userID",userController.deleteUser)
userRouter.put("/:userID",userController.updateUser)




module.exports = {
    userRouter
}
