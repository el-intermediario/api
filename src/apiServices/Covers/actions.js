const dao = require('./dao');

module.exports = {
  async post(cover) {
    return dao.post(cover);
  },
  async get() {
    return dao.get();
  },
}