const { getTags } = require('./dao');
const dao = require('./dao');

module.exports = { 
    async post(tag) {
        return dao.post(tag);
    },
    async get(path) {
        return dao.get(path);
    },
    async getTags() {
        return dao.getTags();
    },
}