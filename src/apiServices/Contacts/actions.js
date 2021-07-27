const dao = require('./dao');

module.exports = {
    async post(contact) {
        return dao.post(contact);
    },
    async get(path) { 
        return dao.get(path); 
    },
}