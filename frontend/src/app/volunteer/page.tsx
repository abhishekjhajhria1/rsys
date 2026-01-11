import WalletGate from "@/components/WalletGate";
import VerifyVictim from "@/components/VerifyVictim";

export default function VolunteerPage() {
  return (
    <WalletGate>
      <div style={{ padding: 24 }}>
        <h2>Volunteer Panel</h2>
        <VerifyVictim />
      </div>
    </WalletGate>
  );
}
