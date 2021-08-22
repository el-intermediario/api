const Cover = require('./cover'); 

module.exports = { 
    async post(Cover) {
        return new Promise((resolve, reject) => Cover.create(Cover, (err, docs) => {
            if(err) return reject(err); 
            return resolve(docs);
        }));
    }, 
    async get(path) {
        return new Promise((resolve, reject)=> Cover.findOne( { slug: path }, (err, docs) => {
            if(err) return reject(err); 
            return resolve(docs);
        }));
    },
}