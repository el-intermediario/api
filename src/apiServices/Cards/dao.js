const { getCards } = require('./actions');
const Card = require('./card');

module.exports = {
    async post(card) {
        return new Promise((resolve, reject) => Card.create(card, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs);
        }));
    },
    async get(path) {
        return new Promise((resolve, reject) => Card.findOne({ slug: path }, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs);
        }));
    },
    async getCards() {
        return new Promise((resolve, reject) => Card.find({}, (err, docs) => {
            if (err) return reject(err);
            return resolve(docs); 
        }));
    },
}