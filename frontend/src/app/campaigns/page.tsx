'use client';

import CampaignList from "@/components/CampaignList";

export default function CampaignsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-16">
      {/* PAGE INTRO */}
      <header className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Relief Campaigns
        </h1>

        <p className="text-slate-600">
          Campaigns in RSYS represent approved disaster relief initiatives.
          They establish legitimacy and governance, while all funds are managed
          transparently by smart contracts.
        </p>
      </header>


      {/* HOW CAMPAIGNS WORK */}
      <section className="grid md:grid-cols-3 gap-6">
        <InfoCard
          title="On-Chain Approval"
          text="Campaigns must be approved before they can be created on-chain."
        />
        <InfoCard
          title="Publicly Auditable"
          text="Every campaign is deployed via the Campaign Factory and is verifiable."
        />
        <InfoCard
          title="No Direct Fund Control"
          text="Campaigns define governance only — funds are enforced by contracts."
        />
      </section>

      {/* CAMPAIGN LIST */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Live Campaigns
        </h2>

        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
          <CampaignList />
        </div>
      </section>

      {/* FOOTNOTE */}
      <p className="text-xs text-slate-500 max-w-3xl">
        This list is populated directly from on-chain events emitted by the
        Campaign Factory contract.
      </p>
    </main>
  );
}

/* ---------- Helper ---------- */

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-2 hover:border-slate-300 transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}
