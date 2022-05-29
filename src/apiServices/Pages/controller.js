const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
  const page = await action.post(req.body);
  return res.send(dto.single(page));
}

async function put(req, res) {
  const page = await action.put(req.params.id, req.body);
  return res.send(dto.single(page));
};

async function get(req, res) {
  const page = await action.get(req.params.slug, req.query.by);
  return res.send(dto.single(page));
}

async function getPages(req, res) {
  const pages = await action.getPages();
  return res.send(dto.multiple(pages));
}

module.exports = {
  get,
  post,
  put,
  getPages,
}