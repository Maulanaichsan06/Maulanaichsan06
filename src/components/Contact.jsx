import React, { useState } from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

// 📸 Instagram Icon
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zm-5 3.3a5.7 5.7 0 1 0 0 11.4 5.7 5.7 0 0 0 0-11.4zm0 2a3.7 3.7 0 1 1 0 7.4 3.7 3.7 0 0 1 0-7.4zm4.8-.9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

// 💼 LinkedIn Icon
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM0 24h5V7H0v17zm8 0h5v-9.3c0-2.2 2.6-2.3 2.6 0V24h5V13.7C20.6 8.6 16.4 8.3 13 10.8V7H8v17z" />
  </svg>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Contact Info (tanpa TikTok)
  const contactInfo = [
    {
      icon: Phone,
      title: "Contact Details",
      details: ["Phone: (123) 456-7890", "Email: hello@company.com"],
    },
    {
      icon: InstagramIcon,
      title: "Instagram",
      details: ["instagram.com/yourusername"],
    },
    {
      icon: LinkedInIcon,
      title: "LinkedIn",
      details: ["linkedin.com/in/yourprofile"],
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  const StatusMessage = ({ status }) => {
    if (!status) return null;
    const configs = {
      success: {
        icon: CheckCircle2,
        text: "Thank you for your message! We'll get back to you soon.",
        className: "bg-blue-950 border border-blue-800 text-blue-200",
      },
      error: {
        icon: XCircle,
        text: "There was an error sending your message. Please try again.",
        className: "bg-red-950 border border-red-800 text-red-200",
      },
    };
    const config = configs[status];
    const Icon = config.icon;
    return (
      <div
        className={`flex items-center p-4 mb-6 rounded-lg ${config.className}`}
      >
        <Icon className="w-5 h-5 mr-2" />
        <p className="text-sm">{config.text}</p>
      </div>
    );
  };

  return (
    <section className="relative py-20 sm:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* FORM */}
          <div className="bg-neutral-900 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-2 text-white">Get in Touch</h2>
            <p className="text-blue-400 mb-6">
              Let's discuss how we can collaborate or build something great!
            </p>

            <StatusMessage status={submitStatus} />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-blue-300 mb-1">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-blue-700/40 text-white px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-blue-300 mb-1">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-blue-700/40 text-white px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-blue-300 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-blue-700/40 text-white px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-blue-300 mb-1">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-blue-700/40 text-white px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-blue-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-blue-700/40 text-white px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-transform hover:-translate-y-0.5 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Let's Build Something{" "}
                <span className="text-blue-400">Together</span>
              </h2>
              <p className="text-blue-300">
                Connect with me through these platforms below.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="group bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-800 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-700 text-white group-hover:bg-blue-600 transition-colors">
                      <item.icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-blue-300 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
