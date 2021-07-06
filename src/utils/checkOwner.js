const jwt = require('jsonwebtoken');

// Check if content load is of owner user.
function checkOwner(req) {
  if (req.headers && req.headers.authorization) {
    let authorization = req.headers.authorization.split(' ')[1],
      decoded;
    try {
      decoded = jwt.verify(authorization, process.env.JWT_SECRET);
    } catch (e) {
      return res.status(401).send('unauthorized');
    }

    if (decoded) {
      return decoded;
    }
  }
}

module.exports = checkOwner;
