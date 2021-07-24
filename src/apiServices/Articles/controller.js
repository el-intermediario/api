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
  const article = await action.get(req.params.path);
  return res.send(dto.single(article));
};

async function getArticles(req, res) {
  const articles = await clientRedis.get('articles', async (err, data) => {
    if (err) throw err;

    if (data) {
      res.status(200).send(JSON.parse(data));
    } else {
      /*
      const data = await db.collection('articles').get();
      const articles = [];
      data.docs.forEach(item => {
        articles.push({...item.data(), id: item.id});
      })

      await clientRedis.setex('articles', 15, JSON.stringify(articles));
      res.status(200).send(articles);
      */
    }
  });
}

module.exports = {
  get,
  post,
  getArticles
}