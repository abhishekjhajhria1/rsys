"use client";

import { useState } from "react";
import Link from "next/link";
import { parseEther, isAddress } from "viem";
import { useAccount, useChainId, useWriteContract } from "wagmi";
import { sepolia } from "wagmi/chains";
import { toast } from "sonner";

import { CONTRACTS } from "@/lib/web3/contracts";
import { CampaignTreasuryABI } from "@/lib/web3/abis";

export default function ServiceProviderPage() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { writeContractAsync, isPending } = useWriteContract();

  const [provider, setProvider] = useState("");
  const [amount, setAmount] = useState("");

  async function redeem() {
    if (!isConnected || !address) {
      toast.error("Connect wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      toast.error("Switch to Sepolia");
      return;
    }

    if (!isAddress(provider)) {
      toast.error("Enter a valid provider address");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      toast.error("Enter a valid amount");
      return;
    }

    try {
      const value = parseEther(amount);

      toast.loading("Requesting redemption…", { id: "redeem" });

      await writeContractAsync({
        address: CONTRACTS.CampaignTreasuryV2,
        abi: CampaignTreasuryABI,
        functionName: "redeemForProvider",
        args: [provider as `0x${string}`, value],
      });

      toast.success("Funds redeemed successfully", { id: "redeem" });
      setAmount("");
    } catch (e) {
      console.error(e);
      toast.error("Redemption failed", { id: "redeem" });
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* INTRO */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Service Provider Portal
        </h1>

        <p className="text-slate-600">
          Service providers deliver real-world aid and redeem funds only after
          verification. All payments are enforced by smart contracts.
        </p>
      </section>

      {/* ROLE */}
      <section className="grid md:grid-cols-3 gap-6">
        <Capability title="Deliver Aid" text="Provide real relief services." />
        <Capability title="Redeem Funds" text="Get paid only via on-chain rules." />
        <Capability title="No Governance Power" text="No control over allocations." />
      </section>

      {/* REDEEM */}
      <section className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
        <h2 className="font-semibold text-lg">
          Redeem Funds
        </h2>

        <input
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          placeholder="Provider wallet address"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
        />

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in rUSD"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
        />

        <button
          onClick={redeem}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl bg-emerald-600 text-white font-medium disabled:opacity-50 transition"
        >
          {isPending ? "Redeeming…" : "Redeem Funds"}
        </button>

        <p className="text-xs text-slate-500">
          Redemption succeeds only if you are a registered provider and funds
          are available.
        </p>
      </section>

      {/* NAV */}
      <section className="space-y-4">
        <Link href="/judge" className="text-sky-600 underline">
          Learn how payments are enforced →
        </Link>
      </section>
    </main>
  );
}

/* ---------- Helpers ---------- */

function Capability({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-2">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}
