"use client";

import { useState } from "react";
import { useRedeem } from "@/hooks/useRedeem";

export default function RedeemBox() {
  const [amount, setAmount] = useState("");
  const { redeem } = useRedeem();

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, maxWidth: 400 }}>
      <h3>Provider: Redeem Funds</h3>

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={() => redeem(amount)}>Redeem</button>
    </div>
  );
}
