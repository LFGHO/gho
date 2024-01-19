const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");
const {
  BadRequestError,
  UnauthenticatedError,
  InternalServerError,
} = require("../errors");

const User = require("../models/user");
const Transaction = require("../models/Transaction");

const depositAmount = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequestError("Validation failed", errors.array());
  }
  try {
    const {
      amount,
      currencyType,
      transactionType,
      transactionStatus,
      investedInVault1,
      investedInVault2,
      investedInVault3,
    } = req.body;
    const transaction = new Transaction({
      amount,
      currencyType,
      transactionType,
      transactionStatus,
      investedInVault1,
      investedInVault2,
      investedInVault3,
    });
    await transaction.save();
    res.status(StatusCodes.CREATED).json({ success: true, msg: "Transaction Success", data : transaction });
  } catch (error) {
    console.log(error);
    throw new InternalServerError("can't do Transaction, try again later");
  }
};


// not completed yet
const withdrawAmount = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequestError("Validation failed", errors.array());
  }
  try {
    const {
      amount,
      currencyType,
      transactionType,
      transactionStatus,
      investedInVault1,
      investedInVault2,
      investedInVault3,
    } = req.body;
    const transaction = new Transaction({
      amount,
      currencyType,
      transactionType,
      transactionStatus,
      investedInVault1,
      investedInVault2,
      investedInVault3,
    });
    await transaction.save();
    res.status(StatusCodes.CREATED).json({ transaction });
  } catch (error) {
    console.log(error);
    throw new InternalServerError("can't do Transaction, try again later");
  }
};

const saveAnswer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequestError("Validation failed", errors.array());
  }
  try {
    const { answer } = req.body;
    const user = await User.findById(req.user.userId);
    if (!user) {
      throw new UnauthenticatedError("User not found");
    }
    user.answer = answer;
    await user.save();
    res.status(StatusCodes.CREATED).json({ user });
  } catch (error) {
    console.log(error);
    throw new InternalServerError("can't save answer, try again later");
  }
}


module.exports = {
  depositAmount,

};
