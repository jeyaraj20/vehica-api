const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name: String,
    position: Number,
    // imageUrl: String
});

module.exports = mongoose.model('category', CategorySchema);