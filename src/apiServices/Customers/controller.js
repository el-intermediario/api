const redis = require('redis');
const clienteRedis = redis.createClient({host: 'redis'});
const dto = require('./dto');
const action = require('./actions');

async function post(req, res) { 
    const customer = await action.post(req.body);
    return res.send(dto.single(customer));
};

async function get(req, res) {
    const customer = await action.get(req.params.path);
    return res.send(dto.single(customer));
};

async function getCustomers(req, res) {
    const customer = await clienteRedis.get('customer', async (err, data) => {
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
    getCustomers,
}