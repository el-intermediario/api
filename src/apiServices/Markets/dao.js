const Market = require('./market');
const Account = require('../Accounts/account');

module.exports = {
  async getMarkets(page, limit) {
    return new Promise((resolve, reject) => Market.find({
        // _id: { "$not": { "$all": listMarkets } },
        // @TODO: Filter by ratio.
        // ratio: {$geoIntersects: {$geometry: {"type": "Point","coordinates": [req.query.lat, req.query.lng]}}}
      }).skip(page * limit).limit(limit).exec((err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  },

  async getMarket(id) {
    return new Promise((resolve, reject) => Market.findOne({ _id: id }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async getMpPublicKey(userId) {
    return new Promise((resolve, reject) => Account.findOne({ userId: userId }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  }
};