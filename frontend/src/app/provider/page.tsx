export default function ProviderPage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Service Provider Redeem</h1>

      <input
        placeholder="Campaign address"
        className="w-full p-2 mb-3 bg-black border border-zinc-800 rounded"
      />

      <select className="w-full p-2 mb-3 bg-black border border-zinc-800 rounded">
        <option>Food</option>
        <option>Water</option>
        <option>Shelter</option>
      </select>

      <button className="w-full py-2 bg-green-600 text-white rounded">
        Redeem Tokens
      </button>
    </main>
  );
}
