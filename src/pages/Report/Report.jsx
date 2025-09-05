// src/pages/Report.jsx
import { motion } from "framer-motion";

export default function Report() {
  return (
    <section className="py-16 px-6 md:px-12 min-h-[80vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Report Cyberbullying
        </motion.h2>

        <motion.form
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.input
            type="text"
            placeholder="Incident Title"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-400 bg-gray-100 text-black"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />

          <motion.textarea
            rows="5"
            placeholder="Describe the incident..."
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-400 bg-gray-100 text-black"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />

          <motion.input
            type="text"
            placeholder="Your Contact (optional)"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-400 bg-gray-100 text-black"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />

          <motion.button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition shadow-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Report
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
