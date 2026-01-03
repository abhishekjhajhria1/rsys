"use client";

export default function Home() {
  return (
    <main className="bg-(--bg) text-(--text)">

      {/* ================= HERO ================= */}
      <section className="bg-(--card) border-b border-(--border)">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-block text-sm font-medium text-(--primary)">
              Emergency Infrastructure · Built for Zero Leakage
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              A Relief Distribution System
              <br />
              That Cannot Be Misused
            </h1>

            <p className="text-lg text-(--muted)">
              RSYS is a stablecoin-based emergency relief system where funds are
              distributed only to verified beneficiaries and can only be spent
              on approved humanitarian categories — enforced directly on-chain.
            </p>

            <div className="flex gap-4 pt-2">
              <button className="px-6 py-3 rounded bg-(--primary) text-white font-medium">
                View Live System
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 rounded border border-(--border)"
              >
                How It Works ↓
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="h-80 rounded-xl border border-(--border) bg-(--bg) flex items-center justify-center text-(--muted)">
              System Architecture Visual
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST / STATS ================= */}
      <section className="bg-(--bg) border-b border-(--border)">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["$1.24M", "Funds Secured"],
            ["1,248", "Verified Beneficiaries"],
            ["37", "Blocked Transactions"],
            ["0%", "Fund Leakage"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-2xl font-semibold">{value}</div>
              <div className="text-sm text-(--muted)">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="bg-(--card) border-b border-(--border)"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold text-center mb-4">
            How the System Works
          </h2>

          <p className="text-center text-(--muted) max-w-2xl mx-auto mb-16">
            Every step of the relief process is enforced by smart contracts —
            eliminating delays, misuse, and manual intervention.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Funds Donated",
                desc: "Donors contribute stablecoins to the relief pool. All funds are visible on-chain in real time.",
              },
              {
                step: "02",
                title: "Beneficiaries Verified",
                desc: "Affected individuals are verified and issued a non-transferable on-chain identity.",
              },
              {
                step: "03",
                title: "Spending Rules Applied",
                desc: "Each beneficiary wallet is restricted to approved categories like food, medicine, and shelter.",
              },
              {
                step: "04",
                title: "Transactions Enforced",
                desc: "Any attempt to misuse funds is automatically blocked by the protocol.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="border border-(--border) rounded-xl p-6 bg-(--bg)"
              >
                <div className="text-sm font-mono text-(--primary)">
                  STEP {item.step}
                </div>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-(--muted)">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRANSPARENCY ================= */}
      <section className="bg-(--bg) border-b border-(--border)">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-6">
            Transparency by Default
          </h2>

          <p className="text-(--muted) max-w-2xl mb-8">
            Every transaction is logged on-chain and can be publicly audited.
            Failed and blocked transactions are visible alongside successful
            ones.
          </p>

          <div className="space-y-4 font-mono text-sm">
            <div className="p-4 border border-(--border) rounded bg-(--card)">
              10:42:08 — Wallet 0x9c… attempted ALCOHOL ($12.00) — 🚫 Blocked
            </div>
            <div className="p-4 border border-(--border) rounded bg-(--card)">
              10:42:05 — Wallet 0x8a… purchased FOOD ($2.50) — ✔ Allowed
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTROLS ================= */}
      <section className="bg-(--card)">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Programmable Spending Controls
          </h2>

          <p className="text-(--muted) max-w-2xl mx-auto mb-12">
            Relief funds are not just distributed — they are governed by
            enforceable policies written into the protocol.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {["Food", "Water", "Medicine", "Shelter"].map((item) => (
              <div
                key={item}
                className="p-4 border border-(--border) rounded bg-(--bg)"
              >
                ✅ {item}
              </div>
            ))}
            {["Alcohol", "Tobacco"].map((item) => (
              <div
                key={item}
                className="p-4 border border-(--border) rounded text-(--muted)"
              >
                🔒 {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-(--bg) border-t border-(--border)">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Relief infrastructure should not rely on trust.
          </h3>

          <p className="text-(--muted) mb-8">
            RSYS replaces manual oversight with verifiable execution.
          </p>

          <button className="px-8 py-3 rounded bg-(--primary) text-white font-medium">
            Enter System Dashboard
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 text-center text-sm text-(--muted)">
        Built as emergency financial infrastructure — not a donation platform.
      </footer>
    </main>
  );
}
