import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Shield, Link as LinkIcon, X } from "lucide-react";

const resources = [
  {
    title: "Cyber Laws & Policies",
    description: "Explore cyber laws and digital safety policies from Bangladesh and around the world.",
    details: {
      bd: [
        "Digital Security Act 2018 – Defines offences like identity theft, cyber harassment, and hacking.",
        "ICT Act 2006 (Amended 2013) – Legal framework for electronic crimes and punishments.",
        "Cyber Tribunal Guidelines – Establishes special courts for cybercrime cases.",
        "National Cybersecurity Strategy of Bangladesh – Roadmap for securing digital infrastructure.",
        "Telecommunication Act 2001 – Covers illegal interception & misuse of telecom services.",
      ],
      international: [
        "Budapest Convention on Cybercrime – First international treaty addressing internet & computer crime.",
        "EU GDPR (General Data Protection Regulation) – Protects privacy & data rights.",
        "UN Guidelines on Cybersecurity – Promotes global cooperation against cyber threats.",
        "US Cybersecurity Information Sharing Act (CISA) – Encourages sharing of cyber threat data.",
        "OECD Guidelines for Online Safety – Global standards for protecting digital citizens.",
      ],
    },
    icon: <BookOpen className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: "Self-Help Guides",
    description: "Access practical guides to protect yourself online and handle cyberbullying cases.",
    details: {
      guides: [
        "How to report cyberbullying safely with screenshots & links.",
        "Steps to secure your accounts with 2FA and password managers.",
        "How to block & mute abusive users on social media.",
        "Protecting personal information from phishing & scams.",
        "Best practices for safe online communication.",
        "Mental health resources & counselling after online abuse.",
        "Legal rights every citizen should know before reporting.",
        "Emergency steps to take if your account is hacked.",
      ],
    },
    icon: <Shield className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: "Social Media Reporting",
    description: "Direct links to report abuse and fake accounts across popular platforms.",
    details: {
      platforms: [
        { name: "Facebook", link: "https://web.facebook.com/help/181495968648557?_rdc=1&_rdr#" },
        { name: "Instagram", link: "https://help.instagram.com/165828726894770" },
        { name: "X (Twitter)", link: "https://help.twitter.com/en/safety-and-security/report-abusive-behavior" },
        { name: "YouTube", link: "https://support.google.com/youtube/answer/2802027" },
        { name: "Threads", link: "https://help.instagram.com/6602413966453273/?helpref=related_articles" },
        { name: "TikTok", link: "https://www.tiktok.com/safety/en/bullying-prevention" },
        { name: "WhatsApp", link: "https://www.whatsapp.com/safety" },
      ],
    },
    icon: <LinkIcon className="w-10 h-10 text-cyan-400" />,
  },
];

export default function SafetyTools() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
      id="safety-tools"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Resources & Safety Tools
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay informed and protected with guides, laws, and reporting tools designed to keep online spaces safer.
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {resources.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="p-8 rounded-2xl bg-gray-800/60 border border-gray-700 shadow-md hover:shadow-cyan-500/20 transition cursor-pointer"
              onClick={() => setSelected(r)}
            >
              <div className="mb-6">{r.icon}</div>
              <h3 className="text-xl font-bold mb-3">{r.title}</h3>
              <p className="text-gray-400">{r.description}</p>
              <span className="mt-4 inline-block text-cyan-400 font-medium hover:underline">
                Learn More →
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelected(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                {selected.icon}
                <h3 className="text-2xl font-bold">{selected.title}</h3>
              </div>

              {/* Extended Details */}
              {selected.title === "Cyber Laws & Policies" && (
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Bangladesh Laws</h4>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    {selected.details.bd.map((law, i) => (
                      <li key={i}>{law}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">International Laws</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {selected.details.international.map((law, i) => (
                      <li key={i}>{law}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selected.title === "Self-Help Guides" && (
                <div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {selected.details.guides.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selected.title === "Social Media Reporting" && (
                <div>
                  <ul className="space-y-2">
                    {selected.details.platforms.map((p, i) => (
                      <li key={i}>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-400 hover:underline"
                        >
                          {p.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
