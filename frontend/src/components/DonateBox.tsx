"use client";

import { useState } from "react";
import { parseEther } from "viem";
import { useAccount, useChainId, useWriteContract } from "wagmi";
import { sepolia } from "wagmi/chains";
import { toast } from "sonner";

import { CONTRACTS } from "@/lib/web3/contracts";
import { ERC20ABI, ReliefPoolDonateABI } from "@/lib/web3/abis";

export default function DonateBox() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { writeContractAsync, isPending } = useWriteContract();

  const [amount, setAmount] = useState("");
  const [step, setStep] = useState<
    "IDLE" | "APPROVING" | "DONATING"
  >("IDLE");

  async function donate() {
    if (!isConnected || !address) {
      toast.error("Please connect your wallet");
      return;
    }

    if (chainId !== sepolia.id) {
      toast.error("Please switch to Sepolia network");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      toast.error("Enter a valid donation amount");
      return;
    }

    try {
      const value = parseEther(amount);

      setStep("APPROVING");
      toast.loading("Approving rUSD…", { id: "donate" });

      // 1️⃣ Approve rUSD
      await writeContractAsync({
        address: CONTRACTS.ReliefStablecoin,
        abi: ERC20ABI,
        functionName: "approve",
        args: [CONTRACTS.ReliefPool, value],
      });

      setStep("DONATING");
      toast.loading("Sending donation…", { id: "donate" });

      // 2️⃣ Donate to ReliefPool
      await writeContractAsync({
        address: CONTRACTS.ReliefPool,
        abi: ReliefPoolDonateABI,
        functionName: "donate",
        args: [value],
      });

      toast.success("Donation successful", { id: "donate" });
      setAmount("");
    } catch (err) {
      console.error(err);
      toast.error("Transaction failed or rejected", { id: "donate" });
    } finally {
      setStep("IDLE");
    }
  }

  const disabled =
    isPending || step !== "IDLE";

  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4 max-w-xl">
      <h3 className="font-semibold text-lg">
        Donate to Relief Pool
      </h3>

      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in rUSD"
        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
      />

      <button
        onClick={donate}
        disabled={disabled}
        className="w-full px-4 py-3 rounded-xl bg-sky-600 text-white font-medium disabled:opacity-50 transition"
      >
        {step === "APPROVING" && "Approving…"}
        {step === "DONATING" && "Donating…"}
        {step === "IDLE" && "Donate"}
      </button>

      <p className="text-xs text-slate-500">
        Donation requires two on-chain transactions:
        approval followed by transfer.
      </p>
    </div>
  );
}
