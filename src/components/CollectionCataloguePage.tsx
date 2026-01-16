// // import { useState } from 'react';
// // import { ArrowLeft, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
// // import { Navigation } from './Navigation';
// // import { motion, AnimatePresence } from 'motion/react';
// // import { ProductDetailPage, CartItem } from './ProductDetailPage';
// // import { Footer } from './Footer';
// // import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';

// // interface CollectionCataloguePageProps {
// //   collectionId: string;
// //   collectionName: string;
// //   gender: 'men' | 'women';
// //   onBack: (event?: React.MouseEvent) => void;
// //   cartCount: number;
// //   onCartClick: () => void;
// //   onAddToCart: (item: CartItem) => void;
// //   onCollectionClick?: (event?: React.MouseEvent) => void;
// //   onOurStoryClick?: (event?: React.MouseEvent) => void;
// //   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
// // }
// // console.log("hello")
// // // Product data structure with placeholders for images
// // const getProductsForCollection = (collectionId: string, gender: 'men' | 'women') => {
// //   const baseProducts = [
// //     { id: 1, name: 'Heritage Kurta', price: 4999 },
// //     { id: 2, name: 'Traditional Sherwani', price: 8999 },
// //     { id: 3, name: 'Classic Waistcoat', price: 3499 },
// //     { id: 4, name: 'Embroidered Jacket', price: 6499 },
// //     { id: 5, name: 'Silk Kurta Set', price: 5999 },
// //     { id: 6, name: 'Formal Ensemble', price: 7999 },
// //     { id: 7, name: 'Festive Collection', price: 9999 },
// //     { id: 8, name: 'Royal Attire', price: 12999 },
// //   ];

// //   // For "Explore All" (Craft Exploration), show products from all collections
// //   if (collectionId === 'explore-all') {
// //     return baseProducts.map((product, index) => ({
// //       ...product,
// //       id: `all-${product.id}`,
// //       collection: ['Madhubani', 'Sujini', 'Marble', 'Nakashi', 'Majestic Linen', 'Batik Archive'][index % 6],
// //     }));
// //   }

// //   return baseProducts.map(product => ({
// //     ...product,
// //     id: `${collectionId}-${product.id}`,
// //     collection: collectionId,
// //   }));
// // };

// // export function CollectionCataloguePage({
// //   collectionId,
// //   collectionName,
// //   gender,
// //   onBack,
// //   cartCount,
// //   onCartClick,
// //   onAddToCart,
// //   onCollectionClick,
// //   onOurStoryClick,
// //   onCraftsmanshipClick
// // }: CollectionCataloguePageProps) {
// //   const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
// //   const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'newest'>('featured');
// //   const [showFilters, setShowFilters] = useState(false);
// //   const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
// //   const [priceRange, setPriceRange] = useState<'all' | 'under-5k' | '5k-10k' | 'above-10k'>('all');
// //   const [selectedAvailability, setSelectedAvailability] = useState<'all' | 'in-stock' | 'out-of-stock'>('all');

// //   const products = getProductsForCollection(collectionId, gender);

// //   // Sizing options based on gender
// //   const sizeOptions = gender === 'men' 
// //     ? ['S', 'M', 'L', 'XL', 'XXL', '38', '40', '42', '44', '46']
// //     : ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

// //   // Page heading based on collection
// //   const pageHeading = collectionId === 'explore-all' ? 'Craft Exploration' : collectionName;

// //   // Filter products
// //   const filteredProducts = products.filter(product => {
// //     // Price filter
// //     if (priceRange === 'under-5k' && product.price >= 5000) return false;
// //     if (priceRange === '5k-10k' && (product.price < 5000 || product.price >= 10000)) return false;
// //     if (priceRange === 'above-10k' && product.price < 10000) return false;
// //     return true;
// //   });

// //   // Sort products
// //   const sortedProducts = [...filteredProducts].sort((a, b) => {
// //     if (sortBy === 'price-low') return a.price - b.price;
// //     if (sortBy === 'price-high') return b.price - a.price;
// //     if (sortBy === 'newest') return b.id.toString().localeCompare(a.id.toString());
// //     return 0; // featured - keep original order
// //   });

// //   const handleSizeToggle = (size: string) => {
// //     setSelectedSizes(prev =>
// //       prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
// //     );
// //   };

// //   const handleProductClick = (productId: string) => {
// //     // Scroll to top smoothly before showing product detail
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //     // Small delay to allow scroll to start, then show product
// //     setTimeout(() => {
// //       setSelectedProduct(productId);
// //     }, 100);
// //   };

// //   const handleBackToCatalogue = () => {
// //     // Scroll to top instantly when going back
// //     window.scrollTo({ top: 0, behavior: 'instant' });
// //     setSelectedProduct(null);
// //   };

// //   const clearAllFilters = () => {
// //     setSelectedSizes([]);
// //     setPriceRange('all');
// //     setSelectedAvailability('all');
// //   };

// //   const activeFilterCount = selectedSizes.length + (priceRange !== 'all' ? 1 : 0) + (selectedAvailability !== 'all' ? 1 : 0);

// //   // If product is selected, show detail page
// //   if (selectedProduct) {
// //     const product = products.find(p => p.id === selectedProduct);
// //     if (product) {
// //       return (
// //         <ProductDetailPage
// //           productId={product.id}
// //           productName={product.name}
// //           collectionName={collectionName}
// //           price={product.price}
// //           gender={gender}
// //           onBack={handleBackToCatalogue}
// //           cartCount={cartCount}
// //           onCartClick={onCartClick}
// //           onAddToCart={onAddToCart}
// //           onCollectionClick={onCollectionClick}
// //           onOurStoryClick={onOurStoryClick}
// //           onCraftsmanshipClick={onCraftsmanshipClick}
// //         />
// //       );
// //     }
// //   }

// //   // WOMEN'S SECTION - Keep original simple design
// //   if (gender === 'women') {
// //     return (
// //       <div className="min-h-screen bg-[#fdfcf9]">
// //         {/* Navigation */}
// //         <div className="fixed top-0 left-0 right-0 z-40">
// //           <Navigation 
// //             cartCount={cartCount} 
// //             onCartClick={onCartClick} 
// //             mode="light"
// //             onCollectionClick={onCollectionClick}
// //             onOurStoryClick={onOurStoryClick}
// //             onCraftsmanshipClick={onCraftsmanshipClick}
// //           />
// //         </div>
        

