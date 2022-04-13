const profileRouter = require("express").Router()
const {ProfileController} = require("../../controllers")

profileRouter.get("/", ProfileController.readProfile)
profileRouter.put("/", ProfileController.updateProfile)

module.exports = profileRouter
