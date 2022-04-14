const yup = require("yup")

const registerUserSchema = yup.object({
    body: yup.object({
        email: yup.string().required(),
        username: yup.string().min(5).max(20).required(),
        password: yup.string().min(5)
    })
})
  
  const loginUserSchema = yup.object({
    body: yup.object({
        username: yup.string().required(),
        password: yup.string().min(5).required()
    })
  })
  
module.exports = { registerUserSchema, loginUserSchema }  