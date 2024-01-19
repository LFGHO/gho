const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    currencyType: {
      type: String,
      required: true,
    },
    transactionType: {
      type: String,
      required: true,
    },
    transactionStatus: {
      type: String,
      required: true,
    },
    investedInVault1: {
      type: Number,
      required: true,
    },
    investedInVault2: {
      type: Number,
      required: true,
    },
    investedInVault3: {
      type: Number,
      required: true,
    },
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },

  },
  {
    timestamps: true,
  }
);


// sample object
// {
//   "amount": 100,
//   "currencyType": "USD",
//   "transactionType": "Deposit",
//   "transactionStatus": "Success",
//   "investedInVault1": 0,
//   "investedInVault2": 20,
//   "investedInVault3": 80
// }


const Student = mongoose.model("Transaction", transactionSchema);

module.exports = Student;
