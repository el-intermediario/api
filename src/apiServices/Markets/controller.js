const dto = require('./dto');
const action = require('./actions');

async function getMarkets(req, res) {
  const page = parseInt((req.query.page || 0).toString(), 10);
  const limit = parseInt((req.query.limit || 12).toString(), 10);

  const markets = await action.getMarkets(page, limit);
  return res.send(dto.multiple(markets));
}
// Get one market.
async function getMarket(req, res) {
  const market = await action.getMarket(req.params.id);
  const account = await action.getMpPublicKey(market.userId);
  return res.send(dto.single(market, account && account.mpPublicKey));
}

module.exports = {
  getMarkets,
  getMarket
}