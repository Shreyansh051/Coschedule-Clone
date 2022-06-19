const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/conn");
const User = require("../models/userSchema");

router.post("/register", async (req, res) => {
  
  const { name, email, company, password, website } = req.body;

  if (!name || !email || !company || !password || !website) {
    return res.status(422).json({ error: "Please fill the require Details" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    //if user already Registered
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }

    //if user is new
    const user = new User({ name, email, company, password, website });
    //before saving the data we hasing the password
    //logic is in userSchema

    //to save user data
    await user.save();

    res.status(201).json({ message: "user registered successfull" });
  } catch (error) {
    console.log(error);
  }
});
//Login Route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      //verify the password is same or not
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      //to store in cookie with expiry of 30days
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials pass" });
      } else {
        res.json({ message: "user Signin Successfull" });
      }
    } else {
      res.status(400).json({ error: "Invalid Crediential" });
    }
  } catch (err) {
    console.log(err);
  }
  //   console.log(req.body);
  //   res.json({ message: "awsome" });
});

module.exports = router;
