const express = require("express")
const cors = require("cors")
const app = express()
const port = 4000
const router = require("./routes")

app.use(cors())
app.use(router)


app.listen(port,()=>console.log(`app is using port ${port}`))