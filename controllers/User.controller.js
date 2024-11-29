const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models/index.js");
const User = db.User;
const JWT_SECRET = process.env.JWT_SECRET;

// Registration Endpoint
exports.register = (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    hash_password: bcrypt.hashSync(req.body.password, 10), // Hash the password
  };

  User.create(user)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send({
        message: "An error occurred while creating the user.",
      });
    });
};
// For Log IN
exports.LogIn = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(400).send({ message: "Email or Password is Invalid" });
    }
    const expiresIn = 3600;
    const token = jwt.sign(
      {
        email: user.email,
        username: user.username,
        id: user.id,
        exp: Math.floor(Date.now() / 1000) + expiresIn,
      },
      JWT_SECRET
    );
    res.header("Authorization", `Bearer ${token}`);
    console.log(Date.now());
    return res.status(200).send({ token, username: user.username });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Server Not Responding", er: error });
  }
};
