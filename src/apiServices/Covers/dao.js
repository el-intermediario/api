const Cover = require('./cover');

module.exports = {
  async post(cover) {
    return new Promise((resolve, reject) => Cover.create(cover, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },
  async get() {
    return new Promise((resolve, reject) => Cover.findOne({}).sort({ created: -1 }).exec((err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },
}