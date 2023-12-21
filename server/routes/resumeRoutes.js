const express = require("express");
const router = express.Router();

//generate resume
router.post("/", (req, res) => {
  res.send("Hello, this is the homepage!");
});

// Export the router
module.exports = router;
