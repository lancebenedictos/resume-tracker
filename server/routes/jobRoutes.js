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

module.exports = router;
