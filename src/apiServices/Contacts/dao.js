const Contact = require('./contact');

module.exports = {
  async post(Contact) {
    return new Promise((resolve, reject) => Contact.create(Contact, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async get(path) {
    return new Promise((resolve, reject) => Contact.findOne({ slug: path }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },
}