const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();
const uploadAzure = multer({ storage: inMemoryStorage }).single('file');

module.exports = { uploadAzure };