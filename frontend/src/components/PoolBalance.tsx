"use client";

import { useReadContract } from "wagmi";
import { CONTRACTS } from "@/lib/web3/contracts";
import { ReliefPoolABI } from "@/lib/web3/abis";
import { formatEther } from "viem";

export default function PoolBalance() {
  const { data, isLoading, isError } = useReadContract({
    address: CONTRACTS.ReliefPool,
    abi: ReliefPoolABI,
    functionName: "totalFunds",
  });

  let content = "—";

  if (isLoading) {
    content = "Loading…";
  }

  if (isError) {
    content = "Error fetching balance";
  }

  if (data) {
    content = `${formatEther(data)} RSC`;
  }

  return (
    <p className="text-slate-900 font-medium">
      {content}
    </p>
  );
}
