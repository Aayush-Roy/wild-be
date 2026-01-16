
import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Filter, 
  ChevronDown, 
  X, 
  Loader,
  ShoppingBag,
  Grid
} from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
import { ProductDetailPage, CartItem } from './ProductDetailPage';

const API_BASE_URL = "https://api.sohwais.com/api";
// const API_BASE_URL = "http://localhost:5000/api";

interface ProductPageProps {
  collectionName: string;
  showAllProducts?: boolean;
  onBack: () => void;
  cartCount: number;
  onCartClick: () => void;
  onAddToCart: (item: CartItem) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
}

interface Product {
  _id: string;
  name: string;
  category: string;
  collection: string;
  subCategory: string;
  price: number;
  discount: number;
  stock: number;
  status: string;
  description: string;
  images: {
    url: string;
    public_id: string;
    isPrimary?: boolean;
  }[];
  variants: {
    color: string;
    size: string;
    price: number;
  }[];
  features: string[];
  tags: string[];
  rating: number;
  reviewsCount: number;
  createdAt: string;
  updatedAt: string;
}

export function ProductPage({ 
  collectionName, 
  showAllProducts = false,
  onBack, 
  cartCount, 
  onCartClick, 
  onAddToCart, 
  onCollectionClick, 
  onOurStoryClick, 
  onCraftsmanshipClick 
}: ProductPageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProductsData, setAllProductsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedSort, setSelectedSort] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCollectionFilter, setShowCollectionFilter] = useState(false);
  const [uniqueCollections, setUniqueCollections] = useState<string[]>([]);

  // सभी products fetch करें
  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}/products/category/Men`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        const productsData = data.data || [];
        setAllProductsData(productsData);
        
        // Unique collections extract करें
        const collections = Array.from(new Set(productsData.map((p: Product) => p.collection))).filter(Boolean);
        setUniqueCollections(collections as string[]);
        
        return productsData;
      } else {
        throw new Error(data.message || 'Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching all products:', error);
      setError(error instanceof Error ? error.message : 'Failed to load products');
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Collection के products fetch करें
  const fetchProductsByCollection = async (collection: string) => {
    console.log("collection",collection)
    try {
      setLoading(true);
      setError(null);
      
      const encodedCollection = encodeURIComponent(collection);
      const response = await fetch(`${API_BASE_URL}/products/collection/${encodedCollection}`);
     
      
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.data || []);
      } else {
        throw new Error(data.message || 'Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products by collection:', error);
      setError(error instanceof Error ? error.message : 'Failed to load products');
      const filteredProducts = allProductsData.filter(p => 
        p.collection.toLowerCase() === collection.toLowerCase()
      );
      setProducts(filteredProducts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showAllProducts) {
      fetchAllProducts().then(allProducts => {
        if (allProducts.length > 0) {
          setProducts(allProducts);
        }
      });
    } else {
      fetchProductsByCollection(collectionName);
    }
  }, [collectionName, showAllProducts]);

  // Products को filter करने के लिए
  const getFilteredProducts = () => {
    if (showAllProducts) {
      return allProductsData;
    }
    return products;
  };

  // Extract unique colors and sizes from filtered products
  const currentProducts = getFilteredProducts();
  const allColors = Array.from(new Set(
    currentProducts.flatMap(product => 
      product.variants?.map(variant => variant.color) || []
    )
  )).filter(Boolean);

  const allSizes = Array.from(new Set(
    currentProducts.flatMap(product => 
      product.variants?.map(variant => variant.size) || []
    )
  )).filter(Boolean);

  const colors = allColors.length > 0 ? allColors : ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Gold', 'Brown'];
  const sizes = allSizes.length > 0 ? allSizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  // Filter and sort products
  const filteredAndSortedProducts = () => {
    let filtered = [...currentProducts];

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product =>
        product.variants?.some(variant => selectedColors.includes(variant.color))
      );
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        product.variants?.some(variant => selectedSizes.includes(variant.size))
      );
    }

    // Filter by collections (only when showing all products)
    if (showAllProducts && selectedCollections.length > 0) {
      filtered = filtered.filter(product =>
        selectedCollections.includes(product.collection)
      );
    }

    // Sort products
    switch (selectedSort) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'newest':
        return filtered.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case 'name-asc':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filtered.sort((a, b) => b.rating - a.rating);
    }
  };

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' },
    { value: 'name-asc', label: 'Name: A-Z' },
    { value: 'name-desc', label: 'Name: Z-A' }
  ];

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

  const handleCollectionToggle = (collection: string) => {
    setSelectedCollections(prev =>
      prev.includes(collection) ? prev.filter(c => c !== collection) : [...prev, collection]
    );
  };

  const resetFilters = () => {
    setPriceRange([0, 50000]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCollections([]);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  // Get final price (with discount)
  const getFinalPrice = (price: number, discount: number) => {
    return discount > 0 ? Math.round(price - (price * discount / 100)) : price;
  };

  // Get primary image
  const getPrimaryImage = (product: Product) => {
    const primaryImage = product.images?.find(img => img.isPrimary);
    return primaryImage?.url || product.images?.[0]?.url || 'https://images.unsplash.com/photo-1568259550238-762d5f3d8e7f';
  };

  // If a product is selected, show the product detail page
  if (selectedProduct) {
    return (
      <ProductDetailPage
        productId={selectedProduct._id}
        productName={selectedProduct.name}
        collectionName={selectedProduct.collection}
        price={selectedProduct.price}
        discount={selectedProduct.discount}
        description={selectedProduct.description}
        images={selectedProduct.images}
        variants={selectedProduct.variants}
        features={selectedProduct.features}
        category={selectedProduct.category}
        subCategory={selectedProduct.subCategory}
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

  // Page title और description
  const pageTitle = showAllProducts ? 'All Collections' : collectionName;
  const pageDescription = showAllProducts 
    ? 'Explore our complete range of heritage-inspired designs from all collections'
    : `Discover the exquisite craftsmanship of our ${collectionName}`;

  const displayedProducts = filteredAndSortedProducts();

  return (
    <div className="min-h-screen bg-[#fdfcf9] flex flex-col">
      {/* Navigation - FIXED VERSION */}
      <div className="sticky top-0 left-0 right-0 z-40 bg-[#fdfcf9]">
        <Navigation 
          cartCount={cartCount} 
          onCartClick={onCartClick} 
          mode="light"
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
        />
      </div>

      {/* Main Content - Scrollable Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-6 sm:mb-8 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px] uppercase"
            aria-label="Go back to collections"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            BACK TO COLLECTIONS
          </button>

          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-[#2c1810] text-[28px] sm:text-[36px] md:text-[42px] tracking-[2.24px] sm:tracking-[2.88px] md:tracking-[3.36px] mb-4 sm:mb-5 md:mb-6 font-['Cinzel_Decorative',serif] uppercase px-4">
              {pageTitle}
            </h1>
            {showAllProducts && (
              <div className="flex items-center justify-center gap-2 mb-4">
                <Grid className="w-5 h-5 text-[#c9a060]" />
                <span className="text-[#2c1810]/70 text-[13px] font-['Cormorant_Garamond',serif]">
                  {uniqueCollections.length} Collections • {displayedProducts.length} Products
                </span>
              </div>
            )}
            <p className="text-[#2c1810]/70 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[0.5px] max-w-xl md:max-w-2xl mx-auto px-4 font-['Cormorant_Garamond',serif]">
              {pageDescription}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex justify-between items-center mb-6 sm:mb-8 text-sm text-[#2c1810]/70">
            <div className="flex items-center gap-4">
              <span className="font-['Cormorant_Garamond',serif]">
                {displayedProducts.length} Products
                {showAllProducts && ` across ${uniqueCollections.length} Collections`}
              </span>
              {(selectedColors.length > 0 || selectedSizes.length > 0 || selectedCollections.length > 0) && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#c9a060] hover:text-[#a88440] underline font-['Cormorant_Garamond',serif]"
                >
                  Clear Filters
                </button>
              )}
            </div>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase"
                aria-label="Sort options"
              >
                <span>SORT BY: {sortOptions.find(opt => opt.value === selectedSort)?.label || 'Featured'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showSortMenu ? 'rotate-180' : ''}`} />
              </button>

              {showSortMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-56 z-30 border border-[#2c1810]/10">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSelectedSort(option.value);
                        setShowSortMenu(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] transition-colors ${
                        selectedSort === option.value
                          ? 'bg-[#c9a060]/10 text-[#c9a060]'
                          : 'text-[#2c1810] hover:bg-[#fdfcf9]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Filters Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase mb-6"
            aria-label="Toggle filters"
          >
            <Filter className="w-4 h-4" />
            FILTERS
            {(selectedColors.length + selectedSizes.length + selectedCollections.length) > 0 && (
              <span className="ml-1 text-[#c9a060]">
                ({selectedColors.length + selectedSizes.length + selectedCollections.length})
              </span>
            )}
          </button>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <div className="w-full lg:w-80">
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

                  {/* Collections Filter (only for All Products) */}
                  {showAllProducts && uniqueCollections.length > 0 && (
                    <div className="mb-6 pb-6 border-b border-[#2c1810]/10">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-[13px] tracking-[1.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] uppercase">
                          Collections
                        </h3>
                        <button
                          onClick={() => setShowCollectionFilter(!showCollectionFilter)}
                          className="text-xs text-[#c9a060] hover:text-[#a88440] font-['Cormorant_Garamond',serif]"
                        >
                          {showCollectionFilter ? 'Show Less' : 'Show All'}
                        </button>
                      </div>
                      <div className="space-y-2">
                        {(showCollectionFilter ? uniqueCollections : uniqueCollections.slice(0, 5)).map((collection) => (
                          <button
                            key={collection}
                            onClick={() => handleCollectionToggle(collection)}
                            className={`flex items-center justify-between w-full px-3 py-2 text-left rounded transition-all ${
                              selectedCollections.includes(collection)
                                ? 'bg-[#c9a060]/10 text-[#c9a060] border border-[#c9a060]'
                                : 'text-[#2c1810] hover:bg-[#fdfcf9] border border-transparent'
                            }`}
                          >
                            <span className="text-[13px] font-['Cormorant_Garamond',serif]">{collection}</span>
                            <span className="text-xs text-[#2c1810]/50">
                              {currentProducts.filter(p => p.collection === collection).length}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price Range */}
                  <div className="mb-6 pb-6 border-b border-[#2c1810]/10">
                    <h3 className="text-[13px] tracking-[1.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] mb-4 uppercase">
                      Price Range (₹)
                    </h3>
                    <div className="flex gap-2 items-center text-[13px] font-['Cormorant_Garamond',serif]">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="w-24 px-3 py-2 border border-[#2c1810]/20 rounded text-[#2c1810] focus:border-[#c9a060] focus:outline-none"
                        placeholder="Min"
                        min="0"
                      />
                      <span className="text-[#2c1810]">-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 50000])}
                        className="w-24 px-3 py-2 border border-[#2c1810]/20 rounded text-[#2c1810] focus:border-[#c9a060] focus:outline-none"
                        placeholder="Max"
                        min="0"
                      />
                    </div>
                  </div>

                  {/* Colors */}
                  {/* {colors.length > 0 && (
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
                  )} */}
                  <div className="flex flex-wrap gap-3">
  {colors.map((color) => (
    <button
      key={color}
      onClick={() => handleColorToggle(color)}
      className={`w-8 h-8 rounded-full border transition-all ${
        selectedColors.includes(color)
          ? 'ring-2 ring-[#c9a060] ring-offset-2'
          : 'border-[#2c1810]/30'
      }`}
      style={{ backgroundColor: color }}
      title={color}   // hover pe hex dikh jayega
    />
  ))}
</div>


                  {/* Sizes */}
                  {sizes.length > 0 && (
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
                  )}

                  {/* Reset Button */}
                  <button
                    onClick={resetFilters}
                    className="w-full py-3 text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif] text-[#2c1810] border border-[#2c1810]/20 rounded-lg hover:bg-[#c9a060] hover:text-white hover:border-[#c9a060] transition-all uppercase"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className={`flex-1 ${showFilters ? 'lg:w-[calc(100%-20rem)]' : 'w-full'}`}>
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader className="w-12 h-12 animate-spin text-[#c9a060] mb-4" />
                  <p className="text-[#2c1810] font-['Cormorant_Garamond',serif]">
                    {showAllProducts ? 'Loading all products...' : 'Loading products...'}
                  </p>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <ShoppingBag className="w-16 h-16 text-[#2c1810]/30 mb-4" />
                  <p className="text-[#2c1810] font-['Cormorant_Garamond',serif] mb-2">{error}</p>
                  <button
                    onClick={() => showAllProducts ? fetchAllProducts() : fetchProductsByCollection(collectionName)}
                    className="px-6 py-2 text-sm text-[#c9a060] border border-[#c9a060] rounded-lg hover:bg-[#c9a060] hover:text-white transition-colors font-['Cormorant_Garamond',serif]"
                  >
                    Try Again
                  </button>
                </div>
              ) : displayedProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <ShoppingBag className="w-16 h-16 text-[#2c1810]/30 mb-4" />
                  <p className="text-[#2c1810] font-['Cormorant_Garamond',serif] text-lg mb-2">
                    {showAllProducts 
                      ? 'No products found' 
                      : `No products found in ${collectionName}`}
                  </p>
                  <p className="text-[#2c1810]/70 font-['Cormorant_Garamond',serif] mb-6 max-w-md">
                    Try adjusting your filters or check back later for new arrivals.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-2 text-sm text-[#c9a060] border border-[#c9a060] rounded-lg hover:bg-[#c9a060] hover:text-white transition-colors font-['Cormorant_Garamond',serif]"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <>
                  {/* Collection Tags for All Products */}
                  {showAllProducts && selectedCollections.length === 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {uniqueCollections.slice(0, 6).map(collection => (
                        <button
                          key={collection}
                          onClick={() => handleCollectionToggle(collection)}
                          className="px-4 py-2 text-xs tracking-[1px] bg-[#f5f1e8] text-[#2c1810] rounded-full hover:bg-[#c9a060] hover:text-white transition-colors font-['Cormorant_Garamond',serif]"
                        >
                          {collection}
                        </button>
                      ))}
                      {uniqueCollections.length > 6 && (
                        <button
                          onClick={() => setShowCollectionFilter(true)}
                          className="px-4 py-2 text-xs tracking-[1px] bg-[#f5f1e8] text-[#c9a060] rounded-full hover:bg-[#c9a060] hover:text-white transition-colors font-['Cormorant_Garamond',serif]"
                        >
                          +{uniqueCollections.length - 6} More
                        </button>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedProducts.map((product) => (
                      <div
                        key={product._id}
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
                            src={getPrimaryImage(product)}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1568259550238-762d5f3d8e7f';
                            }}
                          />
                          
                          {/* Discount Badge */}
                          {product.discount > 0 && (
                            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                              {product.discount}% OFF
                            </div>
                          )}
                          
                          {/* Collection Badge (only for All Products) */}
                          {showAllProducts && product.collection && (
                            <div className="absolute top-3 right-3 bg-[#2c1810]/80 text-white px-3 py-1 rounded-full text-xs font-['Cormorant_Garamond',serif]">
                              {product.collection}
                            </div>
                          )}
                          
                          {/* Stock Status */}
                          {product.stock === 0 && (
                            <div className="absolute top-12 left-3 bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
                              Out of Stock
                            </div>
                          )}
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-[#2c1810]/0 group-hover:bg-[#2c1810]/10 transition-all duration-300" />
                          
                          {/* Corner Decorations */}
                          <div className="absolute left-3 top-3 w-10 h-10 border-l-2 border-t-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          <div className="absolute right-3 bottom-3 w-10 h-10 border-r-2 border-b-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </div>

                        {/* Product Info */}
                        <div className="p-5">
                          {showAllProducts && product.collection && (
                            <div className="mb-2">
                              <span className="text-[10px] tracking-[2px] text-[#c9a060] font-['Cormorant_Garamond',serif] uppercase">
                                {product.collection}
                              </span>
                            </div>
                          )}
                          
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <h3 className="text-[18px] tracking-[1px] font-['Cinzel_Decorative',serif] text-[#2c1810] group-hover:text-[#c9a060] transition-colors line-clamp-2">
                                {product.name}
                              </h3>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              {product.discount > 0 ? (
                                <>
                                  <p className="text-[20px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#c9a060] font-bold">
                                    ₹ {getFinalPrice(product.price, product.discount).toLocaleString('en-IN')}
                                  </p>
                                  <p className="text-[16px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]/50 line-through">
                                    ₹ {product.price.toLocaleString('en-IN')}
                                  </p>
                                </>
                              ) : (
                                <p className="text-[20px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] font-bold">
                                  ₹ {product.price.toLocaleString('en-IN')}
                                </p>
                              )}
                            </div>
                          </div>
                          
                          {/* Category Tags */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {product.category && (
                              <span className="px-2 py-1 bg-[#f5f1e8] text-[#2c1810] text-xs rounded font-['Cormorant_Garamond',serif]">
                                {product.category}
                              </span>
                            )}
                            {product.subCategory && (
                              <span className="px-2 py-1 bg-[#f5f1e8] text-[#2c1810] text-xs rounded font-['Cormorant_Garamond',serif]">
                                {product.subCategory}
                              </span>
                            )}
                          </div>
                          
                          {/* Variants Preview */}
                          {product.variants && product.variants.length > 0 && (
                            <div className="flex gap-2">
                              {product.variants.slice(0, 3).map((variant, index) => (
                                <div key={index} className="flex items-center gap-1">
                                  <div 
                                    className="w-3 h-3 rounded-full border border-[#2c1810]/20"
                                    style={{ backgroundColor: variant.color }}
                                  />
                                  <span className="text-xs text-[#2c1810]/60">{variant.size}</span>
                                </div>
                              ))}
                              {product.variants.length > 3 && (
                                <span className="text-xs text-[#2c1810]/40">+{product.variants.length - 3}</span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - नीचे ही रहेगा */}
      <div className="mt-auto">
        <ExperienceFooterWrapper>
          <Footer />
        </ExperienceFooterWrapper>
      </div>
    </div>
  );
}