 const dto = require('./dto'); 
const action = require('./actions');
const card = require('./card');

async function post(req, res) {
    const card = await action.post(req.body);
    return res.send(dto.single(card));
}

async function get(req, res) {
    const card = await action.get(req.params.path);
    return res.send(dto.single(card));
}

async function getCards(req, res) {
    const card = await action.getCards();
    return res.send(dto.multiple(card));
}

module.exports = {
    get,
    post, 
    getCards,
}