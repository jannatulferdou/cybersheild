// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-gray-400 py-10 px-6 md:px-12 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Cyber<span className="text-cyan-400">Shield</span></h2>
          <p className="mt-3 text-sm">
            Fighting cyberbullying with tech & justice. Together, we make digital spaces safer.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link to="/features" className="hover:text-cyan-400">Features</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Email: support@cybershield.com</p>
          <p>Phone: +880 1234 567890</p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-cyan-400">🌐</a>
            <a href="#" className="hover:text-cyan-400">🐦</a>
            <a href="#" className="hover:text-cyan-400">📘</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} CyberShield. All rights reserved.
      </div>
    </motion.footer>
  );
}
