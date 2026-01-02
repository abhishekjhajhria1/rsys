import { useAccount, useReadContract } from "wagmi";
import { RELIEF_NFT_ADDRESS } from "@/lib/contracts";
import { reliefNFTAbi } from "@/lib/abis/reliefNFT";
import { SUPER_ADMIN, VOLUNTEERS } from "@/lib/roles";

export type Role = "admin" | "volunteer" | "victim" | "public";

export function useRole(): Role {
  const { address } = useAccount();

  const { data: victimBalance } = useReadContract({
    address: RELIEF_NFT_ADDRESS,
    abi: reliefNFTAbi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
  }) as { data?: bigint };

  if (!address) return "public";

  const addr = address.toLowerCase();

  if (addr === SUPER_ADMIN) return "admin";
  if (VOLUNTEERS.includes(addr)) return "volunteer";
  if (victimBalance !== undefined && victimBalance > 0n) return "victim";

  return "public";
}
