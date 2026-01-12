import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* PAGE INTRO */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Admin Portal
        </h1>

        <p className="text-slate-600">
          Administrators in RSYS are responsible for governance and role
          verification. All admin actions are enforced directly by smart
          contracts and cannot be bypassed through the UI.
        </p>
      </section>

      {/* WHAT ADMINS DO */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          What Admins Are Responsible For
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <AdminCapability
            title="Campaign Governance"
            text="Approve campaigns before they are allowed to be created on-chain."
          />
          <AdminCapability
            title="Volunteer Verification"
            text="Issue Volunteer NFTs to trusted individuals working on the ground."
          />
          <AdminCapability
            title="Service Provider Authorization"
            text="Register service providers who are allowed to redeem funds."
          />
        </div>
      </section>

      {/* ON-CHAIN ENFORCEMENT */}
      <section className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/40 p-10 space-y-4">
        <h2 className="text-xl font-semibold">
          On-Chain Enforcement
        </h2>

        <p className="text-slate-600 text-sm">
          Admin permissions in RSYS are not UI-based roles. Every action performed
          by an admin is validated by deployed smart contracts. If an address is
          not authorized on-chain, the transaction will fail.
        </p>
      </section>

      {/* ACTION ENTRY POINTS */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          Admin Actions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ActionCard
            title="Approve Campaigns"
            text="Approve campaigns through on-chain governance before creation."
            href="/admin"
          />
          <ActionCard
            title="Issue Volunteer NFT"
            text="Verify volunteers who can identify and validate victims."
            href="/volunteer"
          />
          <ActionCard
            title="Register Service Provider"
            text="Authorize providers who can redeem relief funds."
            href="/provider"
          />
        </div>
      </section>

      {/* FOOTNOTE */}
      <p className="text-xs text-slate-500 max-w-3xl">
        The Admin Portal provides entry points into governance and verification
        workflows. Actual permissions are enforced strictly by smart contracts.
      </p>
    </main>
  );
}

/* ---------- Helpers ---------- */

function AdminCapability({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-2">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}

function ActionCard({
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
      className="block rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-3 hover:border-slate-300 transition"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600">{text}</p>
      <span className="text-sm text-sky-600 font-medium">
        Go →
      </span>
    </Link>
  );
}
