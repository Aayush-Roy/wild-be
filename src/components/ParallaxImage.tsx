import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'motion/react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  parallaxRange: [string, string];
  className?: string;
}

export function ParallaxImage({ src, alt, parallaxRange, className = '' }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Only activate parallax when section is near viewport
  const isNearViewport = useInView(containerRef, { 
    once: false, 
    margin: "300px 0px 300px 0px"
  });
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Apply parallax transformation
  const y = useTransform(scrollYProgress, [0, 1], parallaxRange);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <div ref={containerRef} className={className}>
      <motion.img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
        style={{ 
          y: shouldReduceMotion || !isNearViewport ? 0 : y,
          scale: shouldReduceMotion || !isNearViewport ? 1 : scale,
          willChange: isNearViewport ? 'transform' : 'auto'
        }}
      />
    </div>
  );
}
