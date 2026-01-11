"use client";

import { useState } from "react";
import { useVolunteer } from "@/hooks/useVolunteer";

export default function VerifyVictim() {
  const [addr, setAddr] = useState("");
  const { verifyVictim } = useVolunteer();

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, maxWidth: 400 }}>
      <h3>Volunteer: Verify Victim</h3>

      <input
        placeholder="Victim address"
        value={addr}
        onChange={(e) => setAddr(e.target.value)}
      />

      <button onClick={() => verifyVictim(addr)}>Verify</button>
    </div>
  );
}
