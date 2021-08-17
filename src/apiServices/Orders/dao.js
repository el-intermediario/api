const  order = require('./order');

module.exports = {
    async post(order) {
        return new Promise((resolve, reject) => order.create(order, (err, docs) => {
            if (err) return reject(err); 
            return resolve(docs); 
        })); 
    }, 

    async get(path) { 
        return new Promise((resolve, reject) => order.findOne({slug: path},(err, docs) => {
            if (err) return reject(err); 
            return resolve(docs); 
        }));
    },
}