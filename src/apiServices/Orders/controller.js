const dto = require('./dto'); 
const action = require('./actions');

async function post(req, res) { 
    const order = await action.post(req.body);
    return res.send(dto.single(order));
};

async function get(req, res) {
    const order = await action.get(req.params.path);
    return res.send(dto.single(order));
};

async function getOrders(req, res) {
    const order = await action .getOrders();
    return res.send(dto.multiple(order));
}

module.exports = { 
    get,
    post,
    getOrders,
}