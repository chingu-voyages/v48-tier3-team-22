const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();
const validator = require("validator");

// Registration endpoint
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send("Email and password are required.");

  // Validate email and password
  if (!validator.isEmail(email)) {
    return res.status(400).send("Invalid email format.");
  }
  if (!validator.isStrongPassword(password)) {
    return res
      .status(400)
      .send(
        "Password is not strong enough. It must include at least 8 characters, a mix of letters (uppercase and lowercase), numbers, and symbols."
      );
  }

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).send("User already exists.");

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).send("User registered successfully.");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("User not found.");

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials.");

    res.send("User logged in successfully.");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
