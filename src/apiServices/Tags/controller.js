const redis = require('redis'); 
const clientRedis = redis.createClient({ host: 'redis'});
const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
    const tag= await action.post(req.body);
    return res.send(dto.single(tag));
}

async function get(req, res) {
    const tag = await action.get(req.params.path);
    return res.send(dto.single(tag));
}

async function getTags(req, res) {
    const tag = await action.getTags();
    return res.send(dto.multiple(tag));
}

module.exports = {
    get,
    post,
    getTags,
}