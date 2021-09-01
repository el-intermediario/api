const dao = require('./dao');

module.exports = {
  async post(article) {
    return dao.post(article);
  },
  async get(id, by ) {
    return dao.get(id, by);
  },
  async getArticles(filters) {
    return dao.getArticles(filters);
  },
  async getCount(count) {
    return dao.get(count);
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