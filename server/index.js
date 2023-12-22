require("dotenv").config();
require("./database/mongo").connectDb();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const errorHandler = require("./middleware/errorHandler");
//routes
const authRoutes = require("./routes/authRoutes");
const coverLetterRoutes = require("./routes/coverLetterRoutes");
const jobRoutes = require("./routes/jobRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const userRoutes = require("./routes/userRoutes");
// routes

app.use(express.json(), cookieParser());
const origin =
  process.env.NODE_ENV === "production"
    ? "https://eventsnap.vercel.app"
    : "http://localhost:5173";
app.use(cors({ origin, credentials: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running`);
});
