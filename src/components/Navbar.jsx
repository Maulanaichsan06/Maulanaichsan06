import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About Me", href: "/about" },
    { title: "Projects", href: "/fullprojects" },
    { title: "Skills", href: "/skills" },
    { title: "Experience", href: "/experience" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 bg-black/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={closeMenu}
            >
              <span className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-all duration-300">
                Portfolio
              </span>
              <span className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-300">
                Maulana Ichsan
              </span>
            </Link>
          </div>

          {/* Desktop Navigation (hanya tampil di layar besar) */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group relative px-3 py-2 text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300"
                >
                  {item.title}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 ${
                      location.pathname === item.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-blue-400 hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation */}
      <div
        className={`lg:hidden bg-black/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto max-h-screen overflow-y-auto"
            : "opacity-0 pointer-events-none max-h-0 overflow-y-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium text-white hover:text-blue-400 hover:bg-white/10 transition-colors duration-300 ${
                location.pathname === item.href
                  ? "text-blue-400 bg-white/10"
                  : ""
              }`}
              onClick={closeMenu}
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium text-base hover:bg-blue-500 transition-all duration-300 text-center"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
