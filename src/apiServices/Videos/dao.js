const Video = require('./video'); 

module.exports = { 
    async post(Video) {
        return new Promise((resolve, reject) => Video.create(Video, (err, docs) => {
            if(err) return reject(err); 
            return resolve(docs);
        }));
    }, 
    async get(path) {
        return new Promise((resolve, reject)=> Video.fieldOne( { slug: path }, (err, docs) => {
            if(err) return reject(err); 
            return resolve(docs);
        }));
    },
}