"use client";

import { usePublicClient } from "wagmi";
import { CONTRACTS } from "@/lib/web3/contracts";
import { formatEther } from "viem";
import { useEffect, useState } from "react";

type Tx = {
  hash: string;
  from: string;
  to: string;
  value: bigint;
};

export default function TransactionHistory() {
  const client = usePublicClient();
  const [txs, setTxs] = useState<Tx[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!client) return;

    async function fetchEvents() {
      try {
        const logs = await client!.getLogs({
          address: CONTRACTS.ReliefStablecoin,
          event: {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: true, name: "from", type: "address" },
              { indexed: true, name: "to", type: "address" },
              { indexed: false, name: "value", type: "uint256" },
            ],
          },
          fromBlock: "latest",
        });

        const parsed = logs
          .filter((log) => log.args.from && log.args.to && log.args.value)
          .map((log) => ({
            hash: log.transactionHash as string,
            from: log.args.from as string,
            to: log.args.to as string,
            value: log.args.value as bigint,
          }));

        setTxs(parsed.slice(0, 5));
      } catch {
        setTxs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [client]);

  if (loading) {
    return <p className="text-slate-600 text-sm">Loading transactions…</p>;
  }

  if (txs.length === 0) {
    return (
      <p className="text-slate-600 text-sm">
        No recent transactions found.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {txs.map((tx) => (
        <div
          key={tx.hash}
          className="flex justify-between text-sm text-slate-700 border-b border-slate-200 pb-2"
        >
          <span className="truncate max-w-[60%]">
            {tx.from.slice(0, 6)}…{tx.from.slice(-4)} →{" "}
            {tx.to.slice(0, 6)}…{tx.to.slice(-4)}
          </span>
          <span className="font-medium">
            {formatEther(tx.value)} RSC
          </span>
        </div>
      ))}
    </div>
  );
}
