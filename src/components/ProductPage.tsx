import { useState } from 'react';
import { ArrowLeft, Filter, ChevronDown, X } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
import { ProductDetailPage, CartItem } from './ProductDetailPage';
import greenLinenImage from 'figma:asset/1e00975cb1bf34f5649839f3445890b351cf329b.png';

interface ProductPageProps {
  collectionName: string;
  onBack: () => void;
  cartCount: number;
  onCartClick: () => void;
  onAddToCart: (item: CartItem) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  gender?: 'men' | 'women';
}

export function ProductPage({ collectionName, onBack, cartCount, onCartClick, onAddToCart, onCollectionClick, onOurStoryClick, onCraftsmanshipClick }: ProductPageProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Featured');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Determine gender based on collection name
  const getGenderFromCollection = (collectionName: string): 'men' | 'women' => {
    const menCollections = ['Linen', 'Sujini', 'Warli'];
    return menCollections.includes(collectionName) ? 'men' : 'women';
  };

  const gender = getGenderFromCollection(collectionName);

  // Mock product data with updated images
  const products: Product[] = [
    {
      id: 1,
      name: collectionName === 'Linen' ? 'Green Linen' : `${collectionName} Handcrafted Piece`,
      category: 'HANDMADE',
      price: 11999,
      image: collectionName === 'Linen' ? greenLinenImage : 'https://images.unsplash.com/photo-1706793990327-b6f7170ed333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGVtYnJvaWRlcmVkJTIwc3dlYXRzaGlydHxlbnwxfHx8fDE3NjU4MDYxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: `${collectionName} Heritage Design`,
      category: 'BLOCK PRINTED',
      price: 11999,
      image: 'https://images.unsplash.com/photo-1706793990327-b6f7170ed333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGVtYnJvaWRlcmVkJTIwc3dlYXRzaGlydHxlbnwxfHx8fDE3NjU4MDYxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: `${collectionName} Embroidered Art`,
      category: 'HAND EMBROIDERY',
      price: 7999,
      image: 'https://images.unsplash.com/photo-1706793990327-b6f7170ed333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGVtYnJvaWRlcmVkJTIwc3dlYXRzaGlydHxlbnwxfHx8fDE3NjU4MDYxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: `${collectionName} Traditional Craft`,
      category: 'BLOCK PRINTED',
      price: 12499,
      image: 'https://images.unsplash.com/photo-1706793990327-b6f7170ed333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGVtYnJvaWRlcmVkJTIwc3dlYXRzaGlydHxlbnwxfHx8fDE3NjU4MDYxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      name: `${collectionName} Artisan Special`,
      category: 'HAND EMBROIDERY',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1706793990327-b6f7170ed333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGVtYnJvaWRlcmVkJTIwc3dlYXRzaGlydHxlbnwxfHx8fDE3NjU4MDYxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 6,
      name: `${collectionName} Classic Design`,
      category: 'HANDMADE',
      price: 13999,
      image: 'https://images.unsplash.com/photo-1706793990327-b6f7170ed333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGVtYnJvaWRlcmVkJTIwc3dlYXRzaGlydHxlbnwxfHx8fDE3NjU4MDYxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const sortOptions = [
    'Featured',
    'Price: Low to High',
    'Price: High to Low',
    'Newest',
    'Best Selling',
    'Name: A-Z',
    'Name: Z-A'
  ];

  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Gold', 'Brown'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleColorToggle = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const resetFilters = () => {
    setPriceRange([0, 50000]);
    setSelectedColors([]);
    setSelectedSizes([]);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  // If a product is selected, show the product detail page
  if (selectedProduct) {
    return (
      <ProductDetailPage
        productId={`${selectedProduct.id}`}
        productName={selectedProduct.name}
        collectionName={collectionName}
        price={selectedProduct.price}
        gender={gender}
        onBack={handleBackToProducts}
        onAddToCart={onAddToCart}
        onCollectionClick={onCollectionClick}
        onOurStoryClick={onOurStoryClick}
        onCraftsmanshipClick={onCraftsmanshipClick}
        cartCount={cartCount}
        onCartClick={onCartClick}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfcf9]">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#fdfcf9]">
        <Navigation 
          cartCount={cartCount} 
          onCartClick={onCartClick} 
          mode="light"
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
        />
      </div>

      {/* Content */}
      <div className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-6 sm:mb-8 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px] uppercase"
          aria-label="Go back to collections"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          BACK TO COLLECTIONS
        </button>

        {/* Collection Title */}
        <h1 className="text-center text-[#2c1810] text-[28px] sm:text-[36px] md:text-[42px] tracking-[2.24px] sm:tracking-[2.88px] md:tracking-[3.36px] mb-8 sm:mb-10 md:mb-12 font-['Cinzel_Decorative',serif] uppercase px-4">
          {collectionName}
        </h1>

        {/* Filters and Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#2c1810]/10">
          {/* Filters Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase"
            aria-label="Toggle filters"
          >
            <Filter className="w-4 h-4" />
            FILTERS
            {showFilters && <span className="ml-1">({selectedColors.length + selectedSizes.length})</span>}
          </button>

          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase w-full sm:w-auto justify-between sm:justify-start"
              aria-label="Sort options"
            >
              <span className="truncate">SORT BY: {selectedSort}</span>
              <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ${showSortMenu ? 'rotate-180' : ''}`} />
            </button>

            {/* Sort Menu */}
            {showSortMenu && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-full sm:w-56 z-30 border border-[#2c1810]/10">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedSort(option);
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] transition-colors ${
                      selectedSort === option
                        ? 'bg-[#c9a060]/10 text-[#c9a060]'
                        : 'text-[#2c1810] hover:bg-[#fdfcf9]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              showFilters ? 'w-72 opacity-100' : 'w-0 opacity-0'
            }`}
          >
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-36">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[18px] tracking-[1.5px] font-['Cinzel_Decorative',serif] text-[#2c1810]">
                  FILTERS
                </h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-[#2c1810] hover:text-[#c9a060] transition-colors"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6 pb-6 border-b border-[#2c1810]/10">
                <h3 className="text-[13px] tracking-[1.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] mb-4 uppercase">
                  Price Range
                </h3>
                <div className="flex gap-2 items-center text-[13px] font-['Cormorant_Garamond',serif]">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-24 px-3 py-2 border border-[#2c1810]/20 rounded text-[#2c1810] focus:border-[#c9a060] focus:outline-none"
                    placeholder="Min"
                  />
                  <span className="text-[#2c1810]">-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-24 px-3 py-2 border border-[#2c1810]/20 rounded text-[#2c1810] focus:border-[#c9a060] focus:outline-none"
                    placeholder="Max"
                  />
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6 pb-6 border-b border-[#2c1810]/10">
                <h3 className="text-[13px] tracking-[1.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] mb-4 uppercase">
                  Color
                </h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorToggle(color)}
                      className={`px-4 py-2 text-[11px] tracking-[1px] font-['Cormorant_Garamond',serif] rounded-full transition-all ${
                        selectedColors.includes(color)
                          ? 'bg-[#c9a060] text-white shadow-md'
                          : 'bg-[#fdfcf9] text-[#2c1810] border border-[#2c1810]/20 hover:border-[#c9a060]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6 pb-6 border-b border-[#2c1810]/10">
                <h3 className="text-[13px] tracking-[1.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] mb-4 uppercase">
                  Size
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeToggle(size)}
                      className={`h-12 text-[13px] tracking-[1px] font-['Cormorant_Garamond',serif] rounded-lg transition-all ${
                        selectedSizes.includes(size)
                          ? 'bg-[#c9a060] text-white shadow-md'
                          : 'bg-[#fdfcf9] text-[#2c1810] border border-[#2c1810]/20 hover:border-[#c9a060]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetFilters}
                className="w-full py-3 text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif] text-[#2c1810] border border-[#2c1810]/20 rounded-lg hover:bg-[#c9a060] hover:text-white hover:border-[#c9a060] transition-all uppercase"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${product.name}`}
                  onClick={() => setSelectedProduct(product)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedProduct(product);
                    }
                  }}
                >
                  {/* Product Image */}
                  <div className="relative h-96 bg-[#f5f1e8] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#2c1810]/0 group-hover:bg-[#2c1810]/10 transition-all duration-300" />
                    
                    {/* Corner Decorations */}
                    <div className="absolute left-3 top-3 w-10 h-10 border-l-2 border-t-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute right-3 bottom-3 w-10 h-10 border-r-2 border-b-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="p-5 text-center">
                    <p className="text-[10px] tracking-[2px] text-[#2c1810]/60 mb-2 font-['Cormorant_Garamond',serif] uppercase">
                      {product.category}
                    </p>
                    <h3 className="text-[18px] tracking-[1px] mb-3 font-['Cinzel_Decorative',serif] text-[#2c1810] group-hover:text-[#c9a060] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[16px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                      ₹ {product.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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