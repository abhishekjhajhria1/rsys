"use client";

import { useState } from "react";
import { useAccount, useChainId, useWriteContract } from "wagmi";
import { sepolia } from "wagmi/chains";
import { CONTRACTS } from "@/lib/web3/contracts";
import { CampaignFactoryABI } from "@/lib/web3/abis";

export default function CreateCampaignPage() {
  const { address } = useAccount();
  const chainId = useChainId();
  const { writeContractAsync, isPending } = useWriteContract();

  const [name, setName] = useState("");
  const [metadataURI, setMetadataURI] = useState("");

  async function createCampaign() {
    if (!address) {
      alert("Connect wallet first");
      return;
    }

    if (chainId !== sepolia.id) {
      alert("Please switch MetaMask to Sepolia");
      return;
    }

    if (!name.trim() || !metadataURI.trim()) {
      alert("Fill all fields");
      return;
    }

    try {
      await writeContractAsync({
        address: CONTRACTS.CampaignFactory,
        abi: CampaignFactoryABI,
        functionName: "createCampaign",
        args: [name.trim(), metadataURI.trim()],
      });

      alert("Campaign created successfully on-chain.");
      setName("");
      setMetadataURI("");
    } catch (err) {
      console.error(err);
      alert("Campaign creation failed or was rejected.");
    }
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-16 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        Create Campaign
      </h1>

      <p className="text-slate-600 text-sm">
        Only approved campaigns can be created. This action deploys a new
        Campaign contract via the CampaignFactory.
      </p>

      <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Campaign Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Flood Relief 2025"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Metadata URI
          </label>
          <input
            value={metadataURI}
            onChange={(e) => setMetadataURI(e.target.value)}
            placeholder="ipfs://Qm..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
          />
        </div>

        <button
          onClick={createCampaign}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl bg-sky-600 text-white font-medium disabled:opacity-50"
        >
          {isPending ? "Creating…" : "Create Campaign"}
        </button>
      </div>
    </main>
  );
}
