"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { metaMask } from "wagmi/connectors";

export default function ConnectWalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button
        onClick={() => disconnect()}
        className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm"
      >
        {address?.slice(0, 6)}…{address?.slice(-4)}
      </button>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: metaMask() })}
      disabled={isPending}
      className="px-4 py-2 rounded-xl bg-sky-600 text-white text-sm disabled:opacity-50"
    >
      {isPending ? "Connecting…" : "Connect Wallet"}
    </button>
  );
}
