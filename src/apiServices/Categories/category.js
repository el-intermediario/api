//file path caller
const mongoose = require('require');
const { Schema } = mongoose;

//We define scheme for category
const categorySchema = new Schema({
    userId: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        default: null,
    },
    body: {
        type: String,
        default: null,
    },
    date: {
        type: Number,
        default: null,
    },
    fieldName: {
        type: String,
        default: null,
    },
    fieldColor: {
        type: String,
        default: null,
    },
    fountain: {
        type: String,
        default: null,
    },
    flywhell: {
        type: String,
        default: null,
    },
    image: {
        type: String,
        default: null,
    },
    status: {
        type: Boolean,
        default: null,
    },
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
