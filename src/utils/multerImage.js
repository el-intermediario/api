const multer = require('multer')
const MulterAzureStorage = require('multer-azure-blob-storage').MulterAzureStorage;

const resolveBlobName = (req, file) => {
  return new Promise((resolve, reject) => {
      console.log(req);
      const blobName = 'dev/articles/' + file.originalname; //yourCustomLogic(req, file);
      resolve(blobName);
  });
};


const resolveMetadata = (req, file) => {
  return new Promise((resolve, reject) => {
    const metadata = file.metadata; // yourCustomLogic(req, file);
    resolve(metadata);
  });
};

const resolveContentSettings = (req, file) => {
  return new Promise((resolve, reject) => {
      const contentSettings = file.buffer; //yourCustomLogic(req, file);
      resolve(contentSettings);
  });
};

const azureStorage = new MulterAzureStorage({
  connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
  accessKey: process.env.AZURE_STORAGE_ACCESS_KEY,
  accountName: 'intermediario',
  containerName: process.env.AZURE_STORAGE_CONTAINER,
  blobName: resolveBlobName,
  metadata: resolveMetadata,
  contentSettings: resolveContentSettings,
  containerAccessLevel: 'blob',
  urlExpirationTime: 60
});

const uploadImage = multer({
  storage: azureStorage
}).single('file');


module.exports = { uploadImage };