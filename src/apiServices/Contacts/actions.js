const { post, get } = require('../Contacts/dao');
const dao = require('../Contacts/dao');

module.exports = {
    async post(Contact) {
        return dao.post(Contact);
    },
    async get(path) { 
        return dao.get(path); 
    },
}