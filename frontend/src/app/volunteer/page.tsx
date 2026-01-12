"use client";

import { useState } from "react";
import Link from "next/link";
import { useAccount, useChainId, useWriteContract } from "wagmi";
import { sepolia } from "wagmi/chains";
import { isAddress } from "viem";
import { toast } from "sonner";

import { CONTRACTS } from "@/lib/web3/contracts";
import { VictimNFTABI } from "@/lib/web3/abis";

export default function VolunteerPage() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { writeContractAsync, isPending } = useWriteContract();

  const [victim, setVictim] = useState("");

  async function verifyVictim() {
    if (!isConnected || !address) {
      toast.error("Connect wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      toast.error("Switch to Sepolia");
      return;
    }

    if (!isAddress(victim)) {
      toast.error("Enter a valid victim address");
      return;
    }

    try {
      toast.loading("Verifying victim…", { id: "verify" });

      await writeContractAsync({
        address: CONTRACTS.VictimNFT,
        abi: VictimNFTABI,
        functionName: "verifyVictim",
        args: [victim as `0x${string}`],
      });

      toast.success("Victim verified successfully", { id: "verify" });
      setVictim("");
    } catch (e) {
      console.error(e);
      toast.error("Verification failed", { id: "verify" });
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* INTRO */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Volunteer Portal
        </h1>

        <p className="text-slate-600">
          Volunteers verify victims affected by a disaster. Verification is
          recorded on-chain and prevents fraudulent claims.
        </p>
      </section>

      {/* ROLE EXPLANATION */}
      <section className="grid md:grid-cols-3 gap-6">
        <Capability
          title="On-Ground Verification"
          text="Confirm real victims through direct assessment."
        />
        <Capability
          title="Fraud Prevention"
          text="Only verified victims can participate in relief flows."
        />
        <Capability
          title="No Fund Control"
          text="Volunteers never control or move funds."
        />
      </section>

      {/* VERIFY ACTION */}
      <section className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
        <h2 className="font-semibold text-lg">
          Verify Victim
        </h2>

        <input
          value={victim}
          onChange={(e) => setVictim(e.target.value)}
          placeholder="Victim wallet address"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
        />

        <button
          onClick={verifyVictim}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl bg-sky-600 text-white font-medium disabled:opacity-50 transition"
        >
          {isPending ? "Verifying…" : "Verify Victim"}
        </button>

        <p className="text-xs text-slate-500">
          This action issues a Victim NFT to the specified address.
        </p>
      </section>

      {/* NAV */}
      <section className="space-y-4">
        <Link href="/judge" className="text-sky-600 underline">
          Learn how verification fits into RSYS →
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
