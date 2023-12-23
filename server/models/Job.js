const mongoose = require("mongoose");

// Define the job schema
const jobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  employer_name: String,
  employer_logo: String,
  employer_website: String,
  job_publisher: String,
  job_employment_type: String,
  job_title: String,
  job_apply_link: String,
  job_google_link: String,
  apply_options: [Object],
  job_description: String,
  job_is_remote: String,
  job_posted_at_datetime_utc: String,
  job_city: String,
  job_state: String,
  job_country: String,
  job_latitude: Number,
  job_longitude: Number,
  job_benefits: String,
  job_offer_expiration_datetime_utc: String,
  job_required_education: Object,
  job_required_skills: Object,
  job_required_experience: Object,
  job_required_skills: Object,
  job_naics_name: String,
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
});

// Create the Mongoose model
const Job = mongoose.model("Job", jobSchema);

// Export the model for use in other files
module.exports = Job;
