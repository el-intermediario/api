const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
  const cover = await action.post(req.body);
  return res.send(dto.single(cover));
};

async function put(req, res) {
  const cover = await action.put(req.params.id, req.body);
  return res.send(dto.single(cover));
};

async function get(req, res) {
  const cover = await action.get(req.query);
  return res.send(dto.single(cover));
};

module.exports = {
  get,
  put,
  post
}