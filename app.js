
const express = require("express")
const { json } = require("express/lib/response")
const {connectDB}= require("./db/connect")
require('dotenv').config()
const {notFound} = require("./middleware/not_found")

const { userRouter } = require("./routes/user_routes")

const app = express()
app.use(express.json())

app.use("/api/v1/user",userRouter)

app.use(notFound)

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT,()=>{
            console.log("Server Starting.... port 5000")
        })
    } catch (error) {
        console.log(error)
    }
}

start()
