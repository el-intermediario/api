const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/home/site/wwwroot/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})


const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'video/avi') {
    cb(null, true)
  } else {
    //reject file
    cb({
      message: 'Formato de archivo no soportado'
    }, false)
  }
}

const upload = multer({
  storage,
  limits: {
    // fileSize: 1024 * 1024
  },
  fileFilter
})

module.exports = upload;