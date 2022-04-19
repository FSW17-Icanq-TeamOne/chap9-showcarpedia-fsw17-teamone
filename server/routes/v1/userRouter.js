const userRouter = require("express").Router()
const profileRouter = require("./profileRouter")

//userRouter.get("/", (req,res) => res.send("ini dari user"))

userRouter.use("/profile",profileRouter)


module.exports = userRouter