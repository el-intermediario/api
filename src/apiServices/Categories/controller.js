const redis = require('redis'); 
const clientRedis = redis.createClient({ host: 'redis'});
const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
    const category = await action.post(req.body);
    return res.send(dto.single(category));
}

async function get(req, req) {
    const category = await action.get(req.params.path);
    return res.send(dto.single(category));
}

async function getCategories(req, res) {
    const category = await action.getCategories();
    return res.send(dto.multiple(category));
}

module.exports = {
    get,
    post,
    getCategories
}