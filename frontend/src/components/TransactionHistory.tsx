"use client";

import Card from "@/components/Card";
import { useTransactionHistory } from "@/hooks/useTransactionHistory";

export default function TransactionHistory() {
  const { txs, loading } = useTransactionHistory();

  return (
    <Card title="📜 On-Chain Activity">
      {loading && <div>Loading transactions...</div>}

      {!loading && txs.length === 0 && (
        <div>No transactions yet</div>
      )}

      {!loading &&
        txs.map((tx, idx) => (
          <div
            key={idx}
            style={{
              padding: "8px 0",
              borderBottom: "1px solid #2a2f45",
              fontSize: 14,
            }}
          >
            {tx.type === "donation" && (
              <>🙏 Donation from {tx.address.slice(0, 6)}… — {tx.amount} rUSD</>
            )}

            {tx.type === "redeem" && (
              <>💸 Redeemed by {tx.address.slice(0, 6)}… — {tx.amount} rUSD</>
            )}
          </div>
        ))}
    </Card>
  );
}
