const profileRouter = require("express").Router()
const {ProfileController} = require("../../controllers")

profileRouter.get("/",ProfileController.readProfile)
profileRouter.post("/",ProfileController.createProfile)


module.exports = profileRouter
