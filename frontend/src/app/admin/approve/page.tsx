"use client";

import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { CampaignVotingABI } from "@/lib/web3/abis";
import { CONTRACTS } from "@/lib/web3/contracts";

export default function ApproveCampaignPage() {
  const { address } = useAccount();
  const { writeContractAsync, isPending } = useWriteContract();

  const [name, setName] = useState("");

  async function approveCampaign() {
    if (!address || !name) return;

    await writeContractAsync({
      address: CONTRACTS.CampaignVoting,
      abi: CampaignVotingABI,
      functionName: "approveCampaign",
      args: [name, address],
    });

    alert("Campaign approved on-chain.");
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-16 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        Approve Campaign
      </h1>

      <p className="text-slate-600 text-sm">
        Campaigns must be approved before they can be created. This action
        records approval on-chain using the CampaignVoting contract.
      </p>

      <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Campaign Name
          </label>
          <input
            type="text"
            placeholder="Flood Relief 2025"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
          />
        </div>

        <button
          onClick={approveCampaign}
          disabled={!address || !name || isPending}
          className="w-full px-4 py-3 rounded-xl bg-sky-600 text-white font-medium disabled:opacity-50"
        >
          {isPending ? "Approving…" : "Approve Campaign"}
        </button>

        {!address && (
          <p className="text-xs text-slate-500">
            Connect wallet to approve.
          </p>
        )}
      </div>
    </main>
  );
}
