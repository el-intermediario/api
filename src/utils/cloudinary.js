const cloudinary = require('cloudinary');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

exports.uploads = (file, folder) => {
  return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) => {
      console.log(result);
      resolve({
        url: `${result.version}/${result.public_id}.${result.format}`,
        width: result.width,
        height: result.height,
        assetId: result.asset_id,
        type: result.resource_type,
      })
    }, {
      resource_type: "auto",
      folder: folder
    })
  })
}