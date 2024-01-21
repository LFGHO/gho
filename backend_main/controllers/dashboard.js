const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");
const {
  BadRequestError,
  UnauthenticatedError,
  InternalServerError,
} = require("../errors");

const User = require("../models/user");
const List = require("../models/List");
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
    res
      .status(StatusCodes.CREATED)
      .json({ success: true, msg: "Transaction Success", data: transaction });
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
    throw new BadRequestError("Answers Validation failed", errors.array());
  }

  const { answer, address } = req.body;
  if (!address) {
    throw new BadRequestError("address is required");
  }
  try {
    let user = await User.findOne({ address: address });
    if (!user) {
      user = new User({ address: address });
    }
    user.answer = answer;
    await user.save();
    res.status(StatusCodes.CREATED).json({ user });
  } catch (error) {
    console.log(error);
    throw new InternalServerError("can't save answer, try again later");
  }
};

const getUserData = async (req, res) => {
  const { address } = req.body;
  console.log(address);
  if (!address) {
    throw new BadRequestError("address is required");
  }
  let user;
  try {
    user = await User.findOne({ address: address });
  } catch (error) {
    console.log(error);
    throw new InternalServerError("can't get user data, try again later");
  }

  if (!user) {
    res.status(StatusCodes.OK).json({
      user: {
        answer: [],
      },
    });
  } else {
    res.status(StatusCodes.OK).json({ user });
  }
};


const addInList = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequestError("Please fill all the inputs", errors.array());
  }

  const { address, amount, i_rate, transactionType} = req.body;
  const date = new Date();

  try {
    const list = new List({
      address,
      amount,
      i_rate,
      transactionType,
      date,
    });
    await list.save();
    res.status(StatusCodes.CREATED).json({ list });
  } catch (error) {
    console.log(error);
    throw new InternalServerError("can't save list, try again later");
  }
};

const getList = async (req, res) => {
  const type = req.body.type;
  try {
    const list = await List.find({ transactionType: type }, { __v:0 }).sort({ _id: -1 });
    res.status(StatusCodes.OK).json({ list });
  } catch (error) {
    console.log(error);
    throw new InternalServerError("can't get list, try again later");
  }
};

const deleteEntrie = async (req, res) => {
  const id = req.params.id;
  try {
    await List.findByIdAndDelete(id);
    res.status(StatusCodes.OK).json({ msg: "Entrie deleted successfully" });
  } catch (error) {
    console.log(error);
    throw new InternalServerError("can't delete entrie, try again later");
  }
};


const changeStatus = async (req, res) => {
  const id = req.params.id;
  
  try {
    const entrie = await List.findById(id);
    entrie.transactionType = "pending";
    await entrie.save();
    res.status(StatusCodes.OK).json({ msg: "Request Sent to Deligaters!" });
  } catch (error) {
    console.log(error);
    throw new InternalServerError("can't send the request now, try again later");
  }
}

const getNotifications = async (req, res) => {
  const address = req.body.address;
  console.log(address);
  try {
    const list = await List.find({ address: address, transactionType: "pending" }, { __v:0 }).sort({ _id: -1 });
    res.status(StatusCodes.OK).json({ list });
  } catch (error) {
    console.log(error);
    throw new InternalServerError("can't get notifications, try again later");
  }
};



module.exports = {
  depositAmount,
  saveAnswer,
  getUserData,
  addInList,
  getList,
  deleteEntrie,
  changeStatus,
  getNotifications,
};
