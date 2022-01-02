const dao = require('./dao');

module.exports = {
  async post(page) {
    return dao.post(page);
  },
  async get(slug) {
    return dao.get(slug);
  },
}