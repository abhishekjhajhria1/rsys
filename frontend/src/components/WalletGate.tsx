"use client";

import { useAccount, useChainId } from "wagmi";

export default function WalletGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isConnected } = useAccount();
  const chainId = useChainId();

  if (!isConnected) return <div>Connect Wallet</div>;
  if (chainId !== 11155111) return <div>Switch to Sepolia</div>;

  return <>{children}</>;
}
