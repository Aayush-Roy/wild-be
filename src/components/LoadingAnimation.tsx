import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from "figma:asset/a02147a5b2d7cc9c47ba0dd78dff86bc3675223a.png";

interface LoadingAnimationProps {
  show: boolean;
  onComplete: () => void;
  hasLoadedBefore: boolean;
}

export function LoadingAnimation({ show, onComplete, hasLoadedBefore }: LoadingAnimationProps) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (!show || hasLoadedBefore) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    // Total duration: 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation before calling onComplete
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [show, hasLoadedBefore, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Base Background - Warm Ivory with Fabric Texture */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#fdfcf9] via-[#f5ede0] to-[#ede5d8]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          />

          {/* Subtle Noise Texture Overlay for Fabric Feel */}
          <motion.div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.015 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Traditional Indian Pattern - Ultra Subtle */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.04, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              opacity: { duration: 1.5, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] },
              scale: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] }
            }}
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="heritage-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  {/* Central Mandala */}
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#8b6914" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="30" fill="none" stroke="#8b6914" strokeWidth="0.4" />
                  <circle cx="100" cy="100" r="20" fill="none" stroke="#8b6914" strokeWidth="0.3" />
                  <circle cx="100" cy="100" r="10" fill="none" stroke="#c9a060" strokeWidth="0.6" />
                  
                  {/* Radiating Petals */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 100 + Math.cos(rad) * 12;
                    const y1 = 100 + Math.sin(rad) * 12;
                    const x2 = 100 + Math.cos(rad) * 25;
                    const y2 = 100 + Math.sin(rad) * 25;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#c9a060"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                      />
                    );
                  })}
                  
                  {/* Corner Paisleys */}
                  <path d="M20 20 Q15 25 20 30 Q25 27 25 20 Q23 17 20 20" fill="none" stroke="#8b6914" strokeWidth="0.5" />
                  <path d="M180 20 Q175 25 180 30 Q185 27 185 20 Q183 17 180 20" fill="none" stroke="#8b6914" strokeWidth="0.5" />
                  <path d="M20 180 Q15 185 20 190 Q25 187 25 180 Q23 177 20 180" fill="none" stroke="#8b6914" strokeWidth="0.5" />
                  <path d="M180 180 Q175 185 180 190 Q185 187 185 180 Q183 177 180 180" fill="none" stroke="#8b6914" strokeWidth="0.5" />
                  
                  {/* Decorative Dots */}
                  <circle cx="100" cy="15" r="1.5" fill="#c9a060" opacity="0.6" />
                  <circle cx="185" cy="100" r="1.5" fill="#c9a060" opacity="0.6" />
                  <circle cx="100" cy="185" r="1.5" fill="#c9a060" opacity="0.6" />
                  <circle cx="15" cy="100" r="1.5" fill="#c9a060" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#heritage-pattern)" />
            </svg>
          </motion.div>

          {/* Soft Vignette - Creates Depth */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[rgba(44,24,16,0.08)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(44,24,16,0.08) 100%)'
            }}
          />

          {/* Golden Light Wash - Subtle Glow */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.12, scale: 1.2 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{
              opacity: { duration: 1.8, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
              scale: { duration: 2.5, ease: [0.22, 1, 0.36, 1] }
            }}
            style={{
              background: 'radial-gradient(circle at 50% 45%, rgba(201,160,96,0.25) 0%, transparent 50%)'
            }}
          />

          {/* Logo Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo - Emerging from Shadow */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
              transition={{
                opacity: { duration: 1.4, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
                y: { duration: 1.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] },
                filter: { duration: 1.4, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
              }}
              className="mb-8"
            >
              <img
                src={logoImage}
                alt="Sohwais"
                className="h-16 sm:h-20 md:h-24 w-auto"
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(139, 105, 20, 0.15))'
                }}
              />
            </motion.div>

            {/* Brand Name Typography */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: '8px' }}
              animate={{ opacity: 1, letterSpacing: '6px' }}
              exit={{ opacity: 0, letterSpacing: '4px' }}
              transition={{
                opacity: { duration: 1.2, delay: 1.2, ease: [0.43, 0.13, 0.23, 0.96] },
                letterSpacing: { duration: 1.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }
              }}
              className="text-[#2c1810] text-[11px] sm:text-[12px] font-['Cormorant_Garamond',serif] tracking-[6px] uppercase"
              style={{
                textShadow: '0 2px 8px rgba(201, 160, 96, 0.1)'
              }}
            >
              Heritage 2025
            </motion.div>

            {/* Subtle Underline Accent */}
            <motion.div
              className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-[#c9a060]/40 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '180px', opacity: 1 }}
              exit={{ width: '80px', opacity: 0 }}
              transition={{
                width: { duration: 1.4, delay: 1.4, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 1.0, delay: 1.4, ease: "easeInOut" }
              }}
            />
          </div>

          {/* Ceremonial Fade Overlay - Final Transition */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fdfcf9]/50 to-[#fdfcf9]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}