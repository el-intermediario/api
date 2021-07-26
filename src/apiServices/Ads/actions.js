const dao = require('../dao');

module.export = { 
    async post(ad) { 
        return dao.post(ad);
    },
    async get(path) { 
        return dao.get(path);
    },
}