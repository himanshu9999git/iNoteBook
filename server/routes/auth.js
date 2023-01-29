const express = require("express");
const router = express.Router();

const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "TooFarForRonaldoToThinkAboutIt!!!Ohhhh!!!";
const fetchuser = require("../middleware/fetchuser");

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

router.post(
  "/login",
  [body("email", "Enter a Valid Mail").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          error: "Incorrect Username or Password",
        });
      }

      const passComp = await bcryptjs.compare(password, user.password);
      if (passComp) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
      } else {
        return res
          .status(400)
          .json({ error: "Incorrect Username or Password" });
      }
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
