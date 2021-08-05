const dao = require('./dao');

module.exports = {
  async post(article) {
    return dao.post(article);
  },
  async get(id, by) {
    return dao.get(id, by);
  },
  async getArticles(page, limit) {
    return dao.getArticles(page, limit);
  },
  /*  
  async getProfile(id) {
      return dao.getProfile(id);
  },

  async updateProfile(id, { email, username }) {
    return dao.updateProfile(id, { email, username });
  },

  async deleteProfile(id) {
    return dao.deleteProfile(id);
  },

  async getProfileByUserId(userId) {
    return dao.getProfileByUserId(userId);
  }*/
};