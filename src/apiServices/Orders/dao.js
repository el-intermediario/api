const { getOrders } = require('./actions');
const  Order = require('./order');

module.exports = {
    async post(order) {
        return new Promise((resolve, reject) => Order.create(order, (err, docs) => {
            if (err) return reject(err); 
            return resolve(docs); 
        })); 
    }, 

    async get(path) { 
        return new Promise((resolve, reject) => Order.findOne({slug: path},(err, docs) => {
            if (err) return reject(err); 
            return resolve(docs); 
        }));
    },

    async getOrders() { 
        return new Promise((resolve, reject) => Order.find({}, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs);
        }));
    }
}