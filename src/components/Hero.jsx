import React from 'react';


import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-[80vh] flex items-center justify-center">
      <motion.div
        className="text-center px-6 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Make Online Spaces <span className="text-cyan-400">Safer</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          CyberShield empowers citizens to report cyberbullying securely, connect with justice
          systems, and restore trust in digital spaces.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <a
            href="/report"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition shadow-lg"
          >
            Report Now
          </a>
          <a
            href="/features"
            className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition"
          >
            Explore Features
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
