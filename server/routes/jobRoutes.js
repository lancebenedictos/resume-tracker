const express = require("express");
const router = express.Router();
const axios = require("axios");

//get list of jobs
router.get("/", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: req.params,
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  res.status(200).json(response.data);
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
