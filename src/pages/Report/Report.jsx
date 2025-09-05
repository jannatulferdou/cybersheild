import React, { useState } from "react";
import { Upload, ShieldCheck } from "lucide-react";

export default function ReportIncident() {
  const [anonymous, setAnonymous] = useState(false);
  const [caseId, setCaseId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate random Case ID
    const id = "CS-" + Math.floor(100000 + Math.random() * 900000);
    setCaseId(id);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto bg-gray-800/60 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-700">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-cyan-400 mb-3">
            Report an Incident
          </h2>
          <p className="text-gray-300">
            Submit your report securely. Your identity will remain confidential.
          </p>
        </div>

        {/* Form */}
        {!caseId ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Anonymity Toggle */}
            <div className="flex items-center justify-between">
              <label className="text-gray-300">Report Anonymously?</label>
              <input
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="h-5 w-5 text-cyan-500 rounded focus:ring-cyan-400"
              />
            </div>

            {/* Name (hidden if anonymous) */}
            {!anonymous && (
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>
            )}

            {/* Incident Description */}
            <div>
              <label className="block text-gray-300 mb-2">Incident Details</label>
              <textarea
                rows="5"
                placeholder="Describe the incident..."
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
              ></textarea>
            </div>

            {/* Upload Evidence */}
            <div>
              <label className="block text-gray-300 mb-2">
                Upload Evidence (Screenshots, files, or links)
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700/40">
                  <Upload className="h-8 w-8 text-cyan-400 mb-2" />
                  <span className="text-gray-400">Click to upload or paste link</span>
                  <input type="file" className="hidden" />
                </label>
              </div>
              <input
                type="url"
                placeholder="Or paste evidence link"
                className="mt-3 w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-lg transition shadow-lg"
            >
              <ShieldCheck className="h-5 w-5" />
              Send to Police
            </button>
          </form>
        ) : (
          /* Case ID Confirmation */
          <div className="text-center py-10">
            <ShieldCheck className="h-14 w-14 mx-auto text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Report Submitted Successfully!</h3>
            <p className="text-gray-300 mb-4">
              Your Case ID for tracking is:{" "}
              <span className="text-cyan-400 font-mono">{caseId}</span>
            </p>
            <p className="text-gray-400">
              Please save this Case ID to follow up on your report.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
