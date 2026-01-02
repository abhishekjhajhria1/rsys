import ConnectWallet from "@/components/ConnectWallet";
import Donate from "@/components/Donate";
import AdminPanel from "@/components/AdminPanel";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">
        Emergency Relief Stablecoin System
      </h1>

      <ConnectWallet />
      <Donate />
      <AdminPanel />
    </main>
  );
}
