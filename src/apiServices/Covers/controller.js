const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
  const cover = await action.post(req.body);
  return res.send(dto.single(cover));
};

async function get(req, res) {
  const cover = await action.get();
  return res.send(dto.single(cover));
};

module.exports = {
  get,
  post
}