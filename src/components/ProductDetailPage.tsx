import { useState } from 'react';
import { ArrowLeft, ShoppingCart, ChevronDown, Minus, Plus, Check } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';

interface ProductDetailPageProps {
  productId: string;
  productName: string;
  collectionName: string;
  price: number;
  gender: 'men' | 'women';
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
  collection: string;
}

export function ProductDetailPage({ 
  productId,
  productName, 
  collectionName, 
  price,
  gender,
  onBack, 
  onAddToCart, 
  onCollectionClick, 
  onOurStoryClick, 
  onCraftsmanshipClick, 
  cartCount = 0, 
  onCartClick 
}: ProductDetailPageProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showAddToCartAnimation, setShowAddToCartAnimation] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Size options based on gender
  const sizes = gender === 'men' 
    ? ['S', 'M', 'L', 'XL', 'XXL', '38', '40', '42', '44', '46']
    : ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  // Product image placeholders (4 images for each product)
  const productImagePlaceholders = [0, 1, 2, 3];

  const product = {
    name: productName,
    price: price,
    category: 'HANDCRAFTED',
    description: `Experience the timeless elegance of ${collectionName} with this exquisitely handcrafted piece. Each garment is a testament to the rich heritage of Indian artisanship, featuring intricate embroidery and traditional motifs that tell a story of cultural pride and craftsmanship.`,
    features: [
      'Handcrafted with traditional techniques passed down through generations',
      'Premium quality fabric for exceptional comfort and durability',
      'Unique embroidery patterns - each piece is one of a kind',
      'Designed to blend heritage aesthetics with modern silhouettes',
      'Ethically sourced materials supporting local artisan communities'
    ],
    modelSize: gender === 'men' ? 'Model is 6\'0" and wearing size M' : 'Model is 5\'8" and wearing size S',
    washCare: [
      'Dry clean only for best results',
      'If hand washing, use cold water with mild detergent',
      'Do not bleach or tumble dry',
      'Iron on reverse side at low temperature',
      'Store in a cool, dry place away from direct sunlight'
    ],
    shipping: 'Each Sohwais piece is handcrafted to order. Please allow 3–4 days for careful creation before dispatch. Once shipped, delivery typically takes 5–7 days, depending on your location.'
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    const cartItem: CartItem = {
      id: `${productId}-${selectedSize}-${Date.now()}`,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
      image: 'placeholder', // Will be replaced with actual uploaded image
      collection: collectionName
    };

    onAddToCart(cartItem);
    
    // Trigger animation
    setShowAddToCartAnimation(true);
    setTimeout(() => {
      setShowAddToCartAnimation(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#fdfcf9] relative">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#fdfcf9]">
        <Navigation mode="light" onCollectionClick={onCollectionClick} onOurStoryClick={onOurStoryClick} onCraftsmanshipClick={onCraftsmanshipClick} cartCount={cartCount} onCartClick={onCartClick} />
      </div>

      {/* Add to Cart Animation */}
      {showAddToCartAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="animate-[ping_0.5s_ease-out]">
            <div className="bg-[#c9a060] text-white rounded-full p-6 shadow-2xl flex items-center gap-3">
              <Check className="w-8 h-8" />
              <span className="text-[16px] tracking-[1px] font-['Cormorant_Garamond',serif]">
                Added to Cart!
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-6 sm:mb-8 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px] uppercase"
          aria-label="Go back to products"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          BACK TO PRODUCTS
        </button>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-[#f5f1e8] rounded-lg overflow-hidden shadow-lg">
              <img
                src={`https://via.placeholder.com/500?text=Image+${currentImageIndex+1}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Corner Decorations */}
              <div className="absolute left-3 sm:left-4 top-3 sm:top-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-l-2 border-t-2 border-[#c9a060]" />
              <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-r-2 border-b-2 border-[#c9a060]" />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {productImagePlaceholders.map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square bg-[#f5f1e8] rounded-lg overflow-hidden transition-all ${
                    currentImageIndex === index
                      ? 'ring-2 ring-[#c9a060] shadow-lg'
                      : 'hover:ring-2 hover:ring-[#c9a060]/50'
                  }`}
                >
                  <img
                    src={`https://via.placeholder.com/100?text=Image+${index+1}`}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Category */}
            <p className="text-[10px] sm:text-[11px] tracking-[2px] text-[#2c1810]/60 font-['Cormorant_Garamond',serif] uppercase">
              {product.category} • {collectionName}
            </p>

            {/* Product Name */}
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] font-['Cinzel_Decorative',serif] text-[#2c1810]">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-[24px] sm:text-[28px] md:text-[32px] tracking-[0.5px] sm:tracking-[0.8px] md:tracking-[1px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
              ₹ {product.price.toLocaleString('en-IN')}
            </p>

            {/* Size Selector */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-[12px] sm:text-[13px] tracking-[1.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] uppercase">
                  Select Size
                </label>
                <button
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-[10px] sm:text-[11px] tracking-[1px] text-[#c9a060] hover:underline font-['Cormorant_Garamond',serif] uppercase"
                >
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 sm:h-14 text-[12px] sm:text-[13px] tracking-[1px] font-['Cormorant_Garamond',serif] rounded-lg transition-all ${
                      selectedSize === size
                        ? 'bg-[#c9a060] text-white shadow-lg scale-105'
                        : 'bg-white text-[#2c1810] border border-[#2c1810]/20 hover:border-[#c9a060]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Size Guide Popover */}
              {showSizeGuide && (
                <div className="mt-4 bg-white border border-[#2c1810]/20 rounded-lg p-4 sm:p-6 shadow-lg">
                  <h3 className="text-[14px] sm:text-[16px] tracking-[1.5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
                    Size Guide (Indian Standards - {gender === 'women' ? 'Women' : 'Men'})
                  </h3>
                  <div className="overflow-x-auto">
                    {gender === 'women' ? (
                      // Women's Size Guide
                      <table className="w-full text-[12px] sm:text-[13px] font-['Cormorant_Garamond',serif]">
                        <thead>
                          <tr className="border-b border-[#2c1810]/10">
                            <th className="py-2 text-left text-[#2c1810]">Size</th>
                            <th className="py-2 text-left text-[#2c1810]">Bust (inches)</th>
                            <th className="py-2 text-left text-[#2c1810]">Waist (inches)</th>
                            <th className="py-2 text-left text-[#2c1810]">Hip (inches)</th>
                          </tr>
                        </thead>
                        <tbody className="text-[#2c1810]/80">
                          <tr className="border-b border-[#2c1810]/5">
                            <td className="py-2">XS</td>
                            <td className="py-2">30-32</td>
                            <td className="py-2">24-26</td>
                            <td className="py-2">32-34</td>
                          </tr>
                          <tr className="border-b border-[#2c1810]/5">
                            <td className="py-2">S</td>
                            <td className="py-2">32-34</td>
                            <td className="py-2">26-28</td>
                            <td className="py-2">34-36</td>
                          </tr>
                          <tr className="border-b border-[#2c1810]/5">
                            <td className="py-2">M</td>
                            <td className="py-2">34-36</td>
                            <td className="py-2">28-30</td>
                            <td className="py-2">36-38</td>
                          </tr>
                          <tr className="border-b border-[#2c1810]/5">
                            <td className="py-2">L</td>
                            <td className="py-2">36-38</td>
                            <td className="py-2">30-32</td>
                            <td className="py-2">38-40</td>
                          </tr>
                          <tr className="border-b border-[#2c1810]/5">
                            <td className="py-2">XL</td>
                            <td className="py-2">38-40</td>
                            <td className="py-2">32-34</td>
                            <td className="py-2">40-42</td>
                          </tr>
                          <tr>
                            <td className="py-2">XXL</td>
                            <td className="py-2">40-42</td>
                            <td className="py-2">34-36</td>
                            <td className="py-2">42-44</td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      // Men's Size Guide
                      <table className="w-full text-[12px] sm:text-[13px] font-['Cormorant_Garamond',serif]">
                        <thead>
                          <tr className="border-b border-[#2c1810]/10">
                            <th className="py-2 text-left text-[#2c1810]">Size</th>
                            <th className="py-2 text-left text-[#2c1810]">Chest (inches)</th>
                            <th className="py-2 text-left text-[#2c1810]">Length (inches)</th>
                          </tr>
                        </thead>
                        <tbody className="text-[#2c1810]/80">
                          <tr className="border-b border-[#2c1810]/5">
                            <td className="py-2">S</td>
                            <td className="py-2">36-38</td>
                            <td className="py-2">26-27</td>
                          </tr>
                          <tr className="border-b border-[#2c1810]/5">
                            <td className="py-2">M</td>
                            <td className="py-2">38-40</td>
                            <td className="py-2">27-28</td>
                          </tr>
                          <tr className="border-b border-[#2c1810]/5">
                            <td className="py-2">L</td>
                            <td className="py-2">40-42</td>
                            <td className="py-2">28-29</td>
                          </tr>
                          <tr className="border-b border-[#2c1810]/5">
                            <td className="py-2">XL</td>
                            <td className="py-2">42-44</td>
                            <td className="py-2">29-30</td>
                          </tr>
                          <tr className="border-b border-[#2c1810]/5">
                            <td className="py-2">XXL</td>
                            <td className="py-2">44-46</td>
                            <td className="py-2">30-31</td>
                          </tr>
                          <tr>
                            <td className="py-2">3XL</td>
                            <td className="py-2">46-48</td>
                            <td className="py-2">31-32</td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-[12px] sm:text-[13px] tracking-[1.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] uppercase">
                Quantity
              </label>
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-[#2c1810]/20 rounded-lg text-[#2c1810] hover:border-[#c9a060] hover:text-[#c9a060] transition-colors flex items-center justify-center"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-[16px] sm:text-[18px] tracking-[1px] font-['Cormorant_Garamond',serif] text-[#2c1810] w-10 sm:w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-[#2c1810]/20 rounded-lg text-[#2c1810] hover:border-[#c9a060] hover:text-[#c9a060] transition-colors flex items-center justify-center"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#c9a060] text-white py-3 sm:py-4 rounded-lg text-[12px] sm:text-[13px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase hover:bg-[#b8914f] transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              Add to Cart
            </button>

            {/* Model Size */}
            <p className="text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]/70 italic">
              {product.modelSize}
            </p>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="max-w-7xl mx-auto mt-12 sm:mt-16 md:mt-20">
          {/* Tab Navigation */}
          <div className="flex border-b border-[#2c1810]/10 mb-6 sm:mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.5px] sm:tracking-[2px] font-['Cormorant_Garamond',serif] uppercase transition-all whitespace-nowrap ${
                activeTab === 'description'
                  ? 'text-[#c9a060] border-b-2 border-[#c9a060]'
                  : 'text-[#2c1810]/60 hover:text-[#2c1810]'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.5px] sm:tracking-[2px] font-['Cormorant_Garamond',serif] uppercase transition-all whitespace-nowrap ${
                activeTab === 'care'
                  ? 'text-[#c9a060] border-b-2 border-[#c9a060]'
                  : 'text-[#2c1810]/60 hover:text-[#2c1810]'
              }`}
            >
              Wash & Care
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.5px] sm:tracking-[2px] font-['Cormorant_Garamond',serif] uppercase transition-all whitespace-nowrap ${
                activeTab === 'shipping'
                  ? 'text-[#c9a060] border-b-2 border-[#c9a060]'
                  : 'text-[#2c1810]/60 hover:text-[#2c1810]'
              }`}
            >
              Shipping
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
            {activeTab === 'description' && (
              <div className="space-y-4 sm:space-y-6">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[0.3px] sm:tracking-[0.4px] md:tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                  {product.description}
                </p>
                <div>
                  <h3 className="text-[16px] sm:text-[17px] md:text-[18px] tracking-[1.5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] tracking-[0.3px] font-['Cormorant_Garamond',serif] text-[#2c1810]"
                      >
                        <span className="text-[#c9a060] mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-4">
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] tracking-[1.5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
                  Care Instructions
                </h3>
                <ul className="space-y-3">
                  {product.washCare.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] tracking-[0.3px] font-['Cormorant_Garamond',serif] text-[#2c1810]"
                    >
                      <span className="text-[#c9a060] mt-1">•</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] tracking-[1.5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
                  Shipping Information
                </h3>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[0.3px] sm:tracking-[0.4px] md:tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                  {product.shipping}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <ExperienceFooterWrapper>
        <Footer />
      </ExperienceFooterWrapper>
    </div>
  );
}