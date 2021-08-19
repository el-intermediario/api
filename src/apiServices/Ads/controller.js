const redis = require('redis'); 
const clientRedis = redis.createClient({ host: 'redis'});
const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
    const ad = await action.post(req.body);
    return res.send(dto.single(ad));
};

async function get(req, res) {
    const ad = await action.get(req.params.path);
    return res.send(dto.single(ad));
};

async function getAds(req, res) {
    const ad = await  clientRedis.get('ad', async (err, data) => {
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
    getAds
}