const dao = require('./dao');

module.exports = {
  async post(page) {
    return dao.post(page);
  },
  async get(path) {
    return dao.get(path);
  },
}