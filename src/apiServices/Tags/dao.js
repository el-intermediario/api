const Tag = require('./tag');

module.exports = { 
    async post(Tag) {
        return new Promise((resolve, reject) => Tag.create(Tag, (err, docs) => {
            if (err) return reject(err); 
            return resolve(docs)
        }));
    },
    async get(path) { 
        return new Promise((resolve, reject) => Tag.findOne({slug: path}, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs);
        }));
    },
}
