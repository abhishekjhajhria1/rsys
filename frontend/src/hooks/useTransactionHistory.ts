import { useEffect, useState } from "react";
import { createPublicClient, http, parseAbiItem, formatUnits } from "viem";
import { sepolia } from "viem/chains";
import { CONTRACTS } from "@/constants/contracts";

const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});

type TxItem = {
  type: "donation" | "issue" | "redeem";
  address: string;
  amount: string;
};

export function useTransactionHistory() {
  const [txs, setTxs] = useState<TxItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);

      const fromBlock = BigInt(0);
      const toBlock = "latest";

      const donations = await client.getLogs({
        address: CONTRACTS.ReliefPool as `0x${string}`,
        event: parseAbiItem(
          "event DonationReceived(address indexed donor, uint256 amount)"
        ),
        fromBlock,
        toBlock,
      });

      const redeems = await client.getLogs({
        address: CONTRACTS.ReliefPool as `0x${string}`,
        event: parseAbiItem(
          "event Redeemed(address indexed provider, uint256 amount)"
        ),
        fromBlock,
        toBlock,
      });

      const parsed: TxItem[] = [
        ...donations.map((log) => ({
          type: "donation" as const,
          address: log.args.donor as string,
          amount: formatUnits(log.args.amount as bigint, 18),
        })),
        ...redeems.map((log) => ({
          type: "redeem" as const,
          address: log.args.provider as string,
          amount: formatUnits(log.args.amount as bigint, 18),
        })),
      ];

      setTxs(parsed.reverse());
      setLoading(false);
    }

    fetchEvents();
  }, []);

  return { txs, loading };
}
