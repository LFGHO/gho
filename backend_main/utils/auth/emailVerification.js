const crypto = require("crypto");
const jsonwebtoken = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  InternalServerError,
} = require("../../errors");

const pathToKey = path.join(__dirname, "../..", "id_rsa_priv.pem");
const pathToPubKey = path.join(__dirname, "../..", "id_rsa_pub.pem");
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");
const PUB_KEY = fs.readFileSync(pathToPubKey, "utf8");

/**
 * -------------- HELPER FUNCTIONS ----------------
 */

/**
 * @param {*} user - The user object.  We need this to set the JWT `sub` payload property to the MongoDB user ID
 */
const sendVerificationMailHelper = async (user) => {
  const email = user.email;

  const expiresIn = process.env.EXPIRES_VERIFICATION_EMAIL_IN;

  const payload = {
    sub: email,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign({ payload: payload }, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: "RS256",
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailConfigurations = {
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: "Email Verification",
    html: `<p>Hi ${user.name}, You have recently visited  
         our website and entered your email. 
         Please follow the given link to verify your email. It's valid only for ${process.env.EXPIRES_VERIFICATION_EMAIL_IN[0]} days.</p>
        <h3><a href="http://localhost:5000/api/v1/auth/verify/${signedToken}" target="_blank"> Click Here to verify your Email </a></h3>
        <br>
        <p>Thanks</p>`,
  };

  try {
    await transporter.sendMail(mailConfigurations);
    return;
  } catch (err) {
    console.log(err);
    throw InternalServerError(
      "Verification Email Sent failed!, Please try after some time"
    );
  }
};

function verifyMailMiddleware(req, res, next) {
  let token;
  if (req.params) {
    token = req.params.token;
  } else {
    throw new BadRequestError(
      "Email verification failed, possibly the link is invalid or expired"
    );
  }

  if (token.match(/\S+\.\S+\.\S+/) !== null) {
    try {
      const verification = jsonwebtoken.verify(token, PUB_KEY, {
        algorithms: ["RS256"],
      });
      // console.log(verification);
      req.jwt = verification;
      next();
    } catch (err) {
      // console.log(err)
      throw new BadRequestError(
        "Email verification failed, possibly the link is invalid or expired"
      );
    }
  } else {
    throw new BadRequestError(
      "Email verification failed, possibly the link is invalid or expired"
    );
  }
}

module.exports.sendVerificationMailHelper = sendVerificationMailHelper;
module.exports.verifyMailMiddleware = verifyMailMiddleware;
