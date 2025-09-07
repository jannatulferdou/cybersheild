// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Playbook", path: "/playbook" },
    { name: "SafetyTools", path: "/safe" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-wide">
            <span className="text-cyan-400">Cyber</span>
            <span className="text-white">Shield</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <Link
              to="/report"
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
            >
              Report Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-white hover:text-cyan-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/report"
            className="block w-full text-center px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Report Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
