const redis = require('redis'); 
const clientRedis = redis.createClient({ host: 'redis'});
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
    const page = await  clientRedis.get('page', async (err, data) => {
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
    getPages,
}