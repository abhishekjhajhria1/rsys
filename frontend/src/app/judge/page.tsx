export default function JudgeModePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Judge Mode
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          This page explains the RSYS architecture, fund flow, and enforcement
          model. No actions can be performed here.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">The Problem</h2>
        <p className="text-slate-600">
          Traditional disaster relief systems suffer from corruption, delayed
          fund delivery, and a complete lack of donor visibility. Once money is
          donated, donors cannot verify how or where it is spent.
        </p>
      </section>

      {/* Solution */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">The RSYS Solution</h2>
        <p className="text-slate-600">
          RSYS uses smart contracts to enforce how relief funds can be used.
          Donations are fully transparent, spending is restricted by rules, and
          every transaction is auditable on-chain.
        </p>
      </section>

      {/* Architecture */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">System Architecture</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
            <h3 className="font-semibold mb-2">Identity Layer (NFTs)</h3>
            <p className="text-slate-600 text-sm">
              Roles such as Campaign Admins, Volunteers, Victims, and Service
              Providers are represented by NFTs. Only verified roles can
              perform specific actions.
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
            <h3 className="font-semibold mb-2">Funds Layer</h3>
            <p className="text-slate-600 text-sm">
              Donations are pooled into a relief contract. Funds cannot be
              withdrawn arbitrarily and are only released through enforced
              redemption logic.
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
            <h3 className="font-semibold mb-2">Enforcement Layer</h3>
            <p className="text-slate-600 text-sm">
              Smart contracts ensure funds can only be spent for approved
              purposes. Invalid or unauthorized transactions automatically
              revert on-chain.
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
            <h3 className="font-semibold mb-2">Auditability</h3>
            <p className="text-slate-600 text-sm">
              All donations, transfers, and redemptions are public blockchain
              events. Donors and auditors can independently verify outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">End-to-End Flow</h2>
        <ol className="list-decimal list-inside space-y-2 text-slate-600">
          <li>Donors contribute funds to an active relief campaign.</li>
          <li>Funds are stored securely in an on-chain relief pool.</li>
          <li>Verified service providers request funds for approved usage.</li>
          <li>Smart contracts enforce rules before releasing funds.</li>
          <li>All actions remain transparent and auditable.</li>
        </ol>
      </section>
    </main>
  );
}
