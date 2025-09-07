import React, { useState, useEffect, useRef } from "react";
import { Upload, ShieldCheck, FileText, Search, Trash2 } from "lucide-react";

/**
 * ReportAndTracker
 *
 * Frontend-only demo:
 * - saves reports to localStorage under key "cybershield_reports"
 * - each report shape:
 *   {
 *     id: 'CS-123456',
 *     anonymous: true|false,
 *     name: '...',
 *     description: '...',
 *     evidenceFiles: [{ name, url }], // local object URLs for preview
 *     evidenceLinks: [ 'https://...' ],
 *     createdAt: ISOString,
 *     status: 'Submitted' | 'Escalated' | 'In Progress' | 'Resolved',
 *   }
 *
 * Replace localStorage calls with API fetch() to persist on server.
 */

const STORAGE_KEY = "cybershield_reports";

function generateCaseId() {
  return "CS-" + Math.floor(100000 + Math.random() * 900000);
}

function saveReportToStorage(report) {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  all.unshift(report);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

function getReportById(id) {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  return all.find((r) => r.id === id) || null;
}

function updateReportStatus(id, status) {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  const idx = all.findIndex((r) => r.id === id);
  if (idx !== -1) {
    all[idx].status = status;
    all[idx].updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return all[idx];
  }
  return null;
}

export default function ReportIncident() {
  // Form state
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]); // File objects
  const [filePreviews, setFilePreviews] = useState([]); // {name, url}
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);
  const [honeypot, setHoneypot] = useState("");

  // Submission & Case view
  const [lastCaseId, setLastCaseId] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  // Tracking
  const [queryId, setQueryId] = useState("");
  const [foundCase, setFoundCase] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    // clean up object URLs when component unmounts
    return () => {
      filePreviews.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [filePreviews]);

  function handleFilesSelected(e) {
    const selected = Array.from(e.target.files || []);
    if (selected.length === 0) return;

    // limit to 6 files demo
    const allowed = selected.slice(0, 6);
    const previews = allowed.map((f) => ({ name: f.name, url: URL.createObjectURL(f) }));
    setFiles((prev) => [...prev, ...allowed].slice(0, 6));
    setFilePreviews((prev) => [...prev, ...previews].slice(0, 6));
  }

  function removePreview(idx) {
    // revoke url
    const p = filePreviews[idx];
    if (p) URL.revokeObjectURL(p.url);
    setFilePreviews((prev) => prev.filter((_, i) => i !== idx));
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  function addLink() {
    const trimmed = link.trim();
    if (!trimmed) return;
    // optional: validate url
    setLinks((l) => [trimmed, ...l]);
    setLink("");
  }

  function removeLink(idx) {
    setLinks((l) => l.filter((_, i) => i !== idx));
  }

  function validateForm() {
    if (honeypot.trim() !== "") return { ok: false, msg: "Bot detected" };
    if (!anonymous && name.trim().length > 80) return { ok: false, msg: "Name too long" };
    if (description.trim().length < 10) return { ok: false, msg: "Please describe the incident (min 10 chars)" };
    return { ok: true };
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatusMessage(null);
    const v = validateForm();
    if (!v.ok) {
      setStatusMessage({ type: "error", text: v.msg });
      return;
    }

    // Create a case object
    const id = generateCaseId();
    const now = new Date().toISOString();
    const report = {
      id,
      anonymous,
      name: anonymous ? "Anonymous" : name || "Anonymous",
      description,
      evidenceFiles: filePreviews.map((p) => ({ name: p.name, url: p.url })), // NOTE: object URLs - replace with server stored URLs
      evidenceLinks: links,
      createdAt: now,
      status: "Submitted",
    };

    // Save to localStorage (demo). Replace with fetch('/api/report', { body: JSON.stringify(...) })
    saveReportToStorage(report);
    setLastCaseId(id);
    setStatusMessage({ type: "success", text: `Report submitted. Case ID: ${id}` });

    // clear form (keep previews for user to see if needed)
    setAnonymous(false);
    setName("");
    setDescription("");
    setFiles([]);
    setFilePreviews([]);
    setLinks([]);
    setLink("");
    setHoneypot("");
  }

  function handleTrack(e) {
    e.preventDefault();
    setFoundCase(null);
    const id = queryId.trim().toUpperCase();
    if (!id) return setStatusMessage({ type: "error", text: "Please enter a Case ID to track." });
    const r = getReportById(id);
    if (!r) {
      setStatusMessage({ type: "error", text: "No case found with that ID." });
      return;
    }
    setFoundCase(r);
    setStatusMessage(null);
  }

  function escalateCase(id) {
    // demo - update status to Escalated
    const updated = updateReportStatus(id, "Escalated");
    if (updated) {
      setFoundCase(updated);
      setStatusMessage({ type: "success", text: `Case ${id} escalated to police.` });
    } else {
      setStatusMessage({ type: "error", text: "Failed to escalate (not found)." });
    }
  }

  // A small list of recent reports (demo)
  const recentReports = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]").slice(0, 6);

  return (
    <section id="report-incident" className="py-16 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT: Form */}
          <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="h-8 w-8 text-cyan-400" />
              <div>
                <h3 className="text-xl font-bold">Report an Incident</h3>
                <p className="text-gray-400 text-sm">Submit securely. You may stay anonymous.</p>
              </div>
            </div>

            {statusMessage && (
              <div className={`mb-4 p-3 rounded ${statusMessage.type === "success" ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"}`}>
                {statusMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot */}
              <div style={{ display: "none" }}>
                <label>Leave blank: <input value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></label>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-300">Report Anonymously?</label>
                <input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} className="h-5 w-5 text-cyan-500" />
              </div>

              {!anonymous && (
                <div>
                  <label className="text-sm text-gray-300 block mb-1">Your name (optional)</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name or leave blank" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 outline-none focus:ring-2 focus:ring-cyan-500" />
                </div>
              )}

              <div>
                <label className="text-sm text-gray-300 block mb-1">Incident details</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={6} required placeholder="Describe what happened, include usernames, dates, links, and context" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>

              {/* Evidence upload */}
              <div>
                <label className="text-sm text-gray-300 block mb-2">Upload evidence (screenshots, files)</label>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 cursor-pointer hover:bg-gray-800">
                    <Upload className="h-5 w-5 text-cyan-400" />
                    <span className="text-sm text-gray-300">Choose files</span>
                    <input ref={fileInputRef} type="file" multiple onChange={handleFilesSelected} className="hidden" />
                  </label>

                  <button type="button" onClick={() => fileInputRef.current && fileInputRef.current.click()} className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800">Browse</button>
                </div>

                {/* Previews */}
                {filePreviews.length > 0 && (
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {filePreviews.map((p, i) => (
                      <div key={i} className="bg-gray-900/50 rounded-lg p-2 relative">
                        {/* if image preview possible - use <img> */}
                        <div className="h-24 w-full bg-gray-800 rounded overflow-hidden grid place-items-center">
                          {/* try to show as image */}
                          {p.url && <img src={p.url} alt={p.name} className="h-full w-full object-cover" />}
                        </div>
                        <div className="mt-2 text-xs text-gray-300 line-clamp-1">{p.name}</div>
                        <button type="button" onClick={() => removePreview(i)} className="absolute top-2 right-2 p-1 rounded bg-black/40">
                          <Trash2 className="h-4 w-4 text-red-400" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Evidence links */}
              <div>
                <label className="text-sm text-gray-300 block mb-1">Paste evidence link (post URL, profile link)</label>
                <div className="flex gap-2">
                  <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://..." className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 outline-none focus:ring-2 focus:ring-cyan-500" />
                  <button type="button" onClick={addLink} className="px-4 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700">Add</button>
                </div>

                {links.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {links.map((l, i) => (
                      <li key={i} className="flex items-center justify-between text-sm bg-gray-900/40 p-2 rounded">
                        <a href={l} target="_blank" rel="noreferrer" className="truncate text-cyan-300">{l}</a>
                        <button type="button" onClick={() => removeLink(i)} className="text-xs text-red-400">Remove</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full px-4 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 font-semibold">Send to Police</button>
              </div>
            </form>
          </div>

          {/* RIGHT: Tracker + Recent */}
          <div className="space-y-6">
            {/* Tracking box */}
            <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-5 w-5 text-gray-300" />
                <h4 className="font-semibold">Track Case</h4>
              </div>

              <form onSubmit={handleTrack} className="space-y-3">
                <input value={queryId} onChange={(e) => setQueryId(e.target.value)} placeholder="Enter Case ID (e.g. CS-123456)" className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 outline-none focus:ring-2 focus:ring-cyan-500" />
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 px-3 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700">Find</button>
                  <button type="button" onClick={() => { setQueryId(""); setFoundCase(null); setStatusMessage(null); }} className="px-3 py-2 rounded-lg border border-gray-700">Reset</button>
                </div>
              </form>

              {/* Found case */}
              {foundCase && (
                <div className="mt-4 bg-gray-900/50 p-3 rounded">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{foundCase.id}</div>
                      <div className="text-sm text-gray-400">{new Date(foundCase.createdAt).toLocaleString()}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs ${foundCase.status === "Submitted" ? "bg-yellow-800 text-yellow-300" : foundCase.status === "Escalated" ? "bg-red-800 text-red-300" : "bg-green-800 text-green-300"}`}>
                      {foundCase.status}
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-gray-300">
                    <div><strong>Reporter:</strong> {foundCase.anonymous ? "Anonymous" : foundCase.name}</div>
                    <div className="mt-2"><strong>Details:</strong> <div className="mt-1 text-gray-300">{foundCase.description}</div></div>

                    {foundCase.evidenceLinks && foundCase.evidenceLinks.length > 0 && (
                      <div className="mt-3">
                        <strong>Links:</strong>
                        <ul className="mt-1 space-y-1 text-cyan-300">
                          {foundCase.evidenceLinks.map((l, i) => (<li key={i}><a href={l} target="_blank" rel="noreferrer">{l}</a></li>))}
                        </ul>
                      </div>
                    )}

                    {foundCase.evidenceFiles && foundCase.evidenceFiles.length > 0 && (
                      <div className="mt-3">
                        <strong>Files:</strong>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {foundCase.evidenceFiles.map((f, i) => (
                            <a key={i} href={f.url} target="_blank" rel="noreferrer" className="text-sm bg-gray-800/40 p-2 rounded truncate">
                              {f.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button onClick={() => escalateCase(foundCase.id)} className="flex-1 px-3 py-2 rounded bg-red-600 hover:bg-red-700 text-white">Escalate to Police</button>
                    <button onClick={() => { navigator.clipboard?.writeText(foundCase.id); setStatusMessage({ type: "success", text: "Case ID copied to clipboard." }); }} className="px-3 py-2 rounded border border-gray-700">Copy ID</button>
                  </div>
                </div>
              )}
            </div>

            {/* Recent reports (demo) */}
            <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-md">
              <h4 className="font-semibold mb-3">Recent reports (demo)</h4>
              {recentReports.length === 0 ? (
                <div className="text-sm text-gray-400">No reports yet. Submit one from the left.</div>
              ) : (
                <ul className="space-y-2 text-sm">
                  {recentReports.map((r) => (
                    <li key={r.id} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{r.id}</div>
                        <div className="text-xs text-gray-400 truncate max-w-xs">{r.description}</div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded ${r.status === "Submitted" ? "bg-yellow-800 text-yellow-300" : r.status === "Escalated" ? "bg-red-800 text-red-300" : "bg-green-800 text-green-300"}`}>{r.status}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Note */}
            <div className="text-xs text-gray-500">
              <strong>Note:</strong> This demo stores reports locally for prototype/testing. Replace localStorage with a secure backend that
              verifies, rate-limits, scans uploaded files, and performs server-side reCAPTCHA verification before escalation.
            </div>
          </div>
        </div>

        {/* If recently submitted, show case ID banner below */}
        {lastCaseId && (
          <div className="mt-8 p-4 rounded-lg bg-gray-900/60 border border-gray-700 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-300">Your case has been created.</div>
              <div className="font-mono text-cyan-300">{lastCaseId}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => { navigator.clipboard?.writeText(lastCaseId); setStatusMessage({ type: "success", text: "Copied case ID." }); }} className="px-3 py-2 rounded border border-gray-700">Copy ID</button>
              <button onClick={() => { setQueryId(lastCaseId); setFoundCase(getReportById(lastCaseId)); }} className="px-3 py-2 rounded bg-cyan-600 hover:bg-cyan-700">Track Now</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
