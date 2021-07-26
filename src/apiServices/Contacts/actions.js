const dao = require('./dao');

module.exports = {
    async post(Contact) {
        return dao.post(Contact);
    },
    async get(path) { 
        return dao.get(path); 
    },
}