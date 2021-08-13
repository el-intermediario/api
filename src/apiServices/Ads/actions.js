const dao = require('./dao');

module.exports = {
  async post(ad) {
    return dao.post(ad);
  },
  async get(path) {
    return dao.get(path);
  },
}