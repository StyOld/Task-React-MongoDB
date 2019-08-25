const { Schema, model }  = require('mongoose');

const postSchema = new Schema({
    name: String,
    surName: String
});

const Post = model('post', postSchema);

module.exports = Post;