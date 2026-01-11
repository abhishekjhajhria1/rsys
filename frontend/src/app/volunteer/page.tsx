"use client";

import { useState } from "react";
import { useAccount, useChainId, useWriteContract } from "wagmi";
import { sepolia } from "wagmi/chains";
import { CONTRACTS } from "@/lib/web3/contracts";
import { VictimNFTABI } from "@/lib/web3/abis";

export default function VolunteerPage() {
  const { address } = useAccount();
  const chainId = useChainId();
  const { writeContractAsync, isPending } = useWriteContract();

  const [victim, setVictim] = useState("");

  async function verifyVictim() {
    if (!address) {
      alert("Connect wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      alert("Switch MetaMask to Sepolia");
      return;
    }

    if (!victim) {
      alert("Enter victim wallet address");
      return;
    }

    try {
      await writeContractAsync({
        address: CONTRACTS.VictimNFT,
        abi: VictimNFTABI,
        functionName: "verifyVictim",
        args: [victim as `0x${string}`],
      });

      alert("Victim verified on-chain");
      setVictim("");
    } catch (err) {
      console.error(err);
      alert("Transaction failed or reverted");
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Volunteer Portal
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Volunteers verify affected individuals by issuing a Victim NFT.
          Verification is recorded permanently on-chain.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Verify Victim</h2>

        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
          <input
            value={victim}
            onChange={(e) => setVictim(e.target.value)}
            placeholder="Victim wallet address"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
          />

          <button
            onClick={verifyVictim}
            disabled={isPending}
            className="w-full px-4 py-3 rounded-xl bg-sky-600 text-white font-medium disabled:opacity-50"
          >
            {isPending ? "Verifying…" : "Verify Victim"}
          </button>

          <p className="text-xs text-slate-500">
            This action issues a Victim NFT and enables aid eligibility.
          </p>
        </div>
      </section>
    </main>
  );
}
