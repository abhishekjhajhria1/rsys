export default function TransparencyPage() {
  return (
    <main className="bg-white text-[#0F172A]">
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-12">

        <header className="space-y-4">
          <h1 className="text-4xl font-semibold">Operational Transparency</h1>
          <p className="text-gray-600">
            RSYS is designed so that every unit of value can be independently audited.
            Trust is replaced with verifiable execution.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium">What Is Publicly Auditable</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Smart contract balances and flows</li>
            <li>Donation transactions and timestamps</li>
            <li>Policy enforcement outcomes</li>
            <li>Beneficiary wallet distributions</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium">Example Enforcement Logs</h2>
          <div className="font-mono text-sm space-y-3">
            <div className="p-4 border rounded">
              10:42:08 — Wallet 0x9c… attempted ALCOHOL ($12.00) — 🚫 Blocked
            </div>
            <div className="p-4 border rounded">
              10:42:05 — Wallet 0x8a… purchased FOOD ($2.50) — ✔ Allowed
            </div>
          </div>
        </section>

        <section className="border-t pt-8 text-sm text-gray-500">
          Auditor tools and downloadable reports will be available in a future release.
        </section>

      </div>
    </main>
  );
}
