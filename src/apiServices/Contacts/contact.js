//File path caller
const mogoose = require("require");
const { Schema } = moogose;

//We define schema for Contact
const contactSchema = new Schema({
    userId: {
        type: mogoose.Schema.Type.ObjectId,
        ref: 'User',
    },
    body: {
        type: String, 
        default: null,
    },
    name: {
        type: String, 
        default: null,
    },
    subject: {
        type: String, 
        default: null
    },
});

const Contact = mogoose.model('Contact', contactSchema);
module.export = Contact;