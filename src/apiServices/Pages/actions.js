const dao = require('./dao');

module.exports = {
  async post(page) {
    return dao.post(page);
  },
  async put(id, page) {
    return dao.put(id, page);
  },
  async get(slug, by) {
    return dao.get(slug, by);
  },
  async getPages() {
    return dao.getPages();
  },
}