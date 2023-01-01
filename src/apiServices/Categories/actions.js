const dao = require('./dao');

module.exports = {
  async put(category) {
    return dao.put(category);
  },
  async get(type) {
    return dao.get(type);
  }
}