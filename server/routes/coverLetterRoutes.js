const express = require("express");
const router = express.Router();
const asyncHandler = require("../middleware/asyncHandler");
const { authenticate } = require("../middleware/auth");
const OpenAI = require("openai");
const Job = require("../models/Job");
const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

router.get(
  "/:jobId",
  authenticate,
  asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.jobId);
    const { user } = req;

    if (!user || !job) return res.status(500);
    const message = `Create a cover letter. The job description is ${job.job_description}. Job title is ${job.job_title}. Person details are ${user.resume_info}. Choose 3 relevant job experiences. Choose skills from ${user.resume_info.skills} that are necessary for ${job.job_description} 
    response schema {
      body: string
    }`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a human resources employee creating a cover letter that matches the job description. respond in json`,
        },
        { role: "user", content: message },
      ],
      model: "gpt-4-1106-preview",
      response_format: { type: "json_object" },
    });

    const { body } = JSON.parse(completion.choices[0].message.content);
    job.cover_letter = body;
    await job.save();
    console.log(body);
    res.status(200).json(job);
  })
);

// Export the router
module.exports = router;
