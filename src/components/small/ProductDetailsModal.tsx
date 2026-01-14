// components/ProductDetailsModal.jsx
import { Product } from "./types/product";
import { X, ChevronLeft, ChevronRight, ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";

interface Props {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailsModal: React.FC<Props> = ({ product, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
console.log("product", product);
  if (!isOpen) return null;

  const images = product.images && product.images.length > 0 
    ? product.images.map(img => img.url)
    : ["https://via.placeholder.com/600x800?text=No+Image"];

  const uniqueColors = product.variants 
    ? [...new Set(product.variants.map(v => v.color))]
    : [];

  const uniqueSizes = product.variants 
    ? [...new Set(product.variants.map(v => v.size))].sort()
    : [];

  const selectedVariant = product.variants?.find(
    v => v.color === selectedColor && v.size === selectedSize
  );

  const currentPrice = selectedVariant?.price || product.price;
  const discountPrice = product.discount > 0 
    ? currentPrice - (currentPrice * product.discount / 100)
    : currentPrice;

  const handlePrevImage = () => {
    setSelectedImageIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setSelectedImageIndex(prev => (prev + 1) % images.length);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    const cartItem = {
      productId: product._id,
      name: product.name,
      size: selectedSize,
      color: selectedColor,
      price: discountPrice,
      quantity: quantity,
      image: images[0]
    };

    console.log("Adding to cart:", cartItem);
    // Add your cart logic here
    alert("Added to cart!");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Left Column - Images */}
            <div className="bg-gray-50 p-6">
              {/* Main Image */}
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src={images[selectedImageIndex]}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
                
                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        index === selectedImageIndex 
                          ? 'border-amber-500' 
                          : 'border-transparent'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Details */}
            <div className="p-8 overflow-y-auto">
              {/* Product Info */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    product.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {product.status}
                  </span>
                </div>
                
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      ₹{discountPrice.toFixed(2)}
                    </span>
                    {product.discount > 0 && (
                      <>
                        <span className="text-lg text-gray-500 line-through">
                          ₹{currentPrice.toFixed(2)}
                        </span>
                        <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
                          {product.discount}% OFF
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {product.description || "Premium traditional clothing with exquisite craftsmanship and attention to detail."}
                </p>
              </div>

              {/* Variants Selection */}
              <div className="space-y-6 mb-8">
                {/* Color Selection */}
                {uniqueColors.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Select Color</h3>
                    <div className="flex flex-wrap gap-3">
                      {uniqueColors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`flex flex-col items-center p-3 rounded-lg border-2 transition ${
                            selectedColor === color 
                              ? 'border-amber-500 bg-amber-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div
                            className="h-10 w-10 rounded-full mb-2 border"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-xs text-gray-600">
                            {color}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selection */}
                {uniqueSizes.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Select Size</h3>
                    <div className="flex flex-wrap gap-3">
                      {uniqueSizes.map((size) => {
                        const available = product.variants?.some(
                          v => v.size === size && (!selectedColor || v.color === selectedColor)
                        );
                        
                        return (
                          <button
                            key={size}
                            onClick={() => available && setSelectedSize(size)}
                            disabled={!available}
                            className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition ${
                              selectedSize === size 
                                ? 'border-amber-500 bg-amber-50 text-amber-700' 
                                : available
                                ? 'border-gray-200 hover:border-gray-300 text-gray-700'
                                : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                            }`}
                          >
                            {size}
                            {!available && (
                              <span className="block text-xs text-red-400">Out of stock</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity Selector */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 w-16 text-center font-medium">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(prev => prev + 1)}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{product.stock}</span> units available
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="border-t pt-6 mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Product Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-500">Category</span>
                    <p className="font-medium">{product.category}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Stock</span>
                    <p className={`font-medium ${
                      product.stock > 50 ? 'text-green-600' : 
                      product.stock > 10 ? 'text-yellow-600' : 
                      'text-red-600'
                    }`}>
                      {product.stock} units
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Original Price</span>
                    <p className="font-medium">₹{product.price}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Discount</span>
                    <p className="font-medium text-red-600">{product.discount}%</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </button>
                <button className="px-4 border border-amber-500 text-amber-500 hover:bg-amber-50 rounded-lg transition flex items-center justify-center">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;