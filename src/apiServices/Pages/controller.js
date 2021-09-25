const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
    const page = await action.post(req.body);
    return res.send(dto.single(page));
}

async function get(req, res) {
    const page = await action.get(req.params.path);
    return res.send(dto.single(page));
}

async function getPages(req, res) {
    const page = await action.get(req.params.path);
    return res.send(dto.multiple(page));
}

module.exports = {
    get,
    post,
    getPages,
}