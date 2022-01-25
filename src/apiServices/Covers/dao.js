const Cover = require('./cover');

module.exports = {
  async post(cover) {
    return new Promise((resolve, reject) => Cover.create(cover, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },
  async get(query) {
    let filters,
        sort;
    if (query.current) {
      filters = {status: true};
      sort = { created: -1 };
    } else {
      filters = {status: true};
      sort = {};
    }
    return new Promise((resolve, reject) => Cover.findOne(filters).sort(sort).exec((err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async put(id, body) {
    return new Promise((resolve, reject) => Cover.findOneAndUpdate({"_id" : id}, body, {
      new: true
    }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  }
}