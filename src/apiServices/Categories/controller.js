const redis = require('redis');
const clientRedis = redis.createClient({ host: 'redis' });
const dto = require('./dto');
const action = require('./actions');

async function put(req, res) {
  const category = await action.put(req.body);
  return res.send(dto.single(category));
}

async function get(req, res) {
  const category = await action.get(req.query.type);
  res.set('Cache-Control', 'public, max-age=30000, s-maxage=30000')
  return res.send(dto.single(category));
}

module.exports = {
  get,
  put
}