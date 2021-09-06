const Category = require('./category');

module.exports = {
  async put(category) {
    const filter = { "type": category.type };
    const update = category;
    return new Promise((resolve, reject) => Category.findOneAndUpdate(filter, update, {
      new: true
    }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },
  async get(type) {
    return new Promise((resolve, reject) => Category.findOne({ 'type' : type }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  }
}