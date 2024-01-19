const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true },
  hasEmailVerified: {
    type: Boolean,
    default: false,
    required: true
  },
});

userSchema.plugin(uniqueValidator, {
  path: "email",
  message:
    "There already an account exists with this email. Try Login instead.",
});

module.exports = mongoose.model("User", userSchema);
