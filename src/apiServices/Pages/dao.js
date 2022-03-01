const Page = require('./page');

module.exports = {
  async post(page) {
    return new Promise((resolve, reject) => Page.create(page, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async get(slug) {
    return new Promise((resolve, reject) => Page.findOne({ slug }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },
}
