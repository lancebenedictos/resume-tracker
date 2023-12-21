require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//routes
const authRoutes = require("./routes/authRoutes");
const coverLetterRoutes = require("./routes/coverLetterRoutes");
const jobRoutes = require("./routes/jobRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const userRoutes = require("./routes/userRoutes");
// routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/auth", authRoutes);
app.use("/coverLetter", coverLetterRoutes);
app.use("/job", jobRoutes);
app.use("/resume", resumeRoutes);
app.use("/userRoutes", userRoutes);
// routes end

app.get("/", async (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running`);
});
