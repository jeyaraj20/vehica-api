const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    imageUrl: String,
    userName: String,
    email: {
        type: String,
        required: true
    },
    mobile: String,
    password: {
        type: String,
        required: true
    },
    createDate: {
        type: Date
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('admin', AdminSchema);