"use client";

import { useRole } from "@/lib/useRole";
import { useState } from "react";

export default function VolunteerPanel() {
  const role = useRole();
  const [victimAddress, setVictimAddress] = useState("");

  const isAllowed = role === "volunteer";

  return (
    <section
      id="volunteer-panel"
      className="max-w-3xl w-full bg-white border rounded-lg p-6 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        Volunteer Dashboard
      </h2>

      <p className="text-sm text-gray-600">
        Volunteers help victims onboard by collecting wallet addresses.
        In production, this action is authorized via non-transferable NFTs.
      </p>

      <input
        type="text"
        placeholder="Victim wallet address"
        value={victimAddress}
        onChange={(e) => setVictimAddress(e.target.value)}
        disabled={!isAllowed}
        className="border rounded px-3 py-2 disabled:bg-gray-100"
      />

      <button
        disabled={!isAllowed}
        className={`px-4 py-2 rounded text-white w-fit ${
          isAllowed
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Submit Victim for Verification
      </button>

      {!isAllowed && (
        <p className="text-xs text-red-500">
          Access restricted: Volunteer role required
        </p>
      )}
    </section>
  );
}
