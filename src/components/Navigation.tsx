import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import image_a02147a5b2d7cc9c47ba0dd78dff86bc3675223a from 'figma:asset/a02147a5b2d7cc9c47ba0dd78dff86bc3675223a.png';
import logoImage from "figma:asset/a02147a5b2d7cc9c47ba0dd78dff86bc3675223a.png";

interface NavigationProps {
  cartCount?: number;
  onCartClick?: () => void;
  mode?: 'auto' | 'light' | 'dark'; // auto = scroll detection, light = dark text on light bg, dark = light text on dark bg
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
  enhancedContrast?: boolean; // For pages that need stronger navigation visibility
}

export function Navigation({ cartCount = 0, onCartClick, mode = 'auto', onCollectionClick, onOurStoryClick, onCraftsmanshipClick, enhancedContrast = false }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverDarkBackground, setIsOverDarkBackground] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Only use scroll detection if mode is 'auto'
    if (mode !== 'auto') {
      setIsOverDarkBackground(mode === 'dark');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Hero section is typically 75vh on mobile, 100vh on desktop
      // Detect if we're past the hero section (approximately)
      const viewportHeight = window.innerHeight;
      const heroHeight = window.innerWidth < 768 ? viewportHeight * 0.75 : viewportHeight;
      
      // If scrolled past ~40% of hero height, switch to light mode
      setIsOverDarkBackground(scrollPosition < heroHeight * 0.4);
    };

    // Set initial state
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode]);

  const handleCollectionClickInternal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCollectionClick) {
      onCollectionClick(e);
    }
    setIsMobileMenuOpen(false);
  };

  const handleOurStoryClickInternal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOurStoryClick) {
      onOurStoryClick(e);
    }
    setIsMobileMenuOpen(false);
  };

  const handleCraftsmanshipClickInternal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCraftsmanshipClick) {
      onCraftsmanshipClick(e);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative z-50">
      <div className={`max-w-[1080px] mx-4 mt-1 px-6 sm:px-8 md:px-10 py-4 md:py-5 flex items-center justify-between backdrop-blur-xl rounded-2xl border transition-all duration-300 mx-auto ${
        enhancedContrast 
          ? 'bg-white/90 border-[#2c1810]/30 shadow-[0_8px_32px_0_rgba(44,24,16,0.4)]'
          : isOverDarkBackground 
            ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]' 
            : 'bg-[#2c1810]/10 border-[#2c1810]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
      }`}>
        <a 
          href="#" 
          className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] focus:ring-offset-2 focus:ring-offset-transparent rounded-md transition-all hover:opacity-80"
          aria-label="Sohwais Threads Home"
        >
          <img 
            src={image_a02147a5b2d7cc9c47ba0dd78dff86bc3675223a} 
            alt="Sohwais Threads Logo" 
            className="h-8 sm:h-10 md:h-12 w-auto rounded-md"
          />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav aria-label="Main navigation">
            <div className="flex gap-8 lg:gap-12 items-center" role="list">
              <button 
                className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 hover:after:w-full ${
                  isOverDarkBackground
                    ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)] after:from-[#f5e6c8] after:to-[#fff4dc] after:shadow-[0_0_6px_rgba(245,230,200,0.5)]'
                    : 'text-[#2c1810] hover:text-[#c9a060] focus:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)] after:from-[#c9a060] after:to-[#d4af69] after:shadow-[0_0_6px_rgba(201,160,96,0.5)]'
                }`}
                role="listitem"
                onClick={handleCollectionClickInternal}
              >
                COLLECTION
              </button>
              <button 
                onClick={handleOurStoryClickInternal}
                className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 hover:after:w-full ${
                  isOverDarkBackground
                    ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)] after:from-[#f5e6c8] after:to-[#fff4dc] after:shadow-[0_0_6px_rgba(245,230,200,0.5)]'
                    : 'text-[#2c1810] hover:text-[#c9a060] focus:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)] after:from-[#c9a060] after:to-[#d4af69] after:shadow-[0_0_6px_rgba(201,160,96,0.5)]'
                }`}
                role="listitem"
              >
                ABOUT
              </button>
              <button 
                onClick={handleCraftsmanshipClickInternal}
                className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 hover:after:w-full ${
                  isOverDarkBackground
                    ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)] after:from-[#f5e6c8] after:to-[#fff4dc] after:shadow-[0_0_6px_rgba(245,230,200,0.5)]'
                    : 'text-[#2c1810] hover:text-[#c9a060] focus:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)] after:from-[#c9a060] after:to-[#d4af69] after:shadow-[0_0_6px_rgba(201,160,96,0.5)]'
                }`}
                role="listitem"
              >
                CRAFTSMANSHIP
              </button>
              {/* <a 
                href="#contact" 
                className={`relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 transition-all tracking-[2px] text-[10px] font-['Cormorant_Garamond',serif] drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 hover:after:w-full ${
                  isOverDarkBackground
                    ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)] after:from-[#f5e6c8] after:to-[#fff4dc] after:shadow-[0_0_6px_rgba(245,230,200,0.5)]'
                    : 'text-[#2c1810] hover:text-[#c9a060] focus:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)] after:from-[#c9a060] after:to-[#d4af69] after:shadow-[0_0_6px_rgba(201,160,96,0.5)]'
                }`}
                role="listitem"
              >
                CONTACT
              </a> */}
            </div>
          </nav>
          
          {/* Search - Desktop */}
          <div className="flex items-center">
            {!isSearchOpen ? (
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${
                  isOverDarkBackground
                    ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)]'
                    : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)]'
                }`}
                aria-label="Open search"
              >
                <Search className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            ) : (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                isOverDarkBackground
                  ? 'bg-white/10 border-white/30'
                  : 'bg-[#2c1810]/10 border-[#2c1810]/30'
              }`}>
                <Search className={`w-4 h-4 ${isOverDarkBackground ? 'text-[#fdfcf9]/60' : 'text-[#2c1810]/60'}`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  autoFocus
                  className={`bg-transparent outline-none w-[180px] text-[11px] tracking-[1px] font-['Cormorant_Garamond',serif] placeholder:opacity-50 ${
                    isOverDarkBackground ? 'text-[#fdfcf9]' : 'text-[#2c1810]'
                  }`}
                  aria-label="Search products"
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className={`transition-colors hover:opacity-70 ${
                    isOverDarkBackground ? 'text-[#fdfcf9]' : 'text-[#2c1810]'
                  }`}
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          
          {/* Cart Icon */}
          {onCartClick && (
            <button
              onClick={onCartClick}
              className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${
                isOverDarkBackground
                  ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8] hover:drop-shadow-[0_0_8px_rgba(245,230,200,0.6)]'
                  : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060] hover:drop-shadow-[0_0_8px_rgba(201,160,96,0.6)]'
              }`}
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c9a060] text-white text-[10px] font-['Cormorant_Garamond',serif] rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu Button and Cart */}
        <div className="flex md:hidden items-center gap-2 sm:gap-4">
          {/* Search - Mobile */}
          <div className="flex items-center">
            {!isSearchOpen ? (
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${
                  isOverDarkBackground
                    ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8]'
                    : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060]'
                }`}
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>
            ) : (
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                isOverDarkBackground
                  ? 'bg-white/10 border-white/30'
                  : 'bg-[#2c1810]/10 border-[#2c1810]/30'
              }`}>
                <Search className={`w-4 h-4 flex-shrink-0 ${isOverDarkBackground ? 'text-[#fdfcf9]/60' : 'text-[#2c1810]/60'}`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  autoFocus
                  className={`bg-transparent outline-none w-[100px] sm:w-[120px] text-[10px] tracking-[1px] font-['Cormorant_Garamond',serif] placeholder:opacity-50 ${
                    isOverDarkBackground ? 'text-[#fdfcf9]' : 'text-[#2c1810]'
                  }`}
                  aria-label="Search products"
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className={`transition-colors hover:opacity-70 flex-shrink-0 ${
                    isOverDarkBackground ? 'text-[#fdfcf9]' : 'text-[#2c1810]'
                  }`}
                  aria-label="Close search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {onCartClick && (
            <button
              onClick={onCartClick}
              className={`relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-2 drop-shadow-md ${
                isOverDarkBackground
                  ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8]'
                  : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060]'
              }`}
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c9a060] text-white text-[9px] font-['Cormorant_Garamond',serif] rounded-full w-4 h-4 flex items-center justify-center shadow-lg">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors focus:outline-none focus:ring-2 rounded p-2 drop-shadow-md ${
              isOverDarkBackground
                ? 'text-[#fdfcf9] hover:text-[#f5e6c8] focus:ring-[#f5e6c8]'
                : 'text-[#2c1810] hover:text-[#c9a060] focus:ring-[#c9a060]'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`md:hidden max-w-[1080px] mx-4 mt-2 overflow-hidden backdrop-blur-xl rounded-2xl border mx-auto ${
              enhancedContrast
                ? 'bg-white/90 border-[#2c1810]/30 shadow-[0_8px_32px_0_rgba(44,24,16,0.4)]'
                : isOverDarkBackground
                  ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
                  : 'bg-[#2c1810]/10 border-[#2c1810]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
            }`}
          >
            <nav aria-label="Mobile navigation" className="px-6 sm:px-8 py-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="flex flex-col gap-1"
              >
                <button 
                  className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
                    isOverDarkBackground
                      ? 'text-[#fdfcf9] hover:text-[#f5e6c8] hover:bg-white/10'
                      : 'text-[#2c1810] hover:text-[#c9a060] hover:bg-[#2c1810]/10'
                  }`}
                  onClick={handleCollectionClickInternal}
                >
                  COLLECTION
                </button>
                <button 
                  className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
                    isOverDarkBackground
                      ? 'text-[#fdfcf9] hover:text-[#f5e6c8] hover:bg-white/10'
                      : 'text-[#2c1810] hover:text-[#c9a060] hover:bg-[#2c1810]/10'
                  }`}
                  onClick={handleOurStoryClickInternal}
                >
                  ABOUT
                </button>
                <button 
                  className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm ${
                    isOverDarkBackground
                      ? 'text-[#fdfcf9] hover:text-[#f5e6c8] hover:bg-white/10'
                      : 'text-[#2c1810] hover:text-[#c9a060] hover:bg-[#2c1810]/10'
                  }`}
                  onClick={handleCraftsmanshipClickInternal}
                >
                  CRAFTSMANSHIP
                </button>
                {/* <a 
                  href="#contact" 
                  className={`transition-all tracking-[2px] text-[11px] font-['Cormorant_Garamond',serif] py-3 px-4 text-left rounded-lg hover:backdrop-blur-sm block ${
                    isOverDarkBackground
                      ? 'text-[#fdfcf9] hover:text-[#f5e6c8] hover:bg-white/10'
                      : 'text-[#2c1810] hover:text-[#c9a060] hover:bg-[#2c1810]/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </a> */}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
