import WalletGate from "@/components/WalletGate";
import IssueVolunteer from "@/components/IssueVolunteer";

export default function AdminPage() {
  return (
    <WalletGate>
      <div style={{ padding: 24 }}>
        <h2>Admin Panel</h2>
        <IssueVolunteer />
      </div>
    </WalletGate>
  );
}
