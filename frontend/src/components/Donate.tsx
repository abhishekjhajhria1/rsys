"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { MOCK_USDC_ADDRESS, RELIEF_FUND_ADDRESS } from "@/lib/contracts";
import { usdcAbi } from "@/lib/abis/usdc";
import { reliefFundAbi } from "@/lib/abis/reliefFund";

export default function Donate() {
  const { address } = useAccount();

  const { data: balance } = useReadContract({
    address: MOCK_USDC_ADDRESS,
    abi: usdcAbi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
  });

  const { writeContract: approve } = useWriteContract();
  const { writeContract: donate } = useWriteContract();

  const amount = parseUnits("1", 6); // 1 USDC

  const handleDonate = async () => {
    await approve({
      address: MOCK_USDC_ADDRESS,
      abi: usdcAbi,
      functionName: "approve",
      args: [RELIEF_FUND_ADDRESS, amount],
    });

    await donate({
      address: RELIEF_FUND_ADDRESS,
      abi: reliefFundAbi,
      functionName: "donate",
      args: [amount],
    });
  };

  

  return (
    <div className="p-6 border rounded w-80 flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Donate USDC</h2>

      <p className="text-sm">
        Balance:{" "}
        {balance ? Number(balance) / 1_000_000 : "—"} USDC
      </p>

      <button
        onClick={handleDonate}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Donate 1 USDC
      </button>
    </div>
  );
}