// //         {/* Content */}
// //         <div className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
// //           <div className="px-4 sm:px-6 md:px-12 lg:px-20">
// //             {/* Back Button */}
// //             <button
// //               onClick={onBack}
// //               className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-8 sm:mb-10 md:mb-12 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px]"
// //               aria-label="Go back"
// //             >
// //               <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// //               <span className="hidden sm:inline">BACK</span>
// //             </button>

// //             {/* Header */}
// //             <div className="text-center mb-8 sm:mb-10 md:mb-12">
// //               <h1 className="text-[#2c1810] text-[28px] sm:text-[38px] md:text-[48px] tracking-[2px] sm:tracking-[3px] md:tracking-[3.84px] mb-3 sm:mb-4 font-['Cinzel_Decorative',serif]">
// //                 {pageHeading}
// //               </h1>
// //               <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-[#c9a060] to-transparent mx-auto mb-3 sm:mb-4" />
// //               <p className="text-[#2c1810]/70 text-[11px] sm:text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
// //                 {sortedProducts.length} Products • Women's Collection
// //               </p>
// //             </div>

// //             {/* Filters and Sort Bar */}
// //             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 max-w-7xl mx-auto">
// //               {/* Filter Button */}
// //               <button
// //                 onClick={() => setShowFilters(!showFilters)}
// //                 className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] border border-[#2c1810]/20 px-4 py-2 rounded-sm"
// //               >
// //                 <SlidersHorizontal className="w-4 h-4" />
// //                 FILTERS {selectedSizes.length > 0 || priceRange !== 'all' ? `(${selectedSizes.length + (priceRange !== 'all' ? 1 : 0)})` : ''}
// //               </button>

// //               {/* Sort Dropdown */}
// //               <div className="relative">
// //                 <select
// //                   value={sortBy}
// //                   onChange={(e) => setSortBy(e.target.value as any)}
// //                   className="appearance-none bg-white border border-[#2c1810]/20 text-[#2c1810] text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] px-4 py-2 pr-8 rounded-sm cursor-pointer hover:border-[#c9a060] transition-colors"
// //                 >
// //                   <option value="featured">SORT: FEATURED</option>
// //                   <option value="price-low">SORT: PRICE LOW TO HIGH</option>
// //                   <option value="price-high">SORT: PRICE HIGH TO LOW</option>
// //                   <option value="newest">SORT: NEWEST</option>
// //                 </select>
// //                 <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2c1810] pointer-events-none" />
// //               </div>
// //             </div>

// //             {/* Filter Panel */}
// //             <AnimatePresence>
// //               {showFilters && (
// //                 <motion.div
// //                   initial={{ height: 0, opacity: 0 }}
// //                   animate={{ height: 'auto', opacity: 1 }}
// //                   exit={{ height: 0, opacity: 0 }}
// //                   transition={{ duration: 0.3 }}
// //                   className="overflow-hidden mb-8 max-w-7xl mx-auto"
// //                 >
// //                   <div className="border border-[#2c1810]/20 rounded-sm p-6 bg-white">
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                       {/* Size Filter */}
// //                       <div>
// //                         <h3 className="text-[#2c1810] text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] mb-4 uppercase">
// //                           Size
// //                         </h3>
// //                         <div className="flex flex-wrap gap-2">
// //                           {sizeOptions.map(size => (
// //                             <button
// //                               key={size}
// //                               onClick={() => handleSizeToggle(size)}
// //                               className={`px-3 py-1.5 text-[10px] tracking-[1px] font-['Cormorant_Garamond',serif] border rounded-sm transition-all ${
// //                                 selectedSizes.includes(size)
// //                                   ? 'bg-[#2c1810] text-white border-[#2c1810]'
// //                                   : 'bg-white text-[#2c1810] border-[#2c1810]/20 hover:border-[#c9a060]'
// //                               }`}
// //                             >
// //                               {size}
// //                             </button>
// //                           ))}
// //                         </div>
// //                       </div>

// //                       {/* Price Range Filter */}
// //                       <div>
// //                         <h3 className="text-[#2c1810] text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] mb-4 uppercase">
// //                           Price Range
// //                         </h3>
// //                         <div className="flex flex-col gap-2">
// //                           {['all', 'under-5k', '5k-10k', 'above-10k'].map(range => (
// //                             <button
// //                               key={range}
// //                               onClick={() => setPriceRange(range as any)}
// //                               className={`px-3 py-1.5 text-[11px] tracking-[1px] font-['Cormorant_Garamond',serif] border rounded-sm transition-all text-left ${
// //                                 priceRange === range
// //                                   ? 'bg-[#2c1810] text-white border-[#2c1810]'
// //                                   : 'bg-white text-[#2c1810] border-[#2c1810]/20 hover:border-[#c9a060]'
// //                               }`}
// //                             >
// //                               {range === 'all' && 'All Prices'}
// //                               {range === 'under-5k' && 'Under ₹5,000'}
// //                               {range === '5k-10k' && '₹5,000 - ₹10,000'}
// //                               {range === 'above-10k' && 'Above ₹10,000'}
// //                             </button>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Clear Filters */}
// //                     {(selectedSizes.length > 0 || priceRange !== 'all') && (
// //                       <button
// //                         onClick={() => {
// //                           setSelectedSizes([]);
// //                           setPriceRange('all');
// //                         }}
// //                         className="mt-6 text-[#c9a060] hover:text-[#2c1810] text-[10px] tracking-[1.5px] font-['Cormorant_Garamond',serif] underline transition-colors"
// //                       >
// //                         CLEAR ALL FILTERS
// //                       </button>
// //                     )}
// //                   </div>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>

// //             {/* Products Grid */}
// //             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
// //               {sortedProducts.map((product, index) => (
// //                 <motion.div
// //                   key={product.id}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.05, duration: 0.4 }}
// //                   className="group cursor-pointer"
// //                   onClick={() => handleProductClick(product.id)}
// //                 >
// //                   {/* Product Image Placeholder */}
// //                   <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-[#2c1810]/5 to-[#c9a060]/5 aspect-[3/4] mb-3">
// //                     <div className="w-full h-full flex items-center justify-center">
// //                       <div className="text-center p-4">
// //                         <div className="w-16 h-16 mx-auto mb-3 border-2 border-dashed border-[#c9a060]/20 rounded-full flex items-center justify-center">
// //                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a060]/30">
// //                             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
// //                             <circle cx="8.5" cy="8.5" r="1.5"/>
// //                             <polyline points="21 15 16 10 5 21"/>
// //                           </svg>
// //                         </div>
// //                         <p className="text-[9px] tracking-[1px] text-[#2c1810]/30 font-['Cormorant_Garamond',serif] uppercase">
// //                           Product Image
// //                         </p>
// //                       </div>
// //                     </div>
                    
