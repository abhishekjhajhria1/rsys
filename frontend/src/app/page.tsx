import ConnectWallet from "@/components/ConnectWallet";
import Donate from "@/components/Donate";
import RoleBadge from "@/components/RoleBadge";
import VolunteerPanel from "@/components/VolunteerPanel";
import RoleDropdown from "@/components/RoleDropdown";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col gap-24 px-6 py-16">
          {/* DEMO MODE BANNER */}
          <div className="w-full max-w-3xl bg-yellow-100 text-yellow-800 px-4 py-3 rounded text-sm text-center">
            Demo Mode: Admin & Volunteer roles are simulated for MVP. Victim
            verification via NFT is fully on-chain.
          </div>

          {/* HERO SECTION */}
          <section className="text-center flex flex-col gap-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Emergency Relief
              <span className="block text-green-600">Stablecoin System</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A transparent, on-chain infrastructure ensuring disaster donations
              reach verified victims directly — fast, auditable, and
              misuse-resistant.
            </p>

            <div className="flex flex-col items-center gap-4 mt-6">
              <Donate />
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="flex flex-col gap-10">
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              How Your Donation Flows
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: "💳", text: "Donations in stablecoins" },
                { icon: "🏦", text: "Funds locked on-chain" },
                { icon: "🪪", text: "Victims verified via NFTs" },
                { icon: "🎯", text: "Direct distribution" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="text-4xl">{step.icon}</div>
                  <p className="text-gray-700 font-medium">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DISASTER CONTEXT */}
          <section className="bg-white rounded-xl p-10 shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
              Why This Matters
            </h2>

            <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto leading-relaxed">
              In emergencies, aid is often delayed, opaque, or misused. This
              system replaces trust in intermediaries with cryptographic
              verification, enabling faster relief and full transparency.
            </p>
          </section>

          {/* SECOND DONATE CTA */}
          <section className="text-center flex flex-col gap-4">
            <p className="text-lg font-medium text-gray-800">
              Ready to contribute? Your donation goes directly to verified
              victims.
            </p>
            <Donate />
          </section>

          {/* TRANSPARENCY (UNDER CONSTRUCTION) */}
          <section className="bg-white rounded-xl p-10 shadow-sm text-center flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Transparency Dashboard
            </h2>

            <p className="text-gray-500">
              Live tracking of funds is under development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded">Total Collected</div>
              <div className="p-6 bg-gray-50 rounded">Total Distributed</div>
              <div className="p-6 bg-gray-50 rounded">Victims Helped</div>
            </div>
          </section>

          {/* WHAT MAKES THIS TRUSTWORTHY */}

          <section className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Built for Trust in Emergencies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium text-gray-800">On-Chain Funds</h3>
                <p className="text-sm text-gray-600">
                  Donations are publicly auditable and cannot be diverted.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800">
                  NFT-Verified Victims
                </h3>
                <p className="text-sm text-gray-600">
                  Only wallets holding verification NFTs can receive funds.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800">Role-Based Access</h3>
                <p className="text-sm text-gray-600">
                  Admins and volunteers operate with on-chain authorization.
                </p>
              </div>
            </div>
          </section>

          {/* ROAD MAP */}
          <section className="bg-white rounded-xl p-10 shadow-sm max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
              What’s Coming Next
            </h2>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li>
                • Live transparency dashboard with real-time fund tracking
              </li>
              <li>• Soulbound NFTs for volunteers and administrators</li>
              <li>• Victim onboarding via mobile-first interface</li>
              <li>• Multi-disaster support & regional segregation</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
