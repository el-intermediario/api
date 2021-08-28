const Page = require('./page');

module.exports = {
    async post(page) {
        return new Promise((resolve, reject) => Page.create(page, (err, docs) => {
            if (err) return reject(err);
            return resolve(docs);
        }));
    },
    
    async get(path) {
        return new Promise((resolve, reject) => Page.findOne({slug: path}, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs); 
        }));
    },
}
