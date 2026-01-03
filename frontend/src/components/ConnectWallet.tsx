"use client";

import { sepolia } from "wagmi/chains";
import {
  useChainId,
  useAccount,
  useConnect,
  useDisconnect,
} from "wagmi";
import { useEffect, useState } from "react";

export default function ConnectWallet() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const chainId = useChainId();
  const isSepolia = chainId === sepolia.id;

  // 🚫 Prevent SSR/client mismatch
  if (!mounted) return null;

  if (isConnected) {
    return (
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm">
          Connected: {address?.slice(0, 6)}…{address?.slice(-4)}
        </span>

        {!isSepolia && (
          <p className="text-sm text-red-600">
            Please switch to Sepolia network
          </p>
        )}

        <button
          onClick={() => disconnect()}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Connect Wallet
    </button>
  );
}
