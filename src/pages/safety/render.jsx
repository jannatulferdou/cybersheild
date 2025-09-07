// PlaybookPage.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  MapPin,
  Phone,
  FileText,
  Clipboard,
  ShieldCheck,
  Layers,
  Download,
  X,
} from "lucide-react";

/**
 * CyberShield Playbook Page (Single-file)
 * - Sidebar navigation for 13 sections + Annex
 * - Full content included (as provided)
 * - Download quick references as text files (replaceable by PDF generator)
 *
 * Drop into your app and ensure Tailwind + framer-motion + lucide-react are installed.
 */

const SECTIONS = [
  { key: "exec", title: "Executive Summary" },
  { key: "legal", title: "1) Legal Landscape (Bangladesh)" },
  { key: "whatcounts", title: "2) What Counts as Cyberbullying" },
  { key: "reporting", title: "3) Official Reporting & Hotlines" },
  { key: "workflow", title: "4) Rapid Response: 12-Step Workflow" },
  { key: "evidence", title: "5) Evidence Pack (Checklist)" },
  { key: "platforms", title: "6) Platform Playbooks" },
  { key: "templates", title: "7) Model Documents / Templates" },
  { key: "mapping", title: "8) Policy Mapping" },
  { key: "sop", title: "9) Institutional SOP" },
  { key: "prevention", title: "10) Prevention Toolkit" },
  { key: "scenarios", title: "11) Sample Case Scenarios" },
  { key: "ethics", title: "12) Ethics & Safeguards" },
  { key: "annex", title: "13) Annexe / Quick Reference Cards" },
];

