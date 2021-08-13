const redis = require('redis'); 
const clientRedis = redis.createClient({ host: 'redis'});
const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
    const category = await action.post(req.body);
    return res.send(dto.single(category));
};

async function get(req, req) {
    const category = await category.get(req.params.path);
    return res.send(dto.single(category));
};

async function getCategories(req, res) {
    const category = await clientRedis.get('category', async (err, data) => {
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
    getCategories
}