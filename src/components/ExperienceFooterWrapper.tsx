import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'motion/react';

interface ExperienceFooterWrapperProps {
  children: React.ReactNode;
}

export function ExperienceFooterWrapper({ children }: ExperienceFooterWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Disable parallax when not needed for performance
  const isNearViewport = useInView(wrapperRef, { 
    once: false, 
    margin: "150px 0px 150px 0px"
  });
  
  // Ultra-optimized parallax scroll effects - minimal transforms
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"]
  });

  // Simplified pattern fade
  const patternOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.18, 0.18, 0]);

  return (
    <div ref={wrapperRef} className="relative bg-[#2c1810]">
      {/* Shared Seamless Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{ 
          opacity: shouldReduceMotion || !isNearViewport ? 0.18 : patternOpacity,
          willChange: isNearViewport ? 'opacity' : 'auto'
        }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="seamless-batik-pattern" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
              {/* Central Lotus Mandala */}
              <circle cx="70" cy="70" r="25" fill="none" stroke="#d4af6a" strokeWidth="0.8" />
              <circle cx="70" cy="70" r="18" fill="none" stroke="#d4af6a" strokeWidth="0.6" />
              <circle cx="70" cy="70" r="12" fill="none" stroke="#d4af6a" strokeWidth="0.6" />
              
              {/* Lotus Petals - 8 petals radiating from center */}
              <path d="M70 45 Q75 52 70 60 Q65 52 70 45" fill="none" stroke="#d4af6a" strokeWidth="0.9" />
              <path d="M95 70 Q88 75 80 70 Q88 65 95 70" fill="none" stroke="#d4af6a" strokeWidth="0.9" />
              <path d="M70 95 Q65 88 70 80 Q75 88 70 95" fill="none" stroke="#d4af6a" strokeWidth="0.9" />
              <path d="M45 70 Q52 65 60 70 Q52 75 45 70" fill="none" stroke="#d4af6a" strokeWidth="0.9" />
              <path d="M85 55 Q82 60 77 57 Q82 52 85 55" fill="none" stroke="#d4af6a" strokeWidth="0.7" />
              <path d="M85 85 Q82 80 77 83 Q82 88 85 85" fill="none" stroke="#d4af6a" strokeWidth="0.7" />
              <path d="M55 85 Q58 80 63 83 Q58 88 55 85" fill="none" stroke="#d4af6a" strokeWidth="0.7" />
              <path d="M55 55 Q58 60 63 57 Q58 52 55 55" fill="none" stroke="#d4af6a" strokeWidth="0.7" />
              
              {/* Paisley Motifs in corners */}
              <path d="M15 15 Q10 20 15 25 Q20 22 20 15 Q18 12 15 15" fill="none" stroke="#d4af6a" strokeWidth="0.8" />
              <circle cx="16" cy="18" r="2" fill="none" stroke="#d4af6a" strokeWidth="0.6" />
              
              <path d="M125 15 Q120 20 125 25 Q130 22 130 15 Q128 12 125 15" fill="none" stroke="#d4af6a" strokeWidth="0.8" />
              <circle cx="126" cy="18" r="2" fill="none" stroke="#d4af6a" strokeWidth="0.6" />
              
              <path d="M15 125 Q10 130 15 135 Q20 132 20 125 Q18 122 15 125" fill="none" stroke="#d4af6a" strokeWidth="0.8" />
              <circle cx="16" cy="128" r="2" fill="none" stroke="#d4af6a" strokeWidth="0.6" />
              
              <path d="M125 125 Q120 130 125 135 Q130 132 130 125 Q128 122 125 125" fill="none" stroke="#d4af6a" strokeWidth="0.8" />
              <circle cx="126" cy="128" r="2" fill="none" stroke="#d4af6a" strokeWidth="0.6" />
              
              {/* Traditional Indian Border Dots */}
              <circle cx="70" cy="10" r="2" fill="#d4af6a" />
              <circle cx="130" cy="70" r="2" fill="#d4af6a" />
              <circle cx="70" cy="130" r="2" fill="#d4af6a" />
              <circle cx="10" cy="70" r="2" fill="#d4af6a" />
              
              {/* Small decorative flowers */}
              <circle cx="35" cy="35" r="3" fill="none" stroke="#d4af6a" strokeWidth="0.7" />
              <circle cx="105" cy="35" r="3" fill="none" stroke="#d4af6a" strokeWidth="0.7" />
              <circle cx="35" cy="105" r="3" fill="none" stroke="#d4af6a" strokeWidth="0.7" />
              <circle cx="105" cy="105" r="3" fill="none" stroke="#d4af6a" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seamless-batik-pattern)" />
        </svg>
      </motion.div>
      
      {/* Content sections */}
      {children}
    </div>
  );
}
