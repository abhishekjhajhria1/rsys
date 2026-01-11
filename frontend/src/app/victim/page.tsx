export default function VictimPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Victim Portal
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Victims are verified beneficiaries of disaster relief. Verification
          is performed by Volunteers and recorded on-chain using a Victim NFT.
        </p>
      </section>

      {/* Role Description */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Role Overview</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>Represents individuals affected by a disaster</li>
          <li>Verification is required before receiving assistance</li>
          <li>Identity is protected while eligibility is enforced</li>
        </ul>
      </section>

      {/* Victim Actions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Victim Actions</h2>

        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-4">
          <p className="text-slate-600 text-sm">
            Once verified, victims become eligible to receive aid distributed
            through approved service providers. All allocations are transparent
            and enforced by smart contracts.
          </p>

          <button
            disabled
            className="w-full px-4 py-3 rounded-xl bg-sky-600 text-white font-medium opacity-60 cursor-not-allowed"
          >
            View Aid Status (Verification Required)
          </button>
        </div>
      </section>
    </main>
  );
}
