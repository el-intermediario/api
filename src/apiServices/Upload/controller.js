
// Upload File Router Handler
const uploadFile = async (req, res) => {
  // Redirect to the initial page
  res.send(req.file.location);
};

module.exports = {
  uploadFile
}