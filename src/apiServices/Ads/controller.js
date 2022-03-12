const dto = require('./dto');
const action = require('./actions');
const NodeCache = require("node-cache");
const myCache = new NodeCache({stdTTL: 60});

async function post(req, res) {
  const ad = await action.post(req.body);
  return res.send(dto.single(ad));
}

async function get(req, res) {
  const ad = await action.get(req.params.idShort);
  return res.send(dto.single(ad));
}

async function getAds(req, res) {
  if(myCache.has('ads')) {
    return res.send(myCache.get('ads'));
  } else {
    const ad = await action.getAds(req.query);
    myCache.set('ads', ad);
    return res.send(dto.multiple(ad));
  }
}


module.exports = {
  get,
  post,
  getAds,
}