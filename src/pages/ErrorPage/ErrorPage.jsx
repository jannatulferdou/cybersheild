import { Link } from "react-router-dom";
import { ShieldX } from "lucide-react";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-gray-900/80"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-cyan-600/10 p-8 rounded-full border border-cyan-500/30 shadow-lg">
            <ShieldX size={72} className="text-cyan-400" />
          </div>
        </motion.div>

        {/* Headings */}
        <motion.h1
          className="text-7xl md:text-8xl font-extrabold mb-4 text-cyan-400 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Page Not Found
        </motion.h2>

        {/* Text */}
        <motion.p
          className="text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The page you’re looking for doesn’t exist or has been moved.  
          Don’t worry — you’re still under <span className="text-cyan-400 font-semibold">CyberShield</span> protection.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg transition"
          >
            🔙 Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
