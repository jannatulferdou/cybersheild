import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

/**
 * ContactSection
 *
 * - Honeypot field for bots (hidden input named `website`)
 * - Basic client-side validation
 * - reCAPTCHA placeholder (replace with real recaptcha component on backend)
 * - Shows emergency helplines and office info
 * - Submits to /api/contact (placeholder) via fetch POST - replace with real endpoint
 */

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot - should remain empty
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const helplines = [
    { title: "National Cyber Helpline", phone: "+880 1320010148", note: "24/7 cybercrime reporting" },
    { title: "Mental Health Support", phone: "+880-987-654321", note: "Counselling & support" },
    { title: "Police Cyber Unit (Dhaka)", phone: "+880 1320010148", note: "Direct escalation for urgent cases" },
  ];

  const office = {
    name: "CyberShield (Project Office)",
    addressLine1: "House 12, Road 7, Dhanmondi",
    city: "Dhaka 1207, Bangladesh",
    email: "hello@cybershield.bd",
    phone: "+880-1711-000000",
    hours: "Sat - Thu, 9:00 AM – 6:00 PM",
  };

  function validate() {
    if (form.website.trim() !== "") {
      // honeypot filled -> likely bot
      return { ok: false, message: "Bot detected" };
    }
    if (form.message.trim().length < 10) {
      return { ok: false, message: "Please write a more detailed message (at least 10 characters)." };
    }
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      return { ok: false, message: "Please enter a valid email address." };
    }
    return { ok: true };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    const v = validate();
    if (!v.ok) {
      setStatus({ type: "error", text: v.message });
      return;
    }

    setSubmitting(true);

    // Example payload - add any metadata you need (e.g., caseId, IP, userAgent)
    const payload = {
      name: form.name || "Anonymous",
      email: form.email,
      phone: form.phone,
      message: form.message,
    };

    try {
      // Replace `/api/contact` with your secure endpoint.
      // The endpoint should validate, rate-limit, verify reCAPTCHA server-side and send/stage messages to support/police
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Server error. Please try again later.");
      }

      const data = await res.json(); // expect { ok: true, ticketId: "CS-123456" } or similar
      setStatus({
        type: "success",
        text:
          data && data.ticketId
            ? `Message sent. Your ticket ID: ${data.ticketId}. Please save it for follow-up.`
            : "Message sent successfully. We will contact you soon.",
      });
      setForm({ name: "", email: "", phone: "", message: "", website: "" });
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Failed to send message." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Contact & Support</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3">
            Get in touch, report urgent issues, or find emergency helplines. We respect your privacy and security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Contact Form */}
          <div className="lg:col-span-2 bg-gray-800/60 p-8 rounded-2xl border border-gray-700 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>

            {/* Status */}
            {status && (
              <div
                className={`mb-4 p-3 rounded-md ${
                  status.type === "success" ? "bg-green-900/60 text-green-300" : "bg-red-900/60 text-red-300"
                }`}
              >
                {status.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot (hidden) */}
              <div style={{ display: "none" }}>
                <label>
                  If you are human, leave this blank:
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-300">Name (optional)</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name or leave blank for anonymous"
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
                    maxLength={80}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">Email (optional)</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-300">Phone (optional)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+8801XXXXXXXXX"
                  className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Message / Details (required)</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  required
                  placeholder="Describe the issue, include links, usernames, dates, and any evidence you have."
                  className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="text-sm text-gray-400">
                {/* Replace this block with real reCAPTCHA widget and server-side verification */}
                <div className="mb-2">Security check: reCAPTCHA verification required on server.</div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 font-semibold transition"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", phone: "", message: "", website: "" });
                    setStatus(null);
                  }}
                  className="px-4 py-3 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800/40 transition"
                >
                  Reset
                </button>

                <div className="ml-auto text-xs text-gray-400">
                  <strong>Privacy:</strong> Your details are confidential. We only share with authorized agencies when necessary.
                </div>
              </div>
            </form>
          </div>

          {/* Right: Helplines & Office Info */}
          <aside className="space-y-6">
            {/* Emergency Helplines */}
            <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-md">
              <h4 className="text-lg font-semibold mb-4">Emergency Helplines</h4>
              <ul className="space-y-3">
                {helplines.map((h) => (
                  <li key={h.phone} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-700/20 text-red-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{h.title}</div>
                      <a href={`tel:${h.phone}`} className="text-cyan-300 block">
                        {h.phone}
                      </a>
                      <div className="text-sm text-gray-400">{h.note}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Info */}
            <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-md">
              <h4 className="text-lg font-semibold mb-4">Office Information</h4>
              {/* <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gray-700/30">
                  <MapPin className="h-5 w-5 text-gray-200" />
                </div>
                <div>
                  <div className="font-semibold">{office.name}</div>
                  <div className="text-sm text-gray-400">{office.addressLine1}, {office.city}</div>
                </div>
              </div> */}

              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gray-700/30">
                  <Mail className="h-5 w-5 text-gray-200" />
                </div>
                <div>
                  <a href={`mailto:${office.email}`} className="text-cyan-300 font-medium">{office.email}</a>
                  <div className="text-sm text-gray-400">We aim to reply within 48 hours for non-urgent queries.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gray-700/30">
                  <Clock className="h-5 w-5 text-gray-200" />
                </div>
                <div>
                  <div className="font-medium">{office.phone}</div>
                  <div className="text-sm text-gray-400">{office.hours}</div>
                </div>
              </div>
            </div>

            {/* Map Embed (placeholder) */}
            {/* <div className="bg-gray-800/60 p-3 rounded-2xl border border-gray-700 shadow-md">
              <div className="text-sm text-gray-400 mb-3">Office Location</div>
              <div className="w-full h-40 bg-gray-900/40 rounded-md grid place-items-center text-gray-500">
              
                <div>Map embed placeholder — add Google Maps iframe here</div>
              </div>
            </div> */}
          </aside>
        </div>

        {/* Small footer note */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>
            <strong>Security notes:</strong> Do not send passwords or highly sensitive material through this form.
            For immediate danger, contact local emergency services and report to the police cyber unit.
          </p>
        </div>
      </div>
    </section>
  );
}
