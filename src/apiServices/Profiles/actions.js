const dao = require('./dao');

module.exports = {

  async getProfile(id) {
    return dao.getProfile(id);
  },

  async createProfile(user) {
    return dao.createProfile(user);
  },

  async updateProfile(id, { email, username }) {
    return dao.updateProfile(id, { email, username });
  },

  async deleteProfile(id) {
    return dao.deleteProfile(id);
  },

  async getProfileByUserId(userId) {
    return dao.getProfileByUserId(userId);
  }
};