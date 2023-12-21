const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Hello, this is the homepage!");
});

router.get("/signup", (req, res) => {
  res.send("Welcome to the about page!");
});

router.post("/logout", (req, res) => {
  // Handle form submission
  const formData = req.body;
  // Process the form data and send a response
  res.send(`Form submitted with data: ${JSON.stringify(formData)}`);
});

module.exports = router;
