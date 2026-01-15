import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'motion/react';
// import heroImage from "figma:asset/Hero.png";
// 8682058a9534d47877696cc4562c83a1f3371f8d
import heroImage from "../assets/Hero.png"
import CollectionCard from './CollectionCard';

interface HeroSectionProps {
  onExploreClick?: (event?: React.MouseEvent) => void;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Only activate parallax when section is near viewport
  const isNearViewport = useInView(sectionRef, { 
    once: false, 
    margin: "200px 0px 200px 0px" // Start calculating 200px before entering viewport
  });

  // Parallax scroll effects - only when near viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Background image parallax - slower movement
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  // Content parallax - faster movement for depth
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const handleRippleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Get the section element bounds
    const section = e.currentTarget.closest('section');
    if (!section) return;
    
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 1000);
  };

  return (
    <section className="relative h-[75vh] md:h-screen w-full overflow-hidden bg-white" ref={sectionRef}>
      {/* Ornate Background */}
      <motion.div 
        className="absolute inset-0 md:-right-12 flex items-center justify-center"
        style={{ 
          y: shouldReduceMotion || !isNearViewport ? 0 : backgroundY, 
          scale: shouldReduceMotion || !isNearViewport ? 1 : backgroundScale,
          willChange: isNearViewport ? 'transform' : 'auto'
        }}
      >
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full scale-[2.25] md:scale-100 translate-x-6 md:translate-x-0 object-contain md:object-cover md:object-[100%_center]"
          style={{ willChange: isNearViewport ? 'transform' : 'auto' }}
        />
      </motion.div>
      
      {/* Elegant Gradient Overlay - matching navigation style */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      
      {/* Hero Content */}
      <motion.div 
        className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8" 
        onClick={handleRippleClick}
        style={{ 
          y: shouldReduceMotion || !isNearViewport ? 0 : contentY, 
          opacity: shouldReduceMotion || !isNearViewport ? 1 : contentOpacity, 
          scale: shouldReduceMotion || !isNearViewport ? 1 : contentScale,
          willChange: isNearViewport ? 'transform, opacity' : 'auto'
        }}
      >
        {/* Ripple Effects */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute pointer-events-none z-10"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: '0px',
              height: '0px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              animation: 'ripple 1s ease-out',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}

        <div className="text-center max-w-4xl mx-auto relative">
          {/* Subtle backdrop with golden glow for text visibility */}
          
          <motion.p 
            className="text-[#fdfcf9] text-[9px] sm:text-[10px] tracking-[2.5px] sm:tracking-[3.12px] mb-6 sm:mb-8 font-['Cormorant_Garamond',serif] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            INTRODUCING
          </motion.p>
          <motion.h1 
            className="text-[#fdfcf9] text-[36px] sm:text-[42px] md:text-[50px] lg:text-[56px] leading-[1.4] sm:leading-[1.5] tracking-[2.5px] sm:tracking-[3.5px] md:tracking-[4.48px] mb-8 sm:mb-10 md:mb-12 font-['Cinzel_Decorative',serif] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            HERITAGE 2026
          </motion.h1>
          <motion.p 
            className="text-[#fdfcf9]/80 text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.5px] sm:tracking-[1.8px] mb-8 sm:mb-10 font-['Cormorant_Garamond',serif] italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Rooted in craft. Refined for today
          </motion.p>
          <motion.button 
            onClick={(e) => {
              e?.preventDefault();
              onExploreClick?.(e);
            }}
            className="bg-white text-[#2c1810] px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 text-[9px] sm:text-[10px] tracking-[1.8px] sm:tracking-[2.12px] hover:bg-white/90 hover:scale-105 transition-all font-['Cormorant_Garamond',serif] rounded-[4px] shadow-xl hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ENTER THE HERITAGE
          </motion.button>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <ChevronDown className="w-5 h-5 text-[#fdfcf9] animate-bounce" />
      </motion.div>
      
    </section>
  );
}