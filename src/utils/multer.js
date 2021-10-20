const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const { DO_S3_ENDPOINT, DO_BUCKET_NAME, DO_AWS_ACCESS_KEY, DO_AWS_SECRET_ACCESS_KEY } = process.env;

const spacesEndpoint = new aws.Endpoint(DO_S3_ENDPOINT);

const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: DO_AWS_ACCESS_KEY,
  secretAccessKey: DO_AWS_SECRET_ACCESS_KEY
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: DO_BUCKET_NAME,
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