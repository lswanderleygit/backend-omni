const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json()) //lidar com json
app.use(express.urlencoded({ extended: true })) //permite envio de arquivos

mongoose.connect("mongodb+srv://lucas:asjhbf10@cluster0-jliyv.mongodb.net/omnistack?retryWrites=true", {
  useNewUrlParser: true,
})

app.use(require('./routes'))

app.listen(3333)