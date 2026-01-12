"use client";

import { useReadContract } from "wagmi";
import { formatEther } from "viem";
import { CONTRACTS } from "@/lib/web3/contracts";
import { CampaignFactoryABI, ERC20ABI } from "@/lib/web3/abis";
import { useState } from "react";
import { isAddress } from "viem";
import { CampaignVotingABI, ServiceProviderNFTABI } from "@/lib/web3/abis";

export default function JudgeModePage() {
  // Approval check
  const [checkName, setCheckName] = useState("");
  const [checkProposer, setCheckProposer] = useState("");
  const approvalCheck = useReadContract({
    address: CONTRACTS.CampaignVoting,
    abi: CampaignVotingABI,
    functionName: "isApproved",
    args:
      checkName && isAddress(checkProposer)
        ? [checkName, checkProposer as `0x${string}`]
        : undefined,
  });

  // Provider check
  const [providerCheckAddress, setProviderCheckAddress] = useState("");
  const providerCheck = useReadContract({
    address: CONTRACTS.ServiceProviderNFT,
    abi: ServiceProviderNFTABI,
    functionName: "isProvider",
    args: isAddress(providerCheckAddress)
      ? [providerCheckAddress as `0x${string}`]
      : undefined,
  });

  // 🔹 Hooks MUST be inside the component
  const totalCampaigns = useReadContract({
    address: CONTRACTS.CampaignFactory,
    abi: CampaignFactoryABI,
    functionName: "totalCampaigns",
  });

  const poolBalance = useReadContract({
    address: CONTRACTS.ReliefStablecoin,
    abi: ERC20ABI,
    functionName: "balanceOf",
    args: [CONTRACTS.ReliefPool],
  });

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">Judge Mode</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          This page explains the RSYS architecture, fund flow, and enforcement
          model. No actions can be performed here.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">The Problem</h2>
        <p className="text-slate-600">
          Traditional disaster relief systems suffer from corruption, delayed
          fund delivery, and lack of donor visibility.
        </p>
      </section>

      {/* Solution */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">The RSYS Solution</h2>
        <p className="text-slate-600">
          RSYS enforces transparent fund usage using smart contracts and
          on-chain role verification.
        </p>
      </section>

      {/* Architecture */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">System Architecture</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard
            title="Identity Layer (NFTs)"
            text="Admins, Volunteers, Victims, and Providers are represented by NFTs."
          />
          <InfoCard
            title="Funds Layer"
            text="Donations are pooled and cannot be withdrawn arbitrarily."
          />
          <InfoCard
            title="Enforcement Layer"
            text="Unauthorized actions revert automatically on-chain."
          />
          <InfoCard
            title="Auditability"
            text="All transactions are publicly verifiable."
          />
        </div>
      </section>

      {/* LIVE SNAPSHOT */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Live On-Chain Snapshot</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
            <h3 className="font-semibold mb-2">Total Campaigns Created</h3>
            <p className="text-3xl font-semibold">
              {totalCampaigns.isLoading
                ? "Loading…"
                : Number(totalCampaigns.data)}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              From CampaignFactory contract
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
            <h3 className="font-semibold mb-2">Relief Pool Balance</h3>
            <p className="text-3xl font-semibold">
              {poolBalance.isLoading
                ? "Loading…"
                : `${formatEther(poolBalance.data ?? BigInt(0))} rUSD`}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Locked & enforced on-chain
            </p>
          </div>
        </div>
      </section>

      {/* VERIFICATION CHECKS */}
      <section className="space-y-10">
        <h2 className="text-2xl font-semibold">
          Live Enforcement Verification
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Campaign Approval */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4">
            <h3 className="font-semibold">Campaign Approval Status</h3>

            <input
              placeholder="Campaign Name"
              value={checkName}
              onChange={(e) => setCheckName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border"
            />

            <input
              placeholder="Proposer Address"
              value={checkProposer}
              onChange={(e) => setCheckProposer(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border"
            />

            <div className="text-sm">
              {approvalCheck.isLoading && "Checking…"}
              {approvalCheck.data === true && (
                <span className="text-emerald-600 font-medium">
                  ✅ Campaign is approved
                </span>
              )}
              {approvalCheck.data === false && (
                <span className="text-rose-600 font-medium">
                  ❌ Campaign not approved
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500">
              Approval is enforced by CampaignVoting contract.
            </p>
          </div>

          {/* Provider Verification */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4">
            <h3 className="font-semibold">Service Provider Verification</h3>

            <input
              placeholder="Provider Address"
              value={providerCheckAddress}
              onChange={(e) => setProviderCheckAddress(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border"
            />

            <div className="text-sm">
              {providerCheck.isLoading && "Checking…"}
              {providerCheck.data === true && (
                <span className="text-emerald-600 font-medium">
                  ✅ Registered Provider
                </span>
              )}
              {providerCheck.data === false && (
                <span className="text-rose-600 font-medium">
                  ❌ Not a Provider
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500">
              Only registered providers can redeem funds.
            </p>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">End-to-End Flow</h2>
        <ol className="list-decimal list-inside space-y-2 text-slate-600">
          <li>Donors contribute rUSD.</li>
          <li>Funds are pooled on-chain.</li>
          <li>Volunteers verify victims.</li>
          <li>Providers deliver aid.</li>
          <li>Treasury enforces payments.</li>
        </ol>
      </section>
    </main>
  );
}

/* ---------- Helper ---------- */

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{text}</p>
    </div>
  );
}
