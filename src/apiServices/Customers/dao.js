const customer = require('./customer');

module.exports = { 
    async post(Customer) {
        return new Promise((resolve, reject) => Customer.create(Customer, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs);
        }));
    },
    async get(path) { 
        return new Promise((resolve, reject)=> Customer.findOne( { slug: path }, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs);
        }));
    },
}