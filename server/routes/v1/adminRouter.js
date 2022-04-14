const AdminController = require("../../controllers/adminController")
const { validatorHandler } = require("../../middleware/validatorYup")
const { registerUserSchema } = require("../../validation/authSchema.yup")
const adminRouter = require('express').Router()

adminRouter.post("/register", validatorHandler(registerUserSchema), AdminController.register, (req, res) => {
    return res.json({ body: req.body });
  });

  module.exports = adminRouter