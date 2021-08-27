const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const usersSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
}, { timestamps: { currentTime: () => Date.now() } });


const User = mongoose.model("User", usersSchema);

module.exports = User;