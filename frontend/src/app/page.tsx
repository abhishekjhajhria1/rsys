import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      {/* HERO */}
      <section className="space-y-6 max-w-4xl">
        <h1 className="text-5xl font-semibold tracking-tight leading-tight">
          RSYS — A Transparent Disaster
          <br />
          Relief System Built on Blockchain
        </h1>

        <p className="text-lg text-slate-600">
          RSYS is a decentralized system designed to ensure that disaster relief
          funds are delivered transparently, spent correctly, and remain fully
          auditable by donors, administrators, and the public.
        </p>

        <div className="flex gap-4 pt-2">
          <Link
            href="/campaigns"
            className="px-6 py-3 rounded-xl bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
          >
            Explore Campaigns
          </Link>

          <Link
            href="/judge"
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            Judge Mode
          </Link>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold">
          Why Disaster Relief Systems Fail
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ProblemCard
            title="No Transparency"
            text="Donors cannot track where their funds go or how they are used after donation."
          />
          <ProblemCard
            title="Corruption & Misuse"
            text="Funds are often misallocated due to weak enforcement and centralized control."
          />
          <ProblemCard
            title="Slow & Inefficient Delivery"
            text="Manual verification and intermediaries delay urgent relief efforts."
          />
        </div>
      </section>

      {/* SOLUTION */}
      <section className="space-y-12">
        <h2 className="text-3xl font-semibold">How RSYS Solves This</h2>

        <div className="grid md:grid-cols-4 gap-8">
          <Step
            step="01"
            title="Campaign Governance"
            text="Relief campaigns must be approved on-chain before they can be created."
          />
          <Step
            step="02"
            title="Transparent Donations"
            text="All donations flow into a public relief pool visible on the blockchain."
          />
          <Step
            step="03"
            title="Role Verification"
            text="Admins, volunteers, victims, and providers are verified using NFTs."
          />
          <Step
            step="04"
            title="Enforced Spending"
            text="Funds can only be redeemed through smart contract rules — no exceptions."
          />
        </div>
      </section>

      {/* ROLE ENTRY */}
      <section className="space-y-12">
        <h2 className="text-3xl font-semibold">Who Is RSYS For?</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <RoleCard
            title="Donors"
            text="Donate with confidence and audit fund usage in real time."
            href="/campaigns"
          />
          <RoleCard
            title="Administrators"
            text="Approve campaigns and manage verified roles securely."
            href="/admin"
          />
          <RoleCard
            title="Volunteers"
            text="Verify victims on the ground using trusted on-chain identity."
            href="/volunteer"
          />
          <RoleCard
            title="Service Providers"
            text="Redeem funds only after delivering verified aid."
            href="/provider"
          />
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/40 p-12 space-y-6">
        <h2 className="text-3xl font-semibold">What Makes RSYS Different</h2>

        <ul className="grid md:grid-cols-2 gap-4 text-slate-600">
          <li>• No centralized custody of funds</li>
          <li>• Full on-chain auditability</li>
          <li>• Automatic enforcement via smart contracts</li>
          <li>• Role-based identity without exposing personal data</li>
          <li>• Designed for real-world disaster scenarios</li>
        </ul>
      </section>

      {/* FOOTER CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">
          Built for Accountability, Not Trust
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto">
          RSYS demonstrates how blockchain can be used to create transparent,
          enforceable systems for humanitarian aid — without relying on blind
          trust in institutions.
        </p>

        <Link
          href="/campaigns"
          className="inline-block mt-4 px-8 py-4 rounded-xl bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
        >
          View Live Campaigns
        </Link>
      </section>
    </main>
  );
}

/* ---------- Helper Components ---------- */

function ProblemCard({ title, text }: { title: string; text: string }) {
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

function RoleCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-3 hover:border-slate-300 transition block"
    >

      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-slate-600 text-sm">{text}</p>
      <span className="text-sm text-sky-600 font-medium">Go →</span>
    </Link>
  );
}
