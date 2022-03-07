//const admin = require('firebase-admin');
//const serviceAccount = require("../../../serviceAccountKey.json");
const dto = require('./dto');
const action = require('./actions');

/*
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
*/

//const db = admin.firestore();

// @TODO: Update with actions, dto and dao.
async function post(req, res) {
  const article = await action.post(req.body);
  return res.send(dto.single(article));
};

async function put(req, res) {
  const article = await action.put(req.params.id, req.body);
  return res.send(dto.single(article));
};

async function get(req, res) {
  const article = await action.get(req.params.id, req.query.by);
  res.set('Cache-Control', 'public, max-age=300, s-maxage=300');
  return res.send(dto.single(article));
};

async function Articles(req, res) {
  const page = parseInt((req.query.page || 0).toString(), 10);
  const limit = parseInt((req.query.limit || 10).toString(), 10);
  const query = {...req.query, page, limit};

  const articles = await action.getArticles(query);
  // res.set('Cache-Control', 'public, max-age=120, s-maxage=120');
  return res.send(dto.multipleTeaser(articles));
}

async function ArticlesRelated(req, res) {
  const page = parseInt((req.query.page || 0).toString(), 10);
  const limit = parseInt((req.query.limit || 10).toString(), 10);
  const tags = req.query.tags;
  const offsetId = req.params.id;
  const filters = { page, limit, tags, offsetId};

  const articles = await action.ArticlesRelated(filters);
  return res.send(dto.multipleTeaser(articles));
}

module.exports = {
  get,
  post,
  put,
  Articles,
  ArticlesRelated
}