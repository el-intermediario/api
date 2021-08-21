const Cover = require('./cover'); 

module.exports = { 
    async post(cover) {
        return new Promise((resolve, reject) => Cover.create(cover, (err, docs) => {
            if(err) return reject(err); 
            return resolve(docs);
        }));
    }, 
    async get(id) {
        return new Promise((resolve, reject)=> Cover.findOne( { _id: id }, (err, docs) => {
            if(err) return reject(err); 
            return resolve(docs);
        }));
    },
}