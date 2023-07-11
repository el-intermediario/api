const dao = require('./dao');

module.exports = {
  async get(id, by ) {
    return dao.get(id, by);
  },
  async post(article) {
    return dao.post(article);
  },
  async put(id, article) {
    return dao.put(id, article);
  },
  async getArticles(query) {
    return dao.getArticles(query);
  },
  async ArticlesRelated(filters) {
    return dao.ArticlesRelated(filters);
  }
};