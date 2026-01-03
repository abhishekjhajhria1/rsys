"use client";

export default function VolunteerPanel() {
  return (
    <main className="bg-(--bg) min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="border-b border-(--border) bg-(--card)">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-semibold">
            Volunteer Operations Panel
          </h1>
          <p className="text-(--muted) mt-1 max-w-2xl">
            Authorized volunteers verify affected individuals and issue
            non-transferable on-chain identities required to receive relief funds.
          </p>
        </div>
      </section>

      {/* ================= STATUS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-(--card) border border-(--border) rounded-xl p-6">
          <h2 className="font-semibold mb-2">
            Authorization Status
          </h2>
          <p className="text-sm text-(--muted) mb-4">
            Only verified volunteers can issue beneficiary access NFTs.
          </p>

          <div className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded border border-(--border) bg-(--bg)">
            <span className="text-yellow-600">●</span>
            Volunteer Not Verified (Demo Mode)
          </div>
        </div>
      </section>

      {/* ================= CORE ACTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <div className="grid md:grid-cols-2 gap-6">

          {/* ISSUE NFT */}
          <div className="bg-(--card) border border-(--border) rounded-xl p-6">
            <h3 className="font-semibold mb-2">
              Issue Beneficiary Access NFT
            </h3>

            <p className="text-sm text-(--muted) mb-4">
              This action verifies an affected individual and grants them
              permission to receive and spend relief funds under protocol rules.
            </p>

            <input
              className="w-full border border-(--border) rounded px-3 py-2 mb-3"
              placeholder="Victim Wallet Address"
            />

            <button
              disabled
              className="w-full px-4 py-2 rounded bg-(--border) text-(--muted) cursor-not-allowed"
            >
              Issue NFT (Disabled in Demo)
            </button>

            <p className="text-xs text-(--muted) mt-2">
              NFT issuance is restricted to verified volunteers only.
            </p>
          </div>

          {/* REGION ASSIGNMENT */}
          <div className="bg-(--card) border border-(--border) rounded-xl p-6">
            <h3 className="font-semibold mb-2">
              Assigned Field Region
            </h3>

            <p className="text-sm text-(--muted) mb-4">
              Volunteers are assigned specific geographic regions or relief
              zones for beneficiary onboarding.
            </p>

            <div className="border border-(--border) rounded p-4 bg-(--bg) text-sm text-(--muted)">
              No region assigned (Demo Mode)
            </div>

            <button
              disabled
              className="mt-4 w-full px-4 py-2 rounded bg-(--border) text-(--muted) cursor-not-allowed"
            >
              View Assigned Beneficiaries
            </button>
          </div>

        </div>
      </section>

      {/* ================= SAFETY ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-(--bg) border border-(--border) rounded-xl p-6">
          <h2 className="font-semibold mb-3">
            Accountability & Safety
          </h2>

          <ul className="text-sm text-(--muted) space-y-2">
            <li>• All NFT issuances are recorded on-chain</li>
            <li>• Volunteer actions are publicly auditable</li>
            <li>• NFTs are non-transferable and identity-bound</li>
            <li>• Misuse results in immediate protocol enforcement</li>
          </ul>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-sm text-(--muted)">
        Volunteer access is limited, monitored, and cryptographically enforced.
      </footer>

    </main>
  );
}
