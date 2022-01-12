
// Upload File Router Handler
const uploadFile = async (req, res) => {
  // Redirect to the initial page
  res.send(req.file);
};

const uploadAzure = async (req, res) => {
  // Redirect to the initial page
  console.log(req);
  res.status(200).json(req.file);
};

module.exports = {
  uploadFile,
  uploadAzure,
}