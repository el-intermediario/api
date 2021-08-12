const Article = require('./article');

module.exports = {
  async post(article) {
    return new Promise((resolve, reject) => Article.create(article, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async get(value, by) {
    let query = {};
    query[by] = value;
    return new Promise((resolve, reject) => Article.findOne(query, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async getArticles({page, limit, ...filters}) {
    let filter = {};
    if (filters.search) { // Search.
      filter = {"title": { "$regex": filters.search , "$options": "i" }};
    }
    if (filters.tags) { // related by tags.
      const tags = filter.tags.split(',');
      filter = { "tags.name": {$in: tags} };
    }
    return new Promise((resolve, reject) => Article.find(filter)
    .skip(page * limit).limit(limit).exec((err, docs) => {
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