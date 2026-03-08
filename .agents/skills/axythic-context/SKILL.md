---
name: axythic-context
description: Context and architecture guidelines for the Axythic web application project
---

# Axythic Project Context

This skill provides an overview of the Axythic web application, outlining its frontend and backend architecure, tech stack, and API endpoints.

## 1. Product Vision & Features

Axythic is being built to serve customers as a SaaS product. The platform's structure includes several key sections that highlight the core offering and demonstrate the capabilities.

### Key Sections & Features

- **Core pages**: Home (Hero & primary CTA), Header, Footer
- **About us**: Our Vision and Mission
- **Social proof**: Testimonials
- **Information**: FAQ, Contact form
- **Capabilities**: Powerful Integrations
- **Portfolios / Demonstrations**:
  - Finance Dashboard
  - EduQuest LMS
  - Shopcart
  - HRM Platform
  - 3D Landing Page
  - Mobile Applications

## 2. Frontend Architecture

The frontend is a modern, single-page React application built with Vite and TypeScript.

### Tech Stack

- **Framework:** React ^19.2.0 with React DOM
- **Build Tool:** Vite ^5.4.21
- **Language:** TypeScript ^5.9.3
- **Styling:** TailwindCSS ^4.2.1
- **Routing:** React Router DOM ^7.13.1
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Data Visualization:** Recharts

### Key Directories

- `src/components/`: Reusable React components.
- `src/pages/`: Application views and routes.
- `src/assets/`: Static assets (images, icons).
- `src/App.tsx` & `src/main.tsx`: Entry points.
- `src/index.css`: Global styles including Tailwind configurations.

## 3. Backend Architecture

The backend is a lightweight Express.js server designed to handle contact form submissions and waitlist entries. It is configured to run locally or as a serverless function.

### Tech Stack

- **Framework:** Express.js ^5.2.1
- **Environment:** Node.js
- **Middleware:** CORS, express.json
- **Configuration:** dotenv for environment variables
- **Email Service:** Nodemailer (SMTP)
- **Deployment Adapter:** serverless-http

### API Endpoints

- `GET /api/health`
  - **Purpose:** Basic health check route.
  - **Response:** `{ status: "ok", message: "..." }`
- `POST /api/waitlist`
  - **Purpose:** Registers an email to the waitlist.
  - **Payload:** `{ email: string }`
  - **Response:** JSON status message.
- `POST /api/contact`
  - **Purpose:** Handles contact form submissions and triggers an SMTP email via Nodemailer.
  - **Payload:** `{ firstName: string, lastName: string, email: string, message: string }`
  - **Response:** JSON success/error message.

## 4. Development Guidelines

- Always use the `.env` variables for sensitive information like `EMAIL_USER` and `EMAIL_PASS`.
- Rely on Tailwind v4 utility classes and avoid adding custom CSS when possible unless doing extensive styling in `index.css`.
- Employ Framer Motion for rich, modern micro-animations on interactive UI elements to maintain a premium feel.
