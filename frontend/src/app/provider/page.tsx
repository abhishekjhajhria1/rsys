import Link from "next/link";

export default function ServiceProviderPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* PAGE INTRO */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Service Provider Portal
        </h1>

        <p className="text-slate-600">
          Service providers are organizations or individuals responsible for
          delivering actual relief services such as food, medical aid, shelter,
          or logistics. RSYS ensures that providers are paid only after verified
          aid delivery.
        </p>
      </section>

      {/* ROLE EXPLANATION */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          What Service Providers Do
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ProviderCapability
            title="Deliver Aid"
            text="Provide real-world relief services to verified victims."
          />
          <ProviderCapability
            title="Redeem Funds"
            text="Receive payments only through smart contract–enforced redemption."
          />
          <ProviderCapability
            title="No Governance Power"
            text="Providers cannot approve campaigns or control fund allocation."
          />
        </div>
      </section>

      {/* ON-CHAIN ENFORCEMENT */}
      <section className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/40 p-10 space-y-4">
        <h2 className="text-xl font-semibold">
          On-Chain Enforcement
        </h2>

        <p className="text-slate-600 text-sm">
          Service providers must hold a valid Provider NFT issued by an
          administrator. Redemption requests are executed through the Campaign
          Treasury contract, which enforces eligibility and available balance
          on-chain.
        </p>
      </section>

      {/* ACTION ENTRY */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          Provider Actions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ActionCard
            title="Redeem Funds"
            text="Request payment for delivered relief services."
            href="/provider/redeem"
          />

          <ActionCard
            title="Understand the System"
            text="Learn how provider payments are enforced by RSYS."
            href="/judge"
          />
        </div>
      </section>

      {/* FOOTNOTE */}
      <p className="text-xs text-slate-500 max-w-3xl">
        Service providers never receive unrestricted access to funds. All
        payments are validated and executed by smart contracts, ensuring
        accountability and preventing misuse.
      </p>
    </main>
  );
}

/* ---------- Helpers ---------- */

function ProviderCapability({
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