export default function PlaybookPage() {
  const [active, setActive] = useState("exec");
  const [mobileOpen, setMobileOpen] = useState(false);
  const contentRef = useRef();

  // Download helper: create a text blob with the supplied string
  function downloadText(filename, text) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Quick reference extractors (pulls relevant content)
  function downloadHotlines() {
    const txt = [
      "CyberShield — Hotlines (Quick Reference) — 7 Sept 2025",
      "",
      "Emergency: 999 — Immediate danger",
      "PCSW (Police Cyber Support for Women): 01320-000888 | cybersupport.women@police.gov.bd",
      "CID – Cyber Police Centre (CPC): 01320-010148 | cyber@police.gov.bd",
      "Bangladesh Police (HQ) Operations (examples): 01320-001299 / 01320-001300",
      "ATU – Cyber Crime Help Desk: 01320-026996 / 01320-026997 | atu.cyberhelp@police.gov.bd",
      "",
      "Note: If the victim is a minor, explicitly state 'Child victim (under 18)'.",
    ].join("\n");
    downloadText("cybershield_hotlines_7sep2025.txt", txt);
  }

  function downloadEvidenceChecklist() {
    const txt = [
      "CyberShield — Evidence Checklist",
      "",
      "• Full-page screenshots with URL bar visible (desktop) or share-sheet link (mobile).",
      "• Screen recordings of chats/voice notes (store original files).",
      "• Message export files (JSON/ZIP) from platforms; include message IDs where available.",
      "• Account details of abuser(s): profile URL, user ID, phone/email, aliases.",
      "• Timestamps (local time + UTC if possible).",
      "• Hash values (SHA-256) of any images/videos, if you can compute them.",
      "• Any threats/extortion demands (amounts, wallets, bKash/Nagad numbers).",
      "• Witness statements (teachers/classmates).",
      "• For deepfakes: original image/video sources the fake was built from; keep links.",
      "• Storage: Keep two encrypted copies (e.g., VeraCrypt) on separate devices.",
    ].join("\n");
    downloadText("cybershield_evidence_checklist.txt", txt);
  }

  function downloadSOPOnePager() {
    const txt = [
      "CyberShield — Institutional SOP (One-pager)",
      "",
      "Acknowledge → Secure groups → Evidence vault → Platform report → PCSW/CID → Support victim → Review.",
      "",
      "Triage (within 2 hours): Acknowledge, classify severity, restrict group chats.",
      "Evidence: Centralized vault, upload screenshots, exports, witness notes.",
      "Victim support: Safeguarding lead, counselling, academic adjustments.",
      "Platform escalation: Use organisation accounts, trust & safety portals.",
      "Law enforcement: Notify PCSW/CID, record ticket numbers.",
      "Communication: Need-to-know only, internal advisory without names.",
      "Post-incident: Debrief, update SOPs, run a drill next semester.",
    ].join("\n");
    downloadText("cybershield_SOP_onepager.txt", txt);
  }

  // Full content strings (for download or display) - derived from user's playbook text
  const fullContent = {
    exec: `CyberShield — Bangladesh Cyberbullying Law & Response Playbook (2025)
Prepared for: Team CyberShield – “Justice at the Speed of Tech.” (Project: CyberShield)
Prepared by: Team CyberShield (Leader: Md Emon Chowdhury)
Jurisdiction: People’s Republic of Bangladesh
Last legal checkpoint: 7 September 2025

Executive Summary:
CyberShield is a practical, end-to-end playbook for preventing, identifying, documenting, and responding to cyberbullying in Bangladesh. It translates the current Bangladeshi legal framework and official reporting pathways into concrete actions for victims, parents, schools, NGOs, companies, and platform moderators. It also provides ready-to-use templates, checklists, and an incident workflow designed for rapid response.

Definition (working): Cyberbullying is any repeated, intentional harm inflicted through digital technologies (social media, messaging apps, forums, games, SMS, email, etc.). It covers harassment, stalking, threats, doxxing, impersonation, dissemination of private/intimate content, non-consensual image sharing (“revenge porn”), deepfake abuse, and coordinated online shaming.
`,
    legal: `1) Legal Landscape in Bangladesh (High-Level)
1.1 Core statutes currently in force
- Cyber Security Ordinance, 2025 (CSO 2025): National legal basis for cyber offences and the national cyber security architecture. Repeals the Cyber Security Act, 2023 (which itself replaced major elements of the Digital Security Act, 2018).
- Pornography Control Act, 2012: Criminalises creation, distribution, and possession of pornography; widely used for non-consensual intimate image offences and related cyber exploitation.
- Children Act, 2013: Safeguards minors (under 18); relevant for child online protection and child-specific remedies.
- Penal Code, 1860 (selected offences): Criminal intimidation (threats), defamation (note: civil/criminal dimensions), insult to modesty, and related harms can apply when conduct occurs online.

Practical takeaway: For most cyberbullying involving harassment, threats, impersonation, and non-consensual sharing of images, cases are typically framed under CSO 2025 and/or Pornography Control Act, 2012; child cases additionally invoke the Children Act, 2013.

1.2 Enforcement and national institutions
- Bangladesh Police – Criminal Investigation Department (CID): Cyber Police Centre (CPC) — national investigation & forensics hub for cybercrime.
- Police Cyber Support for Women (PCSW) — dedicated helpdesk for women and girls facing online harassment/abuse.
- Anti-Terrorism Unit (ATU) – Cyber Crime Help Desk — specialised contact points for cybercrime support.
- BGD e-Gov CIRT (Computer Incident Response Team) — national incident handling and cyber awareness for gov/critical infra; supports threat response and capacity development.
- Cyber Security Agency / National Cyber Security structures — policy, coordination, and preventive posture at the national level.

Note: Multiple police hotlines and email channels exist (see Reporting & Hotlines). Use them in parallel with a local police station (nearest Thana) for GD/FIR where appropriate.
`,
    whatcounts: `2) What Counts as Cyberbullying Under Bangladeshi Law (Operational Categories)
Use these categories to map conduct to potential legal hooks:

- Harassment & Threats: Repeated abusive messages, threats of violence, blackmail (“pay or I leak your photos”), doxxing (publishing home/school/work address), coordinated pile-ons.
- Impersonation & Identity Abuse: Fake profiles, stolen photos, account takeovers, and deepfake videos purporting to be the victim.
- Non-Consensual Intimate Image (NCII) / “Revenge Porn”: Recording/sharing private images without consent; morphing/deepfake sexual imagery; sextortion.
- Stalking & Surveillance: Persistent monitoring, location tracking, spyware/“stalkerware,” forced account access.
- Hate-Based Abuse: Targeting based on gender, religion, ethnicity, disability, etc., often overlaps with threats.
- Defamation & Falsehoods: Fabricated allegations, manipulated screenshots, fake “news” posts to damage reputation.

Evidence standards: Save original device logs, live URLs, and platform metadata wherever possible.
`,
    reporting: `3) Official Reporting & Emergency Contacts (Bangladesh)
Use these in combination: call a hotline for immediate help, email for a written trail, submit evidence to investigators, and file a GD/FIR at your nearest Thana when advised.

Police Cyber Support for Women (PCSW)
Hotline: 01320-000888
Email: cybersupport.women@police.gov.bd
Purpose: Rapid help for women & girls facing online harassment, blackmail, image-based abuse.

CID – Cyber Police Centre (CPC)
Hotline: 01320-010148
Email: cyber@police.gov.bd
Purpose: National investigation, digital forensics, technical support, referral to competent units.

Bangladesh Police (HQ) – General Contacts
Operations (example): 01320-001299 / 01320-001300
For emergency crime or threats to life, call 999 immediately.

ATU – Cyber Crime Help Desk
Hotline: 01320-026996 / 01320-026997
Email: atu.cyberhelp@police.gov.bd

BGD e-Gov CIRT (Gov/Institutions)
Scope: Incident handling for gov/critical infra; advisories, awareness, and coordination.

Tip: If the victim is a minor, explicitly state “Child victim (under 18)” when contacting any hotline. That triggers the Children Act 2013 protections and priority handling.
`,
    workflow: `4) Rapid Response: 12-Step Incident Workflow (Victim/Guardian/School)
Safety first — If there are threats to life or ongoing extortion for offline meetings, call 999.
Preserve evidence — Use screen recordings and full-page screenshots with visible URL, date, time, and profile handles. Save chat exports (WhatsApp/Telegram/Messenger), email headers, and device logs.
Don’t engage — Avoid escalating; do not delete original messages (move them to a locked archive).
Isolate devices if you suspect compromise (log out of all sessions; revoke unknown devices; change passwords via a clean device).
Enable 2FA on email + primary socials; rotate recovery emails/phone numbers.
Report to the platform using the in-app “report abuse” or “report impersonation/NCII” flow; request emergency takedown if intimate content is involved.
File to PCSW and CID (see Reporting & Hotlines). Include: timeline, URLs, IDs, hashes, screenshots, and a short victim statement.
Local police GD/FIR — Visit the nearest Thana with your evidence set; write the event sequence in plain language.
If school/university case — Notify the institution’s authority/counsellor; request safeguarding measures and a no-contact directive.
Medical & psychosocial support — If the victim shows distress, arrange counselling; keep receipts/documentation (may support damages or court orders).
Legal counsel — For NCII, extortion, or persistent stalking, consult a lawyer to frame charges under CSO 2025 / Pornography Control Act / Penal Code.
Follow-ups — Keep a case log: who you contacted, when, reference numbers, and responses. Set calendar reminders for weekly follow-ups.
`,
    evidence: `5) Evidence Pack — What to Collect (Checklist)
- Full-page screenshots with URL bar visible (desktop) or share-sheet link (mobile).
- Screen recordings of chats/voice notes (store original files).
- Message export files (JSON/ZIP) from platforms; include message IDs where available.
- Account details of abuser(s): profile URL, user ID, phone/email (if visible), display name, known aliases.
- Timestamps (local time + UTC if possible).
- Hash values (SHA-256) of any images/videos, if you can compute them, to show tamper evidence.
- Any threats/extortion demands (amounts, methods, wallets, bKash/Nagad numbers).
- Witness statements (teachers/classmates), if bullying occurred in class groups.
- For deepfakes: original image/video sources the fake was built from; keep links.
- Storage: Keep two encrypted copies (e.g., VeraCrypt archive) on separate devices; share only with investigators/legal counsel.
`,
    platforms: `6) Platform Playbooks (Fast Takedown)
- Facebook/Instagram — Use “Report” → “Harassment” or “Impersonation.” For NCII, use “Intimate image abuse”; Meta has expedited pathways and a StopNCII hash-matching program.
- TikTok — Report profile/post → “Bullying/Harassment” or “Hate speech”; for NCII select “Sexual exploitation.”
- X (Twitter) — Report tweet/profile → “Abusive or harmful.” Use private media policy for intimate leaks.
- WhatsApp/Telegram — Export chat; report account; ask admins to lock group and remove offenders; change group invite links.

Language: File reports in English + Bangla for speed and clarity.
`,
    templates: `7) Model Documents (Copy-Paste & Adapt)
7.1 One-Page Incident Report (to PCSW/CID)
Subject: Cyberbullying & Online Harassment Complaint — [Victim Name], [Platform]

Summary (2–3 lines):
On [date/time], I/we observed repeated online harassment against [Victim], including [threats/NCII/impersonation]. The content resides at [URLs]. We request urgent intervention and takedown support.

Victim: Name, age (if minor), phone, email, district.
Primary platform(s): Facebook/Instagram/TikTok/WhatsApp/X/Other.
Evidence pack: Attached ZIP (screenshots, exports, links, hash list).
Suspect handles/IDs: [list].
Risk level: Low/Med/High (threats of offline harm? stalking? sextortion?).
Requested actions: Content takedown; account freeze; investigation; advice on GD/FIR.
Reporter: Name & relation; NID (optional); contact.

7.2 GD/FIR Narrative (Template)
On [date/time], the accused persons using the accounts [IDs/URLs] sent repeated abusive messages and threats to me/my ward [Name, Age]. They shared/attempted to share private images without consent and created a fake profile in my/our name. I fear further harm and reputational damage. I request legal action under applicable laws and protection from further harassment. Evidence (screenshots, chat exports, links) is attached.

7.3 School/University Safeguarding Notice (Template)
Subject: Safeguarding Response to Cyberbullying Incident
To: [Principal/Head of Department/Student Affairs Officer]
Date: [Insert Date]

Dear [Recipient],

This is to formally notify you of a cyberbullying incident involving [Victim’s Name, Age, Class/Department]. As per institutional safeguarding protocols, we request the following immediate actions:
- Acknowledge receipt of this notice within 24 hours.
- Ensure no-contact between the alleged perpetrator(s) and the victim, both online and on campus.
- Preserve digital evidence from class groups or institutional platforms; prevent deletion of relevant logs.
- Assign a safeguarding focal person who will coordinate with law enforcement and parents/guardians.
- Provide psychosocial support (counselor/mentor) to the victim.
- Document all actions taken for accountability and legal compliance.

Sincerely,
[Your Name]
[Your Position/Relation to Victim]
`,
    mapping: `8) Policy Mapping (Behaviour → Likely Legal Hooks)
Behaviour -> Likely legal basis (indicative) -> Notes

- Threatening messages, violent intimidation -> CSO 2025; Penal Code (criminal intimidation). Preserve exact wording & timestamps.
- Doxxing (publishing private address/phone) -> CSO 2025 (unauthorised disclosure/identity harm). Capture source posts and reshares.
- Impersonation/fake profile -> CSO 2025 (identity abuse, fraud), Penal Code (cheating/impersonation). Include links to real and fake profiles side-by-side.
- Non-consensual intimate images (NCII) -> Pornography Control Act, 2012 + CSO 2025. Urgent takedown needed; request gag orders.
- Stalking/Spyware -> CSO 2025 (unauthorised access/surveillance). Secure devices; consider forensic imaging.
- Harassment of a child (under 18) -> Children Act, 2013 + CSO 2025 + Pornography Control Act. Triggers child-sensitive handling.
`,
    sop: `9) Institutional SOP (Schools/Universities/NGOs/Businesses)
Objective: Ensure victim safety, stop harm fast, and comply with legal duties.

Step 1 – Triage (within 2 hours):
- Acknowledge complaint.
- Classify severity (threats to life -> call 999).
- Restrict harmful group chats (freeze links, limit posting).

Step 2 – Evidence Handling:
- Secure a centralized, access-controlled evidence vault.
- Upload screenshots, exports, and witness notes.

Step 3 – Victim Support:
- Assign a safeguarding lead.
- Offer counseling/mental health support.
- Provide academic deadline extensions if required.

Step 4 – Platform Escalation:
- File reports via organisational accounts.
- Use trust & safety portals for schools/universities.

Step 5 – Law Enforcement Contact:
- Notify PCSW/CID immediately.
- Record ticket/reference numbers.
- Maintain a contact roster of local police stations.

Step 6 – Communication:
- Share info strictly on a need-to-know basis.
- Issue a short internal advisory (no names).
- Monitor social media chatter.

Step 7 – Post-Incident Review:
- Hold a debrief.
- Update SOPs.
- Run a drill the next semester.
`,
    prevention: `10) Prevention Toolkit (Hands-On)
- Strong account hygiene: Use password managers; enforce 2FA (preferably authenticator apps).
- Privacy controls: Lock down profiles; regularly audit followers/friends.
- Device discipline: Disable auto-downloads; approve group members manually.
- Anti-deepfake awareness: Maintain an archive of original images; teach students reverse-image search.
- Family digital pact: Parents and children agree on device use, charging rules, and reporting discomfort.
- Awareness drives: Run monthly micro-sessions; distribute hotline posters; practice mock reporting.
`,
    scenarios: `11) Sample Case Scenarios (Training Use)
- Impersonation & smear campaign:
  Offender creates a fake profile, posts doctored screenshots.
  Response: Collect evidence -> Report to platform -> PCSW hotline -> GD/FIR -> Institutional safeguarding.

- NCII Sextortion:
  Victim threatened with intimate image leaks unless money sent.
  Response: Do not pay -> Preserve wallet/account details -> PCSW + CID referral -> Emergency takedown.

- Group Bullying (WhatsApp Class Group):
  Coordinated insults and threats.
  Response: Freeze group -> Export chat -> Notify institution -> ATU/CID escalation.

- Deepfake Abuse:
  Fake sexualized video circulates on TikTok.
  Response: Save links & hashes -> Report as NCII -> Urgent takedown -> Legal action under Pornography Control Act + CSO 2025.
`,
    ethics: `12) Ethics & Safeguards
- Protect identity: Keep victim names confidential in external communications.
- Minimise exposure: Share only essential evidence with each authority.
- Consent: For minors, guardians must approve reporting/public statements.
- Mental health priority: Promote counseling and avoid victim-blaming.
- Data security: Encrypt stored evidence and restrict access.
`,
    annex: `13) Annexe — Quick Reference Cards
A) Hotlines (printable):
- 999 — Emergency (immediate danger)
- PCSW: 01320-000888 | cybersupport.women@police.gov.bd
- CID-CPC: 01320-010148 | cyber@police.gov.bd
- ATU Cyber Help: 01320-026996 / 01320-026997 | atu.cyberhelp@police.gov.bd

B) Evidence Checklist:
- URLs & IDs
- Screenshots (with timestamps)
- Chat exports
- Original media
- Hash values
- Witness notes
- Device list
- Platform ticket IDs
- GD/FIR diary numbers

C) Institutional SOP (one-pager):
Acknowledge → Secure groups → Evidence vault → Platform report → PCSW/CID → Support victim → Review.
`,
  };

  // Render functions for the main content area (full content is shown)
  function renderSection(key) {
    return (
      <div className="prose prose-invert max-w-none text-sm leading-relaxed">
        <pre className="whitespace-pre-wrap">{fullContent[key]}</pre>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-12">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-4 sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="text-lg font-bold">CyberShield Playbook</h3>
                  <div className="text-xs text-gray-400">Bangladesh — 2025 (v1.0)</div>
                </div>
              </div>
              <button
                className="lg:hidden p-2 rounded bg-gray-700"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              </button>
            </div>

            {/* Download quick refs */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={downloadHotlines}
                className="flex-1 px-3 py-2 bg-cyan-600 rounded-md text-xs font-semibold hover:bg-cyan-700"
              >
                Download Hotlines
              </button>
              <button
                onClick={downloadEvidenceChecklist}
                className="flex-1 px-3 py-2 bg-indigo-600 rounded-md text-xs font-semibold hover:bg-indigo-700"
              >
                Evidence Checklist
              </button>
            </div>
            <button
              onClick={downloadSOPOnePager}
              className="w-full mb-4 px-3 py-2 bg-emerald-600 rounded-md text-xs font-semibold hover:bg-emerald-700"
            >
              Download SOP One-Pager
            </button>

            <nav className="space-y-1">
              {(mobileOpen ? SECTIONS : SECTIONS).map((s) => (
                <button
                  key={s.key}
                  onClick={() => {
                    setActive(s.key);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setMobileOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition ${
                    active === s.key ? "bg-cyan-600 text-white" : "hover:bg-gray-700"
                  }`}
                >
                  <span className="text-sm">{s.title}</span>
                </button>
              ))}
            </nav>

            <div className="mt-6 text-xs text-gray-400">
              Last legal checkpoint: <strong>7 Sept 2025</strong>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="lg:col-span-9">
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl font-extrabold mb-1">CyberShield Playbook</h1>
                <div className="text-sm text-gray-400">
                  Full Bangladesh Cyberbullying Law & Response Playbook (2025). Use the navigation to jump to any
                  section.
                </div>
              </div>
              <div className="text-sm text-gray-400">
                <div>Prepared by Team CyberShield</div>
                <div>Version 1.0</div>
              </div>
            </div>

            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={active}
                ref={contentRef}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mt-4"
              >
                {/* Render header for the active section */}
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold">
                      {SECTIONS.find((s) => s.key === active)?.title}
                    </h2>
                    <div className="text-xs text-gray-400 mt-1">
                      Scroll inside this panel for full details.
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => downloadText(`cybershield_${active}.txt`, fullContent[active])}
                      className="px-3 py-2 bg-gray-700 rounded text-xs hover:bg-gray-600"
                    >
                      Download Section
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(fullContent[active]);
                        alert("Section copied to clipboard.");
                      }}
                      className="px-3 py-2 bg-gray-700 rounded text-xs hover:bg-gray-600"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* The long content */}
                <div className="prose prose-invert max-w-none text-sm leading-relaxed">
                  {renderSection(active)}

                  {/* For templates section, render formatted templates + copy buttons */}
                  {active === "templates" && (
                    <div className="mt-6 space-y-4">
                      <div className="bg-gray-900/40 p-4 rounded">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">7.1 One-Page Incident Report (Template)</h3>
                            <pre className="whitespace-pre-wrap mt-2 text-xs">{fullContent.templates.split("7.2")[0]}</pre>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <button
                              className="px-3 py-2 bg-cyan-600 rounded text-xs"
                              onClick={() =>
                                downloadText("incident_report_template.txt", fullContent.templates.split("7.2")[0])
                              }
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-900/40 p-4 rounded">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">7.2 GD/FIR Narrative (Template)</h3>
                            <pre className="whitespace-pre-wrap mt-2 text-xs">{`On [date/time], the accused persons using the accounts [IDs/URLs] sent repeated abusive messages and threats to me/my ward [Name, Age]. They shared/attempted to share private images without consent and created a fake profile in my/our name. I fear further harm and reputational damage. I request legal action under applicable laws and protection from further harassment. Evidence (screenshots, chat exports, links) is attached.`}</pre>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <button
                              className="px-3 py-2 bg-cyan-600 rounded text-xs"
                              onClick={() =>
                                downloadText("gdfir_template.txt", "On [date/time], the accused persons ... (customize)")
                              }
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-900/40 p-4 rounded">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">7.3 School/University Safeguarding Notice (Template)</h3>
                            <pre className="whitespace-pre-wrap mt-2 text-xs">{`Subject: Safeguarding Response to Cyberbullying Incident

To: [Principal/Head of Department/Student Affairs Officer]
Date: [Insert Date]

Dear [Recipient],
This is to formally notify you of a cyberbullying incident involving [Victim’s Name, Age, Class/Department]. As per institutional safeguarding protocols, we request the following immediate actions:
- Acknowledge receipt within 24 hours.
- Ensure no-contact between alleged perpetrator(s) and the victim.
- Preserve digital evidence from class groups or institutional platforms.
- Assign a safeguarding focal person.
- Provide psychosocial support.
- Document all actions taken.
Sincerely,
[Your Name]`}</pre>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <button
                              className="px-3 py-2 bg-cyan-600 rounded text-xs"
                              onClick={() =>
                                downloadText("safeguarding_notice_template.txt", "Safeguarding notice template ...")
                              }
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Annex Download small UI */}
                  {active === "annex" && (
                    <div className="mt-6 grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-900/40 p-4 rounded">
                        <h4 className="font-semibold">Hotlines</h4>
                        <p className="text-xs text-gray-400 mt-2">999 — Emergency | PCSW: 01320-000888</p>
                        <button className="mt-3 px-3 py-2 bg-cyan-600 rounded text-xs" onClick={downloadHotlines}>
                          Download Hotlines
                        </button>
                      </div>
                      <div className="bg-gray-900/40 p-4 rounded">
                        <h4 className="font-semibold">Evidence Checklist</h4>
                        <p className="text-xs text-gray-400 mt-2">Screenshots, exports, hashes, witness notes.</p>
                        <button className="mt-3 px-3 py-2 bg-indigo-600 rounded text-xs" onClick={downloadEvidenceChecklist}>
                          Download Checklist
                        </button>
                      </div>
                      <div className="bg-gray-900/40 p-4 rounded">
                        <h4 className="font-semibold">SOP One-Pager</h4>
                        <p className="text-xs text-gray-400 mt-2">Acknowledge → Secure → Report → Support → Review.</p>
                        <button className="mt-3 px-3 py-2 bg-emerald-600 rounded text-xs" onClick={downloadSOPOnePager}>
                          Download SOP
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
