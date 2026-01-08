interface Props {
  params: {
    address: string;
  };
}

export default function CampaignPage({ params }: Props) {
  return (
    <main className="p-8 text-white">
      <h1 className="text-2xl font-bold">Campaign</h1>
      <p className="mt-2 text-zinc-400">
        Campaign Address: {params.address}
      </p>
    </main>
  );
}
