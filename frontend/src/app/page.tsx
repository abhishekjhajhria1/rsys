import ConnectWallet from "@/components/ConnectWallet";
import Donate from "@/components/Donate";
import AdminPanel from "@/components/AdminPanel";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded text-sm text-center">
        Demo Mode: Admin & Volunteer roles are simulated for MVP. Victim
        verification via NFT is fully on-chain.
      </div>
      <h1 className="text-3xl font-bold">Emergency Relief Stablecoin System</h1>

      <ConnectWallet />
      <Donate />
      <AdminPanel />
    </main>
  );
}
