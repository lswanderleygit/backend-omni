const express = require('express')

const app = express()

app.use(express.json()) //lidar com json
app.use(express.urlencoded({ extended: true })) //permite envio de arquivos


app.use(require('./routes'))

app.listen(3333)