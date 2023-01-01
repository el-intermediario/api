const dto = require('./dto');
const action = require('./actions');
const NodeCache = require("node-cache");
const myCache = new NodeCache({});

async function put(req, res) {
  myCache.del('categories');
  const category = await action.put(req.body);
  return res.send(dto.single(category));
}

async function get(req, res) {
  if (myCache.has(`categories`)) {
    console.log('contenido cacheado')
    return res.send(myCache.get('categories'));
  } else {
    const category = await action.get(req.query.type);
    myCache.set('categories', category, 300);
    console.log('contenido no cacheado')
    return res.send(dto.single(category));
  }
}

module.exports = {
  get,
  put
}