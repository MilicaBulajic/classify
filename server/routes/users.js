const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { User, Team, UserTeam } = require("../models/user");
const { asyncHandler } = require("./utilities/utils");

const router = express.Router();

const validateUserFields = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("please provide valid email"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("please provide valid password"),
];

const validateName = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("you need to enter name"),
];

const validateEmailPassword = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid email"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid password"),
];

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await User.findAll({});
    res.json(users);
  })
);

router.post(
  "/register",
  validateUserFields,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    try {
      const user = await User.create({
        email: email,
        hashed_password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const token = getUserToken(user);
      res.status(200).json({
        id: user.id,
        token,
        email: user.email,
      });
    } catch (err) {
      res.status(422).send(err.message);
    }
  })
);

router.put(
  "/register/onboard",
  validateName,
  asyncHandler(async (req, res, next) => {
    if (!validatorErr.isEmpty()) {
      const errors = validatorErr.array().map((error) => error.msg);
      res.json(["ERRORS", ...errors]);
      return;
    }

    const { name, email, teamName } = req.body;
    try {
      if (teamName) {
        const user = await User.update(
          { name: name },
          {
            where: {
              email: email,
            },
          }
        );
        res.json(user);
      } else if (!teamName) {
        const user = await User.update(
          { name: name },
          {
            where: {
              email: email,
            },
          }
        );
        const team = await Team.create({
          name: teamName,
        });

        const userTeam = await UserTeam.create({
          user_id: user.id,
          team_id: team.id,
        });
      }
    } catch (err) {
      res.status(422).send(err.message);
    }
  })
);

router.post(
  "/login",
  validateEmailPassword,
  asyncHandler(async (req, res, next) => {
    const validatorErr = validationResult(req);

    if (!validatorErr.isEmpty()) {
      const errors = validatorErr.array().map((error) => error.msg);
      res.json(["ERRORS", ...errors]);
      return;
    }
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login Failed");
      err.status = 401;
      err.title = "Login Failed";
      err.errors = ["The provided credentials were invalid"];
      return next(err);
    }

    const token = getUserToken(user);

    res.status(200).json({
      id: user.id,
      token,
      email: user.email,
    });
  })
);

module.exports = router;
