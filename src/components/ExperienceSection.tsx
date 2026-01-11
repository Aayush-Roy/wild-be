import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface ExperienceSectionProps {
  onCollectionClick?: (event: React.MouseEvent) => void;
}

export function ExperienceSection({ onCollectionClick }: ExperienceSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.5 });

  return (
    <section className="relative pt-0 pb-0 overflow-hidden min-h-[500px] flex items-center justify-center">
      <div 
        ref={contentRef}
        className="relative max-w-[672px] mx-auto text-center px-12 pt-16"
      >
        <motion.h2 
          className="text-white text-[36px] leading-[54px] tracking-[2.88px] mb-6 font-['Cinzel_Decorative',serif]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Experience Sohwais
        </motion.h2>
        <motion.p 
          className="text-[#fdfcf9]/90 text-[16px] leading-[28px] mb-12 max-w-[580px] mx-auto font-['Cormorant_Garamond',serif]"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Discover our timeless collection of handcrafted garments, where traditional artistry meets contemporary elegance. Each piece is a testament to India's rich textile heritage.
        </motion.p>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button 
            onClick={(e) => {
              e.preventDefault();
              onCollectionClick?.(e);
            }}
            className="bg-[#c9a060] text-white px-10 py-4 text-[11px] tracking-[2.4px] hover:bg-[#b8924e] transition-all font-['Cormorant_Garamond',serif] rounded-[4px]"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(201, 160, 96, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            EXPLORE COLLECTIONS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}