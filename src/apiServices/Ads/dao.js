const Ad = require('./ad');

module.exports = {
    async post(ad) {
        return new Promise((resolve, reject) => Ad.create(ad, (err, docs) => {
            if (err) return reject(err);
            return resolve(docs);
        }));
    },

    async get(path) {
        return new Promise((resolve, reject) => Ad.findOne({slug: path}, (err, docs) => {
            if (err) return reject(err);
            return resolve(docs); 
        }));
    },
}
