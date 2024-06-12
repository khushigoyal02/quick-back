const catchAsyncErrors = require("../catchAsyncErrors");
const User = require("../models/userModel");
const validator=require('validator');
const nodemailer = require('nodemailer');

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Email is not valid' });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create a new user
  const newUser = new User({
    name,
    email,
    password
  });

  await newUser.save();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'khushigoyal1028@gmail.com',
      pass: 'jyvenwpiwjkjxfsd',
    },
  });

  const mailOptions = {
    from: 'khushigoyal1028@gmail.com',
    to: email,
    subject: 'Welcome to QuickCart!',
    text: "Congratulations and welcome to QuickCart! We're thrilled to have you on board. Your account has been successfully created, and you're now part of our growing community.",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.json({ userId: newUser._id });
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const user = await User.findOne({ email });
  if (!user || !(password===user.password)){
    return res.status(400).json({ message: 'Invalid Credentials' });
  }
  res.json({ userId: user._id });
});