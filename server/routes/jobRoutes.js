const express = require("express");
const router = express.Router();

//get list of jobs
router.get("/", (req, res) => {
  res.send("Hello, this is the homepage!");
});

// save
router.post("/save", (req, res) => {
  res.send("Welcome to the about page!");
});

//delete
router.delete("/:id", (req, res) => {
  // Handle form submission
  const formData = req.body;
  // Process the form data and send a response
  res.send(`Form submitted with data: ${JSON.stringify(formData)}`);
});

//update
router.put("/:id", (req, res) => {
  // Handle form submission
  const formData = req.body;
  // Process the form data and send a response
  res.send(`Form submitted with data: ${JSON.stringify(formData)}`);
});

module.exports = router;
