const multer = require("multer")
const path = require("path")
const crypto = require("crypto") //gerar hash

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp'),
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp')) //null para o erro
    },
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err)

        file.key = `${hash.toString('hex')}=${file.originalname}`

        callback(null, file.key)
      })
    }
  })
}