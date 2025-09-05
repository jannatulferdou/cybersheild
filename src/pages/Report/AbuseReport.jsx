import React from "react";
import { Share2 } from "lucide-react";
import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok, FaTumblr, FaWhatsapp, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { SiKik, SiRoblox, SiThreads, SiWechat } from "react-icons/si";

const resources = [
  { name: "Facebook", href: "https://www.facebook.com/help/181495968648557", icon: <FaFacebook className="text-blue-500" /> },
  { name: "Instagram", href: "https://help.instagram.com/165828726894770/", icon: <FaInstagram className="text-pink-500" /> },
  { name: "Kik", href: "https://help.kik.com/hc/en-us/sections/18564762540315-Safety", icon: <SiKik className="text-green-500" /> },
  { name: "Roblox", href: "https://en.help.roblox.com/hc/en-us/articles/203312410-How-to-Report-Rule-Violations", icon: <SiRoblox className="text-red-500" /> },
  { name: "Snapchat", href: "https://help.snapchat.com/hc/en-us/articles/7012304746644-What-steps-can-I-take-to-help-protect-my-security-and-safety-on-Snapchat", icon: <FaSnapchat className="text-yellow-400" /> },
  { name: "Threads", href: "https://help.instagram.com/6602413966453273/?helpref=related_articles", icon: <SiThreads className="text-white" /> },
  { name: "TikTok", href: "https://www.tiktok.com/safety/en/bullying-prevention", icon: <FaTiktok className="text-gray-200" /> },
  { name: "Tumblr", href: "https://www.tumblr.com/abuse", icon: <FaTumblr className="text-sky-500" /> },
  { name: "WeChat", href: "https://help.wechat.com/cgi-bin/newreadtemplate?t=help_center/index&lang=en&plat=android&Channel=helpcenter", icon: <SiWechat className="text-green-400" /> },
  { name: "WhatsApp", href: "https://faq.whatsapp.com/1313491802751163/?locale=en_US", icon: <FaWhatsapp className="text-green-500" /> },
  { name: "YouTube", href: "https://www.youtube.com/howyoutubeworks/our-policies/#reporting-and-enforcement", icon: <FaYoutube className="text-red-600" /> },
  { name: "X", href: "https://help.x.com/en/safety-and-security/report-abusive-behaviors", icon: <FaXTwitter className="text-white" /> },
];

export default function AbuseSafetyResources() {
  return (
    <section
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
      id="safety-resources"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Reporting Abuse & Safety Resources
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find direct links to report abuse or access safety guidelines across popular platforms.
          </p>
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {resources.map((r) => (
            <a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:bg-gray-700/70 transition shadow-md hover:shadow-lg"
            >
              <div className="text-4xl">{r.icon}</div>
              <span className="text-lg font-semibold">{r.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Floating Share Button */}
      <button
        title="Share"
        aria-label="Share"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl grid place-items-center bg-cyan-600 text-white hover:bg-cyan-700 active:scale-95 transition"
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: "Reporting abuse & safety resources",
              text: "Helpful links for reporting abuse on major platforms.",
              url: typeof window !== "undefined" ? window.location.href : "",
            });
          } else {
            alert("Share is not supported on this browser.");
          }
        }}
      >
        <Share2 className="h-6 w-6" />
      </button>
    </section>
  );
}
