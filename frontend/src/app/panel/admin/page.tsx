"use client";

export default function AdminPage() {
  return (
    <main className="bg-(--bg) min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="border-b border-(--border) bg-(--card)">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-semibold">
            Authority Control Panel
          </h1>
          <p className="text-(--muted) mt-1">
            Administrative access for managing beneficiaries, policies, and system enforcement
          </p>
        </div>
      </section>

      {/* ================= ADMIN POWERS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Verify Beneficiaries", "Approve and onboard verified recipients"],
            ["Enforce Spending Rules", "Restrict fund usage to humanitarian categories"],
            ["Audit System Activity", "Monitor allowed and blocked transactions"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-(--card) border border-(--border) rounded-xl p-6"
            >
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-(--muted)">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VERIFY BENEFICIARY ================= */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-(--card) border border-(--border) rounded-xl p-6">
          <h2 className="font-semibold mb-4">
            Verify Beneficiary
          </h2>

          <p className="text-sm text-(--muted) mb-4">
            Only verified beneficiaries can receive and spend relief funds.
            Verification issues a non-transferable on-chain identity.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="w-full border border-(--border) rounded px-3 py-2"
              placeholder="Beneficiary Wallet Address"
            />
            <button className="bg-(--primary) text-white rounded px-4 py-2">
              Verify & Issue Identity
            </button>
          </div>
        </div>
      </section>

      {/* ================= ASSIGN SPENDING POLICIES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-(--card) border border-(--border) rounded-xl p-6">
          <h2 className="font-semibold mb-4">
            Assign Spending Policies
          </h2>

          <p className="text-sm text-(--muted) mb-6">
            Define which categories a beneficiary is allowed to spend funds on.
            Any violation is automatically blocked by the protocol.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              className="w-full border border-(--border) rounded px-3 py-2"
              placeholder="Beneficiary Wallet Address"
            />

            <div className="grid grid-cols-2 gap-3 text-sm">
              {["Food", "Water", "Medicine", "Shelter"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 border border-(--border) rounded px-3 py-2"
                >
                  <input type="checkbox" />
                  {item}
                </label>
              ))}

              {["Alcohol", "Tobacco"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 border border-(--border) rounded px-3 py-2 text-(--muted)"
                >
                  🔒 {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-(--primary) text-white rounded px-6 py-2">
              Apply Spending Rules
            </button>
          </div>
        </div>
      </section>

      {/* ================= SYSTEM SAFETY ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-(--bg) border border-(--border) rounded-xl p-6">
          <h2 className="font-semibold mb-2">
            Enforcement & Safety Guarantees
          </h2>

          <ul className="text-sm text-(--muted) space-y-2">
            <li>• All rules are enforced at the smart contract level</li>
            <li>• Beneficiary identities are non-transferable</li>
            <li>• Unauthorized transactions are automatically blocked</li>
            <li>• All actions are publicly auditable on-chain</li>
          </ul>
        </div>
      </section>

    </main>
  );
}
