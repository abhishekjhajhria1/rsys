"use client";

import { useState } from "react";
import { useDonate } from "@/hooks/useDonate";

export default function DonateBox() {
  const [amount, setAmount] = useState("");
  const { donate } = useDonate();

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, maxWidth: 300 }}>
      <h3>Donate rUSD</h3>

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={() => donate(amount)}>Donate</button>
    </div>
  );
}
