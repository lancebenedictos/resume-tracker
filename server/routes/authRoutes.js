const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandler = require("../middleware/asyncHandler");

router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const emailCheck = await User.findOne({ email: req.body.email });

    if (emailCheck)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      personal_info: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      },
      password: hashedPassword,
    });
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    user.password = null;
    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({ user });
  })
);

router.get(
  "/logout",
  asyncHandler(async (req, res) => {
    return res.clearCookie("token").status(200).json({ organizer: null });
  })
);

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const emailCheck = await User.findOne(
      { "personal_info.email": req.body.email },
      "+password"
    );

    console.log(emailCheck);

    if (!emailCheck)
      return res.status(400).json({ message: "Incorrect email or password" });

    const validPassword = bcrypt.compareSync(
      req.body.password,
      emailCheck.password
    );

    if (!validPassword)
      return res.status(400).json({ message: "Incorrect email or password" });
    const token = jwt.sign({ _id: emailCheck._id }, process.env.JWT_SECRET);

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({ user: emailCheck });
  })
);

router.get(
  "/check",
  asyncHandler(async (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.json({ user: null });

    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(data._id).select("-password");

      res.status(200).json({ user: user });
    } catch (err) {
      if (!token) return res.json({ user: null });
    }
  })
);
module.exports = router;
