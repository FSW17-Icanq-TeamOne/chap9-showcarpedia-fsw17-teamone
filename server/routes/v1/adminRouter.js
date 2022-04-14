const AdminController = require("../../controllers/adminController")
const { validatorHandler } = require("../../middleware/validatorYup")
const { registerUserSchema } = require("../../validation/authSchema.yup")
const adminRouter = require('express').Router()

adminRouter.post("/register", validatorHandler(registerUserSchema), AdminController.register, (req, res) => {
    return res.json({ body: req.body });
  });

adminRouter.put("/edit/:id", validatorHandler(registerUserSchema), AdminController.edit, (req, res) => {
    return res.json({ body: req.body });
  });

adminRouter.get("/edit/:id", validatorHandler(registerUserSchema), AdminController.getEditForm, (req, res) => {
    return res.json({ body: req.body });
  });

  module.exports = adminRouter