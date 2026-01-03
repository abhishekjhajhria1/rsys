export default function AdminPanel() {
  return (
    <main className="bg-white text-[#0F172A] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-12">

        <header className="space-y-3">
          <h1 className="text-3xl font-semibold">Admin Command Panel</h1>
          <p className="text-gray-600 max-w-2xl">
            This panel is used to authorize relief operations,
            manage volunteers, and deploy funds.
          </p>
        </header>

        {/* SYSTEM STATUS */}
        <section className="p-6 border rounded bg-[#F8FAFC] space-y-2">
          <h2 className="font-medium">System Status</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Smart contracts deployed</li>
            <li>• Policy enforcement active</li>
            <li>• Distribution engine paused</li>
          </ul>
        </section>

        {/* ADMIN ACTIONS */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">Administrative Actions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded bg-white space-y-3">
              <h3 className="font-medium">Authorize Disaster Zone</h3>
              <p className="text-sm text-gray-600">
                Opens a new relief operation for a verified emergency region.
              </p>
              <button
                disabled
                className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed"
              >
                Authorize Zone (Coming Soon)
              </button>
            </div>

            <div className="p-6 border rounded bg-white space-y-3">
              <h3 className="font-medium">Deploy Relief Funds</h3>
              <p className="text-sm text-gray-600">
                Releases funds to verified beneficiaries under enforced policies.
              </p>
              <button
                disabled
                className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed"
              >
                Deploy Funds (Coming Soon)
              </button>
            </div>

            <div className="p-6 border rounded bg-white space-y-3">
              <h3 className="font-medium">Assign Volunteers</h3>
              <p className="text-sm text-gray-600">
                Grants volunteer authorization NFTs.
              </p>
              <button
                disabled
                className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed"
              >
                Assign Volunteer (Coming Soon)
              </button>
            </div>

            <div className="p-6 border rounded bg-white space-y-3">
              <h3 className="font-medium">Generate Audit Report</h3>
              <p className="text-sm text-gray-600">
                Export a complete on-chain audit of the relief operation.
              </p>
              <button
                disabled
                className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed"
              >
                Generate Report (Coming Soon)
              </button>
            </div>
          </div>
        </section>

        <footer className="text-sm text-gray-500 border-t pt-6">
          Administrative actions require multi-signature authorization in production.
        </footer>

      </div>
    </main>
  );
}
