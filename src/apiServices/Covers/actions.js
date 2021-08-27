const dao = require('./dao');

module.exports = {
    async post(cover) {
    return dao.post(cover);
},
async get(path) {
    return dao.get(path);
},
}