// //                     {/* Hover Overlay */}
// //                     <div className="absolute inset-0 bg-[#2c1810]/0 group-hover:bg-[#2c1810]/10 transition-all duration-300" />
// //                   </div>

// //                   {/* Product Info */}
// //                   <div className="text-center px-1">
// //                     <h3 className="text-[#2c1810] text-[13px] sm:text-[14px] tracking-[0.5px] mb-1 font-['Playfair_Display',serif] group-hover:text-[#c9a060] transition-colors">
// //                       {product.name}
// //                     </h3>
// //                     <p className="text-[#2c1810]/60 text-[10px] tracking-[1px] font-['Cormorant_Garamond',serif] mb-2">
// //                       {collectionId === 'explore-all' ? product.collection : collectionName}
// //                     </p>
// //                     <p className="text-[#2c1810] text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
// //                       ₹{product.price.toLocaleString('en-IN')}
// //                     </p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             {/* No Results Message */}
// //             {sortedProducts.length === 0 && (
// //               <div className="text-center py-20">
// //                 <p className="text-[#2c1810]/60 text-[13px] tracking-[1px] font-['Cormorant_Garamond',serif]">
// //                   No products match your filters. Try adjusting your selection.
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //         <ExperienceFooterWrapper>
// //           <Footer 
// //             onOurStoryClick={onOurStoryClick} 
// //             onCraftsmanshipClick={onCraftsmanshipClick}
// //             onCollectionClick={onCollectionClick}
// //             onHomeClick={onBack}
// //           />
// //         </ExperienceFooterWrapper>
// //       </div>
// //     );
// //   }

// //   // Catalogue view
// //   return (
// //     <div className="min-h-screen bg-[#fdfcf9]">
// //       {/* Navigation */}
// //       <div className="fixed top-0 left-0 right-0 z-40">
// //         <Navigation 
// //           cartCount={cartCount} 
// //           onCartClick={onCartClick} 
// //           mode="light"
// //           onCollectionClick={onCollectionClick}
// //           onOurStoryClick={onOurStoryClick}
// //           onCraftsmanshipClick={onCraftsmanshipClick}
// //         />
// //       </div>

// //       {/* Content with Sidebar Layout */}
// //       <div className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
// //         <div className="px-4 sm:px-6 md:px-12 lg:px-20">
// //           {/* Back Button */}
// //           <button
// //             onClick={onBack}
// //             className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-8 sm:mb-10 md:mb-12 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px]"
// //             aria-label="Go back"
// //           >
// //             <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// //             <span className="hidden sm:inline">BACK</span>
// //           </button>

// //           {/* Header */}
// //           <div className="text-center mb-8 sm:mb-10 md:mb-12">
// //             <h1 className="text-[#2c1810] text-[32px] sm:text-[42px] md:text-[52px] tracking-[2.5px] sm:tracking-[3.2px] md:tracking-[4.16px] mb-4 sm:mb-5 font-['Cinzel_Decorative',serif]">
// //               {pageHeading}
// //             </h1>
// //             <div className="w-20 sm:w-24 md:w-32 h-[2px] bg-gradient-to-r from-transparent via-[#c9a060] to-transparent mx-auto mb-4 sm:mb-5" />
// //             <p className="text-[#2c1810]/60 text-[12px] sm:text-[13px] tracking-[1px] font-['Cormorant_Garamond',serif] uppercase">
// //               {sortedProducts.length} Handcrafted Pieces • Men's Collection
// //             </p>
// //           </div>

// //           {/* Mobile Filter/Sort Bar */}
// //           <div className="lg:hidden flex items-center justify-between gap-4 mb-8 pb-4 border-b border-[#2c1810]/10">
// //             <button
// //               onClick={() => setShowFilters(!showFilters)}
// //               className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] px-4 py-2.5 border border-[#2c1810]/20 rounded-sm uppercase"
// //             >
// //               <SlidersHorizontal className="w-4 h-4" />
// //               Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
// //             </button>

// //             <div className="relative">
// //               <select
// //                 value={sortBy}
// //                 onChange={(e) => setSortBy(e.target.value as any)}
// //                 className="appearance-none bg-white border border-[#2c1810]/20 text-[#2c1810] text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] px-4 py-2.5 pr-10 rounded-sm cursor-pointer hover:border-[#c9a060] transition-colors uppercase"
// //               >
// //                 <option value="featured">Featured</option>
// //                 <option value="price-low">Price: Low to High</option>
// //                 <option value="price-high">Price: High to Low</option>
// //                 <option value="newest">Newest</option>
// //               </select>
// //               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2c1810] pointer-events-none" />
// //             </div>
// //           </div>

// //           {/* Main Content Area with Sidebar */}
// //           <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-[1600px] mx-auto">
// //             {/* Desktop Sidebar Filter Panel */}
// //             <AnimatePresence>
// //               {showFilters && (
// //                 <motion.aside
// //                   initial={{ width: 0, opacity: 0 }}
// //                   animate={{ width: 320, opacity: 1 }}
// //                   exit={{ width: 0, opacity: 0 }}
// //                   transition={{ type: 'spring', damping: 25, stiffness: 200 }}
// //                   className="hidden lg:block flex-shrink-0 overflow-hidden"
// //                 >
// //                   <div className="sticky top-32 w-80">
// //                     {/* Filter Header */}
// //                     <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2c1810]/10">
// //                       <h2 className="text-[#2c1810] text-[14px] tracking-[2px] font-['Cinzel_Decorative',serif] uppercase">
// //                         Refine By
// //                       </h2>
// //                       <button
// //                         onClick={() => setShowFilters(false)}
// //                         className="p-1 hover:bg-[#2c1810]/5 rounded-full transition-colors"
// //                         aria-label="Close filters"
// //                       >
// //                         <X className="w-5 h-5 text-[#2c1810]" />
// //                       </button>
// //                     </div>

