const mongoose = require("mongoose");
const { Schema } = mongoose

const categorySchema = new Schema({
    categoryName: { type: String },
    categoryDescription: { type: String },
    categoryImage: { type: String },
    categoryUrl: { type: String },
}, { timestamps: { currentTime: () => Date.now() } });

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;