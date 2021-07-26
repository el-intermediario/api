const dao = require('./dao');

module.exports = { 
    async post(Tag) {
        return dao.post(Tag);
    },
    async get(path) {
        return dao.get(path);
    },
}