import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { CONTRACTS } from "@/constants/contracts";
import { ERC20_ABI, RELIEF_POOL_ABI } from "@/constants/abis";
import { toast } from "sonner";

export function useDonate() {
  const { writeContractAsync } = useWriteContract();

  const donate = async (amount: string) => {
    try {
      toast.loading("Approving rUSD...");

      const value = parseUnits(amount, 18);

      await writeContractAsync({
        address: CONTRACTS.ReliefStablecoin as `0x${string}`,
        abi: ERC20_ABI,
        functionName: "approve",
        args: [CONTRACTS.ReliefPool, value],
      });

      toast.loading("Donating to relief pool...");

      await writeContractAsync({
        address: CONTRACTS.ReliefPool as `0x${string}`,
        abi: RELIEF_POOL_ABI,
        functionName: "donate",
        args: [value],
      });

      toast.success("Donation successful 🎉");
    } catch {
      toast.error("Transaction failed");
    }
  };

  return { donate };
}
