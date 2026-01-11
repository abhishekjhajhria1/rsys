"use client";

import { useState } from "react";
import { useAccount, useChainId, useWriteContract } from "wagmi";
import { sepolia } from "wagmi/chains";
import { CONTRACTS } from "@/lib/web3/contracts";
import { ERC721ABI } from "@/lib/web3/abis";
import { ServiceProviderNFTABI } from "@/lib/web3/abis";

export default function AdminPage() {
  const [provider, setProvider] = useState("");

  const { address } = useAccount();
  const chainId = useChainId();
  const { writeContractAsync, isPending } = useWriteContract();

  const [volunteer, setVolunteer] = useState("");

  async function issueVolunteer() {
    if (!address) return alert("Connect wallet");
    if (chainId !== sepolia.id) return alert("Switch to Sepolia");
    if (!volunteer) return alert("Enter volunteer address");

    try {
      const volunteerAddress = volunteer.startsWith("0x")
        ? volunteer
        : `0x${volunteer}`;
      await writeContractAsync({
        address: CONTRACTS.VolunteerNFT,
        abi: ERC721ABI,
        functionName: "issueVolunteer",
        args: [volunteerAddress as `0x${string}`],
      });

      alert("Volunteer NFT issued");
      setVolunteer("");
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    }
  }

  async function registerProvider() {
    if (!address) return alert("Connect wallet");
    if (chainId !== sepolia.id) return alert("Switch to Sepolia");
    if (!provider) return alert("Enter provider address");

    try {
      const providerAddress = provider.startsWith("0x")
        ? provider
        : `0x${provider}`;
      await writeContractAsync({
        address: CONTRACTS.ServiceProviderNFT,
        abi: ServiceProviderNFTABI,
        functionName: "registerProvider",
        args: [providerAddress as `0x${string}`],
      });

      alert("Service Provider registered on-chain");
      setProvider("");
    } catch (err) {
      console.error(err);
      alert("Transaction failed or reverted");
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <h1 className="text-4xl font-semibold">Campaign Admin</h1>

      <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
        <h2 className="text-xl font-semibold">Issue Volunteer NFT</h2>

        <input
          value={volunteer}
          onChange={(e) => setVolunteer(e.target.value)}
          placeholder="Volunteer wallet address"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white"
        />

        <button
          onClick={issueVolunteer}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl bg-sky-600 text-white font-medium disabled:opacity-50"
        >
          {isPending ? "Issuing…" : "Issue Volunteer NFT"}
        </button>
      </div>

      <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
        <h2 className="text-xl font-semibold">Register Service Provider</h2>

        <input
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          placeholder="Service Provider wallet address"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white"
        />

        <button
          onClick={registerProvider}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl bg-sky-600 text-white font-medium disabled:opacity-50"
        >
          {isPending ? "Registering…" : "Register Provider"}
        </button>

        <p className="text-xs text-slate-500">
          Issues a Service Provider NFT, enabling controlled fund redemption.
        </p>
      </div>
    </main>
  );
}
