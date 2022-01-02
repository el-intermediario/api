const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
    const ad = await action.post(req.body);
    return res.send(dto.single(ad));
}

async function get(req, res) {
    const ad = await action.get(req.params.idShort);
    return res.send(dto.single(ad));
}

async function getAds(req, res) {
    const ad = await action.getAds();
    return res.send(dto.multiple(ad));
}


module.exports = {
    get,
    post,
    getAds,
}