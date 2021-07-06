const express = require('express');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const router = express.Router();

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY
});

// Change bucket property to your Space name
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'meatiendo',
    acl: 'public-read',
    contentType: function (request, file, cb) {
      cb(null, file.mimetype);
    },
    key: function (request, file, cb) {
      cb(null, `${request.body.folder}/${file.originalname}`);
    }
  })
}).single('data');

// Upload image.
router.post('/image', function (request, response) {
  upload(request, response, function (error) {
    if (error) {
      return response.send(error);
    }
    return response.send('File uploaded successfully.');
  });
});

module.exports = router;