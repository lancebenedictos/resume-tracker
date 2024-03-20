const express = require("express");
const router = express.Router();
const axios = require("axios");
const asyncHandler = require("../middleware/asyncHandler");

//get list of jobs
router.get(
  "/",
  asyncHandler(async (req, res) => {
    console.log(req.query);
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        ...req.query,
        num_pages: "1",
      },
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);

    res.status(200).json({ jobs: response.data.data });
  })
);

module.exports = router;
