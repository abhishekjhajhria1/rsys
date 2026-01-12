"use client";

import { useState } from "react";
import { useAccount, useChainId, useWriteContract } from "wagmi";
import { sepolia } from "wagmi/chains";
import { toast } from "sonner";
import Link from "next/link";
import { isAddress } from "viem";

import { parseEther } from "viem";
import { ReliefStablecoinABI } from "@/lib/web3/abis";
import { CampaignTreasuryABI } from "@/lib/web3/abis";
import { VolunteerNFTABI } from "@/lib/web3/abis";
import { ServiceProviderNFTABI } from "@/lib/web3/abis";

import { CONTRACTS } from "@/lib/web3/contracts";
import { CampaignVotingABI, CampaignFactoryABI } from "@/lib/web3/abis";

export default function AdminPage() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { writeContractAsync, isPending } = useWriteContract();

  const [name, setName] = useState("");
  const [metadataURI, setMetadataURI] = useState("");
  const [proposer, setProposer] = useState("");
  const [mintTo, setMintTo] = useState("");
  const [mintAmount, setMintAmount] = useState("");
  const [distributeTo, setDistributeTo] = useState("");
  const [distributeAmount, setDistributeAmount] = useState("");
  const [volunteerAddress, setVolunteerAddress] = useState("");
  const [providerAddress, setProviderAddress] = useState("");

  async function approveCampaign() {
    if (!isConnected || !address) {
      toast.error("Connect wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      toast.error("Switch to Sepolia");
      return;
    }

    if (!name || !proposer) {
      toast.error("Enter campaign name and proposer");
      return;
    }

    if (!isAddress(proposer)) {
      toast.error("Invalid proposer address");
      return;
    }

    try {
      toast.loading("Approving campaign…", { id: "approve" });

      await writeContractAsync({
        address: CONTRACTS.CampaignVoting,
        abi: CampaignVotingABI,
        functionName: "approveCampaign",
        args: [name, proposer as `0x${string}`],
      });

      toast.success("Campaign approved", { id: "approve" });
    } catch (e) {
      console.error(e);
      toast.error("Approval failed", { id: "approve" });
    }
  }

  async function createCampaign() {
    if (!isConnected || !address) {
      toast.error("Connect wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      toast.error("Switch to Sepolia");
      return;
    }

    if (!name || !metadataURI) {
      toast.error("Enter name and metadata URI");
      return;
    }

    try {
      toast.loading("Creating campaign…", { id: "create" });

      await writeContractAsync({
        address: CONTRACTS.CampaignFactory,
        abi: CampaignFactoryABI,
        functionName: "createCampaign",
        args: [name, metadataURI],
      });

      toast.success("Campaign created", { id: "create" });
      setName("");
      setMetadataURI("");
    } catch (e) {
      console.error(e);
      toast.error("Creation failed", { id: "create" });
    }
  }

  async function mintRUSD() {
    if (!isConnected || !address) {
      toast.error("Connect wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      toast.error("Switch to Sepolia");
      return;
    }

    if (!isAddress(mintTo)) {
      toast.error("Invalid recipient address");
      return;
    }

    if (!mintAmount || Number(mintAmount) <= 0) {
      toast.error("Enter valid amount");
      return;
    }

    try {
      const value = parseEther(mintAmount);

      toast.loading("Minting rUSD…", { id: "mint" });

      await writeContractAsync({
        address: CONTRACTS.ReliefStablecoin,
        abi: ReliefStablecoinABI,

        functionName: "mint",
        args: [mintTo as `0x${string}`, value],
      });

      toast.success("rUSD minted successfully", { id: "mint" });
      setMintAmount("");
    } catch (e) {
      console.error(e);
      toast.error("Minting failed", { id: "mint" });
    }
  }

  async function distributeFunds() {
    if (!isConnected || !address) {
      toast.error("Connect wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      toast.error("Switch to Sepolia");
      return;
    }

    if (!isAddress(distributeTo)) {
      toast.error("Invalid provider address");
      return;
    }

    if (!distributeAmount || Number(distributeAmount) <= 0) {
      toast.error("Enter valid amount");
      return;
    }

    try {
      const value = parseEther(distributeAmount);

      toast.loading("Distributing funds…", { id: "treasury" });

      await writeContractAsync({
        address: CONTRACTS.CampaignTreasuryV2,
        abi: CampaignTreasuryABI,
        functionName: "redeemForProvider",
        args: [distributeTo as `0x${string}`, value],
      });

      toast.success("Funds distributed successfully", { id: "treasury" });
      setDistributeAmount("");
    } catch (e) {
      console.error(e);
      toast.error("Distribution failed", { id: "treasury" });
    }
  }

  async function issueVolunteerNFT() {
    if (!isConnected || !address) {
      toast.error("Connect wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      toast.error("Switch to Sepolia");
      return;
    }

    if (!isAddress(volunteerAddress)) {
      toast.error("Invalid volunteer address");
      return;
    }

    try {
      toast.loading("Issuing Volunteer NFT…", { id: "volunteer" });

      await writeContractAsync({
        address: CONTRACTS.VolunteerNFT,
        abi: VolunteerNFTABI,
        functionName: "issueVolunteer",
        args: [volunteerAddress as `0x${string}`],
      });

      toast.success("Volunteer NFT issued", { id: "volunteer" });
      setVolunteerAddress("");
    } catch (e) {
      console.error(e);
      toast.error("Failed to issue Volunteer NFT", { id: "volunteer" });
    }
  }

  async function registerProviderNFT() {
    if (!isConnected || !address) {
      toast.error("Connect wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      toast.error("Switch to Sepolia");
      return;
    }

    if (!isAddress(providerAddress)) {
      toast.error("Invalid provider address");
      return;
    }

    try {
      toast.loading("Registering provider…", { id: "provider" });

      await writeContractAsync({
        address: CONTRACTS.ServiceProviderNFT,
        abi: ServiceProviderNFTABI,
        functionName: "registerProvider",
        args: [providerAddress as `0x${string}`],
      });

      toast.success("Provider registered successfully", { id: "provider" });
      setProviderAddress("");
    } catch (e) {
      console.error(e);
      toast.error("Provider registration failed", { id: "provider" });
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* INTRO */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Admin Portal</h1>

        <p className="text-slate-600">
          Admins govern campaign legitimacy and system access. All actions below
          execute real on-chain transactions.
        </p>
      </section>

      {/* APPROVE */}
      <section className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
        <h2 className="font-semibold text-lg">Approve Campaign</h2>

        <input
          placeholder="Campaign Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border"
        />

        <input
          placeholder="Proposer Address"
          value={proposer}
          onChange={(e) => setProposer(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border"
        />

        <button
          onClick={approveCampaign}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl bg-sky-600 text-white disabled:opacity-50"
        >
          Approve Campaign
        </button>
      </section>

      {/* CREATE */}
      <section className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
        <h2 className="font-semibold text-lg">Create Campaign</h2>

        <input
          placeholder="Campaign Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border"
        />

        <input
          placeholder="Metadata URI"
          value={metadataURI}
          onChange={(e) => setMetadataURI(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border"
        />

        <button
          onClick={createCampaign}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl bg-emerald-600 text-white disabled:opacity-50"
        >
          Create Campaign
        </button>
      </section>

      {/* LINKS */}
      <section className="space-y-4">
        <Link href="/volunteer" className="text-sky-600 underline">
          Manage Volunteers →
        </Link>
        <br />
        <Link href="/provider" className="text-sky-600 underline">
          Manage Providers →
        </Link>
      </section>

      {/* MINT rUSD */}
      <section className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
        <h2 className="font-semibold text-lg">Mint rUSD (Admin Only)</h2>

        <input
          placeholder="Recipient Address"
          value={mintTo}
          onChange={(e) => setMintTo(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border"
        />

        <input
          placeholder="Amount in rUSD"
          value={mintAmount}
          onChange={(e) => setMintAmount(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border"
        />

        <button
          onClick={mintRUSD}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl bg-purple-600 text-white disabled:opacity-50"
        >
          Mint rUSD
        </button>

        <p className="text-xs text-slate-500">
          Only the contract owner can mint rUSD. This is enforced on-chain.
        </p>
      </section>

      {/* TREASURY DISTRIBUTION */}
      <section className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
        <h2 className="font-semibold text-lg">Distribute Funds (Treasury)</h2>

        <input
          placeholder="Provider Address"
          value={distributeTo}
          onChange={(e) => setDistributeTo(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border"
        />

        <input
          placeholder="Amount in rUSD"
          value={distributeAmount}
          onChange={(e) => setDistributeAmount(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border"
        />

        <button
          onClick={distributeFunds}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl bg-rose-600 text-white disabled:opacity-50"
        >
          Distribute Funds
        </button>

        <p className="text-xs text-slate-500">
          Funds can only be redeemed by registered service providers.
          Eligibility and balances are enforced on-chain.
        </p>
      </section>

      {/* ISSUE VOLUNTEER NFT */}
      <section className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
        <h2 className="font-semibold text-lg">Issue Volunteer NFT</h2>

        <input
          placeholder="Volunteer Address"
          value={volunteerAddress}
          onChange={(e) => setVolunteerAddress(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border"
        />

        <button
          onClick={issueVolunteerNFT}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl bg-indigo-600 text-white disabled:opacity-50"
        >
          Issue Volunteer NFT
        </button>

        <p className="text-xs text-slate-500">
          Only wallets holding a Volunteer NFT can verify victims.
        </p>
      </section>

      {/* REGISTER SERVICE PROVIDER */}
      <section className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
        <h2 className="font-semibold text-lg">Register Service Provider</h2>

        <input
          placeholder="Provider Address"
          value={providerAddress}
          onChange={(e) => setProviderAddress(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border"
        />

        <button
          onClick={registerProviderNFT}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl bg-teal-600 text-white disabled:opacity-50"
        >
          Register Provider
        </button>

        <p className="text-xs text-slate-500">
          Only registered providers can redeem funds from the treasury.
        </p>
      </section>
    </main>
  );
}
