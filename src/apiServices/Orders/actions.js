const dao = require('./dao'); 

module.exports = {
    async post(order) {
        return dao.post(order);
    },
    async get(path) { 
        return dao.get(path);
    },
}