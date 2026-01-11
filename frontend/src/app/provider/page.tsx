"use client";

import { useState } from "react";
import { parseEther } from "viem";
import { useAccount, useChainId, useWriteContract } from "wagmi";
import { sepolia } from "wagmi/chains";
import { CONTRACTS } from "@/lib/web3/contracts";
import { CampaignTreasuryABI } from "@/lib/web3/abis";

export default function ServiceProviderPage() {
  const { address } = useAccount();
  const chainId = useChainId();
  const { writeContractAsync, isPending } = useWriteContract();

  const [amount, setAmount] = useState("");

  async function redeem() {
    if (!address) {
      alert("Connect wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      alert("Switch MetaMask to Sepolia");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Enter valid amount");
      return;
    }

    try {
      const value = parseEther(amount);

      await writeContractAsync({
        address: CONTRACTS.CampaignTreasuryV2,
        abi: CampaignTreasuryABI,
        functionName: "redeemForProvider",
        args: [address, value],
      });

      alert("Funds redeemed successfully");
      setAmount("");
    } catch (err) {
      console.error(err);
      alert("Redemption failed or reverted");
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Service Provider Portal
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Registered service providers can redeem funds for delivered aid.
          All redemptions are enforced on-chain.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Redeem Funds</h2>

        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount in rUSD"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
          />

          <button
            onClick={redeem}
            disabled={isPending}
            className="w-full px-4 py-3 rounded-xl bg-sky-600 text-white font-medium disabled:opacity-50"
          >
            {isPending ? "Redeeming…" : "Redeem Funds"}
          </button>

          <p className="text-xs text-slate-500">
            Redemption is executed via the Campaign Treasury and validated by
            smart contracts.
          </p>
        </div>
      </section>
    </main>
  );
}
