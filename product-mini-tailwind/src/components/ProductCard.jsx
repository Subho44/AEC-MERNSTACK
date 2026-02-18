export default function ProductCard({ item, onAdd }) {
  const outOfStock = item.stock === 0;

  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="h-44 w-full overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover hover:scale-105 transition"
          loading="lazy"
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold leading-tight">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.brand} • {item.category}</p>
          </div>

          <div className="text-right">
            <div className="font-bold">₹{item.price}</div>
            <div className="text-xs text-gray-500">{item.rating}</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span
            className={
              "text-xs px-2 py-1 rounded-full " +
              (outOfStock ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700")
            }
          >
            {outOfStock ? "Out of Stock" : `In Stock: ${item.stock}`}
          </span>

          <button
            disabled={outOfStock}
            onClick={() => onAdd(item)}
            className={
              "text-sm px-3 py-2 rounded-xl font-medium transition " +
              (outOfStock
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-black/90")
            }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
