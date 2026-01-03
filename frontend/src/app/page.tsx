"use client";


import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 text-[#0F172A]">

        {/* HERO */}
        <section
          id="hero"
          className="relative overflow-hidden bg-white"
        >
          {/* 🔮 Background visual goes here later */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {/* IMAGE PLACEHOLDER */}
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Zero-Leakage Relief Deployment
              </h1>

              <p className="text-lg text-gray-600">
                A precision logistics system for emergency aid —
                programmable, auditable, and enforced on-chain.
              </p>

              <div className="flex gap-4">
                <button className="px-6 py-3 rounded bg-[#F7A600] text-white font-medium">
                  Authorize Donation
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-6 py-3 rounded border border-gray-300"
                >
                  How It Works ↓
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              {/* 🔮 HERO VISUAL PLACEHOLDER */}
              <div className="h-80 rounded-xl bg-gray-100 border" />
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="bg-[#F8FAFC] border-y">
          <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ["$1.2M", "Total Secured"],
              ["48", "Active Wallets"],
              ["12", "Blocked Tx"],
              ["0.00%", "System Leakage"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-mono text-xl">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <h2 className="text-3xl font-semibold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Donor authorizes funds",
              "Funds locked on-chain",
              "Victims verified via NFT",
              "Spending enforced by policy",
            ].map((text, i) => (
              <div key={i} className="space-y-2">
                <div className="text-sm font-medium">Step {i + 1}</div>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY THIS MATTERS */}
        <section
          id="why-this-matters"
          className="relative bg-white py-24"
        >
          {/* 🔮 SUBTLE MAP / ILLUSTRATION BACKGROUND */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            {/* IMAGE PLACEHOLDER */}
          </div>

          <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Why This Matters
            </h2>
            <p className="text-gray-600">
              Traditional aid systems lose funds to delays, misuse,
              and lack of accountability. RSYS replaces trust with
              verifiable execution.
            </p>
          </div>
        </section>

        {/* DONATE AGAIN */}
        <section className="bg-[#F8FAFC] py-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Your donation is enforced by code, not trust
          </h3>
          <button className="px-8 py-3 rounded bg-[#F7A600] text-white font-medium">
            Deploy Relief Funds
          </button>
        </section>

        {/* TRANSPARENCY PREVIEW */}
        <section
          id="transparency"
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <h2 className="text-3xl font-semibold mb-8">
            Transparency by Design
          </h2>

          <div className="space-y-4 font-mono text-sm">
            <div className="p-4 bg-white border rounded">
              10:42:08 — Wallet 0x9c… attempted ALCOHOL ($12.00) — 🚫 Blocked
            </div>
            <div className="p-4 bg-white border rounded">
              10:42:05 — Wallet 0x8a… purchased FOOD ($2.50) — ✔ Allowed
            </div>
          </div>
        </section>

        {/* POLICY PREVIEW */}
        <section
          id="policies"
          className="bg-white py-20"
        >
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Programmable Spending Controls
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Food", "Water", "Medicine"].map(item => (
                <div key={item} className="p-4 border rounded">
                  ✅ {item}
                </div>
              ))}
              {["Alcohol", "Tobacco"].map(item => (
                <div key={item} className="p-4 border rounded text-gray-400">
                  🔒 {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 text-center text-sm text-gray-500">
          Built as emergency infrastructure — not a charity bucket.
        </footer>

      </main>
    </>
  );
}
