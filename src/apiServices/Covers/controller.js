const dto = require('./dto');
const action = require('./actions');
const NodeCache = require("node-cache");
const myCache = new NodeCache({stdTTL: 180});

async function post(req, res) {
  myCache.del('cover');
  const cover = await action.post(req.body);
  return res.send(dto.single(cover));
};

async function put(req, res) {
  myCache.del('cover');
  const cover = await action.put(req.params.id, req.body);
  return res.send(dto.single(cover));
};

async function get(req, res) {
  if(myCache.has('cover')) {
    return res.send(myCache.get('cover'));
  } else {
    const cover = await action.get(req.query);
    myCache.set('cover', cover);
    return res.send(dto.single(cover));
  } 
};

module.exports = {
  get,
  put,
  post
}