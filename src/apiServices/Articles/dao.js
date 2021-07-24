const Article = require('./article');

module.exports = {
  /*
  async getProfile(id) {
    return new Promise((resolve, reject) => collection.findOne({ userId: id }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },*/

  async post(article) {
    return new Promise((resolve, reject) => Article.create(article, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  /*
  async updateProfile(id, { email, username }) {
    const update = { $set: { email, username } };

    return new Promise((resolve, reject) => collection
      .update({ _id: id }, update, {}, (err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  },

  async deleteProfile(id) {
    return new Promise((resolve, reject) => collection
      .remove({ _id: id }, (err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  },

  async getProfileByUserId(id) {
    return new Promise((resolve, reject) => Profile.findOne({ userId: id }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },*/
};