const redis = require('redis');
const clienteRedis = redis.createClient({ host: 'redis' });
const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
    const contact = await action.post(req.body);
    return res.send(dto.single(contact));
};

async function get(req, res) {
    const contact = await contact.get(req.params.path);
    return res.send(dto.single(contact));
};

async function getContacts(req, res) {
    const contact = await clienteRedis.get('contact', async (err, data) => {
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
    getContacts
}