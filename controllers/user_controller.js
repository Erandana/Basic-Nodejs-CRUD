const  userModel  = require("../models/user")

const createUser = async (req,res)=>{
    try {
        const user = await userModel.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
   
}

const getAllUsers = async (req,res)=>{
    try {
        const users = await userModel.find()
        res.status(201).json({users:users})
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
}

const findUserById = async (req,res)=>{
    try {
        const {userID:id} = req.params
        const response = await userModel.findById({_id:id})
        res.json(response)
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
}

const deleteUser= async (req,res)=>{
    try {
        const {userID:id} = req.params
        const response = await userModel.findOneAndDelete({_id:id})
        res.json(response)
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
   
}

const updateUser= async (req,res)=>{
    try {
        const {userID:id} = req.params
        const response = await userModel.findOneAndUpdate({_id:id},req.body,{runValidators:true,new:true})
        res.json(response)
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
   
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser
}