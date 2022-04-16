const CarsController = require("../../controllers/carsController")
const { validatorHandler } = require("../../middleware/validatorYup")
const { createCarsSchema } = require("../../validation/authSchema.yup")
const carsRouter = require('express').Router()

//registerRouter.post("/", validatorHandler(registerUserSchema), RegisterController.register)

carsRouter.get("/", CarsController.getAllProduct, (req, res) => {
  return res.json({ body: req.body });
});
carsRouter.post("/", validatorHandler(createCarsSchema), CarsController.create, (req, res) => {
    return res.json({ body: req.body });
  });
carsRouter.get("/:idProduct", validatorHandler(createCarsSchema), CarsController.create, (req, res) => {
    return res.json({ body: req.body });
  });
carsRouter.get("/asal", (req, res) => {
    res.send("ini dari asal")
})
module.exports = carsRouter