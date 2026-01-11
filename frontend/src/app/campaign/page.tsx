import WalletGate from "@/components/WalletGate";
import DonateBox from "@/components/DonateBox";
import TransactionHistory from "@/components/TransactionHistory";


export default function CampaignPage() {
  return (
    <WalletGate>
      <div style={{ padding: 24 }}>
        <h2>Campaign Dashboard</h2>
        <DonateBox />
        <TransactionHistory />

      </div>
    </WalletGate>
  );
}
