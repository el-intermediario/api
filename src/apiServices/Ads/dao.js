const Ad = require('./ad');

module.exports = {
  async post(ad) {
    return new Promise((resolve, reject) => Ad.create(ad, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async put(id, body) {
    const filter = { "_id": id };
    return new Promise((resolve, reject) => Ad.findOneAndUpdate(filter, body, {
      new: true
    }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async get(id) {
    return new Promise((resolve, reject) => Ad.findOne({'_id': id }, (err, docs) => {
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

    if (filters['$and'].length === 0) {
      filters['$and'].push({});
    }

    const limit = query.limit || 10;
    return new Promise((resolve, reject) => Ad.find(filters, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }).limit(+limit));
  },
}
