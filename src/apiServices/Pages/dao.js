const Page = require('./page');

module.exports = {
  async post(page) {
    return new Promise((resolve, reject) => Page.create(page, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async put(id, page) {
    const filter = { "_id": id };
    const update = page;
    return new Promise((resolve, reject) => Page.findOneAndUpdate(filter, update, {
      new: true
    }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async get(value, by) {
    let query = {};
    query[by] = value;

    return new Promise((resolve, reject) => Page.findOne(query, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async getPages() {
    return new Promise((resolve, reject) => Page.find({}, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },
}
