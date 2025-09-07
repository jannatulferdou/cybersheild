import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  "Laws",
  "Reporting & Hotlines",
  "Incident Workflow",
  "Evidence Checklist",
  "Platform Playbooks",
  "Templates",
  "Prevention",
];

export default function Playbook() {
  const [active, setActive] = useState("Laws");

  const renderContent = () => {
    switch (active) {
      case "Laws":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Legal Landscape (Bangladesh)</h2>
            <ul className="space-y-3">
              <li>📜 <b>Cyber Security Ordinance 2025</b> – Main cyber offence law.</li>
              <li>📜 <b>Pornography Control Act 2012</b> – Covers NCII / revenge porn.</li>
              <li>📜 <b>Children Act 2013</b> – Extra protections for minors.</li>
              <li>📜 <b>Penal Code 1860</b> – Threats, defamation, harassment online.</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700">
              Learn More
            </button>
          </div>
        );

      case "Reporting & Hotlines":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
            <ul className="space-y-2">
              <li>👩‍💻 PCSW Hotline: <b>01320-000888</b> | cybersupport.women@police.gov.bd</li>
              <li>🔍 CID: <b>01320-010148</b> | cyber@police.gov.bd</li>
              <li>🛡 ATU: <b>01320-026996 / 01320-026997</b> | atu.cyberhelp@police.gov.bd</li>
              <li>🚨 Emergency: <b>999</b></li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700">
              Download Hotline Card (PDF)
            </button>
          </div>
        );

      case "Incident Workflow":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">12-Step Incident Workflow</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>🚨 Safety first – call 999 if immediate danger.</li>
              <li>🖼 Preserve evidence (screenshots, exports).</li>
              <li>🙅 Do not engage or delete.</li>
              <li>📲 Report to platform.</li>
              <li>📞 Contact PCSW / CID with evidence.</li>
              <li>📝 File GD/FIR at local Thana.</li>
              <li>🏫 If student, inform institution.</li>
              <li>🧠 Seek psychosocial support.</li>
              <li>⚖ Consult legal counsel if needed.</li>
              <li>📅 Maintain follow-up log.</li>
            </ol>
          </div>
        );

      case "Evidence Checklist":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Evidence Pack</h2>
            <ul className="space-y-2">
              <li>✔ Screenshots with URLs/timestamps</li>
              <li>✔ Chat exports (ZIP/JSON)</li>
              <li>✔ Abuser’s profile links</li>
              <li>✔ Wallet/payment details (if extortion)</li>
              <li>✔ Witness statements</li>
              <li>✔ Hash values of files (if possible)</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700">
              Download Checklist
            </button>
          </div>
        );

      // add Platform Playbooks, Templates, Prevention later
      default:
        return <p>Coming soon...</p>;
    }
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen p-6 md:p-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-cyan-400">
        CyberShield Playbook
      </h1>
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-lg transition ${
              active === tab
                ? "bg-cyan-600 text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        {renderContent()}
      </motion.div>
    </section>
  );
}
