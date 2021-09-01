const Category = require('./category');
const { getCategories } = require('./controller');

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
  async getCategories() {
    return new Promise((resolve, reject) => Category.find({}, (err, docs) => {
      if(err) return reject(err);
      return resolve(docs);
    }) )
  }
}