import { ArrowLeft } from 'lucide-react';
import { Navigation } from './Navigation';
import { motion } from 'motion/react';
import madhubaniImage from 'figma:asset/8e00dae59cdb318d9b4b0dadd5a79db9c070c991.png';
import sujiniImage from 'figma:asset/e37c21e18c80f50d0761f06ff1f74b7584fa5c4d.png';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';

interface OurCollectionPageProps {
  onBack: (event?: React.MouseEvent) => void;
  cartCount: number;
  onCartClick: () => void;
  onCollectionSelect: (collectionId: string) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
}

export function OurCollectionPage({ 
  onBack, 
  cartCount, 
  onCartClick, 
  onCollectionSelect,
  onCollectionClick,
  onOurStoryClick,
  onCraftsmanshipClick 
}: OurCollectionPageProps) {
  
  const collections = [
    {
      id: 'madhubani',
      name: 'Madhubani Collection',
      description: 'Traditional folk art from Bihar, featuring intricate geometric patterns and vibrant colors',
      imageUrl: madhubaniImage,
    },
    {
      id: 'sujini',
      name: 'Sujini Collection',
      description: 'Delicate running stitch embroidery creating beautiful quilted textures',
      imageUrl: sujiniImage,
    },
    {
      id: 'marble',
      name: 'Marble Collection',
      description: 'Inspired by the timeless elegance of marble artistry and craftsmanship',
      imageUrl: null, // Placeholder for upload
    },
    {
      id: 'nakashi',
      name: 'Nakashi Collection',
      description: 'Exquisite hand-painted designs showcasing intricate artistic details',
      imageUrl: null, // Placeholder for upload
    },
    {
      id: 'majestic-linen',
      name: 'The Majestic Linen',
      description: 'Premium linen crafted with heritage techniques, offering timeless comfort and elegance',
      imageUrl: null, // Placeholder for upload
    },
    {
      id: 'batik-archive',
      name: 'The Batik Archive',
      description: 'Ancient wax-resist dyeing tradition creating mesmerizing patterns and rich textures',
      imageUrl: null, // Placeholder for upload
    },
    {
      id: 'explore-all',
      name: 'Explore All',
      description: 'Discover our complete range of heritage-inspired collections',
      imageUrl: null, // Placeholder for upload
      isSpecial: true
    }
  ];

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
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#c9a060] to-transparent mx-auto mb-4 sm:mb-5 md:mb-6" />
          <p className="text-[#2c1810]/70 text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.5px] sm:tracking-[1px] font-['Cormorant_Garamond',serif] max-w-2xl mx-auto leading-relaxed">
            Explore our curated collections, each telling a unique story of India's rich heritage and craftsmanship
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => onCollectionSelect(collection.id)}
            >
              <div className="relative overflow-hidden rounded-sm bg-[#2c1810]/5 aspect-[3/4] mb-4">
                {collection.imageUrl ? (
                  <img
                    src={collection.imageUrl}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2c1810]/10 to-[#c9a060]/10">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-[#c9a060]/30 rounded-full flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a060]/40">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21 15 16 10 5 21"/>
                        </svg>
                      </div>
                      <p className="text-[10px] tracking-[1.5px] text-[#2c1810]/40 font-['Cormorant_Garamond',serif] uppercase">
                        Image Upload Ready
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/80 via-[#2c1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <button className="border-2 border-white text-white px-6 py-2 text-[10px] tracking-[2px] font-['Cormorant_Garamond',serif] rounded-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#2c1810]">
                    VIEW COLLECTION
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-[#2c1810] text-[16px] sm:text-[18px] tracking-[1px] mb-2 font-['Playfair_Display',serif]">
                  {collection.name}
                </h3>
                <p className="text-[#2c1810]/60 text-[11px] sm:text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] leading-relaxed px-2">
                  {collection.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <ExperienceFooterWrapper>
        <Footer 
          onOurStoryClick={onOurStoryClick} 
          onCraftsmanshipClick={onCraftsmanshipClick}
          onCollectionClick={onCollectionClick}
          onHomeClick={onBack}
        />
      </ExperienceFooterWrapper>
    </div>
  );
}