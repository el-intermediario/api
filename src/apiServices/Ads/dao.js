const Ad = require('./ad');

module.exports = {
    async post(ad) {
        return new Promise((resolve, reject) => Ad.create(ad, (err, docs) => {
            if (err) return reject(err);
            return resolve(docs);
        }));
    },

    async get(iShort) {
        return new Promise((resolve, reject) => Ad.findOne({iShort}, (err, docs) => {
            if (err) return reject(err);
            return resolve(docs); 
        }));
    },

    async getAds() {
        return new Promise((resolve, reject) => Ad.find({}, (err, docs) => {
            if (err) return reject(err);
            return resolve(docs); 
        }));
    },
}
