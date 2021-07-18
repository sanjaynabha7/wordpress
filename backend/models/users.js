const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const usersSchema = new Schema({
  userName: { type: String },
  email: { type: String },
  password: { type: String },
}, { timestamps: { currentTime: () => Date.now() } });


const User = mongoose.model("User", usersSchema);

module.exports = User;