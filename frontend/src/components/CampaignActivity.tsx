"use client";

import { useEffect, useState } from "react";
import { usePublicClient } from "wagmi";
import { CONTRACTS } from "@/lib/web3/contracts";
import { formatEther } from "viem";

type ActivityItem = {
  type: "DONATION" | "REDEMPTION";
  from?: string;
  to?: string;
  amount: string;
};

export default function CampaignActivity() {
  const publicClient = usePublicClient();
  const [items, setItems] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!publicClient) return;

    const client = publicClient;

    async function load() {
      try {
        const latestBlock = await client.getBlockNumber();

        const BLOCK_RANGE = BigInt(5_000);
        const ZERO = BigInt(0);

        const fromBlock =
          latestBlock > BLOCK_RANGE
            ? latestBlock - BLOCK_RANGE
            : ZERO;

        // Donations = ERC20 transfers INTO ReliefPool
        const donationLogs = await client.getLogs({
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
          fromBlock,
          toBlock: latestBlock,
        });

        const donations: ActivityItem[] = donationLogs
          .filter((l) => l.args.to === CONTRACTS.ReliefPool)
          .map((l) => ({
            type: "DONATION",
            from: l.args.from as string,
            amount: formatEther(l.args.value as bigint),
          }));

        // Redemptions = payouts via Treasury
        const redemptionLogs = await client.getLogs({
          address: CONTRACTS.CampaignTreasuryV2,
          event: {
            type: "event",
            name: "RedeemForProvider",
            inputs: [
              { indexed: true, name: "provider", type: "address" },
              { indexed: false, name: "amount", type: "uint256" },
            ],
          },
          fromBlock,
          toBlock: latestBlock,
        });

        const redemptions: ActivityItem[] = redemptionLogs.map((l) => ({
          type: "REDEMPTION",
          to: l.args.provider as string,
          amount: formatEther(l.args.amount as bigint),
        }));

        const merged = [...donations, ...redemptions]
          .slice(-10)
          .reverse();

        setItems(merged);
      } catch (e) {
        console.error(e);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [publicClient]);

  if (loading) {
    return <p className="text-slate-600 text-sm">Loading activity…</p>;
  }

  if (items.length === 0) {
    return <p className="text-slate-600 text-sm">No activity yet.</p>;
  }

  return (
    <div className="space-y-3">
      {items.map((a, i) => (
        <div
          key={i}
          className="flex justify-between rounded-lg border border-slate-200 bg-white/70 px-4 py-2 text-sm"
        >
          <div className="text-slate-600">
            {a.type === "DONATION" && "Donation received"}
            {a.type === "REDEMPTION" && "Funds redeemed"}
          </div>

          <div
            className={`font-medium ${
              a.type === "DONATION"
                ? "text-emerald-600"
                : "text-sky-600"
            }`}
          >
            {a.amount} rUSD
          </div>
        </div>
      ))}
    </div>
  );
}
