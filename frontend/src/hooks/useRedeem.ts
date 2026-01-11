import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { CONTRACTS } from "@/constants/contracts";
import { TREASURY_ABI } from "@/constants/abis";

export function useRedeem() {
  const { writeContractAsync } = useWriteContract();

  const redeem = async (amount: string, category = 0) => {
    const value = parseUnits(amount, 18);

    await writeContractAsync({
      address: CONTRACTS.CampaignTreasuryV2 as `0x${string}`,
      abi: TREASURY_ABI,
      functionName: "redeemForProvider",
      args: [CONTRACTS.ServiceProviderNFT, value, category],
    });
  };

  return { redeem };
}
