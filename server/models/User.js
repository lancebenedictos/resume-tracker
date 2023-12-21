const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  resume_info: {
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
  },

  // Timestamps for tracking creation and update times
  timestamps: true,
});

// Create the Mongoose model
const User = mongoose.model("User", userSchema);

// Export the model for use in other files
module.exports = User;
