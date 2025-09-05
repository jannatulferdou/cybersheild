import React from 'react';

export default function Contact() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100 min-h-[80vh]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Have questions or need help? Reach out and our team will support you.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
