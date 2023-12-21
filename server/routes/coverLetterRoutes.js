const express = require("express");

const router = express.Router();

// generate cover letter
router.get("/", (req, res) => {
  res.send("Hello, this is the homepage!");
});

module.exports = router;
