const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

const app = express()

mongoose.connect("mongodb+srv://lucas:asjhbf10@cluster0-jliyv.mongodb.net/omnistack?retryWrites=true", {
  useNewUrlParser: true,
})

app.use(express.json()) //lidar com json
app.use(express.urlencoded({ extended: true })) //permite envio de arquivos
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))) // rota para acessar os arquivos que foram adicionados



app.use(require('./routes'))

app.listen(3333)