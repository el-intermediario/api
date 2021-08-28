//const admin = require('firebase-admin');
//const serviceAccount = require("../../../serviceAccountKey.json");
const redis = require("redis");
const clientRedis = redis.createClient({ host: 'redis' });
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

async function get(req, res) {
  const article = await action.get(req.params.id, req.query.by);
  return res.send(dto.single(article));
};

async function getArticles(req, res) {
  const page = parseInt((req.query.page || 0).toString(), 10);
  const limit = parseInt((req.query.limit || 10).toString(), 10);
  const search = req.query.search;
  const tags = req.query.tags;
  const idOffset = req.query.idOffset;
  const filters = { page, limit, search, tags, idOffset };

  const articles = await action.getArticles(filters);
  return res.send(dto.multipleTeaser(articles));

  /*
  const articles = await clientRedis.get('articles', async (err, data) => {
    if (err) throw err;

    if (data) {
      res.status(200).send(JSON.parse(data));
    } else {
      const data = await db.collection('articles').get();
      const articles = [];
      data.docs.forEach(item => {
        articles.push({...item.data(), id: item.id});
      })

      await clientRedis.setex('articles', 15, JSON.stringify(articles));
      res.status(200).send(articles);
    }
  });*/
}

module.exports = {
  get,
  post,
  getArticles
}