// //                     <div className="space-y-8">
// //                       {/* Size Filter */}
// //                       <div>
// //                         <h3 className="text-[#2c1810] text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] mb-4 uppercase">
// //                           Size
// //                         </h3>
// //                         <div className="flex flex-wrap gap-2">
// //                           {sizeOptions.map(size => (
// //                             <button
// //                               key={size}
// //                               onClick={() => handleSizeToggle(size)}
// //                               className={`relative px-4 py-2.5 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] transition-all duration-300 rounded-sm overflow-hidden group ${
// //                                 selectedSizes.includes(size)
// //                                   ? 'bg-gradient-to-br from-[#2c1810] to-[#1a0f08] text-[#fdfcf9] shadow-md'
// //                                   : 'bg-[#fdfcf9] text-[#2c1810] shadow-sm hover:shadow-md'
// //                               }`}
// //                               style={{
// //                                 border: selectedSizes.includes(size) 
// //                                   ? '1.5px solid #c9a060' 
// //                                   : '1px solid rgba(44, 24, 16, 0.15)'
// //                               }}
// //                             >
// //                               <span className="relative z-10">{size}</span>
// //                               {!selectedSizes.includes(size) && (
// //                                 <div className="absolute inset-0 bg-gradient-to-br from-[#c9a060]/0 to-[#c9a060]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                               )}
// //                               {selectedSizes.includes(size) && (
// //                                 <div className="absolute inset-0 bg-gradient-to-br from-[#c9a060]/20 to-transparent" />
// //                               )}
// //                             </button>
// //                           ))}
// //                         </div>
// //                       </div>

// //                       <div className="border-t border-[#2c1810]/10 pt-8">
// //                         {/* Availability Filter */}
// //                         <h3 className="text-[#2c1810] text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] mb-4 uppercase">
// //                           Availability
// //                         </h3>
// //                         <div className="space-y-3">
// //                           {[
// //                             { value: 'all', label: 'All Products' },
// //                             { value: 'in-stock', label: 'In Stock' },
// //                             { value: 'out-of-stock', label: 'Out of Stock' },
// //                           ].map(availability => (
// //                             <label
// //                               key={availability.value}
// //                               className="flex items-center gap-3 cursor-pointer group"
// //                             >
// //                               <input
// //                                 type="radio"
// //                                 name="availability"
// //                                 checked={selectedAvailability === availability.value}
// //                                 onChange={() => setSelectedAvailability(availability.value as any)}
// //                                 className="sr-only"
// //                               />
// //                               <div className={`relative w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
// //                                 selectedAvailability === availability.value
// //                                   ? 'border-[#c9a060] bg-gradient-to-br from-[#c9a060] to-[#b8935a] shadow-md'
// //                                   : 'border-[#2c1810]/30 bg-[#fdfcf9] group-hover:border-[#c9a060]/50 group-hover:shadow-sm'
// //                               }`}>
// //                                 {selectedAvailability === availability.value && (
// //                                   <div className="w-2 h-2 rounded-full bg-[#fdfcf9] shadow-inner" />
// //                                 )}
// //                               </div>
// //                               <span className={`text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] transition-colors duration-300 ${
// //                                 selectedAvailability === availability.value
// //                                   ? 'text-[#2c1810]'
// //                                   : 'text-[#2c1810]/70 group-hover:text-[#c9a060]'
// //                               }`}>
// //                                 {availability.label}
// //                               </span>
// //                             </label>
// //                           ))}
// //                         </div>
// //                       </div>

// //                       <div className="border-t border-[#2c1810]/10 pt-8">
// //                         {/* Price Range Filter */}
// //                         <h3 className="text-[#2c1810] text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] mb-4 uppercase">
// //                           Price Range
// //                         </h3>
// //                         <div className="space-y-3">
// //                           {[
// //                             { value: 'all', label: 'All Prices' },
// //                             { value: 'under-5k', label: 'Under ₹5,000' },
// //                             { value: '5k-10k', label: '₹5,000 - ₹10,000' },
// //                             { value: 'above-10k', label: 'Above ₹10,000' },
// //                           ].map(range => (
// //                             <label
// //                               key={range.value}
// //                               className="flex items-center gap-3 cursor-pointer group"
// //                             >
// //                               <input
// //                                 type="radio"
// //                                 name="priceRange"
// //                                 checked={priceRange === range.value}
// //                                 onChange={() => setPriceRange(range.value as any)}
// //                                 className="sr-only"
// //                               />
// //                               <div className={`relative w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
// //                                 priceRange === range.value
// //                                   ? 'border-[#c9a060] bg-gradient-to-br from-[#c9a060] to-[#b8935a] shadow-md'
// //                                   : 'border-[#2c1810]/30 bg-[#fdfcf9] group-hover:border-[#c9a060]/50 group-hover:shadow-sm'
// //                               }`}>
// //                                 {priceRange === range.value && (
// //                                   <div className="w-2 h-2 rounded-full bg-[#fdfcf9] shadow-inner" />
// //                                 )}
// //                               </div>
// //                               <span className={`text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] transition-colors duration-300 ${
// //                                 priceRange === range.value
// //                                   ? 'text-[#2c1810]'
// //                                   : 'text-[#2c1810]/70 group-hover:text-[#c9a060]'
// //                               }`}>
// //                                 {range.label}
// //                               </span>
// //                             </label>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Done and Clear All Buttons */}
// //                     <div className="mt-8 pt-6 border-t border-[#2c1810]/10 space-y-3">
// //                       {activeFilterCount > 0 && (
// //                         <button
// //                           onClick={clearAllFilters}
// //                           className="relative w-full py-3.5 text-[#2c1810] border-2 border-[#2c1810]/20 text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase transition-all duration-300 rounded-sm overflow-hidden group hover:border-[#c9a060]/50 hover:shadow-md"
// //                         >
// //                           <span className="relative z-10">Clear All Filters</span>
// //                           <div className="absolute inset-0 bg-gradient-to-r from-[#c9a060]/0 via-[#c9a060]/5 to-[#c9a060]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                         </button>
// //                       )}
// //                       <button
// //                         onClick={() => setShowFilters(false)}
// //                         className="relative w-full py-3.5 text-[#fdfcf9] bg-gradient-to-r from-[#2c1810] via-[#3d2418] to-[#2c1810] border border-[#c9a060]/30 text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase transition-all duration-300 rounded-sm overflow-hidden group hover:shadow-lg"
// //                       >
// //                         <span className="relative z-10">Done</span>
// //                         <div className="absolute inset-0 bg-gradient-to-r from-[#c9a060]/0 via-[#c9a060]/20 to-[#c9a060]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </motion.aside>
// //               )}
// //             </AnimatePresence>

