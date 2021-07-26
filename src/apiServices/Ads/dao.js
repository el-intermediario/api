const Ads = require('ad.js');
const { post, get } = require('../Articles/dao');

module.exports = {
    async post(ad) {
        return new Promise((resolve, reject) => ad.create(ad, (err, docs) => {
            if (err) return reject(err);
            return resolve(docs);
        }));
    },

    async get(path) {
        return new Promise((resolve, reject) => ad.filOne({slug: path}, (err, docs) => {
            if (err) return reject(err);
            return resolve(docs); 
        }));
    },
}
