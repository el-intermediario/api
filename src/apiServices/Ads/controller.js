const dto = require('./dto');
const action = require('./actions');
const NodeCache = require("node-cache");
const myCache = new NodeCache({stdTTL: 360});

async function post(req, res) {
  myCache.del('ads');
  const ad = await action.post(req.body);
  return res.send(dto.single(ad));
}

async function put(req, res) {
  const ad = await action.put(req.params.id, req.body);
  return res.send(dto.single(ad));
}

async function get(req, res) {
  const ad = await action.get(req.params.id);
  return res.send(dto.single(ad));
}

async function getAds(req, res) {
  const ad = await action.getAds(req.query);
  return res.send(dto.multiple(ad));

  /*
  if(myCache.has('ads')) {
    return res.send(myCache.get('ads'));
  } else {
    const ad = await action.getAds(req.query);
    myCache.set('ads', ad);
    return res.send(dto.multiple(ad));
  }
  */
}


module.exports = {
  get,
  post,
  put,
  getAds,
}