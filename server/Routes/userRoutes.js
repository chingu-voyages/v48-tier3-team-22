const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();
const validator = require('validator');
const jwt = require('jsonwebtoken');

const tokenDenylist = {};

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

// Registration endpoint
router.post('/auth/register', async (req, res) => {
  let { userName, email, password, confirmPassword } = req.body;

  // Validation: Check for required fields
  if (!userName || !email || !password || !confirmPassword) {
    return res.status(400).json({
      error: 'Missing_Fields',
      message: 'All fields are required.',
    });
  }

  // Check for whitespace in the email input
  if (email !== email.trim()) {
    return res.status(400).json({
      message: 'Your email contains whitespace. Please remove and try again',
    });
  }

  //Normalize and sanitize email address
  email = email ? validator.escape(validator.normalizeEmail(email)) : '';

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      error: 'Invalid_Email_Format',
      message: 'Invalid email format.',
    });
  }

  // Trim password to remove leading/trailing whitespace
  password = password.trim();
  confirmPassword = confirmPassword.trim();

  //check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({
      error: 'Passwords_Do_Not_Match',
      message: 'Passwords do not match.',
    });
  }

  // Validate password strength
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      error: 'Weak_Password',
      message:
        'Password is not strong enough. It must include at least 8 characters, a mix of letters (uppercase and lowercase), numbers, and symbols.',
    });
  }

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        error: 'User_Exists',
        message: 'User already exists.',
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({ userName, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({
      error: 'Server_Error',
      message: 'error',
    });
  }
});

// Login endpoint
router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({
        error: 'User_Not_Found',
        message: 'User not found.',
      });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        error: 'Invalid_Credentials',
        message: 'Invalid credentials.',
      });
    }

    //create token
    const token = jwt.sign({ userID: user._id }, JWT_SECRET, {
      expiresIn: '1h',
    });

    //send token to client
    res.json({
      message: 'User logged in successfully.',
      token,
      userName: user.userName,
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({
      error: 'Server_Error',
      message: 'An error occurred during login.',
    });
  }
});

module.exports = router;
