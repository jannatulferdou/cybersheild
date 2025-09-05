import React from "react";
import { CalendarDays, User } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "5 Simple Ways to Stay Safe from Cyberbullying",
    author: "CyberShield Team",
    date: "Aug 28, 2025",
    excerpt:
      "Learn practical tips you can use right away to protect yourself and your loved ones from online harassment.",
    image: "https://source.unsplash.com/600x400/?cybersecurity,safety",
    link: "#",
  },
  {
    id: 2,
    title: "How Rina Fought Back: A Cyberbullying Success Story",
    author: "CyberShield Stories",
    date: "Sep 1, 2025",
    excerpt:
      "Rina’s journey from being a victim of online harassment to becoming a digital safety advocate.",
    image: "https://source.unsplash.com/600x400/?internet,justice",
    link: "#",
  },
  {
    id: 3,
    title: "Know Your Rights: Cyber Laws in Bangladesh",
    author: "Legal Awareness Hub",
    date: "Sep 3, 2025",
    excerpt:
      "Understanding the ICT Act and Digital Security Act to know what protections are available to you.",
    image: "https://source.unsplash.com/600x400/?law,technology",
    link: "#",
  },
  {
    id: 4,
    title: "Parents’ Guide to Protecting Kids Online",
    author: "CyberShield Team",
    date: "Sep 5, 2025",
    excerpt:
      "Tips for parents to help children navigate online spaces safely and responsibly.",
    image: "https://source.unsplash.com/600x400/?parents,online-safety",
    link: "#",
  },
  {
    id: 5,
    title: "The Psychology of Cyberbullying: Why It Happens",
    author: "Dr. Farhana Rahman",
    date: "Sep 7, 2025",
    excerpt:
      "An analysis of the mental and social factors that drive people to bully online.",
    image: "https://source.unsplash.com/600x400/?psychology,mental-health",
    link: "#",
  },
  {
    id: 6,
    title: "Digital Detox: Reducing Stress from Social Media",
    author: "Wellness Hub",
    date: "Sep 10, 2025",
    excerpt:
      "How taking breaks from social media can improve your mental well-being.",
    image: "https://source.unsplash.com/600x400/?digital,wellness",
    link: "#",
  },
  {
    id: 7,
    title: "Top 10 Apps for Online Safety in 2025",
    author: "Tech Review BD",
    date: "Sep 12, 2025",
    excerpt:
      "A curated list of the most effective tools to protect your privacy and security online.",
    image: "https://source.unsplash.com/600x400/?apps,technology",
    link: "#",
  },
  {
    id: 8,
    title: "From Victim to Advocate: Youth Leading Change",
    author: "Youth Voice",
    date: "Sep 15, 2025",
    excerpt:
      "Meet the inspiring young leaders in Bangladesh who turned their struggles into campaigns for digital safety.",
    image: "https://source.unsplash.com/600x400/?youth,leadership",
    link: "#",
  },
];

export default function BlogsArticles() {
  return (
    <section
      id="blogs"
      className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Blogs & Articles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore stories, tips, and resources to make your online presence
            safer and stronger.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-700"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{blog.excerpt}</p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" /> {blog.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" /> {blog.date}
                  </div>
                </div>

                {/* Read More */}
                <a
                  href={blog.link}
                  className="inline-block mt-2 text-cyan-400 hover:text-cyan-300 font-semibold transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
