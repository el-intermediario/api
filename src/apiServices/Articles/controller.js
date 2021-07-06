const admin = require('firebase-admin');
const serviceAccount = require("../../../serviceAccountKey.json");
const redis = require("redis");
const clientRedis = redis.createClient({ host: 'redis' });

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function getArticles(req, res) {
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
  });
}

module.exports = {
  getArticles
}