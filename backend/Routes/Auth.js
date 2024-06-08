const express = require("express");
const router = express.Router();
const User = require("../Models/UserSchema");
const errorHandler = require("../Middlewares/errorMiddleware");
const authTokenHandler = require("../Middlewares/checkAuthToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

router.get("/test", async (req, res) => {
  res.json({
    message: "Auth API is working",
  });
});

function createRespond(ok, message, data) {
  return { ok, message, data };
}

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(409).json(createRespond(false, "Email already exists"));
    }
    //   const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json(createRespond(true, "User registered successfully"));
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {});

router.post("/sendotp", async (req, res) => {});

router.post("/checklogin", authTokenHandler, async (req, res) => {});

router.use(errorHandler);

module.exports = router;
