import WalletGate from "@/components/WalletGate";

export default function JudgePage() {
  return (
    <WalletGate>
      <div style={{ padding: 24, maxWidth: 800 }}>
        <h2>Judge Mode – How to Evaluate This Project</h2>

        <ol style={{ marginTop: 16, lineHeight: 1.6 }}>
          <li>
            <strong>Campaign Creation</strong>
            <br />
            Campaigns are created via a factory and approved by voting.
          </li>

          <li>
            <strong>Donation Flow</strong>
            <br />
            Donors approve and donate rUSD → funds go to the Pool contract.
          </li>

          <li>
            <strong>Token Accounting</strong>
            <br />
            Pool issues accounting tokens (rPOOL) to the Treasury.
          </li>

          <li>
            <strong>Identity Enforcement</strong>
            <br />
            Admins, Volunteers, Victims, and Providers are verified using NFTs.
          </li>

          <li>
            <strong>Restricted Spending</strong>
            <br />
            Providers can redeem funds only if:
            <ul>
              <li>They own a Provider NFT</li>
              <li>The spending category is allowed </li>
            </ul>
          </li>

          <li>
            <strong>Transparency</strong>
            <br />
            All actions are on-chain and auditable.
          </li>
        </ol>

        <p style={{ marginTop: 24 }}>
          This system demonstrates how disaster relief can be transparent,
          permissioned, and corruption-resistant using blockchain.
        </p>
      </div>
    </WalletGate>
  );
}
