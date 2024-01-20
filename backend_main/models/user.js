const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  address: { type: String, required: true },
  answer: [],
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
});

userSchema.plugin(uniqueValidator, {
  path: "email",
  message:
    "There already an account exists with this email. Try Login instead.",
});

module.exports = mongoose.model("User", userSchema);
