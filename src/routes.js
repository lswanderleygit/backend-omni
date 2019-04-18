const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router()

const BoxController = require("./controllers/BoxController")
const FileController = require("./controllers/FileController")


routes.post('/boxes', BoxController.store)
routes.get("/boxes/:id", BoxController.show)

// quando enviar um arquivo para a rota /boxes/id/files o arquivo vai para a pasta tmp de acordo com as configurações do multer
routes.post('/boxes/:id/files',
  multer(multerConfig).single('file'),
  FileController.store
)

module.exports = routes