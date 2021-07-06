const dao = require('./dao');

module.exports = {

  async getUsers(page, limit) {
    return dao.getUsers(page, limit);
  },

  async getUser(id) {
    return dao.getUser(id);
  },

  async createUser(user) {
    return dao.createUser(user);
  },

  async updateUser(id, { email, username }) {
    return dao.updateUser(id, { email, username });
  },

  async deleteUser(id) {
    return dao.updateUser(id);
  },
};