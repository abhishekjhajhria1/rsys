import { useWriteContract } from "wagmi";
import { CONTRACTS } from "@/constants/contracts";
import { ADMIN_NFT_ABI } from "@/constants/abis";

export function useAdmin() {
  const { writeContractAsync } = useWriteContract();

  const issueVolunteer = async (address: string) => {
    await writeContractAsync({
      address: CONTRACTS.CampaignAdminNFT as `0x${string}`,
      abi: ADMIN_NFT_ABI,
      functionName: "issueVolunteer",
      args: [address],
    });
  };

  return { issueVolunteer };
}
