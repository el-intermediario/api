const dao = require('./dao');

module.exports = {
  async post(cover) {
    return dao.post(cover);
  },
  async get(query) {
    return dao.get(query);
  },
  async put(id, body) {
    return dao.put(id, body);
  },
}