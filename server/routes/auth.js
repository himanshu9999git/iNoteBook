const express = require("express");
const router = express.Router();

const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "TooFarForRonaldoToThinkAboutIt!!!Ohhhh!!!";

router.post(
  "/createuser",
  [
    body("name", "Enter a Valid Name").isLength({ min: 2 }),
    body("email", "Enter a Valid Mail").isEmail(),
    body("password", "Password must be atleast 8 characters long").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          error: "This E-mail is already registered with another account",
        });
      }

      const salt = await bcryptjs.genSalt(10);
      const secPass = await bcryptjs.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      res.status(500).send("Some Error occured");
    }
  }
);

module.exports = router;
