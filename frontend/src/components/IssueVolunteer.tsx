"use client";

import { useState } from "react";
import { useAdmin } from "@/hooks/useAdmin";

export default function IssueVolunteer() {
  const [addr, setAddr] = useState("");
  const { issueVolunteer } = useAdmin();

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, maxWidth: 400 }}>
      <h3>Admin: Issue Volunteer</h3>

      <input
        placeholder="Volunteer address"
        value={addr}
        onChange={(e) => setAddr(e.target.value)}
      />

      <button onClick={() => issueVolunteer(addr)}>Issue</button>
    </div>
  );
}
