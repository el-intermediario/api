
// Upload File Router Handler
const uploadFile = async (req, res) => {
  // Redirect to the initial page
  res.send(req.file);
};

module.exports = {
  uploadFile
}