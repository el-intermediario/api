const Video = require('./video'); 

module.exports = { 
    async post(video) {
        return new Promise((resolve, reject) => Video.create(video, (err, docs) => {
            if (err) return reject(err); 
            return resolve(docs);
        }));
    }, 

    async get(path) {
        return new Promise((resolve, reject) => Video.findOne({slug: path}, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs); 
        }));
    },
}