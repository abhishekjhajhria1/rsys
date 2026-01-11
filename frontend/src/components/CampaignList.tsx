"use client";

import { useEffect, useState } from "react";
import { usePublicClient } from "wagmi";
import { CONTRACTS } from "@/lib/web3/contracts";
import Link from "next/link";


type CampaignItem = {
  campaign: string;
  initiator: string;
  name: string;
};

export default function CampaignList() {
  const client = usePublicClient();
  const [items, setItems] = useState<CampaignItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!client) return;

    async function load() {
      try {
        const logs = await client!.getLogs({
          address: CONTRACTS.CampaignFactory,
          event: {
            type: "event",
            name: "CampaignCreated",
            inputs: [
              { indexed: true, name: "campaign", type: "address" },
              { indexed: true, name: "initiator", type: "address" },
              { indexed: false, name: "name", type: "string" },
            ],
          },
          fromBlock: BigInt(0),
        });

        const parsed = logs.map((l) => ({
          campaign: l.args.campaign as string,
          initiator: l.args.initiator as string,
          name: l.args.name as string,
        }));

        setItems(parsed.reverse());
      } catch (e) {
        console.error(e);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [client]);

  if (loading) {
    return <p className="text-slate-600 text-sm">Loading campaigns…</p>;
  }

  if (items.length === 0) {
    return <p className="text-slate-600 text-sm">No campaigns created yet.</p>;
  }

  return (
    <div className="space-y-3">
      {items.map((c) => (
        <Link
          key={c.campaign}
          href={`/campaigns/${c.campaign}`}
          className="block rounded-xl border border-slate-200 bg-white/70 p-4 hover:border-slate-300 transition"
        >
          <div className="font-medium">{c.name}</div>
          <div className="text-xs text-slate-500 mt-1">
            Campaign: {c.campaign.slice(0, 6)}…{c.campaign.slice(-4)}
          </div>
          <div className="text-xs text-slate-500">
            Initiator: {c.initiator.slice(0, 6)}…{c.initiator.slice(-4)}
          </div>
        </Link>
      ))}
    </div>
  );
}
