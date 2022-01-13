const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { User } = require("../models/user");

const router = express.Router();


router.get(
  "/user",
  async (req, res) => {
    const users = await User.findAll({});
    res.json(users);
  }
);

module.exports = router;