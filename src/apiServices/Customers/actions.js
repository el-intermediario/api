const dao = require('./dao');

module.exports = {
    async post(customer) {
        return dao.post(customer);
    },
    async get(path) {
        return dao.get(path);
    },
}