const express = require("express");
const router = express.Router();
const asyncHandler = require("../middleware/asyncHandler");
const { authenticate } = require("../middleware/auth");
const OpenAI = require("openai");
const Job = require("../models/Job");
const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});
//TODO: generate resume
router.get(
  "/:jobId",
  authenticate,
  asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.jobId).populate("user");
    const { user } = req;
    console.log("here");

    if (!user || !job) return res.status(500);
    const message = `Create an ATS friendly resume. The job description is ${job.job_description}. Job title is ${job.job_title}. Person details are ${user.resume_info}. Choose 3 relevant job experiences. You can build a resume using the details from ${user.resume_info}, IT IS IMPORTANT THAT YOU DO NOT ADD INFORMATION OUTSIDE THE GIVEN INFORMATION. You are allowed to change summary to match job description
    respond in this schema :
   {
    resume_info: { job_experience: [
      {
        title: String,
        company: String,
        start_date: String,
        end_date: String,
        responsibilities: [String],
        location: String
      },
    ],
    skills: [String],
    education: [
      {
        degree: String,
        institution: String,
        graduation_year: String,
      },
    ],
    summary: String,
    awards: [{ title: String, year: String, description: String }],
    certifications: [{ name: String, year: String }],
    projects: [{ name: String, year: String, details: String }],
    languages: [String],
  }
   }
  `;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a human resources employee creating the best ATS friendly resume for the given position designed to output JSON.
             Important: You are not allowed to add new information that is not provided in the Person details. When building the resume you can only choose the relevant information that is present in the person details
             `,
        },
        { role: "user", content: message },
      ],
      model: "gpt-4-1106-preview",
      response_format: { type: "json_object" },
    });

    const { resume_info } = await JSON.parse(
      completion.choices[0].message.content
    );

    job.resume_info = resume_info;

    await job.save();

    res.status(200).json(job);
  })
);

// Export the router
module.exports = router;
