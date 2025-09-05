import { ShieldCheck, BookOpen, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function Awareness() {
  const resources = [
    {
      title: "What is Cyberbullying?",
      desc: "Cyberbullying means harassment, threats, or defamation online. It often comes from fake or anonymous accounts.",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      color: "bg-red-500/10",
    },
    {
      title: "Safety Tips",
      desc: "Take screenshots, don’t engage with bullies, adjust privacy settings, and report immediately to authorities.",
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      color: "bg-green-500/10",
    },
    {
      title: "Know Your Rights",
      desc: "Bangladesh Digital Security Act protects victims. You can report directly to cybercrime units.",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-500/10",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-[80vh] relative overflow-hidden">
      {/* Cyber pattern background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.15),transparent_60%)]"></div>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Awareness & Resources
      </h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Learn about cyberbullying, how to protect yourself, and the rights that
        keep you safe online.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {resources.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-900/60 backdrop-blur-md border border-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition flex flex-col items-start"
          >
            <div className={`${r.color} p-3 rounded-full mb-4`}>{r.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              {r.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center relative z-10">
        <a
          href="#"
          className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-cyan-500 hover:shadow-cyan-400/40 transition"
        >
          Explore More Resources
        </a>
      </div>
    </section>
  );
}
