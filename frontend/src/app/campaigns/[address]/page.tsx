import { useReadContract } from "wagmi";
import { isAddress } from "viem";
import { CampaignABI } from "@/lib/web3/abis";
import CampaignActivity from "@/components/CampaignActivity";
import DonateBox from "@/components/DonateBox";

type PageProps = {
  params: {
    address: string;
  };
};




export default function CampaignDetailPage({ params }: PageProps) {
  const { address } = params;

  const isValidAddress = isAddress(address);

  const nameRead = useReadContract({
    address: isValidAddress ? (address as `0x${string}`) : undefined,
    abi: CampaignABI,
    functionName: "name",
    query: { enabled: isValidAddress },
  });

  const metadataRead = useReadContract({
    address: isValidAddress ? (address as `0x${string}`) : undefined,
    abi: CampaignABI,
    functionName: "metadataURI",
    query: { enabled: isValidAddress },
  });

  const initiatorRead = useReadContract({
    address: isValidAddress ? (address as `0x${string}`) : undefined,
    abi: CampaignABI,
    functionName: "initiator",
    query: { enabled: isValidAddress },
  });

  if (!isValidAddress) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-slate-600">
          Invalid campaign address.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* INTRO */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          {nameRead.isLoading ? "Loading campaign…" : nameRead.data}
        </h1>

        <p className="text-slate-600">
          This page represents a disaster relief campaign approved and created
          on-chain through RSYS. Campaigns define governance and legitimacy,
          while all funds remain transparently managed by smart contracts.
        </p>
      </section>

      {/* CAMPAIGN INFO */}
      <section className="grid md:grid-cols-3 gap-6">
        <InfoCard
          label="Campaign Address"
          value={address}
          mono
          link={`https://sepolia.etherscan.io/address/${address}`}
        />
        <InfoCard
          label="Initiator"
          value={
            initiatorRead.isLoading
              ? "Loading…"
              : (initiatorRead.data as string)
          }
          mono
          link={
            initiatorRead.data
              ? `https://sepolia.etherscan.io/address/${initiatorRead.data}`
              : undefined
          }
        />
        <InfoCard
          label="Metadata URI"
          value={
            metadataRead.isLoading
              ? "Loading…"
              : (metadataRead.data as string)
          }
          link={
            metadataRead.data
              ? (metadataRead.data as string)
              : undefined
          }
        />
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          How This Campaign Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <Step step="01" title="Approved" text="The campaign was approved through on-chain governance before creation." />
          <Step step="02" title="Created" text="A Campaign contract was deployed via the Campaign Factory." />
          <Step step="03" title="Funded" text="Donations flow into a transparent relief pool on-chain." />
          <Step step="04" title="Enforced" text="Funds can only be redeemed according to smart contract rules." />
        </div>
      </section>

      {/* ACTIONS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          What You Can Do Here
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Donate to the Relief Pool
            </h3>
            <p className="text-slate-600 text-sm">
              Donations are sent to a global relief pool and are fully
              traceable on-chain.
            </p>
            <DonateBox />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Observe Campaign Activity
            </h3>
            <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6">
              <CampaignActivity />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Helpers ---------- */

function InfoCard({
  label,
  value,
  mono,
  link,
}: {
  label: string;
  value: string;
  mono?: boolean;
  link?: string;
}) {
  const content = (
    <div
      className={`text-sm break-all ${
        mono ? "font-mono" : ""
      }`}
    >
      {value}
    </div>
  );

  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 space-y-2">
      <div className="text-sm text-slate-500">{label}</div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:underline"
        >
          {content}
        </a>
      ) : (
        content
      )}
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
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}
