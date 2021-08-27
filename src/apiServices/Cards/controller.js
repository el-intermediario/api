const redis = require('redis');
const clienteRedis = redis.createClient({host: 'redis'}); 
const dto = require('./dto'); 
const action = require('./actions');
const card = require('./card');

async function post(req, res) {
    const card = await action.post(req.body);
    return res.send(dto.single(card));
}

async function get(req, res) {
    const customer = await action.get(req.params.path);
    return res.send(dto.single(card));
}

async function getCards(req, res) {
    const card = await clienteRedis.get('card', async(err, data) => {
        if(err) throw err;
        if(data) {
            res.status(200).send(JSON.parse(data));
        }else {
        }
    });
}

module.exports = {
    get,
    post, 
    getCards,
}