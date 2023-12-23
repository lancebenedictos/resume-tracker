const express = require("express");

const router = express.Router();

//TODO: generate cover letter
router.get("/", (req, res) => {
  res.send("Hello, this is the homepage!");
});

module.exports = router;
