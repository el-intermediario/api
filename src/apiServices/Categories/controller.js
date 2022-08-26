const dto = require('./dto');
const action = require('./actions');
const NodeCache = require("node-cache");
const myCache = new NodeCache({stdTTL: 360});

module.exports = {
  get,
  put
}

async function put(req, res) {
  myCache.del('categories');
  const category = await action.put(req.body);
  return res.send(dto.single(category));
}

async function get(req, res) {
  if(myCache.has(`categories`)) {
    return res.send(myCache.get('categories'));
  } else {
    const category = await action.get(req.query.type);
    myCache.set('categories', category);
    return res.send(dto.single(category));
  }
}