// //             {/* Mobile Filter Sidebar Overlay */}
// //             <AnimatePresence>
// //               {showFilters && (
// //                 <>
// //                   {/* Backdrop */}
// //                   <motion.div
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     exit={{ opacity: 0 }}
// //                     transition={{ duration: 0.3 }}
// //                     className="lg:hidden fixed inset-0 bg-black/50 z-40"
// //                     onClick={() => setShowFilters(false)}
// //                   />
                  
// //                   {/* Sidebar */}
// //                   <motion.div
// //                     initial={{ x: -320 }}
// //                     animate={{ x: 0 }}
// //                     exit={{ x: -320 }}
// //                     transition={{ type: 'spring', damping: 25, stiffness: 200 }}
// //                     className="lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-[#fdfcf9] z-50 overflow-y-auto shadow-2xl"
// //                   >
// //                     <div className="p-6">
// //                       {/* Filter Header */}
// //                       <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2c1810]/10">
// //                         <h2 className="text-[#2c1810] text-[14px] tracking-[2px] font-['Cinzel_Decorative',serif] uppercase">
// //                           Filters
// //                         </h2>
// //                         <button
// //                           onClick={() => setShowFilters(false)}
// //                           className="p-1 hover:bg-[#2c1810]/5 rounded-full transition-colors"
// //                           aria-label="Close filters"
// //                         >
// //                           <X className="w-5 h-5 text-[#2c1810]" />
// //                         </button>
// //                       </div>

// //                       <div className="space-y-8">
// //                         {/* Size Filter */}
// //                         <div>
// //                           <h3 className="text-[#2c1810] text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] mb-4 uppercase">
// //                             Size
// //                           </h3>
// //                           <div className="flex flex-wrap gap-2">
// //                             {sizeOptions.map(size => (
// //                               <button
// //                                 key={size}
// //                                 onClick={() => handleSizeToggle(size)}
// //                                 className={`relative px-4 py-2.5 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] transition-all duration-300 rounded-sm overflow-hidden group ${
// //                                   selectedSizes.includes(size)
// //                                     ? 'bg-gradient-to-br from-[#2c1810] to-[#1a0f08] text-[#fdfcf9] shadow-md'
// //                                     : 'bg-[#fdfcf9] text-[#2c1810] shadow-sm hover:shadow-md'
// //                                 }`}
// //                                 style={{
// //                                   border: selectedSizes.includes(size) 
// //                                     ? '1.5px solid #c9a060' 
// //                                     : '1px solid rgba(44, 24, 16, 0.15)'
// //                                 }}
// //                               >
// //                                 <span className="relative z-10">{size}</span>
// //                                 {!selectedSizes.includes(size) && (
// //                                   <div className="absolute inset-0 bg-gradient-to-br from-[#c9a060]/0 to-[#c9a060]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                                 )}
// //                                 {selectedSizes.includes(size) && (
// //                                   <div className="absolute inset-0 bg-gradient-to-br from-[#c9a060]/20 to-transparent" />
// //                                 )}
// //                               </button>
// //                             ))}
// //                           </div>
// //                         </div>

// //                         <div className="border-t border-[#2c1810]/10 pt-8">
// //                           {/* Availability Filter */}
// //                           <h3 className="text-[#2c1810] text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] mb-4 uppercase">
// //                             Availability
// //                           </h3>
// //                           <div className="space-y-3">
// //                             {[
// //                               { value: 'all', label: 'All Products' },
// //                               { value: 'in-stock', label: 'In Stock' },
// //                               { value: 'out-of-stock', label: 'Out of Stock' },
// //                             ].map(availability => (
// //                               <label
// //                                 key={availability.value}
// //                                 className="flex items-center gap-3 cursor-pointer group"
// //                               >
// //                                 <input
// //                                   type="radio"
// //                                   name="availabilityMobile"
// //                                   checked={selectedAvailability === availability.value}
// //                                   onChange={() => setSelectedAvailability(availability.value as any)}
// //                                   className="sr-only"
// //                                 />
// //                                 <div className={`relative w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
// //                                   selectedAvailability === availability.value
// //                                     ? 'border-[#c9a060] bg-gradient-to-br from-[#c9a060] to-[#b8935a] shadow-md'
// //                                     : 'border-[#2c1810]/30 bg-[#fdfcf9] group-hover:border-[#c9a060]/50 group-hover:shadow-sm'
// //                                 }`}>
// //                                   {selectedAvailability === availability.value && (
// //                                     <div className="w-2 h-2 rounded-full bg-[#fdfcf9] shadow-inner" />
// //                                   )}
// //                                 </div>
// //                                 <span className={`text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] transition-colors duration-300 ${
// //                                   selectedAvailability === availability.value
// //                                     ? 'text-[#2c1810]'
// //                                     : 'text-[#2c1810]/70 group-hover:text-[#c9a060]'
// //                                 }`}>
// //                                   {availability.label}
// //                                 </span>
// //                               </label>
// //                             ))}
// //                           </div>
// //                         </div>

// //                         <div className="border-t border-[#2c1810]/10 pt-8">
// //                           {/* Price Range Filter */}
// //                           <h3 className="text-[#2c1810] text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] mb-4 uppercase">
// //                             Price Range
// //                           </h3>
// //                           <div className="space-y-3">
// //                             {[
// //                               { value: 'all', label: 'All Prices' },
// //                               { value: 'under-5k', label: 'Under ₹5,000' },
// //                               { value: '5k-10k', label: '₹5,000 - ₹10,000' },
// //                               { value: 'above-10k', label: 'Above ₹10,000' },
// //                             ].map(range => (
// //                               <label
// //                                 key={range.value}
// //                                 className="flex items-center gap-3 cursor-pointer group"
// //                               >
// //                                 <input
// //                                   type="radio"
// //                                   name="priceRangeMobile"
// //                                   checked={priceRange === range.value}
// //                                   onChange={() => setPriceRange(range.value as any)}
// //                                   className="sr-only"
// //                                 />
// //                                 <div className={`relative w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
// //                                   priceRange === range.value
// //                                     ? 'border-[#c9a060] bg-gradient-to-br from-[#c9a060] to-[#b8935a] shadow-md'
// //                                     : 'border-[#2c1810]/30 bg-[#fdfcf9] group-hover:border-[#c9a060]/50 group-hover:shadow-sm'
// //                                 }`}>
// //                                   {priceRange === range.value && (
// //                                     <div className="w-2 h-2 rounded-full bg-[#fdfcf9] shadow-inner" />
// //                                   )}
// //                                 </div>
// //                                 <span className={`text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] transition-colors duration-300 ${
// //                                   priceRange === range.value
// //                                     ? 'text-[#2c1810]'
// //                                     : 'text-[#2c1810]/70 group-hover:text-[#c9a060]'
// //                                 }`}>
// //                                   {range.label}
// //                                 </span>
// //                               </label>
// //                             ))}
// //                           </div>
// //                         </div>
// //                       </div>

