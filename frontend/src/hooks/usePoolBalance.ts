import { useReadContract } from "wagmi";
import { formatUnits } from "viem";
import { CONTRACTS } from "@/constants/contracts";

const BALANCE_ABI = [
  {
    name: "balanceOf",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "account", type: "address" }],
    outputs: [{ type: "uint256" }],
  },
];

export function usePoolBalance() {
  const { data, isLoading, refetch } = useReadContract({
    address: CONTRACTS.ReliefStablecoin as `0x${string}`,
    abi: BALANCE_ABI,
    functionName: "balanceOf",
    args: [CONTRACTS.ReliefPool],
  });

  return {
    balance: data ? formatUnits(data as bigint, 18) : "0",
    isLoading,
    refetch,
  };
}
