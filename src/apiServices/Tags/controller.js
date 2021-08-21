const redis = require('redis'); 
const clientRedis = redis.createClient({ host: 'redis'});
const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
    const tag= await action.post(req.body);
    return res.send(dto.single(tag));
};

async function get(req, res) {
    const tag = await action.get(req.params.path);
    return res.send(dto.single(tag));
};

async function getTags(req, res) {
    const tag = await  clientRedis.get('tag', async (err, data) => {
        if (err) throw err; 
        if (data) {
            res.status(200).send(JSON.parse(data));
        } else {
        }
    });
}

module.exports = {
    get,
    post,
    getTags
}