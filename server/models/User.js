const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  personal_info: {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    location: String,
    phone_number: String,
    linkedIn: String,
    github: String,
    portfolio: String,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  resume_info: {
    job_experience: [
      {
        title: String,
        company: String,
        start_date: String,
        end_date: String,
        location: String,
        responsibilities: [String],
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
});

// Create the Mongoose model
const User = mongoose.model("User", userSchema);

// Export the model for use in other files
module.exports = User;