// //                       {/* Clear All Button */}
// //                       {activeFilterCount > 0 && (
// //                         <div className="mt-8 pt-6 border-t border-[#2c1810]/10">
// //                           <button
// //                             onClick={() => {
// //                               clearAllFilters();
// //                               setShowFilters(false);
// //                             }}
// //                             className="w-full py-3 text-[#c9a060] hover:text-white hover:bg-[#c9a060] border border-[#c9a060] text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase transition-all rounded-sm"
// //                           >
// //                             Clear All Filters
// //                           </button>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </motion.div>
// //                 </>
// //               )}
// //             </AnimatePresence>

// //             {/* Products Area */}
// //             <div className="flex-1">
// //               {/* Desktop Sort Bar */}
// //               <div className="hidden lg:flex items-center justify-between mb-8 pb-4 border-b border-[#2c1810]/10">
// //                 <div className="flex items-center gap-4">
// //                   <p className="text-[#2c1810]/60 text-[12px] tracking-[1px] font-['Cormorant_Garamond',serif]">
// //                     Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
// //                   </p>
                  
// //                   {/* Filter Toggle Button */}
// //                   <button
// //                     onClick={() => setShowFilters(!showFilters)}
// //                     className={`relative flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] border-2 rounded-sm uppercase transition-all duration-300 overflow-hidden group ${
// //                       showFilters
// //                         ? 'bg-gradient-to-r from-[#2c1810] via-[#3d2418] to-[#2c1810] text-[#fdfcf9] border-[#c9a060]/40 shadow-md'
// //                         : 'bg-[#fdfcf9] text-[#2c1810] border-[#2c1810]/15 hover:border-[#c9a060]/50 hover:shadow-md'
// //                     }`}
// //                   >
// //                     <SlidersHorizontal className="w-4 h-4 relative z-10" />
// //                     <span className="relative z-10">Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
// //                     {!showFilters && (
// //                       <div className="absolute inset-0 bg-gradient-to-r from-[#c9a060]/0 via-[#c9a060]/5 to-[#c9a060]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                     )}
// //                     {showFilters && (
// //                       <div className="absolute inset-0 bg-gradient-to-r from-[#c9a060]/0 via-[#c9a060]/20 to-[#c9a060]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                     )}
// //                   </button>
// //                 </div>
                
// //                 <div className="flex items-center gap-3">
// //                   <span className="text-[#2c1810]/60 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] uppercase">
// //                     Sort By:
// //                   </span>
// //                   <div className="relative group">
// //                     <select
// //                       value={sortBy}
// //                       onChange={(e) => setSortBy(e.target.value as any)}
// //                       className="appearance-none bg-[#fdfcf9] border-2 border-[#2c1810]/15 text-[#2c1810] text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] px-5 py-2.5 pr-11 rounded-sm cursor-pointer hover:border-[#c9a060]/50 hover:shadow-md transition-all duration-300 uppercase"
// //                     >
// //                       <option value="featured">Featured</option>
// //                       <option value="price-low">Price: Low to High</option>
// //                       <option value="price-high">Price: High to Low</option>
// //                       <option value="newest">Newest</option>
// //                     </select>
// //                     <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2c1810] pointer-events-none transition-transform group-hover:translate-y-[-45%]" />
// //                     <div className="absolute inset-0 bg-gradient-to-r from-[#c9a060]/0 via-[#c9a060]/5 to-[#c9a060]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm" />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Products Grid */}
// //               <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
// //                 {sortedProducts.map((product, index) => (
// //                   <motion.div
// //                     key={product.id}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: index * 0.05, duration: 0.4 }}
// //                     className="group cursor-pointer"
// //                     onClick={() => handleProductClick(product.id)}
// //                   >
// //                     {/* Product Image */}
// //                     <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-[#2c1810]/5 to-[#c9a060]/5 aspect-[3/4] mb-4">
// //                       <div className="w-full h-full flex items-center justify-center">
// //                         <div className="text-center p-4">
// //                           <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-[#c9a060]/20 rounded-full flex items-center justify-center">
// //                             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a060]/30">
// //                               <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
// //                               <circle cx="8.5" cy="8.5" r="1.5"/>
// //                               <polyline points="21 15 16 10 5 21"/>
// //                             </svg>
// //                           </div>
// //                           <p className="text-[10px] tracking-[1.5px] text-[#2c1810]/30 font-['Cormorant_Garamond',serif] uppercase">
// //                             Product Image
// //                           </p>
// //                         </div>
// //                       </div>
                      
// //                       {/* Hover Overlay */}
// //                       <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
// //                     </div>

// //                     {/* Product Info */}
// //                     <div className="text-center">
// //                       <h3 className="text-[#2c1810] text-[14px] sm:text-[15px] tracking-[0.5px] mb-2 font-['Playfair_Display',serif] group-hover:text-[#c9a060] transition-colors">
// //                         {product.name}
// //                       </h3>
// //                       <p className="text-[#2c1810]/50 text-[10px] tracking-[1.5px] font-['Cormorant_Garamond',serif] mb-3 uppercase">
// //                         {collectionId === 'explore-all' ? product.collection : collectionName}
// //                       </p>
// //                       <p className="text-[#2c1810] text-[14px] tracking-[0.5px] font-['Cormorant_Garamond',serif]">
// //                         ₹{product.price.toLocaleString('en-IN')}
// //                       </p>
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>

// //               {/* No Results Message */}
// //               {sortedProducts.length === 0 && (
// //                 <div className="text-center py-20">
// //                   <p className="text-[#2c1810]/60 text-[14px] tracking-[1px] font-['Cormorant_Garamond',serif] mb-4">
// //                     No products match your current filters.
// //                   </p>
// //                   <button
// //                     onClick={clearAllFilters}
// //                     className="text-[#c9a060] hover:text-[#2c1810] text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase underline transition-colors"
// //                   >
// //                     Clear All Filters
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //         <ExperienceFooterWrapper>
// //           <Footer 
// //             onOurStoryClick={onOurStoryClick} 
// //             onCraftsmanshipClick={onCraftsmanshipClick}
// //             onCollectionClick={onCollectionClick}
// //             onHomeClick={onBack}
// //           />
// //         </ExperienceFooterWrapper>
// //       </div>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from 'react';
// import { ArrowLeft, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
// import { Navigation } from './Navigation';
// import { motion, AnimatePresence } from 'motion/react';
// import { ProductDetailPage, CartItem } from './ProductDetailPage';
// import { Footer } from './Footer';
// import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';

