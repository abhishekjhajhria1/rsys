import Link from "next/link";

interface Props {
  address: string;
  title: string;
  status: string;
}

export default function CampaignCard({ address, title, status }: Props) {
  return (
    <Link
      href={`/campaign/${address}`}
      className="block p-4 border border-zinc-800 rounded-lg hover:border-amber-500 transition"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-zinc-400">{address}</p>
      <span className="text-xs text-amber-400">{status}</span>
    </Link>
  );
}
