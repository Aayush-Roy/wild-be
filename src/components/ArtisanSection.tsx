// // import { useRef } from 'react';
// // import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'motion/react';
// // // import artisanImage from "figma:asset/3913b99a86a9d2b13f68582e78ae345fd88eb42e.png";
// // import artisanImage from "../assets/indigo.png"

// // interface ArtisanSectionProps {
// //   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
// // }

// // export function ArtisanSection({ onCraftsmanshipClick }: ArtisanSectionProps) {
// //   const sectionRef = useRef<HTMLElement>(null);
// //   const shouldReduceMotion = useReducedMotion();
// //   const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
// //   // Disable parallax when not needed for performance
// //   const isNearViewport = useInView(sectionRef, { 
// //     once: false, 
// //     margin: "150px 0px 150px 0px"
// //   });
  
// //   // Ultra-optimized parallax scroll effects - minimal transforms
// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "end start"]
// //   });

// //   // Simplified background parallax - less operations
// //   const backgroundY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
// //   const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  
// //   // Simplified content parallax
// //   const contentX = useTransform(scrollYProgress, [0, 0.5, 1], ["15%", "0%", "-3%"]);
// //   const contentOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0.85]);
  
// //   // Simplified stagger effect for text elements
// //   const titleY = useTransform(scrollYProgress, [0, 0.4, 0.7], ["20px", "0px", "-8px"]);
// //   const subtitleY = useTransform(scrollYProgress, [0, 0.45, 0.7], ["25px", "0px", "-5px"]);
// //   const descY = useTransform(scrollYProgress, [0, 0.5, 0.7], ["30px", "0px", "0px"]);

// //   return (
// //     <section className="relative h-screen w-full overflow-hidden bg-white" ref={sectionRef}>
// //       {/* Background Image */}
// //       <motion.div 
// //         className="absolute inset-0"
// //         style={{ 
// //           y: shouldReduceMotion || !isNearViewport ? 0 : backgroundY, 
// //           scale: shouldReduceMotion || !isNearViewport ? 1 : backgroundScale,
// //           willChange: isNearViewport ? 'transform' : 'auto'
// //         }}
// //       >
// //         <img 
// //           src={artisanImage} 
// //           alt="Elephant Tales Artisan Series" 
// //           className="w-full h-full object-cover"
// //           style={{ willChange: isNearViewport ? 'transform' : 'auto' }}
// //         />
// //       </motion.div>
      
// //       {/* Gradient Overlay - Premium depth effect */}
// //       <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/20 to-transparent" />
      
