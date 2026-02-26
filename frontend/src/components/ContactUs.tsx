import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, XCircle } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setSnackbarMessage(
          "Message sent successfully! We'll be in touch soon.",
        );
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("error");
        setSnackbarMessage(
          data.message || "Failed to send message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setSnackbarMessage("A network error occurred. Please try again later.");
    }

    // Hide snackbar after 5 seconds
    setTimeout(() => {
      setStatus("idle");
      setSnackbarMessage("");
    }, 5000);
  };

  return (
    <section
      id="contact-us"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Great
            </span>
          </motion.h3>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to accelerate your digital transformation? Reach out to us
            today to discuss your project needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col justify-center space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Email Us
                  </h4>
                  <p className="text-gray-600 mt-1">info@axythic.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-50 text-purple-600 p-3 rounded-2xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Visit Us
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Erode, Tamil nadu , india
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-blue-900/5 border border-gray-100 relative">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none bg-gray-50/50"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none bg-gray-50/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none bg-gray-50/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none resize-none bg-gray-50/50"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message{" "}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Snackbar Notification */}
              <AnimatePresence>
                {(status === "success" || status === "error") && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className={`absolute bottom-4 left-4 right-4 p-4 rounded-xl flex items-center gap-3 shadow-lg ${
                      status === "success"
                        ? "bg-green-50 text-green-800 border-green-200"
                        : "bg-red-50 text-red-800 border-red-200"
                    } border`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                    <p className="text-sm font-medium">{snackbarMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
