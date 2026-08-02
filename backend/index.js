require("dotenv").config({ quiet: true });
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.disable("x-powered-by");

app.use((req, res, next) => {
  res.set({
    "Content-Security-Policy":
      "default-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'",
    "Permissions-Policy":
      "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-Robots-Tag": "noindex, nofollow, noarchive",
  });
  next();
});

app.use(cors());
app.use(express.json({ limit: "16kb" }));

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function hasValidLength(value, maximum) {
  return value.length > 0 && value.length <= maximum;
}

// Basic health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Axythic Backend API is running smoothly.",
  });
});

// Mock waitlist route
app.post("/api/waitlist", (req, res) => {
  const email = cleanString(req.body?.email);
  if (!hasValidLength(email, 254) || !EMAIL_PATTERN.test(email)) {
    return res
      .status(400)
      .json({ status: "error", message: "A valid email is required" });
  }
  // In a real app, save to MongoDB waitlist collection here
  res.json({ status: "success", message: "Successfully joined the waitlist!" });
});

// Setup nodemailer transporter
// NOTE: For production, use environment variables for user/pass
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact form route
app.post("/api/contact", async (req, res) => {
  const firstName = cleanString(req.body?.firstName);
  const lastName = cleanString(req.body?.lastName);
  const email = cleanString(req.body?.email);
  const message = cleanString(req.body?.message);

  if (
    !hasValidLength(firstName, 100) ||
    !hasValidLength(lastName, 100) ||
    !hasValidLength(email, 254) ||
    !EMAIL_PATTERN.test(email) ||
    !hasValidLength(message, 5000)
  ) {
    return res
      .status(400)
      .json({ status: "error", message: "Valid form fields are required" });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(503).json({
      status: "error",
      message: "Contact email is temporarily unavailable.",
    });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL_DESTINATION || "info@axythic.com", // where you want to receive the messages
      replyTo: email,
      subject: "New Axythic contact form submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
      disableFileAccess: true,
      disableUrlAccess: true,
    };
    await transporter.sendMail(mailOptions);
    res.json({ status: "success", message: "Message sent successfully!" });
  } catch {
    console.error("Contact form email delivery failed.");
    res.status(500).json({
      status: "error",
      message: "Failed to send message. Please try again later.",
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

// Keep parser and unexpected errors from exposing implementation details.
app.use((error, req, res, next) => {
  if (res.headersSent) return next(error);

  const status =
    Number.isInteger(error?.status) && error.status >= 400
      ? error.status
      : 500;

  if (status >= 500) {
    console.error("Unhandled backend request error.");
  }

  return res.status(status).json({
    status: "error",
    message:
      status === 413
        ? "Request body is too large"
        : status === 400
          ? "Invalid JSON request body"
          : "Internal server error",
  });
});

const PORT = process.env.PORT || 5000;

// Export the app for serverless platforms like Vercel.
module.exports = app;

// Start a local server only when this file is the process entry point.
if (require.main === module && process.env.VERCEL !== "1") {
  app.listen(PORT, () => {
    console.log(`Backend server started on port ${PORT}`);
  });
}
