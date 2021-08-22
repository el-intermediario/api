const card = require('./card');

module.exports = {
    async post(card) {
        return new Promise((resolve, reject) => card.create(card, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs);
        }));
    },
    async get(path) {
        return new Promise((resolve, reject) => card.findOne({ slug: path }, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs);
        }));
    },
}