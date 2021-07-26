const dao = require('../dao'); 

module.exports = { 
    async post(Category) {
        return dao.post(Category);
    },
    async get(path) {
        return dao.get(path);
    },
}