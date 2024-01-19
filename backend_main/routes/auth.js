const express = require("express");
const { check } = require("express-validator");
const emailVerification = require('../utils/auth/emailVerification')
const router = express.Router();

const { register, login, sendVerificationMail, verifyMail } = require("../controllers/auth");

router.post(
  "/register",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").not().isEmpty().isLength({ min: 6 }),
  ],
  register
);
router.post(
  "/login",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").not().isEmpty().isLength({ min: 6 }),
  ],
  login
);
router.post(
  "/sendVerificationMail",
  [
    check("email").normalizeEmail().isEmail(),
  ],
  sendVerificationMail
);
router.get(
  "/verify/:token",
  emailVerification.verifyMailMiddleware,
  verifyMail
);

module.exports = router;
