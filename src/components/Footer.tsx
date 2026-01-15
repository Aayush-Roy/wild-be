import logoImage from "figma:asset/549aa7d74ad4ed64d765edbd094a15962822ce65.png";

interface FooterProps {
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onHomeClick?: (event?: React.MouseEvent) => void;
}

export function Footer({ onOurStoryClick, onCraftsmanshipClick, onCollectionClick, onHomeClick }: FooterProps) {
  return (
    <footer className="relative pt-0 pb-8 overflow-hidden">
      <div className="relative max-w-[1080px] mx-auto px-16 pt-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <button
              onClick={(e) => {
                e.preventDefault();
                onHomeClick?.(e);
              }}
              className="focus:outline-none focus:ring-2 focus:ring-[#c9a060] rounded-lg transition-all hover:opacity-80"
              aria-label="Return to home"
            >
              <img 
                src={logoImage} 
                alt="Sohwais Threads Logo" 
                className="w-40 h-auto mb-4 rounded-lg"
              />
            </button>
            <p className="text-[#fdfcf9]/60 text-[12px] leading-[20px] font-['Cormorant_Garamond',serif] mb-4">
              Crafting timeless elegance through traditional artistry
            </p>
            <div className="border-t border-[#c9a060]/20 pt-4">
              <p className="text-[#c9a060]/80 text-[11px] tracking-[1.5px] font-['Cormorant_Garamond',serif] italic">
                Founder
              </p>
              <p className="text-[#fdfcf9]/70 text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] mt-1">
                Md. Danial Ansari
              </p>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
              SHOP
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
                  onClick={(e) => {
                    e.preventDefault();
                    onCollectionClick?.(e);
                  }}
                >
                  Men's Collection
                </button>
              </li>
              <li>
                <button 
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]"
                  onClick={(e) => {
                    e.preventDefault();
                    onCollectionClick?.(e);
                  }}
                >
                  Women's Collection
                </button>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
              ABOUT
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]" 
                  onClick={(e) => {
                    e.preventDefault();
                    onOurStoryClick?.(e);
                  }}
                >
                  Our Story
                </button>
              </li>
              <li>
                <button 
                  className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]" 
                  onClick={(e) => {
                    e.preventDefault();
                    onCraftsmanshipClick?.(e);
                  }}
                >
                  Craftsmanship
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-[#c9a060] text-[11px] tracking-[2px] mb-6 font-['Cormorant_Garamond',serif]">
              CONNECT
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="mailto:support@sohwais.com" className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]">
                  support@sohwais.com
                </a>
              </li>
              <li>
                <a href="#" className="text-[#fdfcf9]/70 text-[13px] hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif]">
                  Book Consultation
                </a>
              </li>
            </ul>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="text-[#c9a060] hover:text-[#fdfcf9] transition-colors" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(201,160,96,0.3)] to-transparent mb-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#c9a060]/70 text-[9px] tracking-[1.97px] font-['Cormorant_Garamond',serif]">
            © 2025 SOHWAIS THREADS — HANDCRAFTED IN INDIA
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-[#fdfcf9]/70 text-[9px] tracking-[1.52px] font-['Cormorant_Garamond',serif]">
            <a href="#" className="hover:text-[#fdfcf9] transition-colors">
              PRIVACY POLICY
            </a>
            <span className="text-[#c9a060]/30">|</span>
            <a href="#" className="hover:text-[#fdfcf9] transition-colors">
              TERMS & CONDITIONS
            </a>
            <span className="text-[#c9a060]/30">|</span>
            <a href="#" className="hover:text-[#fdfcf9] transition-colors">
              SHIPPING & RETURNS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}