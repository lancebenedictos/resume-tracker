const mongoose = require("mongoose");

// Define the job schema
const jobSchema = new mongoose.Schema({
  job_id: {
    type: String,
    unique: true,
  },
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
  resume_info: {
    job_experience: [
      {
        title: String,
        company: String,
        start_date: String,
        end_date: String,
        responsibilities: [String],
        location: String,
      },
    ],
    skills: [String],
    education: [
      {
        degree: String,
        institution: String,
        graduation_year: String,
        info: [String],
      },
    ],
    summary: String,
    awards: [{ title: String, year: String, description: String }],
    certifications: [{ name: String, year: String }],
    projects: [{ name: String, year: String, details: String }],
    languages: [String],
    // Add more fields as needed
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
