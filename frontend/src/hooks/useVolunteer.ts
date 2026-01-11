import { useWriteContract } from "wagmi";
import { CONTRACTS } from "@/constants/contracts";
import { VICTIM_NFT_ABI } from "@/constants/abis";

export function useVolunteer() {
  const { writeContractAsync } = useWriteContract();

  const verifyVictim = async (address: string) => {
    await writeContractAsync({
      address: CONTRACTS.VictimNFT as `0x${string}`,
      abi: VICTIM_NFT_ABI,
      functionName: "verifyVictim",
      args: [address],
    });
  };

  return { verifyVictim };
}
