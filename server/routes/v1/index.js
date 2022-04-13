const v1 = require("express").Router()
const userRouter = require("./userRouter")


v1.get("/", (req,res) => res.send("ini dari v1"))

v1.use("/user",userRouter)

module.exports= v1