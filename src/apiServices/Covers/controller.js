const redis = require('redis');
const clienteRedis = redis.createClient({ host: 'redis' });
const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
    const cover = await action.post(req.body);
    return res.send(dto.single(cover));
};

async function get(req, res) {
    const cover = await action.get(req.params.path);
    return res.send(dto.single(cover));
};

async function getCover(req, res) {
    const cover = await clienteRedis.get('cover', async (err, data) => {
        if (err) throw err;
        if (data) {
            res.status(200).send(JSON.parse(data));
        }else {
        }
    });
}

module.exports = { 
    get,
    post,
    getCover
}