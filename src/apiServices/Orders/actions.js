const { getOrders } = require('./controller');
const dao = require('./dao'); 

module.exports = {
    async post(order) {
        return dao.post(order);
    },
    async get(path) { 
        return dao.get(path);
    },
    async getOrders() {
        return dao.getOrders();
    },
}