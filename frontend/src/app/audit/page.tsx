"use client";

export default function AuditPage() {
  return (
    <main className="bg-(--bg) min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="border-b border-(--border) bg-(--card)">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-semibold">
            Public Audit Trail
          </h1>
          <p className="text-(--muted) mt-1 max-w-2xl">
            Every transaction in the RSYS protocol is recorded on-chain and
            publicly auditable. Both successful and blocked transactions are
            visible to ensure complete transparency.
          </p>
        </div>
      </section>

      {/* ================= SUMMARY ================= */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["1,284", "Total Transactions"],
            ["1,247", "Allowed Transactions"],
            ["37", "Blocked Transactions"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-(--card) border border-(--border) rounded-xl p-6"
            >
              <div className="text-2xl font-semibold">{value}</div>
              <div className="text-sm text-(--muted) mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= AUDIT TABLE ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold mb-4">
          Transaction Log
        </h2>

        <div className="bg-(--card) border border-(--border) rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-(--bg) border-b border-(--border) text-(--muted)">
              <tr>
                <th className="text-left px-4 py-3">Timestamp</th>
                <th className="text-left px-4 py-3">Wallet</th>
                <th className="text-left px-4 py-3">Category</th>
                <th className="text-left px-4 py-3">Amount</th>
                <th className="text-left px-4 py-3">Result</th>
              </tr>
            </thead>

            <tbody>
              {/* BLOCKED */}
              <tr className="border-b border-(--border)">
                <td className="px-4 py-3">10:42:08</td>
                <td className="px-4 py-3">0x9c…21a</td>
                <td className="px-4 py-3">Alcohol</td>
                <td className="px-4 py-3">$12.00</td>
                <td className="px-4 py-3 text-red-600 font-medium">
                  Blocked
                </td>
              </tr>

              {/* ALLOWED */}
              <tr className="border-b border-(--border)">
                <td className="px-4 py-3">10:42:05</td>
                <td className="px-4 py-3">0x8a…92f</td>
                <td className="px-4 py-3">Food</td>
                <td className="px-4 py-3">$2.50</td>
                <td className="px-4 py-3 text-(--success) font-medium">
                  Allowed
                </td>
              </tr>

              <tr className="border-b border-(--border)">
                <td className="px-4 py-3">10:40:11</td>
                <td className="px-4 py-3">0x31…aa9</td>
                <td className="px-4 py-3">Medicine</td>
                <td className="px-4 py-3">$54.00</td>
                <td className="px-4 py-3 text-(--success) font-medium">
                  Allowed
                </td>
              </tr>

              <tr>
                <td className="px-4 py-3">10:38:44</td>
                <td className="px-4 py-3">0x77…b21</td>
                <td className="px-4 py-3">Tobacco</td>
                <td className="px-4 py-3">$8.50</td>
                <td className="px-4 py-3 text-red-600 font-medium">
                  Blocked
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= WHY THIS EXISTS ================= */}
      <section className="bg-(--card) border-t border-(--border)">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Why Public Audit Matters
          </h3>
          <p className="text-(--muted)">
            Traditional relief systems rely on reports and trust. RSYS replaces
            this with cryptographic guarantees — every decision, allowed or
            blocked, is permanently recorded and publicly verifiable.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-sm text-(--muted)">
        Transparency is enforced by protocol, not promised by intermediaries.
      </footer>

    </main>
  );
}
