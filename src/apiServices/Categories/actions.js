const dao = require('./dao');

module.exports = {
  async post(category) {
    return dao.post(category);
  },
  async get(path) {
    return dao.get(path);
  },
}