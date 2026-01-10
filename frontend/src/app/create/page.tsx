export default function CreateCampaign() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Campaign</h1>

      <input
        placeholder="Campaign title"
        className="w-full p-2 mb-3 bg-black border border-zinc-800 rounded"
      />

      <textarea
        placeholder="Describe the disaster situation"
        className="w-full p-2 mb-3 bg-black border border-zinc-800 rounded"
      />

      <button className="w-full py-2 bg-amber-500 text-black font-semibold rounded">
        Propose Campaign
      </button>
    </main>
  );
}
