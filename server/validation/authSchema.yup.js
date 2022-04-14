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
  const profileSchema = yup.object({
    body: yup.object({
      fullName: yup.string().min(5).max(20).required(),
      birthDate:yup.date().required(),
      city:yup.string().required(),
      country: yup.string().required(),
      mobilePhone: yup.string().required()
    })
  })
module.exports = { registerUserSchema, loginUserSchema, profileSchema }  