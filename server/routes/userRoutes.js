const express = require("express");

const router = express.Router();

// create user
router.post("/", (req, res) => {
  res.send("Hello, this is the homepage!");
});

//get user
router.get("/:id", (req, res) => {
  res.send("Welcome to the about page!");
});

//update user
router.put("/:id", (req, res) => {
  res.send("Welcome to the about page!");
});

module.exports = router;
