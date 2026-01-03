export default function RoadmapPage() {
  return (
    <main className="bg-white text-[#0F172A]">
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-12">

        <header className="space-y-4">
          <h1 className="text-4xl font-semibold">Roadmap & Vision</h1>
          <p className="text-gray-600">
            RSYS is designed as long-term emergency infrastructure,
            not a one-off relief campaign.
          </p>
        </header>

        <section className="space-y-6">
          <div>
            <h3 className="font-medium">Phase 1 — Emergency Pilot</h3>
            <p className="text-gray-600 text-sm">
              Core contracts, donation flow, and policy enforcement.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Phase 2 — Volunteer Authorization</h3>
            <p className="text-gray-600 text-sm">
              NFT-based volunteer roles and beneficiary onboarding.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Phase 3 — Vendor Integration</h3>
            <p className="text-gray-600 text-sm">
              Merchant allowlists and controlled spending acceptance.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Phase 4 — Multi-Region Deployment</h3>
            <p className="text-gray-600 text-sm">
              Regional disaster segmentation and cross-chain scaling.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