// //       {/* Content */}
// //       <div className="relative h-full flex items-center justify-end px-16">
// //         <motion.div 
// //           className="max-w-[448px] text-right"
// //           style={{ 
// //             x: shouldReduceMotion || !isNearViewport ? 0 : contentX, 
// //             opacity: shouldReduceMotion || !isNearViewport ? 1 : contentOpacity,
// //             willChange: isNearViewport ? 'transform, opacity' : 'auto'
// //           }}
// //         >
// //           <motion.p 
// //             className="text-[#fdfcf9] text-[11px] tracking-[3.2px] mb-6 font-['Cormorant_Garamond',serif] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
// //             initial={{ opacity: 0, y: 15 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
// //             transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
// //             style={{ 
// //               y: shouldReduceMotion || !isNearViewport ? 0 : titleY,
// //               willChange: isNearViewport ? 'transform' : 'auto'
// //             }}
// //           >
// //             ARTISAN SERIES
// //           </motion.p>
// //           <motion.h2 
// //             className="text-[#fdfcf9] text-[48px] leading-[1.2] tracking-[2.5px] mb-8 font-['Cinzel_Decorative',serif] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
// //             transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
// //             style={{ 
// //               y: shouldReduceMotion || !isNearViewport ? 0 : subtitleY,
// //               willChange: isNearViewport ? 'transform' : 'auto'
// //             }}
// //           >
// //             Elephant Tales
// //           </motion.h2>
// //           <motion.p 
// //             className="text-[#fdfcf9] text-[15px] leading-[1.8] tracking-[0.2px] mb-12 max-w-[380px] ml-auto font-['Cormorant_Garamond',serif] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
// //             transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
// //             style={{ 
// //               y: shouldReduceMotion || !isNearViewport ? 0 : descY,
// //               willChange: isNearViewport ? 'transform' : 'auto'
// //             }}
// //           >
// //             Intricate hand-embroidered elephant motifs inspired by Madhubani art. Navy silk blend showcasing the perfect marriage of tradition and modernity.
// //           </motion.p>
// //           <motion.button 
// //             onClick={(e) => {
// //               e.preventDefault();
// //               onCraftsmanshipClick?.(e);
// //             }}
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
// //             transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
// //             className="border-2 border-white text-white px-12 py-3.5 text-[11px] tracking-[2.5px] hover:bg-white hover:text-[#2c1810] transition-all duration-300 font-['Cormorant_Garamond',serif] rounded-[4px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
// //             aria-label="View craftsmanship details"
// //             style={{ 
// //               y: shouldReduceMotion || !isNearViewport ? 0 : descY,
// //               willChange: isNearViewport ? 'transform' : 'auto'
// //             }}
// //             whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(255, 255, 255, 0.3)" }}
// //             whileTap={{ scale: 0.98 }}
// //           >
// //             VIEW DETAILS
// //           </motion.button>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }
// import { useRef } from 'react';
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useInView,
//   useReducedMotion,
// } from 'motion/react';

// import artisanImage from '../assets/indigo.png';

// interface ArtisanSectionProps {
//   onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
// }

// export function ArtisanSection({ onCraftsmanshipClick }: ArtisanSectionProps) {
//   const sectionRef = useRef<HTMLElement>(null);
//   const shouldReduceMotion = useReducedMotion();
//   const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

//   const isNearViewport = useInView(sectionRef, {
//     once: false,
//     margin: '150px 0px 150px 0px',
//   });

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start'],
//   });

//   const backgroundY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
//   const backgroundScale = useTransform(
//     scrollYProgress,
//     [0, 0.5, 1],
//     [1.05, 1, 1.03]
//   );

//   const contentX = useTransform(
//     scrollYProgress,
//     [0, 0.5, 1],
//     ['15%', '0%', '-3%']
//   );
//   const contentOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.4, 0.8, 1],
//     [0, 1, 1, 0.85]
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen w-full overflow-hidden bg-black"
//     >
//       {/* Background Image */}
//       <motion.div
//         className="absolute inset-0 flex items-center justify-center"
//         style={{
//           y: shouldReduceMotion || !isNearViewport ? 0 : backgroundY,
//           scale:
//             shouldReduceMotion || !isNearViewport ? 1 : backgroundScale,
//           willChange: isNearViewport ? 'transform' : 'auto',
//         }}
//       >
//         <img
//           src={artisanImage}
//           alt="Elephant Tales Artisan Series"
//           className="
//             w-full h-full
//             object-cover
//             md:object-contain
//             object-center
//             md:scale-[1.08]
//           "
//         />
//       </motion.div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/25 to-transparent" />

//       {/* Content */}
//       <div className="relative h-full flex items-center justify-end px-6 md:px-16">
//         <motion.div
//           className="max-w-[448px] text-right"
//           style={{
//             x: shouldReduceMotion || !isNearViewport ? 0 : contentX,
//             opacity:
//               shouldReduceMotion || !isNearViewport ? 1 : contentOpacity,
//             willChange: isNearViewport
//               ? 'transform, opacity'
//               : 'auto',
//           }}
//         >
//           <motion.p
//             className="text-[#fdfcf9] text-[11px] tracking-[3.2px] mb-6 font-['Cormorant_Garamond',serif]"
//             initial={{ opacity: 0, y: 15 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             ARTISAN SERIES
//           </motion.p>

