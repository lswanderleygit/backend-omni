const Box = require("../models/Box")
const File = require("../models/File")

class FileController {
  async store(req, res) {
    //criar um arquivo
    const box = await Box.findById(req.params.id)

    const file = await File.create({ //cria um file
      title: req.file.originalname,
      path: req.file.key
    })

    box.files.push(file) //adiciona o file dentro do box

    await box.save()

    return res.json(file)
  }
}

module.exports = new FileController()