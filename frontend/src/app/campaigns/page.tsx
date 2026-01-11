import CampaignList from "@/components/CampaignList";

export default function CampaignsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">
          Campaigns
        </h1>
        <p className="text-slate-600">
          All campaigns are created on-chain via the Campaign Factory and are
          publicly auditable.
        </p>
      </header>

      <CampaignList />
    </main>
  );
}
