const dto = require('./dto');
const action = require('./actions');
const contact = require('./contact');

async function post(req, res) {
    const contact = await action.post(req.body);
    return res.send(dto.single(contact));
}

async function get(req, res) {
    const contact = await action.get(req.params.path);
    return res.send(dto.single(contact));
}

async function getContacts(req, res) {
    const contact = await action.getContacts();
    return res.send(dto.multiple(contact));
}

module.exports = { 
    get,
    post,
    getContacts
}