import PoolBalance from "@/components/PoolBalance";
import TransactionHistory from "@/components/TransactionHistory";
import DonateBox from "@/components/DonateBox";

export default function CampaignPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Active Relief Campaign
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          This campaign collects and distributes disaster relief funds using
          on-chain enforcement and transparent auditing.
        </p>
      </section>

      {/* Campaign Overview */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
          <h3 className="font-semibold mb-2">Campaign Status</h3>
          <p className="text-slate-600 text-sm">
            Active and accepting donations.
          </p>
        </div>

        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
          <h3 className="font-semibold mb-2">Relief Pool Balance</h3>
          <PoolBalance />
          <p className="text-slate-600 text-xs mt-2">
            Live on-chain data from Sepolia
          </p>
        </div>

        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
          <h3 className="font-semibold mb-2">Spending Enforcement</h3>
          <p className="text-slate-600 text-sm">
            Funds can only be redeemed by verified roles for approved usage.
          </p>
        </div>
      </section>

      {/* Donate Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Donate to Campaign</h2>

        <DonateBox />
      </section>

      {/* Transaction History */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Transaction History</h2>

        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
          <TransactionHistory />
        </div>
      </section>
    </main>
  );
}
