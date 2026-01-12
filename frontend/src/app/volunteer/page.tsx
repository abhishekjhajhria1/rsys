import Link from "next/link";

export default function VolunteerPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* PAGE INTRO */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Volunteer Portal
        </h1>

        <p className="text-slate-600">
          Volunteers in RSYS are trusted individuals who help verify victims
          affected by a disaster. This verification ensures that relief reaches
          real people and prevents false claims.
        </p>
      </section>

      {/* ROLE EXPLANATION */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          What Volunteers Do
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <VolunteerCapability
            title="On-Ground Verification"
            text="Volunteers verify victims based on real-world assessment and evidence."
          />
          <VolunteerCapability
            title="Prevent Fraud"
            text="Only verified victims can participate in the relief process."
          />
          <VolunteerCapability
            title="No Fund Control"
            text="Volunteers never handle or control funds at any point."
          />
        </div>
      </section>

      {/* ON-CHAIN ENFORCEMENT */}
      <section className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/40 p-10 space-y-4">
        <h2 className="text-xl font-semibold">
          On-Chain Enforcement
        </h2>

        <p className="text-slate-600 text-sm">
          Volunteer permissions are enforced using NFTs issued by administrators.
          If an address does not hold a valid Volunteer NFT, any verification
          attempt will fail at the smart contract level.
        </p>
      </section>

      {/* ACTION ENTRY */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          Volunteer Actions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ActionCard
            title="Verify Victims"
            text="Confirm and register verified victims on-chain."
            href="/volunteer/verify"
          />

          <ActionCard
            title="Learn the Flow"
            text="Understand how victim verification fits into the RSYS system."
            href="/judge"
          />
        </div>
      </section>

      {/* FOOTNOTE */}
      <p className="text-xs text-slate-500 max-w-3xl">
        Volunteers act as trusted verifiers, not decision-makers. Their role is
        limited to identity verification and does not include fund access or
        governance.
      </p>
    </main>
  );
}

/* ---------- Helpers ---------- */

function VolunteerCapability({
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
