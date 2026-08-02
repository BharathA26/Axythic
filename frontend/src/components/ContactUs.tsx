import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Send,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  "https://axythicbackend.vercel.app";

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
  const dismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clean up any pending dismiss timer when the component unmounts
  useEffect(() => {
    return () => {
      if (dismissTimerRef.current) {
        clearTimeout(dismissTimerRef.current);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
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

    if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    dismissTimerRef.current = setTimeout(() => {
      setStatus("idle");
      setSnackbarMessage("");
    }, 3000);
  };

  return (
    <section
      id="contact-us"
      className="py-20 sm:py-24 bg-theme-page transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="sr-only">Contact details and project enquiry form</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-theme-card border border-theme p-8 rounded-3xl h-full flex flex-col justify-center space-y-8 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 border border-blue-500/30 text-blue-400 p-3 rounded-2xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-theme-primary">
                    Email Us
                  </h4>
                  <p className="text-theme-muted mt-1">info@axythic.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 p-3 rounded-2xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-theme-primary">
                    Call Us
                  </h4>
                  <a
                    href="tel:+919488943920"
                    className="inline-block text-theme-muted mt-1 hover:text-theme-primary transition-colors"
                  >
                    +91 94889 43920
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 border border-green-500/30 text-green-400 p-3 rounded-2xl">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-theme-primary">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/919488943920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-theme-muted mt-1 hover:text-theme-primary transition-colors"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-500/20 border border-pink-500/30 text-pink-400 p-3 rounded-2xl">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-theme-primary">
                    Instagram
                  </h4>
                  <a
                    href="https://www.instagram.com/axythic_dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-theme-muted mt-1 hover:text-theme-primary transition-colors"
                  >
                    @axythic_dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 border border-purple-500/30 text-purple-400 p-3 rounded-2xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-theme-primary">
                    Visit Us
                  </h4>
                  <p className="text-theme-muted mt-1">
                    Erode, Tamil Nadu, India
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
            <div className="bg-theme-card border border-theme p-8 rounded-3xl shadow-lg backdrop-blur-sm relative">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-theme-muted"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-theme bg-theme-card text-theme-primary placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-theme-muted"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-theme bg-theme-card text-theme-primary placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-theme-muted"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-theme bg-theme-card text-theme-primary placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-theme-muted"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-theme bg-theme-card text-theme-primary placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 !text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
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
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : "bg-red-500/20 text-red-300 border-red-500/30"
                    } border backdrop-blur-sm`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
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
