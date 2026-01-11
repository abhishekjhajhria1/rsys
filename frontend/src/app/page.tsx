export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20 space-y-28">
      {/* HERO */}
      <section className="space-y-6 max-w-3xl">
        <h1 className="text-5xl font-semibold tracking-tight leading-tight">
          Transparent Disaster Relief,
          <br />
          Enforced by Blockchain
        </h1>

        <p className="text-lg text-slate-600">
          RSYS is a blockchain-based disaster relief system that ensures
          donations reach the right people, are spent correctly, and remain
          fully auditable by anyone.
        </p>

        <div className="flex gap-4">
          <a
            href="/campaigns"
            className="px-6 py-3 rounded-xl bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
          >
            View Campaigns
          </a>

          <a
            href="/judge"
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            Judge Mode
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="grid md:grid-cols-3 gap-8">
        <ProblemCard
          title="Lack of Transparency"
          text="Donors have no visibility into where their money goes or how it is used."
        />
        <ProblemCard
          title="Corruption & Misuse"
          text="Funds are often misallocated or siphoned off due to weak enforcement."
        />
        <ProblemCard
          title="Delayed Aid"
          text="Manual verification and intermediaries slow down critical relief."
        />
      </section>

      {/* SOLUTION */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold">
          How RSYS Solves This
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <Step
            step="01"
            title="Campaign Approval"
            text="Campaigns are approved on-chain before they can be created."
          />
          <Step
            step="02"
            title="Transparent Donations"
            text="All donations go through a public, auditable relief pool."
          />
          <Step
            step="03"
            title="Role-Based Verification"
            text="Admins, volunteers, victims, and providers are verified using NFTs."
          />
          <Step
            step="04"
            title="Enforced Spending"
            text="Funds can only be redeemed according to smart contract rules."
          />
        </div>
      </section>

      {/* USP */}
      <section className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/40 p-10 space-y-6">
        <h2 className="text-3xl font-semibold">
          Why RSYS Is Different
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-slate-600">
          <li>• No centralized control over funds</li>
          <li>• Real-time on-chain auditability</li>
          <li>• Automatic enforcement of spending rules</li>
          <li>• Identity verification without revealing personal data</li>
          <li>• Works without trusting any single authority</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">
          Built for Real-World Impact
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          RSYS demonstrates how blockchain can be used beyond speculation —
          to create transparent, accountable systems for humanitarian aid.
        </p>

        <a
          href="/campaigns"
          className="inline-block mt-4 px-8 py-4 rounded-xl bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
        >
          Explore the System
        </a>
      </section>
    </main>
  );
}

/* --- Small helper components --- */

function ProblemCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-slate-600 text-sm">{text}</p>
    </div>
  );
}

function Step({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="space-y-2">
      <div className="text-sm text-slate-400">{step}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-slate-600 text-sm">{text}</p>
    </div>
  );
}
