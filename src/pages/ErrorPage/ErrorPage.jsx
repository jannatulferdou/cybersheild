import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

export default function ErrorPage({
  code = 404,
  title = "Page Not Found",
  message = "We couldn't find the page you're looking for.",
  lottiePath = "./cybersecurity.json", // default path in public/
  showHome = true,
}) {
  const navigate = useNavigate();
  const [animationData, setAnimationData] = React.useState(null);

  // Load animation data with a custom fetch to avoid the responseText error
  React.useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(lottiePath);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to load Lottie animation:", error);
        setAnimationData(null);
      }
    };

    loadAnimation();
  }, [lottiePath]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Animation */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="rounded-2xl overflow-hidden bg-black/20 p-4">
              {/* Use animationData instead of path to avoid the XMLHttpRequest issue */}
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <div className="text-gray-500 text-center py-10">
                  Animation loading...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Text content - unchanged from your original design */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="text-6xl font-extrabold text-white">{code}</div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                {title}
              </h1>
              <p className="mt-2 text-gray-300 max-w-xl">{message}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            {showHome && (
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition-shadow shadow-lg"
              >
                Go Home
              </button>
            )}

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-3 text-sm text-gray-300 hover:text-white hover:border-cyan-500 transition"
            >
              Go Back
            </button>

            <a
              href="/report"
              className="ml-2 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium bg-transparent text-cyan-400 border border-cyan-600 hover:bg-cyan-600/10 transition"
            >
              Report an Issue
            </a>
          </div>

          {/* Helpful links / quick actions */}
          <div className="mt-4">
            <h4 className="text-sm text-gray-400 mb-3">Quick Help</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                • Need urgent help? Call PCSW:{" "}
                <span className="text-cyan-300 font-semibold">01320-000888</span>
              </li>
              <li>• Visit <a href="/awareness" className="text-cyan-300 hover:underline">Awareness & Resources</a> for safety tips</li>
              <li>• Or <a href="/contact" className="text-cyan-300 hover:underline">contact support</a></li>
            </ul>
          </div>

          {/* small footer note */}
          <div className="mt-auto text-xs text-gray-600">
            © {new Date().getFullYear()} CyberShield — Making online spaces safer.
          </div>
        </div>
      </div>
    </div>
  );
}