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
    let filters = {
      '$and': []
    };

    let sortObject = {};
    const stype = 'updated';
    const sdir = -1;
    sortObject[stype] = sdir;

    // Filter last articles by category.
    if (query.category) {
      filters['$and'].push({"category.initial": { "$regex": query.category , "$options": "i" }});
      /*
      const countCategories = query.category.split("/");
      if (countCategories.length === 2) {
        filters['$and'].push({"category.initial": { "$regex": query.category , "$options": "i" }})
      } else {
        console.log(query.category);
        filters['$and'].push({"category.initial": query.category });
      }*/
    }

    if (query.tags) {
      const tags = query.tags.split(',');
      filters['$and'].push({ "tags.name": {$in: tags} });
    }

    // Filter articles if are featured.
    if(query.trending) {
      filters['$and'].push({ "featured": true });
      filters['$and'].push({ _id: {$ne: query.idOffset} });
    }

    // Filter articles with offset.
    if(query.offset) {
      filters['$and'].push({ idShort: {$nin: query.offset.split(',')}}); // not in array.
    }

    // Get articles more view.
    if(query.mostView) {
      filters['$and'].push({});
      delete sortObject.updated;
      sortObject.counter = -1;
    }

    // Search articles by string.
    if (query.search) {
      filters['$and'].push({"title": { "$regex": query.search , "$options": "i" }});
    }

    if (filters['$and'].length === 0) {
      filters['$and'].push({});
    }
    
    return new Promise((resolve, reject) => Article.find(filters)
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