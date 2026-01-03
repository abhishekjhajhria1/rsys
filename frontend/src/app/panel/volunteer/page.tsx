export default function VolunteerPanel() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-12">

        <header className="space-y-3">
          <h1 className="text-3xl font-semibold">Volunteer Operations Panel</h1>
          <p className="text-gray-600 max-w-2xl">
            This interface is used by authorized volunteers to onboard
            beneficiaries and assist in emergency relief distribution.
          </p>
        </header>

        {/* STATUS CARD */}
        <section className="p-6 border rounded bg-white space-y-2">
          <h2 className="font-medium">Authorization Status</h2>
          <p className="text-sm text-gray-600">
            Volunteer verification via NFT required.
          </p>
          <span className="inline-block text-sm px-3 py-1 rounded bg-gray-200 text-gray-600">
            Not Verified (Demo)
          </span>
        </section>

        {/* ACTIONS */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">Available Actions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded bg-white space-y-3">
              <h3 className="font-medium">Issue Victim Access NFT</h3>
              <p className="text-sm text-gray-600">
                Grants verified victims access to receive and spend relief funds.
              </p>
              <button
                disabled
                className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed"
              >
                Issue NFT (Coming Soon)
              </button>
            </div>

            <div className="p-6 border rounded bg-white space-y-3">
              <h3 className="font-medium">View Assigned Region</h3>
              <p className="text-sm text-gray-600">
                View regions and beneficiaries assigned to you.
              </p>
              <button
                disabled
                className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed"
              >
                View Region (Coming Soon)
              </button>
            </div>
          </div>
        </section>

        <footer className="text-sm text-gray-500 border-t pt-6">
          All volunteer actions are logged and auditable on-chain.
        </footer>

      </div>
    </main>
  );
}
