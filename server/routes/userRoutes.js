const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");
const Job = require("../models/Job");
const router = express.Router();
const { authenticate, authorize } = require("../middleware/auth");
//get user
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  })
);

//update user
router.put(
  "/:id",
  authenticate,
  authorize,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({ user: updatedUser });
  })
);

//get user jobs (pagination)
router.get(
  "/:id/jobs/:page",
  asyncHandler(async (req, res) => {
    const limit = 10;
    const page = (req.params.page - 1) * limit;
    const jobs = await Job.find({ user: req.params.id })
      .skip(page)
      .limit(limit);

    res.status(200).json({ jobs });
  })
);

// save
router.post(
  "/:id/jobs",
  authenticate,
  authorize,
  asyncHandler(async (req, res) => {
    const job = await Job.create(req.body);

    res.status(200).json(job);
  })
);

//delete
router.delete(
  "/:id/jobs/:jobId",
  authenticate,
  authorize,
  asyncHandler(async (req, res) => {
    const job = Job.findById(req.params.jobId);
    if (!job) return res.status(401).json({ message: "Job not found" });

    await Job.findByIdAndDelete(req.params.jobId);
  })
);

//update
router.put(
  "/:id/jobs/:jobId",
  authenticate,
  authorize,
  asyncHandler(async (req, res) => {
    const job = Job.findById(req.params.jobId);

    if (!job) return res.status(401).json({ message: "Job not found" });

    const newJob = Job.findByIdAndUpdate(req.params.jobId, req.body, {
      new: true,
    });

    res.status(200).json({ job: newJob });
  })
);

module.exports = router;
