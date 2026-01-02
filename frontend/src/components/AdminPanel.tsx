"use client";

import { useState } from "react";
import { useWriteContract } from "wagmi";
import { RELIEF_FUND_ADDRESS, RELIEF_NFT_ADDRESS } from "@/lib/contracts";
import { reliefFundAbi } from "@/lib/abis/reliefFund";
import { reliefNFTAbi } from "@/lib/abis/reliefNFT";

export default function AdminPanel() {
  const [victim, setVictim] = useState("");
  const { writeContract } = useWriteContract();

  const mintNFT = async () => {
    await writeContract({
      address: RELIEF_NFT_ADDRESS,
      abi: reliefNFTAbi,
      functionName: "mint",
      args: [victim],
    });
  };

  const addBeneficiary = async () => {
    await writeContract({
      address: RELIEF_FUND_ADDRESS,
      abi: reliefFundAbi,
      functionName: "addBeneficiary",
      args: [victim],
    });
  };

  const distribute = async () => {
    await writeContract({
      address: RELIEF_FUND_ADDRESS,
      abi: reliefFundAbi,
      functionName: "distribution",
      args: [],
    });
  };

  return (
    <div className="p-6 border rounded w-96 flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Admin Panel</h2>

      <input
        value={victim}
        onChange={(e) => setVictim(e.target.value)}
        placeholder="Victim wallet address"
        className="border p-2 rounded"
      />

      <button
        onClick={mintNFT}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Mint Relief NFT
      </button>

      <button
        onClick={addBeneficiary}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Beneficiary
      </button>

      <button
        onClick={distribute}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Distribute Funds
      </button>
    </div>
  );
}
