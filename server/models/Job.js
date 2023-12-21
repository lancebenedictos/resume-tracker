const mongoose = require("mongoose");

// Define the job schema
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  requirements: {
    type: [String],
  },
  application_deadline: {
    type: Date,
  },
  // Resume field
  resume: {
    contact_number: {
      type: String,
      trim: true,
    },
    linkedin_link: {
      type: String,
      trim: true,
    },
    portfolio_link: {
      type: String,
      trim: true,
    },
    achievements: {
      type: [String],
    },
    job_experience: [
      {
        title: {
          type: String,
          required: true,
          trim: true,
        },
        company: {
          type: String,
          required: true,
          trim: true,
        },
        start_date: {
          type: Date,
          required: true,
        },
        end_date: {
          type: Date,
        },
        description: {
          type: String,
          trim: true,
        },
      },
    ],
    skills: {
      type: [String],
    },
    education: [
      {
        degree: {
          type: String,
          required: true,
          trim: true,
        },
        institution: {
          type: String,
          required: true,
          trim: true,
        },
        graduation_year: {
          type: Number,
        },
      },
    ],
    summary: {
      type: String,
      trim: true,
    },
    awards: [
      {
        title: {
          type: String,
          required: true,
          trim: true,
        },
        year: {
          type: Number,
        },
        description: {
          type: String,
          trim: true,
        },
      },
    ],
    // Add more fields as needed

    required: {
      type: Boolean,
      default: false,
    },
  },
  // Cover letter field
  cover_letter: {
    type: String,
    trim: true,
  },
  // Add more job-related fields

  // Timestamps for tracking creation and update times
  timestamps: true,
});

// Create the Mongoose model
const Job = mongoose.model("Job", jobSchema);

// Export the model for use in other files
module.exports = Job;
