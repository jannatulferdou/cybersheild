import React from "react";
import { BookOpen, Users, Video } from "lucide-react";
import { Link } from "react-router";

const awarenessItems = [
  {
    title: "Blogs & Articles",
    description:
      "Read cyber safety tips, success stories, and expert advice to stay protected online.",
    icon: <BookOpen className="h-10 w-10 text-cyan-400" />,
    link: "/blogs",
  },
  {
    title: "Workshops & Webinars",
    description:
      "Join interactive sessions to learn how to report abuse and strengthen your digital safety.",
    icon: <Users className="h-10 w-10 text-green-400" />,
    link: "#workshops",
  },
  {
    title: "Infographics & Videos",
    description:
      "Explore simple, easy-to-understand visual content to spread awareness about cyber safety.",
    icon: <Video className="h-10 w-10 text-pink-400" />,
    link: "#infographics",
  },
];

export default function AwarenessHub() {
  return (
    <section
      id="awareness-hub"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Awareness Hub
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Learn, engage, and spread awareness through our curated resources,
            designed to keep every digital citizen safe.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {awarenessItems.map((item) => (
            <Link to={item.link} key={item.title} className="p-8 rounded-2xl bg-gray-800/60 border border-gray-700 hover:bg-gray-700/70 shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
            <div className="mb-5">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </Link>
           
          ))}
        </div>
      </div>
    </section>
  );
}
