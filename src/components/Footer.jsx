import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    { name: "Facebook", url: "https://facebook.com", icon: Facebook },
    { name: "Instagram", url: "https://instagram.com", icon: Instagram },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer className="bg-white text-black py-12 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-bold text-blue-600">
                CompanyName
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Transforming digital visions into reality. We create innovative
              solutions that help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5 text-blue-600 hover:text-blue-800 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-700">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-700">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <span>info@company.com</span>
              </li>
              <li className="flex items-start text-gray-700">
                <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-1" />
                <span>
                  123 Business Street, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-700">Newsletter</h3>
            <p className="text-gray-700">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-blue-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} CompanyName. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
