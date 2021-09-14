const Article = require('./article');

module.exports = {
  async post(article) {
    return new Promise((resolve, reject) => Article.create(article, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async put(id, article) {
    const filter = { "_id": id };
    const update = article;
    return new Promise((resolve, reject) => Article.findOneAndUpdate(filter, update, {
      new: true
    }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async get(value, by) {
    // Increment counter.
    const filter = {},
          update = { $inc: { counter: 1 }};
    filter[by] = value,
    await Article.updateOne(filter, update).exec();

    // Get Data.
    let query = {};
    query[by] = value;
    return new Promise((resolve, reject) => Article.findOne(query, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async getArticles(query) {
    let filter = {};
    let sortObject = {};
    const stype = 'updated';
    const sdir = -1;
    sortObject[stype] = sdir;

    // Filter last articles by category.
    if (query.category) {
      const countCategories = query.category.split("/");
      if (countCategories.length === 2) {
        filter = {"category.initial": { "$regex": query.category , "$options": "i" }}
      } else {
        filter = {"category.initial": query.category }
      }
    }

    // Filter articles if are featured.
    if(query.trending) {
      filter = {
        $and: [
          { "featured": true },
          { _id: {$ne: query.idOffset} },
         ]
      };
    }

    // Get articles more view.
    if(query.mostView) {
      delete sortObject.updated;
      sortObject.counter = -1;
    }

    // Search articles by string.
    if (query.search) {
      filter = {"title": { "$regex": query.search , "$options": "i" }};
    }
    
    console.log(sortObject);
    return new Promise((resolve, reject) => Article.find(filter)
    .skip(query.page * query.limit).limit(query.limit).sort(sortObject).exec((err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  },

  async ArticlesRelated({page, limit, ...filters}) {
    let filter = {};
    if (filters.tags) { // related by tags.
      const tags = filters.tags.split(',');
      filter = {
        $and: [
          { "tags.name": {$in: tags} },
          { _id: {$ne: filters.offsetId} },
         ]
      };
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