const dao = require('./dao');

module.exports = {
    async post(video) {
    return dao.post(video);
},
async get(path) {
    return dao.get(path);
},
async getVideosInHome() {
    return dao.getVideosInHome();
},
}