import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'motion/react';
import mensImage from "figma:asset/eff662e72f54e2c0756f60c424c6ec0bf6ba26a6.png";
import womensImage from "figma:asset/b0c850b0a2bf059396a4bc0e16dbc356969f9d3e.png";

interface CollectionSectionProps {
  onMensClick?: (event?: React.MouseEvent) => void;
  onWomensClick?: (event?: React.MouseEvent) => void;
}

export function CollectionSection({ onMensClick, onWomensClick }: CollectionSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Disable parallax when not needed for performance
  const isNearViewport = useInView(sectionRef, { 
    once: false, 
    margin: "150px 0px 150px 0px"
  });
  
  // Ultra-optimized parallax scroll effects - minimal complexity
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Simplified men's transforms - less operations
  const mensX = useTransform(scrollYProgress, [0, 0.5, 1], ["-10%", "0%", "2%"]);
  const mensOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0.9]);

  // Simplified women's transforms - less operations
  const womensX = useTransform(scrollYProgress, [0, 0.5, 1], ["10%", "0%", "-2%"]);
  const womensOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0.9]);

  // Simplified divider
  const dividerHeight = useTransform(scrollYProgress, [0, 0.4], ["0%", "75%"]);
  const dividerOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 0.7]);

  return (
    <section id="collection" className="relative h-screen w-full overflow-hidden bg-white" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Men's Collection */}
        <motion.div 
          className="relative overflow-hidden group"
          style={{ 
            x: shouldReduceMotion || !isNearViewport ? 0 : mensX, 
            opacity: shouldReduceMotion || !isNearViewport ? 1 : mensOpacity,
            willChange: isNearViewport ? 'transform, opacity' : 'auto'
          }}
        >
          <motion.img 
            src={mensImage} 
            alt="Men's Heritage Collection" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ 
              willChange: isNearViewport ? 'transform' : 'auto'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(44,24,16,0.2)] to-[rgba(0,0,0,0.1)] transition-opacity duration-500 group-hover:opacity-0" />
          
          {/* Corner Decorations */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-4 sm:top-6 md:top-8 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-l-2 border-t-2 border-[#c9a060]/60 transition-all duration-500 group-hover:w-16 sm:group-hover:w-18 md:group-hover:w-20 group-hover:h-16 sm:group-hover:h-18 md:group-hover:h-20 group-hover:border-[#c9a060]" />
          <div className="absolute right-4 sm:right-6 md:right-8 bottom-4 sm:bottom-6 md:bottom-8 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-r-2 border-b-2 border-[#c9a060]/60 transition-all duration-500 group-hover:w-16 sm:group-hover:w-18 md:group-hover:w-20 group-hover:h-16 sm:group-hover:h-18 md:group-hover:h-20 group-hover:border-[#c9a060]" />
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20">
            <div className="text-center transform transition-transform duration-500 ease-in-out group-hover:translate-y-[-10px]">
              <p className="text-white text-[10px] tracking-[3.12px] mb-4 sm:mb-6 md:mb-8 font-['Cormorant_Garamond',serif] transition-[letter-spacing] duration-500 ease-in-out group-hover:tracking-[3.5px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                FOR HIM
              </p>
              <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[1.5] tracking-[3.84px] mb-4 sm:mb-5 md:mb-6 font-['Cinzel_Decorative',serif] transition-[font-size,letter-spacing] duration-500 ease-in-out group-hover:text-[36px] sm:group-hover:text-[44px] md:group-hover:text-[52px] group-hover:tracking-[4.5px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Men's
              </h2>
              <p className="text-white text-[11px] sm:text-[12px] md:text-[13px] leading-[1.9] tracking-[-0.076px] mb-8 sm:mb-10 md:mb-12 max-w-[280px] sm:max-w-[340px] md:max-w-[380px] mx-auto font-['Cormorant_Garamond',serif] transition-opacity duration-500 ease-in-out drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Timeless kurtas, sherwanis, and heritage pieces crafted for the modern gentleman
              </p>
              <button 
                className="border-2 border-white text-white px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 text-[10px] tracking-[2.62px] transition-[background-color,color,border-color] duration-500 ease-in-out font-['Cormorant_Garamond',serif] relative overflow-hidden group-hover:bg-[#2c1810] group-hover:text-white group-hover:border-[#2c1810] pointer-events-auto rounded-[4px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" 
                onClick={onMensClick}
              >
                <span className="relative z-10">EXPLORE COLLECTION →</span>
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Women's Collection */}
        <motion.div 
          className="relative overflow-hidden group"
          style={{ 
            x: shouldReduceMotion || !isNearViewport ? 0 : womensX, 
            opacity: shouldReduceMotion || !isNearViewport ? 1 : womensOpacity,
            willChange: isNearViewport ? 'transform, opacity' : 'auto'
          }}
        >
          <motion.img 
            src={womensImage} 
            alt="Women's Heritage Collection" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ 
              willChange: isNearViewport ? 'transform' : 'auto'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(44,24,16,0.15)] to-[rgba(0,0,0,0.08)] transition-opacity duration-500 group-hover:opacity-0" />
          
          {/* Corner Decorations */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-4 sm:top-6 md:top-8 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-l-2 border-t-2 border-[#c9a060]/60 transition-all duration-500 group-hover:w-16 sm:group-hover:w-18 md:group-hover:w-20 group-hover:h-16 sm:group-hover:h-18 md:group-hover:h-20 group-hover:border-[#c9a060]" />
          <div className="absolute right-4 sm:right-6 md:right-8 bottom-4 sm:bottom-6 md:bottom-8 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-r-2 border-b-2 border-[#c9a060]/60 transition-all duration-500 group-hover:w-16 sm:group-hover:w-18 md:group-hover:w-20 group-hover:h-16 sm:group-hover:h-18 md:group-hover:h-20 group-hover:border-[#c9a060]" />
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20">
            <div className="text-center transform transition-all duration-250 ease-out group-hover:translate-y-[-10px]">
              <p className="text-white text-[10px] tracking-[3.12px] mb-4 sm:mb-6 md:mb-8 font-['Cormorant_Garamond',serif] transition-all duration-250 ease-out group-hover:tracking-[3.5px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                FOR HER
              </p>
              <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[1.5] tracking-[3.84px] mb-4 sm:mb-5 md:mb-6 font-['Cinzel_Decorative',serif] transition-all duration-250 ease-out group-hover:text-[36px] sm:group-hover:text-[44px] md:group-hover:text-[52px] group-hover:tracking-[4.5px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Women's
              </h2>
              <p className="text-white text-[11px] sm:text-[12px] md:text-[13px] leading-[1.9] tracking-[-0.076px] mb-8 sm:mb-10 md:mb-12 max-w-[280px] sm:max-w-[340px] md:max-w-[348px] mx-auto font-['Cormorant_Garamond',serif] transition-all duration-250 ease-out drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Exquisite sarees, lehengas, and handwoven masterpieces celebrating feminine elegance
              </p>
              <button 
                className="border-2 border-white text-white px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 text-[10px] tracking-[2.62px] transition-all duration-250 ease-out font-['Cormorant_Garamond',serif] relative overflow-hidden group-hover:bg-[#2c1810] group-hover:text-white group-hover:border-[#2c1810] pointer-events-auto rounded-[4px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" 
                onClick={onWomensClick}
              >
                <span className="relative z-10">EXPLORE COLLECTION →</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Center Divider */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-px bg-gradient-to-b from-transparent via-[#c9a060]/40 to-transparent hidden md:block"
        style={{ 
          height: shouldReduceMotion || !isNearViewport ? "75%" : dividerHeight, 
          opacity: shouldReduceMotion || !isNearViewport ? 1 : dividerOpacity,
          willChange: isNearViewport ? 'opacity' : 'auto'
        }}
      />
    </section>
  );
}