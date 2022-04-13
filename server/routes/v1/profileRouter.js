const profileRouter = require("express").Router()
const {ProfileController} = require("../../controllers")

profileRouter.post("/",ProfileController.createProfile)


module.exports = profileRouter
