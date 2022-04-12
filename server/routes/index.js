const router = require("express").Router()
const v1 = require("./v1")

router.get("/",(req,res)=> res.send("udah masuk"))

router.use("/v1", v1)

module.exports = router