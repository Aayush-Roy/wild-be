import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'motion/react';
import craftsmanImage from "figma:asset/86fff06f37ed4ea1ac6c1642ac2b7e30da0d1eb3.png";

export function CraftsmanshipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(contentRef, { once: true, amount: 0.3 });
  
  // Disable parallax when not needed for performance
  const isNearViewport = useInView(sectionRef, { 
    once: false, 
    margin: "150px 0px 150px 0px"
  });
  
  // Ultra-optimized parallax - minimal transforms
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Minimal image parallax - only when in viewport
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);
  const imageScaleHalf = useTransform(scrollYProgress, [0, 0.5, 1], [0.54, 0.5, 0.525]);

  const stats = [
    { label: 'HANDCRAFTED', value: '100%' },
    { label: 'ARTISAN HOURS', value: '22+' },
    { label: 'YEARS HERITAGE', value: '500+' },
  ];

  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2 bg-[#fdfcf9]" ref={sectionRef}>
      {/* Image Side */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-b from-[#faf8f5] to-[#f5f2ed]">
        <motion.img 
          src={craftsmanImage} 
          alt="Artisan wearing handcrafted red shirt with traditional block print patterns" 
          className="w-full h-full object-contain object-center"
          style={{ 
            y: shouldReduceMotion || !isNearViewport ? 0 : imageY, 
            scale: shouldReduceMotion || !isNearViewport ? 1 : imageScale,
            willChange: isNearViewport ? 'transform' : 'auto'
          }}
        />
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,160,96,0.08)] via-transparent to-[rgba(44,24,16,0.05)] pointer-events-none" />
      </div>
      
      {/* Content Side */}
      <div 
        ref={contentRef}
        className="relative bg-[#fdfcf9] px-6 sm:px-10 md:px-12 lg:px-16 py-12 sm:py-14 md:pt-16 md:pb-16 flex flex-col justify-center min-h-[400px] sm:h-[400px] lg:h-[600px]"
      >
        <motion.p 
          className="text-[#8b6914] text-[9px] tracking-[2.87px] mb-4 sm:mb-6 font-['Cormorant_Garamond',serif]"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          OUR PHILOSOPHY
        </motion.p>
        <motion.h2 
          className="text-[#2c1810] text-[24px] sm:text-[28px] md:text-[32px] leading-[1.3] sm:leading-[1.4] tracking-[1.5px] sm:tracking-[1.92px] mb-6 sm:mb-8 max-w-full sm:max-w-[272px] font-['Cinzel_Decorative',serif]"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Handcrafted Excellence
        </motion.h2>
        <motion.p 
          className="text-[#5c4033] text-[13px] sm:text-[14px] leading-[1.8] sm:leading-[28px] tracking-[-0.15px] mb-8 sm:mb-10 md:mb-12 max-w-full sm:max-w-[406px] font-['Cormorant_Garamond',serif]"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Our exquisite batik creations are crafted using the ancient wax-resist dyeing technique, where intricate patterns emerge through meticulous hand-application. Each garment is a masterpiece, bearing unique textures and rich colors that celebrate centuries-old traditions and skilled artistry.
        </motion.p>
        
        {/* Stats */}
        <div className="space-y-3 sm:space-y-4 max-w-full sm:max-w-[412px]">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="flex items-center justify-between py-2.5 sm:py-3 border-b border-[rgba(201,160,96,0.2)]"
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.08), ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#8b6914] text-[10px] sm:text-[11px] tracking-[1.5px] sm:tracking-[1.71px] font-['Cormorant_Garamond',serif]">
                {stat.label}
              </span>
              <motion.span 
                className="text-[#2c1810] text-[18px] sm:text-[20px] font-['Playfair_Display',serif]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.08), type: "spring", stiffness: 200, damping: 15 }}
              >
                {stat.value}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}