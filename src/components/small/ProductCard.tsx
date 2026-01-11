import { Product } from "../types/product";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const firstVariant = product.variants[0];

  const image =
    firstVariant?.images?.[0] ??
    "https://via.placeholder.com/300x400?text=No+Image";

  // min price calculate
  const prices = product.variants.flatMap(variant =>
    variant.sizes.map(size => size.price)
  );

  const minPrice = Math.min(...prices);

  return (
    <div className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <img
        src={image}
        alt={product.name}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-orange-600 font-medium">
          {product.brand}
        </p>

        <h3 className="text-lg font-semibold mt-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold">
            ₹{minPrice}
          </span>

          <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-700">
            {product.category}
          </span>
        </div>

        {/* Colors */}
        <div className="flex gap-2 mt-3">
          {product.variants.map((variant, index) => (
            <span
              key={index}
              title={variant.color.name}
              className="h-4 w-4 rounded-full border"
              style={{ backgroundColor: variant.color.hex }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
