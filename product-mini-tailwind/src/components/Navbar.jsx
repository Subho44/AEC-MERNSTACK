export default function Navbar({ count, query, setQuery }) {
  return (
    <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        <div className="font-bold text-lg">
          Mini Store <span className="text-sm font-medium text-gray-500">(E-express)</span>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden sm:block text-sm text-gray-600">
            Products: <span className="font-semibold">{count}</span>
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-44 sm:w-64 rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
            placeholder="Search product..."
          />
        </div>
      </div>
    </div>
  );
}
