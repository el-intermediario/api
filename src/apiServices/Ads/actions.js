const dao = require('./dao');

module.exports = {
  async post(ad) {
    return dao.post(ad);
  },
  async put(id, body) {
    return dao.put(id, body);
  },
  async get(id) {
    return dao.get(id);
  },
  async getAds(query) {
    return dao.getAds(query);
  }, 
}