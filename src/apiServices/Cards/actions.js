const { getCards } = require('./controller');
const dao = require('./dao');

module.exports = {
    async post(card) {
        return dao.post(card);
    },
    async get(path) { 
        return dao.get(path); 
    },
    async getCards() {
        return dao.getCards();
    },
}