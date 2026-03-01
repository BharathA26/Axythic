require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/axythic")
  .then(() => console.log("MongoDB Connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Axythic Backend API is running smoothly.",
  });
});

// Mock waitlist route
app.post("/api/waitlist", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ status: "error", message: "Email is required" });
  }
  // In a real app, save to MongoDB waitlist collection here
  console.log(`New waitlist signup: ${email}`);
  res.json({ status: "success", message: "Successfully joined the waitlist!" });
});

// Setup nodemailer transporter
// NOTE: For production, use environment variables for user/pass
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASS || "your-app-password",
  },
});

// Contact form route
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res
      .status(400)
      .json({ status: "error", message: "All fields are required" });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: process.env.CONTACT_EMAIL_DESTINATION || "info@axythic.com", // where you want to receive the messages
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };
    await transporter.sendMail(mailOptions);
    console.log(`Contact form email sent from ${email}`);
    res.json({ status: "success", message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    // If nodemailer fails (e.g., bad credentials), log it but we can simulate success for testing
    // Or return 500. We'll return 500 for proper error handling.
    res.status(500).json({
      status: "error",
      message: "Failed to send message. Please try again later.",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server started on port ${PORT}`);
});