// /* ================= TYPES ================= */

// interface CollectionCataloguePageProps {
//   collectionId: string;
//   collectionName: string;
//   gender: 'men' | 'women';
//   onBack: (event?: React.MouseEvent) => void;
//   cartCount: number;
//   onCartClick: () => void;
//   onAddToCart: (item: CartItem) => void;
//   onCollectionClick?: (event?: React.MouseEvent) => void;
//   onOurStoryClick?: (event?: React.MouseEvent) => void;
//   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
// }

// interface ApiProduct {
//   _id: string;
//   name: string;
//   price: number;
//   category: string;
//   collection?: string;
//   images?: { url: string }[];
// }

// /* ============== MEN DUMMY DATA ============== */

// const getProductsForCollection = (collectionId: string) => {
//   const baseProducts = [
//     { id: '1', name: 'Heritage Kurta', price: 4999 },
//     { id: '2', name: 'Traditional Sherwani', price: 8999 },
//     { id: '3', name: 'Classic Waistcoat', price: 3499 },
//     { id: '4', name: 'Embroidered Jacket', price: 6499 },
//   ];

//   return baseProducts.map(p => ({
//     ...p,
//     collection: collectionId,
//   }));
// };

// /* ================= COMPONENT ================= */

// export function CollectionCataloguePage({
//   collectionId,
//   collectionName,
//   gender,
//   onBack,
//   cartCount,
//   onCartClick,
//   onAddToCart,
//   onCollectionClick,
//   onOurStoryClick,
//   onCraftsmanshipClick,
// }: CollectionCataloguePageProps) {
//   const [apiProducts, setApiProducts] = useState<ApiProduct[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

//   const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>(
//     'featured'
//   );

//   /* ================= FETCH WOMEN PRODUCTS ================= */

//   useEffect(() => {
//     if (gender === 'women') {
//       fetchWomenProducts();
//     }
//   }, [gender]);

//   const fetchWomenProducts = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(
//         'https://api.sohwais.com/api/products/category/Women'
//       );
//       const result = await res.json();

//       if (result.success && Array.isArray(result.data)) {
//         setApiProducts(result.data);
//       }
//     } catch (err) {
//       console.error('Women API error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= PRODUCTS SOURCE ================= */

//   const products =
//     gender === 'women'
//       ? apiProducts.map(p => ({
//           id: p._id,
//           name: p.name,
//           price: p.price,
//           collection: p.collection || collectionName,
//           image: p.images?.[0]?.url || null,
//         }))
//       : getProductsForCollection(collectionId);

//   /* ================= SORT ================= */

//   const sortedProducts = [...products].sort((a, b) => {
//     if (sortBy === 'price-low') return a.price - b.price;
//     if (sortBy === 'price-high') return b.price - a.price;
//     return 0;
//   });

//   /* ================= PRODUCT DETAIL ================= */

