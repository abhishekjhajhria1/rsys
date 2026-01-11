"use client";

import { useReadContract } from "wagmi";
import { CampaignABI } from "@/lib/web3/abis";
import CampaignActivity from "@/components/CampaignActivity";

type PageProps = {
  params: {
    address: string;
  };
};

export default function CampaignDetailPage({ params }: PageProps) {
  const { address } = params;

  const nameRead = useReadContract({
    address: address as `0x${string}`,
    abi: CampaignABI,
    functionName: "name",
  });

  const metadataRead = useReadContract({
    address: address as `0x${string}`,
    abi: CampaignABI,
    functionName: "metadataURI",
  });

  const initiatorRead = useReadContract({
    address: address as `0x${string}`,
    abi: CampaignABI,
    functionName: "initiator",
  });

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">
          {nameRead.isLoading ? "Loading campaign…" : nameRead.data}
        </h1>
        <p className="text-slate-600">
          Campaign details loaded directly from the blockchain.
        </p>
      </header>

      <section className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4">
        <div>
          <div className="text-sm text-slate-500">Campaign Address</div>
          <div className="font-mono text-sm break-all">{address}</div>
        </div>

        <div>
          <div className="text-sm text-slate-500">Initiator</div>
          <div className="font-mono text-sm break-all">
            {initiatorRead.isLoading ? "Loading…" : initiatorRead.data}
          </div>
        </div>

        <div>
          <div className="text-sm text-slate-500">Metadata URI</div>
          <div className="font-mono text-sm break-all">
            {metadataRead.isLoading ? "Loading…" : metadataRead.data}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Campaign Activity</h2>

        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
          <CampaignActivity />
        </div>

        <p className="text-xs text-slate-500">
          Activity is sourced from on-chain donations and redemptions via the
          Relief Pool and Campaign Treasury.
        </p>
      </section>

      <p className="text-xs text-slate-500">
        All data above is read directly from the deployed Campaign contract on
        Sepolia.
      </p>
    </main>
  );
}
