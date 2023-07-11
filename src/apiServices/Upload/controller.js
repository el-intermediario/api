const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline
} = require('@azure/storage-blob');

const sharedKeyCredential = new StorageSharedKeyCredential(
  process.env.AZURE_STORAGE_ACCOUNT_NAME,
  process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY);
const pipeline = newPipeline(sharedKeyCredential);

const blobServiceClient = new BlobServiceClient(
  // ${process.env.AZURE_STORAGE_ACCOUNT_NAME}
  `https://intermediario.blob.core.windows.net`,
  pipeline
);

const getStream = require('into-stream');
// Upload File Router Handler
const uploadFile = async (req, res) => {
  // Redirect to the initial page
  res.send(req.file);
};

const uploadAzureFile = async (req, res) => {
  const folder = req.body.folder;
  const mimeType = folder === 'videos' ? req.file.mimetype : 'image/jpeg';
  const blobName = getBlobName(req.file.originalname);
  const stream = getStream(req.file.buffer);

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const folderPath = `dev/${folder}/${year}/${month}`;
  const containerClient = blobServiceClient.getContainerClient(folderPath);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  const ONE_MEGABYTE = 1024 * 1024;
  const uploadOptions = { bufferSize: 4 * ONE_MEGABYTE, maxBuffers: 20 };
  try {
    await blockBlobClient.uploadStream(stream,
      uploadOptions.bufferSize, uploadOptions.maxBuffers,
      { blobHTTPHeaders: { blobContentType: mimeType } });
    res.send({ message: 'File uploaded to Azure Blob storage.', src: `${folderPath}/${blobName}` , file: req.file });
  } catch (err) {
    res.send({ message: err.message });
  }
};

const uploadImage = async (req, res) => {
  // Redirect to the initial page
  res.status(200).json(req.file);
};

const getBlobName = originalName => {
  // Use a random number to generate a unique file name, 
  // removing "0." from the start of the string.
  const identifier = Math.floor(Math.random() * 100);
  return `${identifier}_${originalName.replace(' ', '_')}`;
};

module.exports = {
  uploadFile,
  uploadAzureFile,
  uploadImage,
}