//           <motion.h2
//             className="text-[#fdfcf9] text-[40px] md:text-[48px] leading-[1.2] tracking-[2.5px] mb-8 font-['Cinzel_Decorative',serif]"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.3 }}
//           >
//             Elephant Tales
//           </motion.h2>

//           <motion.p
//             className="text-[#fdfcf9] text-[14px] md:text-[15px] leading-[1.8] mb-12 max-w-[380px] ml-auto font-['Cormorant_Garamond',serif]"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.4 }}
//           >
//             Intricate hand-embroidered elephant motifs inspired by
//             Madhubani art. Navy silk blend showcasing the perfect
//             marriage of tradition and modernity.
//           </motion.p>

//           <motion.button
//             onClick={(e) => {
//               e.preventDefault();
//               onCraftsmanshipClick?.(e);
//             }}
//             className="border-2 border-white text-white px-12 py-3.5 text-[11px] tracking-[2.5px] hover:bg-white hover:text-[#2c1810] transition-all font-['Cormorant_Garamond',serif] rounded-[4px]"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             VIEW DETAILS
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
} from 'motion/react';

import artisanImage from '../assets/indigo.png';

interface ArtisanSectionProps {
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
}

export function ArtisanSection({ onCraftsmanshipClick }: ArtisanSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const isNearViewport = useInView(sectionRef, {
    once: false,
    margin: '150px 0px 150px 0px',
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.05, 1, 1.03]
  );

  const contentX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['15%', '0%', '-3%']
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, 1, 1, 0.9]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* ===== Background Image System ===== */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: shouldReduceMotion || !isNearViewport ? 0 : backgroundY,
          scale:
            shouldReduceMotion || !isNearViewport ? 1 : backgroundScale,
          willChange: isNearViewport ? 'transform' : 'auto',
        }}
      >
        {/* 🔥 Blurred Fill (fills empty space, no black bg) */}
        <img
          src={artisanImage}
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-70"
        />

        {/* 🎯 Main Image (never cut) */}
        <img
          src={artisanImage}
          alt="Elephant Tales Artisan Series"
          className="
            relative z-10
            w-full h-full
            object-cover
            md:object-contain
            object-center
            md:scale-[1.08]
          "
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />

      {/* ===== Content ===== */}
      <div className="relative h-full flex items-center justify-end px-6 md:px-16">
        <motion.div
          className="max-w-[448px] text-right"
          style={{
            x: shouldReduceMotion || !isNearViewport ? 0 : contentX,
            opacity:
              shouldReduceMotion || !isNearViewport ? 1 : contentOpacity,
            willChange: isNearViewport
              ? 'transform, opacity'
              : 'auto',
          }}
        >
          <motion.p
            className="text-[#fdfcf9] text-[11px] tracking-[3.2px] mb-6 font-['Cormorant_Garamond',serif]"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ARTISAN SERIES
          </motion.p>

          <motion.h2
            className="text-[#fdfcf9] text-[40px] md:text-[48px] leading-[1.2] tracking-[2.5px] mb-8 font-['Cinzel_Decorative',serif]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Elephant Tales
          </motion.h2>

          <motion.p
            className="text-[#fdfcf9] text-[14px] md:text-[15px] leading-[1.8] mb-12 max-w-[380px] ml-auto font-['Cormorant_Garamond',serif]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Intricate hand-embroidered elephant motifs inspired by
            Madhubani art. Navy silk blend showcasing the perfect
            marriage of tradition and modernity.
          </motion.p>

          <motion.button
            onClick={(e) => {
              e.preventDefault();
              onCraftsmanshipClick?.(e);
            }}
            className="border-2 border-white text-white px-12 py-3.5 text-[11px] tracking-[2.5px] hover:bg-white hover:text-[#2c1810] transition-all font-['Cormorant_Garamond',serif] rounded-[4px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            VIEW DETAILS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
