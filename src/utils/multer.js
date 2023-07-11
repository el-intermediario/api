const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const { S3_ENDPOINT, BUCKET_NAME, AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY } = process.env;

const spacesEndpoint = new aws.Endpoint(S3_ENDPOINT);

const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: BUCKET_NAME,
    acl: 'public-read',
    contentType: function (req, file, cb) {
      cb(null, file.mimetype);
    },
    metadata: (req, file, cb) => {
      cb(null, {
        originalname: file.originalname,
      });
    },
    key: (req, file, cb) => {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      cb(null, `${req.body.folder}/${year}/${month}/${file.originalname}`);
    },
  }),
}).single("file");


module.exports = { upload, s3 };