import CampaignCard from "@/components/CampaignCard";
import { mockCampaigns } from "@/lib/mockCampaigns";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Disaster Relief Campaigns</h1>

      <div className="grid gap-4">
        {mockCampaigns.map((c) => (
          <CampaignCard
            key={c.address}
            address={c.address}
            title={c.title}
            status={c.status}
          />
        ))}
      </div>
    </main>
  );
}
