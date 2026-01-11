import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface PageTransitionProps {
  isTransitioning: boolean;
  clickPosition?: { x: number; y: number };
}

export function PageTransition({ isTransitioning, clickPosition }: PageTransitionProps) {
  const [particles, setParticles] = useState<Array<{ id: number; angle: number; delay: number }>>([]);

  useEffect(() => {
    if (isTransitioning && clickPosition) {
      // Generate particles for radial burst
      const newParticles = Array.from({ length: 16 }, (_, i) => ({
        id: i,
        angle: (i * 360) / 16,
        delay: i * 0.025,
      }));
      setParticles(newParticles);
    }
  }, [isTransitioning, clickPosition]);

  return (
    <AnimatePresence>
      {isTransitioning && clickPosition && (
        <>
          {/* Main Radial Glow - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.8, 0], scale: [0, 2, 3, 3.5] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: clickPosition.x,
              top: clickPosition.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#c9a060]/80 via-[#c9a060]/40 to-transparent blur-[60px]" />
          </motion.div>

          {/* Secondary Glow Layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.9, 0.7, 0], scale: [0, 1.5, 2.5, 3] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: clickPosition.x,
              top: clickPosition.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#d4af37]/60 via-[#c9a060]/30 to-transparent blur-[80px]" />
          </motion.div>

          {/* Inner Bright Core - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.9, 0], scale: [0, 1, 1.8, 2.2] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: clickPosition.x,
              top: clickPosition.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-[180px] h-[180px] rounded-full bg-gradient-radial from-white/90 via-[#c9a060]/70 to-transparent blur-[30px]" />
          </motion.div>

          {/* Radial Light Rays - More Visible */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0.8, 0], 
                scale: [0, 1, 1],
                x: [0, Math.cos((particle.angle * Math.PI) / 180) * 280],
                y: [0, Math.sin((particle.angle * Math.PI) / 180) * 280],
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.1, 
                delay: particle.delay,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="fixed pointer-events-none z-[9999]"
              style={{
                left: clickPosition.x,
                top: clickPosition.y,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="w-[6px] h-[60px] bg-gradient-to-b from-[#c9a060] via-[#c9a060]/70 to-transparent blur-[1px] rounded-full shadow-lg shadow-[#c9a060]/50" />
            </motion.div>
          ))}

          {/* Expanding Ring - More Visible */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.8, 0.6, 0], scale: [0, 1.8, 2.5, 3] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: clickPosition.x,
              top: clickPosition.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-[350px] h-[350px] rounded-full border-[3px] border-[#c9a060]/60 shadow-[0_0_30px_rgba(201,160,96,0.4)]" />
          </motion.div>

          {/* Second Expanding Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.6, 0.4, 0], scale: [0, 1.5, 2.2, 2.8] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: clickPosition.x,
              top: clickPosition.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-[400px] h-[400px] rounded-full border-[2px] border-[#d4af37]/50 shadow-[0_0_25px_rgba(212,175,55,0.3)]" />
          </motion.div>

          {/* Full Screen Overlay with Fade - More Visible */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0.2, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 pointer-events-none z-[9998]"
            style={{
              background: `radial-gradient(circle 800px at ${clickPosition.x}px ${clickPosition.y}px, rgba(201,160,96,0.25), rgba(201,160,96,0.1) 40%, transparent 70%)`,
            }}
          />

          {/* Shimmer Effect - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.9, 0.7, 0], 
              scale: [0.8, 1.3, 1.6, 1.8],
              rotate: [0, 180, 360]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: clickPosition.x,
              top: clickPosition.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-[250px] h-[250px] opacity-60">
              <div className="absolute inset-0 bg-gradient-conic from-transparent via-[#c9a060]/70 to-transparent blur-[20px]" />
            </div>
          </motion.div>

          {/* Particle Sparkles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0, 1.5, 0],
                x: [0, Math.cos((i * 45 * Math.PI) / 180) * 150],
                y: [0, Math.sin((i * 45 * Math.PI) / 180) * 150],
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.9, 
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="fixed pointer-events-none z-[9999]"
              style={{
                left: clickPosition.x,
                top: clickPosition.y,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="w-3 h-3 rounded-full bg-[#c9a060] shadow-[0_0_20px_rgba(201,160,96,0.8)]" />
            </motion.div>
          ))}
        </>
      )}
    </AnimatePresence>
  );
}