const dao = require('./dao');

module.exports = {
  async post(article) {
    return dao.post(article);
  },
  async put(id, article) {
    return dao.put(id, article);
  },
  async get(id, by) {
    return dao.get(id, by);
  },
  async getArticles(filters) {
    return dao.getArticles(filters);
  }
};