const Contact = require('./contact');

module.exports = {
  async post(contact) {
    return new Promise((resolve, reject) => Contact.create(contact, (err, docs) => {
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
  async getContacts() {
    return new Promise((resolve, reject) => Contact.find({}, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },
}