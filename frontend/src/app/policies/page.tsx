export default function PoliciesPage() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-12">

        <header className="space-y-4">
          <h1 className="text-4xl font-semibold">Spending Policies</h1>
          <p className="text-gray-600">
            Funds distributed through RSYS are programmable.
            Spending rules are enforced directly by smart contracts.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium">Allowed Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Food", "Water", "Medicine", "Shelter"].map(item => (
              <div key={item} className="p-4 border rounded bg-white">
                ✅ {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium">Blocked Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Alcohol", "Tobacco", "Gambling"].map(item => (
              <div key={item} className="p-4 border rounded bg-white text-gray-400">
                🔒 {item}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t pt-8 text-sm text-gray-500">
          Policy rules are immutable once deployed and apply uniformly to all beneficiaries.
        </section>

      </div>
    </main>
  );
}
