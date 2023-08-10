const express = require("express");
const router = express.Router();
const loginData = require("../models/login");

router.post("/login", async (req, res) => {
  try {
    const check = await loginData.findOne({ email: req.body.email });

    if (check && check.password === req.body.password) {
      // if (check && check.otp === req.body.otp) {
      res.send({ redirectUrl: "/dashboard" });
      // }
    } else {
      res.send("Wrong password");
    }
  } catch (error) {
    res.send("Wrong details");
  }
});

router.post("/signup", async (req, res) => {
  const name = req.body.name;
  const number = req.body.number;
  const email = req.body.email;
  const password = req.body.password;

  const data = {
    name: name,
    number: number,
    email: email,
    password: password
  };

  try {
    await loginData.insertMany([data]);

    // res.send({ otp: otp_user });
    res.send({ redirectUrl: "/login" });
  } catch (error) {
    console.error(error);
    res.send("An error occurred during signup.");
  }
});

module.exports = router;
