const mongoose = require("mongoose");

const listSchema = mongoose.Schema(
  { 
    address: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    i_rate : {
      type: Number,
      required: true,
    },
    transactionType: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
);


const List = mongoose.model("List", listSchema);

module.exports = List;
