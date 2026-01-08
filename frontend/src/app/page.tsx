import ConnectWallet from "@/components/ConnectWallet";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-black text-white">
      <h1 className="text-3xl font-bold">
        ReliefChain — On-Chain Disaster Relief
      </h1>

      <p className="text-zinc-400">
        Transparent campaigns. Controlled spending. Real impact.
      </p>

      <ConnectWallet />
    </main>
  );
}
