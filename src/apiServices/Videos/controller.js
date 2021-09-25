const dto = require('./dto');
const action = require('./actions');

async function post(req, res) {
    const video = await action.post(req.body);
    return res.send(dto.single(video));
}

async function get(req, res) {
    const video = await action.get(req.params.path);
    return res.send(dto.single(video));
}

async function getVideos(req, res) {
    const video = await action.getVideos();
    return res.send(dto.multiple(video));
}


module.exports = { 
    get,
    post,
    getVideos,
}