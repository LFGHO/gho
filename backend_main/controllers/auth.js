const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");
const authenticate = require("../utils/auth/authenticate");
const emailVerification = require("../utils/auth/emailVerification");
const {
  BadRequestError,
  UnauthenticatedError,
  InternalServerError,
} = require("../errors");
const User = require("../models/user");


// Register a new user
const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequestError("Please provide all the input fields correctly");
  }

  const { name, email, password } = req.body;
  const saltHash = authenticate.genPassword(password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
    throw new InternalServerError("Signing up failed, please try again later.");
  }

  if (existingUser) {
    throw new BadRequestError("User exists already, please login instead.");
  }

  const userToBeSaved = new User({
    name,
    email,
    hash,
    salt,
  });

  let savedUser;
  try {
    savedUser = await userToBeSaved.save();
  } catch (err) {
    console.log(err);
    throw new InternalServerError("Signing up failed, please try again later.");
  }

  // use this if you want to send verification mail just after registration 
  // emailVerification.sendVerificationMailHelper(savedUser);

  res.status(StatusCodes.CREATED).json({success:true, data: savedUser });
};

// Login a User
const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequestError("Please provide all the input fields correctly");
  }

  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
    throw new InternalServerError("Login failed, please try again later.");
  }

  if (!existingUser) {
    throw new BadRequestError(
      "Invalid Credentials, Please check your Email and Password"
    );
  }

  const isValid = authenticate.validPassword(
    password,
    existingUser.hash,
    existingUser.salt
  );

  if (isValid) {
    const tokenObject = authenticate.issueJWT(existingUser);
    res.status(StatusCodes.OK).json({success:true, data: tokenObject });
  } else {
    throw new BadRequestError(
      "Invalid Credentials, Please check your Email amd Password"
    );
  }
};

const sendVerificationMail = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequestError("Please provide the valid Email");
  }
  const { email } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
    throw new InternalServerError(
      "Verification Mail Sent failed, please try again later."
    );
  }

  if (!existingUser) {
    throw new BadRequestError(
      "There is no user exists with this email to send the Verification mail. Create an account first and then try to verify your mail."
    );
  }

  if (existingUser.hasEmailVerified) {
    throw new BadRequestError("You have already verified your Email in past.");
  } else {
    emailVerification.sendVerificationMailHelper(existingUser);
    res.status(StatusCodes.OK).json({success:true, msg: "Email Sent Successfully" });
  }
};

const verifyMail = async (req, res) => {
  const email = req.jwt.payload.sub;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
    throw new InternalServerError(
      "Mail verification failed, please try again later."
    );
  }

  if (existingUser.hasEmailVerified) {
    throw new BadRequestError("You have already verified your Email in past.");
  } else {
    existingUser.hasEmailVerified = true;
    try {
      await existingUser.save();
    } catch (err) {
      console.log(err);
      throw new InternalServerError(
        "Mail Verification failed, please try again later."
      );
    }
    res
      .status(StatusCodes.OK)
      .json({success:true, msg: "You have verified your Email Successfully" });
  }
};

module.exports = {
  register,
  login,
  sendVerificationMail,
  verifyMail,
};
