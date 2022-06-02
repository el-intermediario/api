const dao = require('./dao');

module.exports = {
  async post(ad) {
    return dao.post(ad);
  },
  async put(id, body) {
    return dao.put(id, body);
  },
  async get(path) {
    return dao.get(path);
  },
  async getAds(query) {
    return dao.getAds(query);
  }, 
}