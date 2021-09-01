const { getCustomers } = require('./actions');
const Customer = require('./customer');

module.exports = { 
    async post(customer) {
        return new Promise((resolve, reject) => Customer.create(customer, (err, docs) => {
            if(err) return reject(err); 
            return resolve(docs)
        }));
    },
    async get(path) { 
        return new Promise((resolve, reject) => Customer.findOne({slug: path}, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs);
        }));
    },

    async getCustomers() {
        return new Promise((resolve, reject) => Customer.find({}, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs);
        }));
    },
}
