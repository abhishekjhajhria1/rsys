import Link from "next/link";
import WalletGate from "@/components/WalletGate";

export default function Home() {
  return (
    <WalletGate>
      <div style={{ padding: 24 }}>
        <h1>Disaster Relief Campaign</h1>

        <p>Transparent on-chain relief system</p>

        <Link href="/campaign">Go to Campaign →</Link>
      </div>
    </WalletGate>
  );
}
