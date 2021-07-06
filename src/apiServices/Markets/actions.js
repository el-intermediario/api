const dao = require('./dao');

module.exports = {

  async getMarkets(page, limit) {
    return dao.getMarkets(page, limit);
  },

  async getMarket(id) {
    return dao.getMarket(id);
  },

  async getMpPublicKey(userId) {
    return dao.getMpPublicKey(userId);
  }
};