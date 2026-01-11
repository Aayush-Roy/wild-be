import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
import { ProductPage } from './ProductPage';
import { CartItem } from './ProductDetailPage';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sujiniImage from 'figma:asset/e37c21e18c80f50d0761f06ff1f74b7584fa5c4d.png';
import madhubaniImage from 'figma:asset/8e00dae59cdb318d9b4b0dadd5a79db9c070c991.png';

interface CollectionsPageProps {
  onBack: (event?: React.MouseEvent) => void;
  cartCount: number;
  onCartClick: () => void;
  onAddToCart: (item: CartItem) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
}

export function CollectionsPage({ onBack, cartCount, onCartClick, onAddToCart, onCollectionClick, onOurStoryClick, onCraftsmanshipClick }: CollectionsPageProps) {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const collections = [
    {
      id: 1,
      name: 'Madhubani Collection',
      description: 'Traditional folk art from Bihar, featuring intricate geometric patterns and vibrant colors',
      imageUrl: madhubaniImage,
      textTheme: 'dark' // dark text for this image
    },
    {
      id: 2,
      name: 'Sujini Collection',
      description: 'Delicate running stitch embroidery creating beautiful quilted textures',
      imageUrl: sujiniImage,
      textTheme: 'dark' // dark text for this darker/vibrant image
    },
    {
      id: 3,
      name: 'Marble Collection',
      description: 'Inspired by the timeless elegance of marble artistry and craftsmanship',
      textTheme: 'dark' // dark text for plain background
    },
    {
      id: 4,
      name: 'Nakashi Collection',
      description: 'Exquisite hand-painted designs showcasing intricate artistic details',
      textTheme: 'dark' // dark text for plain background
    },
    {
      id: 5,
      name: 'Majestic Linen',
      description: 'Premium linen crafted with heritage techniques, offering timeless comfort and elegance',
      textTheme: 'dark' // dark text for plain background
    },
    {
      id: 6,
      name: 'The Batik Archive',
      description: 'Ancient wax-resist dyeing tradition creating mesmerizing patterns and rich textures',
      textTheme: 'dark' // dark text for plain background
    },
    {
      id: 7,
      name: 'Explore More Designs',
      description: 'Discover our complete range of heritage-inspired collections',
      textTheme: 'dark' // dark text for plain background
    }
  ];

  const handleCollectionClick = (collectionName: string) => {
    setSelectedCollection(collectionName);
  };

  const handleBackToCollections = () => {
    setSelectedCollection(null);
  };

  // If a collection is selected, show the product page
  if (selectedCollection) {
    return (
      <ProductPage
        collectionName={selectedCollection}
        onBack={handleBackToCollections}
        cartCount={cartCount}
        onCartClick={onCartClick}
        onAddToCart={onAddToCart}
        onCollectionClick={onCollectionClick}
        onOurStoryClick={onOurStoryClick}
        onCraftsmanshipClick={onCraftsmanshipClick}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfcf9]">
      {/* Navigation */}
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

      {/* Content */}
      <div className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] transition-colors mb-8 sm:mb-10 md:mb-12 font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px]"
          aria-label="Go back to home page"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">BACK</span>
        </button>

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-[#2c1810] text-[32px] sm:text-[42px] md:text-[56px] tracking-[2.5px] sm:tracking-[3.5px] md:tracking-[4.48px] mb-4 sm:mb-5 md:mb-6 font-['Cinzel_Decorative',serif]">
            Our Collections
          </h1>
          <p className="text-[#2c1810]/80 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[0.3px] sm:tracking-[0.4px] md:tracking-[0.5px] max-w-xl md:max-w-2xl mx-auto px-4 font-['Cormorant_Garamond',serif]">
            Explore our curated collections of heritage-inspired designs, each telling a unique story of Indian craftsmanship
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-7xl mx-auto">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden bg-[#fdfcf9] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
              role="button"
              tabIndex={0}
              aria-label={`View ${collection.name}`}
              onClick={() => handleCollectionClick(collection.name)}
            >
              {/* Plain Background */}
              <div className="relative h-96 sm:h-[28rem] md:h-[32rem] overflow-hidden bg-[#f5f1e8]">
                {/* Collection Image - conditionally rendered */}
                {collection.imageUrl && (
                  <ImageWithFallback 
                    src={collection.imageUrl} 
                    alt={collection.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                {/* Corner Decorations */}
                <div className="absolute left-3 sm:left-4 top-3 sm:top-4 w-10 sm:w-12 h-10 sm:h-12 border-l-2 border-t-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 w-10 sm:w-12 h-10 sm:h-12 border-r-2 border-b-2 border-[#c9a060] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm ${
                collection.textTheme === 'light' ? 'text-[#fdfcf9]' : 'text-[#fdfcf9]'
              }`}>
                <h3 className={`text-[20px] sm:text-[22px] md:text-[24px] tracking-[1.5px] sm:tracking-[1.7px] md:tracking-[1.92px] mb-2 sm:mb-3 font-['Cinzel_Decorative',serif] transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
                  collection.textTheme === 'light' 
                    ? 'group-hover:text-[#f4d98a]' 
                    : 'group-hover:text-[#f4d98a]'
                }`}>
                  {collection.name}
                </h3>
                <p className={`text-[12px] sm:text-[13px] leading-[20px] sm:leading-[22px] tracking-[0.3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-['Cormorant_Garamond',serif] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
                  {collection.description}
                </p>
                <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="text-[10px] sm:text-[11px] tracking-[2px] border-b border-[#f4d98a] pb-1 font-['Cormorant_Garamond',serif] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    VIEW COLLECTION →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <ExperienceFooterWrapper>
        <Footer />
      </ExperienceFooterWrapper>
    </div>
  );
}