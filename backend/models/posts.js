const mongoose = require("mongoose");
const { Schema } = mongoose

const postsSchema = new Schema({
    postTitle: { type: String },
    postDescription: { type: String },
    postImage: { type: String },
    postCategory: { type: Schema.ObjectId, ref: 'Category' },
    postUrl: { type: String },
    postTags: [],
    postPage: [],
}, { timestamps: { currentTime: () => Date.now() } });

const Posts = mongoose.model("Post", postsSchema);
module.exports = Posts; 