interface Props {
  params: { address: string };
}

export default function CampaignPage({ params }: Props) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Campaign Dashboard</h1>

      <p className="text-sm text-zinc-400 mt-1">
        Campaign Address: {params.address}
      </p>

      <div className="mt-6 grid gap-4">
        <button className="p-3 border border-zinc-800 rounded">
          Donate
        </button>

        <button className="p-3 border border-zinc-800 rounded">
          Vote / Approve
        </button>

        <button className="p-3 border border-zinc-800 rounded">
          View Treasury
        </button>
      </div>
    </main>
  );
}
