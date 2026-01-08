import Link from "next/link";
import ConnectWallet from "./ConnectWallet";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-black">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-lg font-bold text-white">
          ReliefChain
        </Link>

        <Link
          href="/create"
          className="text-sm text-zinc-400 hover:text-white"
        >
          Create Campaign
        </Link>

        <Link
          href="/provider"
          className="text-sm text-zinc-400 hover:text-white"
        >
          Provider
        </Link>
      </div>

      <ConnectWallet />
    </nav>
  );
}
