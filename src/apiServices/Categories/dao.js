const Category = require('./category');

module.exports = {
  async post(category) {
    return new Promise((resolve, reject) => Category.create(category, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },
  async get(path) {
    return new Promise((resolve, reject) => Category.findOne({ slug: path }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },
}