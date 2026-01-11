"use client";

import { useState } from "react";
import { parseEther } from "viem";
import { useAccount, useChainId, useWriteContract } from "wagmi";
import { sepolia } from "wagmi/chains";

import { CONTRACTS } from "@/lib/web3/contracts";
import { ERC20ABI, ReliefPoolDonateABI } from "@/lib/web3/abis";

export default function DonateBox() {
  const { address } = useAccount();
  const chainId = useChainId();
  const { writeContractAsync, isPending } = useWriteContract();

  const [amount, setAmount] = useState("");

  async function donate() {
    if (!address) {
      alert("Connect wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      alert("Switch to Sepolia");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Enter valid amount");
      return;
    }

    try {
      const value = parseEther(amount);

      // 1️⃣ Approve rUSD
      await writeContractAsync({
        address: CONTRACTS.ReliefStablecoin,
        abi: ERC20ABI,
        functionName: "approve",
        args: [CONTRACTS.ReliefPool, value],
      });

      // 2️⃣ Donate to ReliefPool
      await writeContractAsync({
        address: CONTRACTS.ReliefPool,
        abi: ReliefPoolDonateABI,
        functionName: "donate",
        args: [value],
      });

      alert("Donation successful");
      setAmount("");
    } catch (err) {
      console.error(err);
      alert("Donation failed or rejected");
    }
  }

  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
      <h3 className="font-semibold text-lg">Donate to Relief Pool</h3>

      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in rUSD"
        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
      />

      <button
        onClick={donate}
        disabled={isPending}
        className="w-full px-4 py-3 rounded-xl bg-sky-600 text-white font-medium disabled:opacity-50"
      >
        {isPending ? "Processing…" : "Donate"}
      </button>

      <p className="text-xs text-slate-500">
        Donation uses real on-chain transactions on Sepolia.
      </p>
    </div>
  );
}
