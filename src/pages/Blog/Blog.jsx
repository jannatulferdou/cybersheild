import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "The Rise of Cyberbullying in Bangladesh — Why It Matters Now",
    intro: "Bangladesh has witnessed an extraordinary digital transformation. But alongside opportunities comes the darker reality of cyberbullying...",
    date: "August 2025",
    author: "CyberShield Team",
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1757254857/cyber_ztd6q9.png",
  },
  {
    id: 2,
    title: "From DSA to CSO 2025 — The Legal Evolution of Cybercrime Laws",
    intro: "Bangladesh’s legal framework has rapidly evolved from DSA 2018 to CSO 2025, reflecting the nation’s struggle to balance justice and digital freedom...",
    date: "August 2025",
    author: "CyberShield Team",
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1757255238/cso_uytqxs.jpg",
  },
  {
    id: 3,
    title: "Real Case Spotlight — The Facebook Blackmail Incident",
    intro: "A Dhaka student faced online blackmail through Facebook. Here’s how PCSW’s intervention turned fear into justice...",
    date: "August 2025",
    author: "CyberShield Team",
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1757255388/Report_Blackmail_on_Facebook_uywcvd.jpg",
  },
];

export default function BlogList() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12"
        >
          CyberShield <span className="text-cyan-400">Blog</span>
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition transform"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-300 mb-4 text-sm">{blog.intro}</p>
                <p className="text-xs text-gray-400 mb-4">
                  {blog.date} • {blog.author}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block text-cyan-400 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
