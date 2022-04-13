const yup = require("yup")

const registerUserSchema = yup.object({
    body: yup.object({
        email: yup.string(),
        username: yup.string().min(5).max(20),
        password: yup.string().min(5)
    })
})
  
  const loginUserSchema = yup.object({
    body: yup.object({
        username: yup.string(),
        password: yup.string().min(5)
    })
  })
  
module.exports = { registerUserSchema, loginUserSchema }  