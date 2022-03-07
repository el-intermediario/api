const Ad = require('./ad');

module.exports = {
  async post(ad) {
    return new Promise((resolve, reject) => Ad.create(ad, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async get(iShort) {
    return new Promise((resolve, reject) => Ad.findOne({ iShort }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async getAds(query) {
    let filters = {
      '$and': []
    };

    if(query.category) {
      filters['$and'].push({categories: query.category});
    }

    if(query.sizes) {
      filters['$and'].push({ size: {$in: query.sizes.split(',')}});
    }
    /*
    if(query.sizes) {
      filters = { size: {$in: query.sizes.split(',')}}; // not in array
    }*/

    return new Promise((resolve, reject) => Ad.find(filters, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },
}
