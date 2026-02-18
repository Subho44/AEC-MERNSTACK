import { useMemo, useState } from "react";
import productsData from "./data/products";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

export default function App() {
  const [query, setQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return productsData;

    return productsData.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [query]);

  const handleAdd = (item) => {
    // simple logic: only count add
    setCartCount((prev) => prev + 1);
    alert(`Added: ${item.title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar count={filteredProducts.length} query={query} setQuery={setQuery} />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <div>
            <h1 className="text-2xl font-bold">Product Gallery</h1>
          </div>

          <div className="rounded-2xl border bg-white px-4 py-3 shadow-sm">
             Cart Items: <span className="font-bold">{cartCount}</span>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border bg-white p-6 text-center">
            <p className="font-semibold">No products found</p>
            <p className="text-sm text-gray-600">Try different keyword.</p>
          </div>
        ) : (
          <ProductList products={filteredProducts} onAdd={handleAdd} />
        )}

       
      </div>
    </div>
  );
}
