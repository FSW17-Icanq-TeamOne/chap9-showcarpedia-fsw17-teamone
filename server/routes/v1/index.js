const v1 = require("express").Router()
const userRouter = require("./userRouter")
const registerRouter = require("./registerRouter")
const loginRouter = require("./loginRouter")
const authentication = require("../../middleware/authentication")

v1.get("/", (req,res) => res.send("ini dari v1"))

v1.use("/register", registerRouter)
v1.use("/login", loginRouter)
v1.use(authentication)
v1.use("/user", userRouter)

module.exports= v1