//   if (selectedProduct) {
//     const product = products.find(p => p.id === selectedProduct);
//     if (product) {
//       return (
//         <ProductDetailPage
//           productId={product.id}
//           productName={product.name}
//           collectionName={product.collection}
//           price={product.price}
//           gender={gender}
//           onBack={() => setSelectedProduct(null)}
//           cartCount={cartCount}
//           onCartClick={onCartClick}
//           onAddToCart={onAddToCart}
//         />
//       );
//     }
//   }

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-[#fdfcf9]">
//       {/* NAV */}
//       <div className="fixed top-0 left-0 right-0 z-40">
//         <Navigation
//           cartCount={cartCount}
//           onCartClick={onCartClick}
//           mode="light"
//           onCollectionClick={onCollectionClick}
//           onOurStoryClick={onOurStoryClick}
//           onCraftsmanshipClick={onCraftsmanshipClick}
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="pt-24 px-4 sm:px-10 pb-20">
//         {/* BACK */}
//         <button
//           onClick={onBack}
//           className="flex items-center gap-2 mb-10 text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif]"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           BACK
//         </button>

//         {/* HEADER */}
//         <div className="text-center mb-14">
//           <h1 className="text-[40px] tracking-[4px] font-['Cinzel_Decorative',serif]">
//             {collectionName}
//           </h1>
//           <p className="text-[12px] tracking-[1px] mt-3 text-[#2c1810]/60">
//             {sortedProducts.length} Products
//           </p>
//         </div>

//         {/* SORT */}
//         <div className="flex justify-end mb-8">
//           <div className="relative">
//             <select
//               value={sortBy}
//               onChange={e => setSortBy(e.target.value as any)}
//               className="border px-4 py-2 text-[11px] tracking-[1.5px]"
//             >
//               <option value="featured">Featured</option>
//               <option value="price-low">Price Low → High</option>
//               <option value="price-high">Price High → Low</option>
//             </select>
//             <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4" />
//           </div>
//         </div>

//         {/* LOADER */}
//         {loading && (
//           <div className="flex justify-center py-20">
//             <div className="w-10 h-10 border-2 border-[#c9a060] border-t-transparent rounded-full animate-spin" />
//           </div>
//         )}

//         {/* GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {sortedProducts.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               className="cursor-pointer"
//               onClick={() => setSelectedProduct(product.id)}
//             >
//               <div className="aspect-[3/4] bg-[#2c1810]/5 mb-3 overflow-hidden">
//                 {product.image ? (
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover hover:scale-105 transition"
//                   />
//                 ) : (
//                   <div className="flex items-center justify-center h-full text-xs text-[#2c1810]/40">
//                     No Image
//                   </div>
//                 )}
//               </div>

//               <div className="text-center">
//                 <h3 className="text-[14px] font-['Playfair_Display',serif]">
//                   {product.name}
//                 </h3>
//                 <p className="text-[11px] text-[#2c1810]/50 tracking-[1px]">
//                   {product.collection}
//                 </p>
//                 <p className="text-[14px] mt-1">
//                   ₹{product.price.toLocaleString('en-IN')}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* FOOTER */}
//       <ExperienceFooterWrapper>
//         <Footer
//           onHomeClick={onBack}
//           onCollectionClick={onCollectionClick}
//           onOurStoryClick={onOurStoryClick}
//           onCraftsmanshipClick={onCraftsmanshipClick}
//         />
//       </ExperienceFooterWrapper>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { ArrowLeft, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Navigation } from './Navigation';
import { motion } from 'motion/react';
import { ProductDetailPage, CartItem } from './ProductDetailPage';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';

/* ================= TYPES ================= */

interface CollectionCataloguePageProps {
  collectionId: string;
  collectionName: string;
  gender: 'men' | 'women';
  onBack: (event?: React.MouseEvent) => void;
  cartCount: number;
  onCartClick: () => void;
  onAddToCart: (item: CartItem) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
}

interface ApiProduct {
  _id: string;
  name: string;
  price: number;
  category: string;
  collection?: string;
  images?: { url: string }[];
  variants?: {
    size: string;
    color: string;
  }[];
}

/* ================= DUMMY MEN DATA ================= */

const getProductsForCollection = (collectionId: string) => {
  const baseProducts = [
    {
      id: '1',
      name: 'Heritage Kurta',
      price: 4999,
      collection: collectionId,
      variants: [
        { size: 'M', color: 'Black' },
        { size: 'L', color: 'White' },
      ],
    },
    {
      id: '2',
      name: 'Traditional Sherwani',
      price: 8999,
      collection: collectionId,
      variants: [{ size: 'XL', color: 'Gold' }],
    },
  ];

  return baseProducts;
};

/* ================= COMPONENT ================= */

export function CollectionCataloguePage({
  collectionId,
  collectionName,
  gender,
  onBack,
  cartCount,
  onCartClick,
  onAddToCart,
  onCollectionClick,
  onOurStoryClick,
  onCraftsmanshipClick,
}: CollectionCataloguePageProps) {
  const [apiProducts, setApiProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>(
    'featured'
  );

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  /* ================= FETCH WOMEN PRODUCTS ================= */

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (gender === 'women') {
      fetchWomenProducts();
    }
  }, [gender]);

  const fetchWomenProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        'https://api.sohwais.com/api/products/category/Women'
      );
      const result = await res.json();

      if (result.success && Array.isArray(result.data)) {
        setApiProducts(result.data);
      }
    } catch (err) {
      console.error('Women API error:', err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= PRODUCTS SOURCE ================= */

  const products =
    gender === 'women'
      ? apiProducts.map(p => ({
          id: p._id,
          name: p.name,
          price: p.price,
          collection: p.collection || collectionName,
          image: p.images?.[0]?.url || null,
          variants: p.variants || [],
        }))
      : getProductsForCollection(collectionId);

  /* ================= UNIQUE FILTER DATA ================= */

  const allSizes = Array.from(
    new Set(products.flatMap(p => p.variants?.map(v => v.size) || []))
  );

  const allColors = Array.from(
    new Set(products.flatMap(p => p.variants?.map(v => v.color) || []))
  );

  /* ================= FILTER LOGIC ================= */

  const filteredProducts = products.filter(product => {
    if (selectedSizes.length > 0) {
      if (
        !product.variants?.some(v => selectedSizes.includes(v.size))
      )
        return false;
    }

    if (selectedColors.length > 0) {
      if (
        !product.variants?.some(v => selectedColors.includes(v.color))
      )
        return false;
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  /* ================= PRODUCT DETAIL ================= */

  if (selectedProduct) {
    const product = products.find(p => p.id === selectedProduct);
    if (product) {
      return (
        <ProductDetailPage
          productId={product.id}
          productName={product.name}
          collectionName={product.collection}
          price={product.price}
          gender={gender}
          onBack={() => {
            setSelectedProduct(null);
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          cartCount={cartCount}
          onCartClick={onCartClick}
          onAddToCart={onAddToCart}
        />
      );
    }
  }

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-[#fdfcf9]">
      {/* NAV */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Navigation
          cartCount={cartCount}
          onCartClick={onCartClick}
          mode="light"
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
        />
      </div>

      {/* CONTENT */}
      <div className="pt-24 px-4 sm:px-10 pb-20">
        {/* BACK */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-10 text-[11px] tracking-[2px]"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK
        </button>

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-[40px] tracking-[4px] font-['Cinzel_Decorative',serif]">
            {collectionName}
          </h1>
          <p className="text-[12px] mt-2 text-[#2c1810]/60">
            {sortedProducts.length} Products
          </p>
        </div>

        {/* FILTER + SORT */}
        <div className="flex justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-[11px]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            FILTERS
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="border px-4 py-2 text-[11px]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price Low → High</option>
              <option value="price-high">Price High → Low</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4" />
          </div>
        </div>

        {/* FILTER PANEL */}
        {showFilters && (
          <div className="mb-10 border p-6 rounded-lg">
            {/* COLORS */}
            {allColors.length > 0 && (
              <div className="mb-6">
                <h4 className="text-[12px] mb-3">COLOR</h4>
                <div className="flex gap-3 flex-wrap">
                  {allColors.map(color => (
                    <button
                      key={color}
                      onClick={() =>
                        setSelectedColors(prev =>
                          prev.includes(color)
                            ? prev.filter(c => c !== color)
                            : [...prev, color]
                        )
                      }
                      className={`w-7 h-7 rounded-full border ${
                        selectedColors.includes(color)
                          ? 'ring-2 ring-[#c9a060]'
                          : ''
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* SIZES */}
            {allSizes.length > 0 && (
              <div>
                <h4 className="text-[12px] mb-3">SIZE</h4>
                <div className="grid grid-cols-4 gap-2">
                  {allSizes.map(size => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSizes(prev =>
                          prev.includes(size)
                            ? prev.filter(s => s !== size)
                            : [...prev, size]
                        )
                      }
                      className={`py-2 text-[11px] border ${
                        selectedSizes.includes(size)
                          ? 'bg-[#c9a060] text-white'
                          : ''
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                setSelectedSizes([]);
                setSelectedColors([]);
              }}
              className="text-xs underline mt-6"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedProduct(product.id)}
            >
              <div className="aspect-[3/4] bg-[#2c1810]/5 mb-3">
                {product.image ? (
                  <img
                    src={product.image}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-xs opacity-40">
                    No Image
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="text-[14px]">{product.name}</h3>
                <p className="text-[12px] mt-1">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <ExperienceFooterWrapper>
        <Footer
          onHomeClick={onBack}
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
        />
      </ExperienceFooterWrapper>
    </div>
  );
}
