import { ArrowLeft } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import image1 from 'figma:asset/f4eee583d5c136ad638309ef4b1f99e3b5ef11ae.png';
import image2 from 'figma:asset/53b1a43f61e678bcadc183073e5312227d60fd0a.png';
import image3 from 'figma:asset/505308c4ebb6c5545ab81d5dc02a2bb02800d3d3.png';

interface CraftsmanshipPageProps {
  onBack: (event?: React.MouseEvent) => void;
  onOurStoryClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export function CraftsmanshipPage({ onBack, onOurStoryClick, onCraftsmanshipClick, onCollectionClick, cartCount, onCartClick }: CraftsmanshipPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Optimized hero parallax - simpler transforms for better performance
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.8, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Optimized lotus image parallax
  const lotusRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: lotusProgress } = useScroll({
    target: lotusRef,
    offset: ["start end", "end start"]
  });

  const lotusY = useTransform(lotusProgress, [0, 0.5, 1], [100, 0, -100]);
  const lotusRotate = useTransform(lotusProgress, [0, 0.5, 1], [-3, 0, 3]);
  const lotusScale = useTransform(lotusProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);
  const lotusOpacity = useTransform(lotusProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.4]);

  return (
    <div className="bg-[#fdfcf9] min-h-screen">
      
      <div className="relative bg-gradient-to-b from-[#fdfcf9] via-[#f8f6f3] to-[#fdfcf9]">
        {/* SECTION 1: HERO - Museum Opening */}
        <div ref={heroRef} className="relative h-screen overflow-hidden pt-20">
          {/* Back Button */}
          <div className="fixed top-28 sm:top-32 md:top-36 left-0 right-0 z-30 px-4 sm:px-6 md:px-12 lg:px-20">
            <motion.button
              onClick={onBack}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05, x: -5 }}
              className="flex items-center gap-2 text-[#1a1410]/90 hover:text-[#6366f1] transition-colors font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px] backdrop-blur-sm bg-white/80 px-4 py-2 rounded-full border border-[#1a1410]/10 shadow-lg"
              aria-label="Go back to home page"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">BACK</span>
            </motion.button>
          </div>

          {/* Background Pattern */}
          <motion.div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none z-10"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 1, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="craft-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="1" fill="#6366f1" />
                  <circle cx="25" cy="75" r="0.5" fill="#818cf8" />
                  <circle cx="75" cy="25" r="0.5" fill="#818cf8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#craft-pattern)" />
            </svg>
          </motion.div>

          {/* Hero Image with Advanced Parallax */}
          <motion.div 
            className="absolute inset-0"
            style={{ 
              y: heroY, 
              opacity: heroOpacity,
              scale: heroScale
            }}
          >
            <motion.img 
              src={image1} 
              alt="Traditional Indian folk art with decorated elephant motif"
              className="w-full h-[110%] object-cover opacity-100"
              initial={{ scale: 1.2, filter: "blur(10px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcf9]/35 via-[#fdfcf9]/15 to-[#fdfcf9]/70"></div>
          </motion.div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 z-20">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center max-w-5xl"
            >
              {/* Small Label */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#6366f1] text-[10px] sm:text-[11px] tracking-[3px] font-['Cormorant_Garamond',serif] mb-8 block"
              >
                CRAFT IN PRACTICE
              </motion.span>

              {/* Main Title with Stagger Effect */}
              <motion.h1 
                className="text-[#1a1410] font-['Cinzel_Decorative',serif] text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] leading-[0.9] tracking-[2px] mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  Heritage
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Techniques
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#1a1410]/70 font-['Cormorant_Garamond',serif] text-[18px] sm:text-[20px] md:text-[22px] leading-[1.8] tracking-[0.5px] max-w-2xl mx-auto"
              >
                Living crafts, practiced today. Documentation of process, material, and technique across all our collections.
              </motion.p>
            </motion.div>
          </div>

          {/* Scroll Indicator with Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.div 
              className="flex flex-col items-center gap-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[#6366f1] text-[9px] tracking-[2px] font-['Cormorant_Garamond',serif]">
                SCROLL
              </span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-[#6366f1] to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* SECTION 2: OPENING STATEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-32 sm:py-40 md:py-56 overflow-hidden"
        >
          {/* Animated Background Glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-[120px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="max-w-5xl mx-auto text-center relative">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#1a1410] font-['Cormorant_Garamond',serif] text-[28px] sm:text-[34px] md:text-[40px] leading-[1.6] tracking-[0.5px] mb-16"
            >
              These are not historical references.<br />
              This is work produced today, by hands trained in discipline,<br />
              guided by patience, refined through repetition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#6366f1] to-transparent mx-auto mb-12"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#1a1410]/70 font-['Cormorant_Garamond',serif] text-[17px] sm:text-[18px] leading-[1.9] tracking-[0.4px] max-w-3xl mx-auto"
            >
              Sohwais works with an in-house team of artisans to document and produce traditional techniques across all our collections—from batik and embroidery to weaving and hand-painting. Every photograph shown here is original—captured in our workshops, showing real materials, real process, and real craft. This is not borrowed imagery. This is evidence of work.
            </motion.p>
          </div>
        </motion.div>

        {/* SECTION 3: BATIK - IMAGE DOMINANT */}
        <div className="relative mb-32 sm:mb-40 md:mb-56">
          {/* Large Editorial Phrase */}
          <div className="px-4 sm:px-6 md:px-12 lg:px-20 mb-20 md:mb-32 overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#6366f1] font-['Cinzel_Decorative',serif] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[1] tracking-[2px]"
            >
              Folk Art in<br />Practice
            </motion.h2>
          </div>

          {/* Full Width Folk Art Image */}
          <motion.div
            ref={lotusRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-20 md:mb-32 px-4 sm:px-6 md:px-12 lg:px-20"
          >
            {/* Floating Decorative Elements - Background Layer */}
            <motion.div
              className="absolute -top-20 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#6366f1]/10 to-transparent blur-3xl"
              style={{
                y: useTransform(lotusProgress, [0, 1], [100, -100]),
                opacity: useTransform(lotusProgress, [0, 0.5, 1], [0, 0.6, 0])
              }}
            />
            <motion.div
              className="absolute -bottom-20 -right-10 w-60 h-60 rounded-full bg-gradient-to-tl from-[#818cf8]/10 to-transparent blur-3xl"
              style={{
                y: useTransform(lotusProgress, [0, 1], [-50, 50]),
                opacity: useTransform(lotusProgress, [0, 0.5, 1], [0, 0.5, 0])
              }}
            />

            {/* Main Image Container with Parallax */}
            <div className="relative max-w-4xl mx-auto">
              {/* Decorative Frame Elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-[#6366f1]/30 rounded-tl-3xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{
                  rotate: useTransform(lotusProgress, [0, 1], [-10, 10])
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-[#6366f1]/30 rounded-br-3xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
                style={{
                  rotate: useTransform(lotusProgress, [0, 1], [10, -10])
                }}
              />

              {/* Image with Advanced Parallax */}
              <motion.div
                className="relative bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl shadow-[#6366f1]/20"
                style={{
                  y: lotusY,
                  rotate: lotusRotate,
                  scale: lotusScale,
                  opacity: lotusOpacity
                }}
              >
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#818cf8]/5 rounded-2xl pointer-events-none" />
                
                <motion.img 
                  src={image2} 
                  alt="Traditional folk art illustration with lotus motif"
                  className="w-full h-auto object-contain rounded-lg relative z-10"
                  initial={{ scale: 1.1, filter: "blur(8px)" }}
                  whileInView={{ scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ 
                    scale: 1.03,
                    rotateZ: 1,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }}
                />

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl pointer-events-none"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Floating Pattern Elements */}
              <motion.div
                className="absolute top-1/4 -right-12 w-16 h-16 opacity-20"
                style={{
                  y: useTransform(lotusProgress, [0, 1], [80, -80]),
                  rotate: useTransform(lotusProgress, [0, 1], [0, 360])
                }}
              >
                <svg viewBox="0 0 100 100" className="text-[#6366f1]">
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="3" fill="currentColor" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 -left-12 w-12 h-12 opacity-15"
                style={{
                  y: useTransform(lotusProgress, [0, 1], [-60, 60]),
                  rotate: useTransform(lotusProgress, [0, 1], [0, -270])
                }}
              >
                <svg viewBox="0 0 100 100" className="text-[#818cf8]">
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="5" fill="currentColor" />
                </svg>
              </motion.div>
            </div>
            
            {/* Image Caption with Parallax */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-6 text-center"
              style={{
                y: useTransform(lotusProgress, [0, 1], [0, -30])
              }}
            >
              <p className="text-[#1a1410]/60 font-['Cormorant_Garamond',serif] text-[11px] tracking-[1px] italic bg-white/90 px-4 py-2 backdrop-blur-sm border border-[#1a1410]/10 rounded shadow-sm inline-block">
                Folk art illustration — in-house documentation
              </p>
            </motion.div>
          </motion.div>

          {/* Batik Text Content - Asymmetric */}
          <div className="px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
                {/* Left Side - Process Description */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-5"
                >
                  <motion.span 
                    className="text-[#64748b] text-[10px] tracking-[2.5px] font-['Cormorant_Garamond',serif] mb-6 block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    THE ARTISTRY
                  </motion.span>
                  <h3 className="text-[#1a1410] font-['Cinzel_Decorative',serif] text-[36px] sm:text-[42px] md:text-[48px] leading-[1.1] tracking-[1.5px] mb-8">
                    Pattern, Color,<br />Tradition
                  </h3>
                  <p className="text-[#1a1410]/70 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] leading-[1.9] tracking-[0.4px]">
                    Traditional Indian folk art represents centuries of cultural heritage translated through vibrant motifs and symbolic patterns. Each element carries meaning—from the decorated elephant representing wisdom and strength to floral patterns symbolizing prosperity and growth.
                  </p>
                </motion.div>

                {/* Right Side - Philosophy */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-6 lg:col-start-7 lg:pt-20"
                >
                  <p className="text-[#1a1410]/70 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] leading-[1.9] tracking-[0.4px] mb-8">
                    Within Sohwais, these traditional motifs are not merely decorative. They are carefully studied, documented, and integrated into contemporary designs. Our artisans understand the historical significance behind each pattern, ensuring authenticity while adapting techniques to modern textiles.
                  </p>
                  <p className="text-[#1a1410]/70 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] leading-[1.9] tracking-[0.4px]">
                    Each piece honors tradition while speaking to the present. The vibrant colors, intricate details, and symbolic imagery connect our collections to a rich artistic heritage that continues to inspire and evolve.
                  </p>

                  <motion.div 
                    className="mt-10 flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <motion.div 
                      className="w-16 h-[1px] bg-[#6366f1]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.7 }}
                    ></motion.div>
                    <p className="text-[#6366f1] font-['Cormorant_Garamond',serif] text-[14px] tracking-[2px] italic">
                      Heritage meets modernity
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: EMBROIDERY - PRECISION FOCUS */}
        <div className="relative mb-32 sm:mb-40 md:mb-56">
          {/* Large Editorial Phrase */}
          <div className="px-4 sm:px-6 md:px-12 lg:px-20 mb-20 md:mb-32 text-right overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#6366f1] font-['Cinzel_Decorative',serif] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[1] tracking-[2px]"
            >
              Embroidery<br />as Precision
            </motion.h2>
          </div>

          {/* Split Layout - Image + Text Overlap */}
          <div className="px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: -60, rotateY: 10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-7 h-[60vh] md:h-[75vh] lg:h-auto lg:aspect-[4/5] mb-12 lg:mb-0"
                >
                  <motion.img 
                    src={image3} 
                    alt="Traditional folk art with decorated deer motif"
                    className="w-full h-full object-cover shadow-2xl shadow-[#6366f1]/10 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Image Caption */}
                  <motion.p 
                    className="text-[#1a1410]/60 font-['Cormorant_Garamond',serif] text-[11px] tracking-[1px] mt-3 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    Traditional motif detail — original documentation
                  </motion.p>
                </motion.div>

                {/* Text Block - Overlapping */}
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-6 lg:col-start-7 lg:-ml-12 lg:mt-32 bg-white border border-[#1a1410]/10 p-8 sm:p-10 md:p-12 lg:p-14 relative z-10 shadow-2xl rounded-lg"
                >
                  <span className="text-[#64748b] text-[10px] tracking-[2.5px] font-['Cormorant_Garamond',serif] mb-6 block">
                    TECHNIQUE
                  </span>
                  <h3 className="text-[#1a1410] font-['Cinzel_Decorative',serif] text-[32px] sm:text-[38px] md:text-[44px] leading-[1.1] tracking-[1.5px] mb-8">
                    Stitch by<br />Stitch
                  </h3>
                  <p className="text-[#1a1410]/70 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] leading-[1.9] tracking-[0.4px] mb-6">
                    Embroidery is precision. Each stitch must be placed with intention—tension controlled, angle considered, thread count maintained. There is no approximation. A single misplaced stitch disrupts the entire composition.
                  </p>
                  <p className="text-[#1a1410]/70 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] leading-[1.9] tracking-[0.4px] mb-6">
                    Within Sohwais, we work primarily with hand embroidery—not for romanticism, but for control. The human hand can adjust to fabric behavior in ways machinery cannot. This is not nostalgia. This is technical necessity.
                  </p>

                  {/* Pull Quote */}
                  <motion.div 
                    className="border-l-2 border-[#6366f1]/40 pl-6 py-4 mt-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <p className="text-[#1a1410] font-['Cormorant_Garamond',serif] text-[20px] sm:text-[22px] leading-[1.6] tracking-[0.3px] italic">
                      "Repetition builds fluency. Fluency allows refinement."
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: BEHIND THE WORK - In-House Team */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative px-4 sm:px-6 md:px-12 lg:px-20 mb-32 sm:mb-40 md:mb-56 overflow-hidden"
        >
          {/* Animated Background Glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366f1]/5 rounded-full blur-[150px]"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="max-w-5xl mx-auto relative">
            {/* Decorative Element */}
            <div className="mb-12 sm:mb-16 flex justify-center">
              <motion.svg 
                width="60" 
                height="60" 
                viewBox="0 0 60 60" 
                className="text-[#6366f1]/60"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.circle 
                  cx="30" 
                  cy="30" 
                  r="20" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.3 }}
                />
                <motion.circle 
                  cx="30" 
                  cy="30" 
                  r="12" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <circle cx="30" cy="30" r="4" fill="currentColor" />
              </motion.svg>
            </div>

            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#1a1410] font-['Cinzel_Decorative',serif] text-[42px] sm:text-[52px] md:text-[64px] leading-[1.2] tracking-[1.5px] mb-10"
              >
                Original<br />Documentation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#1a1410]/70 font-['Cormorant_Garamond',serif] text-[17px] sm:text-[18px] leading-[1.9] tracking-[0.4px] max-w-3xl mx-auto"
              >
                Every image shown on this page was captured by our in-house team within Sohwais workshops. These are not stock references, borrowed visuals, or conceptual representations. They are direct documentation of materials, process, and craft.
              </motion.p>
            </div>

            {/* Three Column Grid - Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="w-12 h-[1px] bg-[#6366f1] mx-auto mb-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                ></motion.div>
                <h3 className="text-[#6366f1] font-['Cinzel_Decorative',serif] text-[22px] sm:text-[26px] tracking-[1.2px] mb-4">
                  Authenticity
                </h3>
                <p className="text-[#1a1410]/60 font-['Cormorant_Garamond',serif] text-[15px] sm:text-[16px] leading-[1.8] tracking-[0.4px]">
                  What you see is what we produce. No borrowed imagery. No fabricated narratives.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="w-12 h-[1px] bg-[#6366f1] mx-auto mb-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                ></motion.div>
                <h3 className="text-[#6366f1] font-['Cinzel_Decorative',serif] text-[22px] sm:text-[26px] tracking-[1.2px] mb-4">
                  Control
                </h3>
                <p className="text-[#1a1410]/60 font-['Cormorant_Garamond',serif] text-[15px] sm:text-[16px] leading-[1.8] tracking-[0.4px]">
                  By documenting in-house, we ensure accuracy in representation and respect for craft.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="w-12 h-[1px] bg-[#6366f1] mx-auto mb-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                ></motion.div>
                <h3 className="text-[#6366f1] font-['Cinzel_Decorative',serif] text-[22px] sm:text-[26px] tracking-[1.2px] mb-4">
                  Evidence
                </h3>
                <p className="text-[#1a1410]/60 font-['Cormorant_Garamond',serif] text-[15px] sm:text-[16px] leading-[1.8] tracking-[0.4px]">
                  These photographs are artifacts—proof of process, patience, and material intelligence.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 6: CLOSING - Reflective */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="relative px-4 sm:px-6 md:px-12 lg:px-20 pb-32 sm:pb-40 md:pb-48 overflow-hidden"
        >
          {/* Background Pattern */}
          <motion.div 
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="closing-craft-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="1" fill="#6366f1" />
                  <circle cx="20" cy="60" r="0.5" fill="#818cf8" />
                  <circle cx="60" cy="20" r="0.5" fill="#818cf8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#closing-craft-pattern)" />
            </svg>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center relative">
            <motion.p
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#1a1410] font-['Cormorant_Garamond',serif] text-[30px] sm:text-[36px] md:text-[42px] leading-[1.5] tracking-[0.5px] mb-12"
            >
              Craft is not performance.<br />
              It is discipline, sustained over time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#6366f1] to-transparent mx-auto mb-10"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#1a1410]/60 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] leading-[1.8] tracking-[0.4px] italic"
            >
              This is Sohwais.<br />
              Where craft is practiced, documented, and preserved with integrity.
            </motion.p>
          </div>
        </motion.div>
      </div>

      <ExperienceFooterWrapper>
        <Footer 
          onOurStoryClick={onOurStoryClick} 
          onCraftsmanshipClick={onCraftsmanshipClick} 
          onCollectionClick={onCollectionClick}
          onHomeClick={onBack}
        />
      </ExperienceFooterWrapper>
    </div>
  );
}