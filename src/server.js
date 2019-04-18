const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")

const app = express()

app.use(cors())

const server = require("http").Server(app)
const io = require("socket.io")(server)

io.on('connection', socket => { // realtime
  socket.on("connectRoom", box => {
    socket.join(box)
  })
})

mongoose.connect("mongodb+srv://lucas:asjhbf10@cluster0-jliyv.mongodb.net/omnistack?retryWrites=true", {
  useNewUrlParser: true,
})

app.use((req, res, next) => {
  req.io = io

  return next()
})

app.use(express.json()) //lidar com json
app.use(express.urlencoded({ extended: true })) //permite envio de arquivos
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))) // rota para acessar os arquivos que foram adicionados



app.use(require('./routes'))

server.listen(3333)