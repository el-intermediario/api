const dto = require('./dto');
const action = require('./actions');

async function post(req, res) { 
    const customer = await action.post(req.body);
    return res.send(dto.single(customer));
}

async function get(req, res) {
    const customer = await action.get(req.params.path);
    return res.send(dto.single(customer));
}

async function getCustomers(req, res) {
    const customer = await action.getCustomers();
    return res.send(dto.multiple(customer));
}

module.exports = { 
    get,
    post,
    getCustomers,
}