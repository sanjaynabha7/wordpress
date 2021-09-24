const mongoose = require("mongoose");
const { Schema } = mongoose

const postsSchema = new Schema({
    postTitle: { type: String },
    postDescription: { type: String },
    post

}, { timestamps: { currentTime: () => Date.now() } });

const Posts = mongoose.model("Post", postsSchema);
module.exports = Posts;