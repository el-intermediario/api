const User = require('./user');

module.exports = {
  async getUsers(page, limit) {
    return new Promise((resolve, reject) => User.find({})
    .skip(page * limit).limit(limit).exec((err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  },

  async getUser(id) {
    return new Promise((resolve, reject) => User.findOne({ _id: id }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async createUser(user) {
    return new Promise((resolve, reject) => User.insert(user, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async updateUser(id, { email, username }) {
    const update = { $set: { email, username } };

    return new Promise((resolve, reject) => collection
      .update({ _id: id }, update, {}, (err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  },

  async deleteUser(id) {
    return new Promise((resolve, reject) => collection
      .remove({ _id: id }, (err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  },
};