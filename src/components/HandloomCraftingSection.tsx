import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import handloomImage1 from 'figma:asset/5ccf59d65dad8825fe2c2cecb122131f8855ca5c.png';
import handloomImage2 from 'figma:asset/1457867737d401deaf1fbf348cd1c5c44ff180b3.png';
import handloomImage3 from 'figma:asset/1b69c0495fc4a10453f9e998d7d09cf6fa9e0437.png';
import handloomDetail from 'figma:asset/02882995c0cc7b1adbfdbb77d50fc2a95c326791.png';
import handloomThreads from 'figma:asset/b9178e78261653ecbca536389bbc22d7f97b71be.png';
import handloomLoom from 'figma:asset/d413cda40592bca81c425179d0ec2bbec70808d2.png';
import handloomWorkshop from 'figma:asset/ee114c0cdeb69329b96d4086e0800f2965eb32a8.png';

export function HandloomCraftingSection() {
  // Section 1 refs and parallax
  const section1Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: section1Progress } = useScroll({
    target: section1Ref,
    offset: ["start end", "end start"]
  });
  
  // Multi-layer parallax with different speeds
  const section1ImageY = useTransform(section1Progress, [0, 1], ["20%", "-20%"]);
  const section1ImageScale = useTransform(section1Progress, [0, 0.5, 1], [1.2, 1, 1.1]);
  const section1ImageBlur = useTransform(section1Progress, [0, 0.3, 0.7, 1], [8, 0, 0, 8]);
  const section1TextY = useTransform(section1Progress, [0, 1], ["40%", "-40%"]);
  const section1TextOpacity = useTransform(section1Progress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);
  
  // Section 2 refs and parallax
  const section2Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: section2Progress } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"]
  });
  
  const section2ImageY = useTransform(section2Progress, [0, 1], ["-15%", "15%"]);
  const section2ImageScale = useTransform(section2Progress, [0, 0.5, 1], [1.15, 1, 1.2]);
  const section2ImageRotate = useTransform(section2Progress, [0, 1], [-2, 2]);
  const section2TextX = useTransform(section2Progress, [0, 1], ["-30%", "30%"]);
  const section2TextOpacity = useTransform(section2Progress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 1, 1, 0]);
  
  // Section 3 refs and parallax
  const section3Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: section3Progress } = useScroll({
    target: section3Ref,
    offset: ["start end", "end start"]
  });
  
  const section3ImageY = useTransform(section3Progress, [0, 1], ["30%", "-30%"]);
  const section3ImageScale = useTransform(section3Progress, [0, 0.5, 1], [1.3, 1, 1.15]);
  const section3ImageOpacity = useTransform(section3Progress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const section3TextY = useTransform(section3Progress, [0, 1], ["50%", "-50%"]);
  const section3TextOpacity = useTransform(section3Progress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Check if elements are in view for initial animations
  const section1InView = useInView(section1Ref, { once: false, margin: "-20%" });
  const section2InView = useInView(section2Ref, { once: false, margin: "-20%" });
  const section3InView = useInView(section3Ref, { once: false, margin: "-20%" });

  return (
    <div className="relative mb-32 sm:mb-40 md:mb-56">
      {/* Section Title - Grand Introduction */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="px-4 sm:px-6 md:px-12 lg:px-20 mb-20 sm:mb-24 md:mb-32"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-[#c9a060]"></div>
            <span className="text-[#c9a060]/70 text-[10px] tracking-[3px] font-['Cormorant_Garamond',serif]">
              THE ANCIENT ART
            </span>
            <div className="w-16 h-[1px] bg-[#c9a060]"></div>
          </div>
          <h2 className="text-[#fdfcf9] font-['Cinzel_Decorative',serif] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[1.1] tracking-[2px] mb-8">
            Handloom<br />Mastery
          </h2>
          <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[17px] sm:text-[19px] md:text-[21px] leading-[1.8] tracking-[0.5px] italic max-w-2xl mx-auto">
            Where time-honored techniques meet patient hands, creating textiles that carry the soul of generations
          </p>
        </div>
      </motion.div>

      {/* PARALLAX SECTION 1: The Loom - Left Image, Right Text */}
      <div ref={section1Ref} className="relative mb-32 sm:mb-40 md:mb-56 overflow-hidden">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Image with Advanced Parallax */}
              <motion.div 
                className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden"
                style={{ 
                  y: section1ImageY,
                  scale: section1ImageScale,
                  perspective: 1000,
                }}
              >
                <motion.div
                  className="w-full h-full"
                  style={{
                    filter: section1ImageBlur.get() ? `blur(${section1ImageBlur.get()}px)` : 'blur(0px)',
                  }}
                  animate={{
                    filter: section1InView ? 'blur(0px)' : 'blur(8px)',
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={handloomLoom}
                    alt="Traditional handloom weaving machine in Bihar workshop"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a1410]/40"></div>
                </motion.div>
                
                {/* 3D Floating Frame Effect */}
                <motion.div 
                  className="absolute inset-0 border-2 border-[#c9a060]/20 pointer-events-none"
                  style={{
                    rotateY: useTransform(section1Progress, [0, 0.5, 1], [5, 0, -5]),
                    rotateX: useTransform(section1Progress, [0, 0.5, 1], [-3, 0, 3]),
                  }}
                />
              </motion.div>

              {/* Text Content with Parallax */}
              <motion.div
                style={{
                  y: section1TextY,
                  opacity: section1TextOpacity,
                }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-[#c9a060]/60 text-[10px] tracking-[2.5px] font-['Cormorant_Garamond',serif] block mb-6">
                    CHAPTER ONE
                  </span>
                  <h3 className="text-[#fdfcf9] font-['Cinzel_Decorative',serif] text-[36px] sm:text-[44px] md:text-[52px] leading-[1.2] tracking-[1.5px] mb-8">
                    The Sacred<br />Loom
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <p className="text-[#fdfcf9]/80 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.9] tracking-[0.4px]">
                    The handloom stands as a monument to patience. Each wooden beam, worn smooth by generations of weavers, holds within it the memory of countless textiles. The rhythmic clack of the shuttle echoes through workshops unchanged by time.
                  </p>
                  <p className="text-[#fdfcf9]/80 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.9] tracking-[0.4px]">
                    A master weaver doesn't control the loom—they dance with it. Every movement is a conversation between hand and thread, tension and release. What emerges is not merely cloth, but a testament to human dedication.
                  </p>

                  {/* Pull Quote */}
                  <div className="border-l-2 border-[#c9a060]/40 pl-6 py-4 my-8">
                    <p className="text-[#c9a060] font-['Cormorant_Garamond',serif] text-[20px] sm:text-[24px] leading-[1.6] tracking-[0.3px] italic">
                      "A single saree takes three weeks.<br />A masterpiece takes a lifetime."
                    </p>
                  </div>

                  <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[15px] sm:text-[16px] leading-[1.8] tracking-[0.4px] italic">
                    This is where our journey begins—in the quiet meditation of the weaving room, where heritage is woven thread by thread.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* PARALLAX SECTION 2: The Threads - Right Image, Left Text */}
      <div ref={section2Ref} className="relative mb-32 sm:mb-40 md:mb-56 overflow-hidden">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Text Content - Left Side on Desktop */}
              <motion.div
                style={{
                  x: section2TextX,
                  opacity: section2TextOpacity,
                }}
                className="space-y-6 order-2 lg:order-1"
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-[#c9a060]/60 text-[10px] tracking-[2.5px] font-['Cormorant_Garamond',serif] block mb-6">
                    CHAPTER TWO
                  </span>
                  <h3 className="text-[#fdfcf9] font-['Cinzel_Decorative',serif] text-[36px] sm:text-[44px] md:text-[52px] leading-[1.2] tracking-[1.5px] mb-8">
                    Threads of<br />Heritage
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <p className="text-[#fdfcf9]/80 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.9] tracking-[0.4px]">
                    Before fabric exists, there are spools. Hundreds of them, each wound by hand with cotton spun from fields our artisans know by name. The colors are not chosen from charts—they're remembered from grandmother's wedding sari, from festival mornings, from monsoon skies over Bihar.
                  </p>
                  <p className="text-[#fdfcf9]/80 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.9] tracking-[0.4px]">
                    Natural dyes derived from turmeric, indigo, madder root, and pomegranate skins create hues that breathe with the fabric. Chemical dyes may be faster, but they don't carry memory. They don't shift with light like a living thing.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 py-8">
                    <div className="border border-[#c9a060]/20 p-6 text-center">
                      <p className="text-[#c9a060] font-['Cinzel_Decorative',serif] text-[32px] sm:text-[40px] mb-2">
                        3-4
                      </p>
                      <p className="text-[#fdfcf9]/60 font-['Cormorant_Garamond',serif] text-[12px] tracking-[1px]">
                        WEEKS PER<br />TEXTILE
                      </p>
                    </div>
                    <div className="border border-[#c9a060]/20 p-6 text-center">
                      <p className="text-[#c9a060] font-['Cinzel_Decorative',serif] text-[32px] sm:text-[40px] mb-2">
                        100%
                      </p>
                      <p className="text-[#fdfcf9]/60 font-['Cormorant_Garamond',serif] text-[12px] tracking-[1px]">
                        NATURAL<br />FIBERS
                      </p>
                    </div>
                  </div>

                  <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[15px] sm:text-[16px] leading-[1.8] tracking-[0.4px] italic">
                    Every thread is a promise. Every spool holds intention. This is the foundation of textiles that last not just years, but generations.
                  </p>
                </motion.div>
              </motion.div>

              {/* Image with Advanced Parallax - Right Side on Desktop */}
              <motion.div 
                className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden order-1 lg:order-2"
                style={{ 
                  y: section2ImageY,
                  scale: section2ImageScale,
                  rotateZ: section2ImageRotate,
                }}
              >
                <motion.div
                  className="w-full h-full"
                  animate={{
                    opacity: section2InView ? 1 : 0.7,
                  }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={handloomDetail}
                    alt="Close-up detail of handloom textile craftsmanship"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#1a1410]/40"></div>
                </motion.div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c9a060]/30"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#c9a060]/30"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* PARALLAX SECTION 3: The Detail - Center Focused Full Bleed */}
      <div ref={section3Ref} className="relative mb-20 sm:mb-24 md:mb-32 overflow-hidden">
        {/* Full Bleed Image with Extreme Parallax */}
        <motion.div 
          className="relative h-[90vh] md:h-screen"
          style={{
            y: section3ImageY,
            scale: section3ImageScale,
            opacity: section3ImageOpacity,
          }}
        >
          <div className="absolute inset-0">
            <img
              src={handloomWorkshop}
              alt="Traditional handloom workshop with weaving machinery"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#1a1410]/40"></div>
          </div>

          {/* Centered Overlay Text with Parallax */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12"
            style={{
              y: section3TextY,
              opacity: section3TextOpacity,
            }}
          >
            <div className="max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#1a1410]/80 backdrop-blur-lg border border-[#c9a060]/20 p-10 sm:p-12 md:p-16 lg:p-20"
              >
                <span className="text-[#c9a060]/70 text-[10px] tracking-[3px] font-['Cormorant_Garamond',serif] block mb-6">
                  CHAPTER THREE
                </span>
                <h3 className="text-[#fdfcf9] font-['Cinzel_Decorative',serif] text-[40px] sm:text-[52px] md:text-[64px] leading-[1.2] tracking-[1.5px] mb-8">
                  The Devil Lives<br />in the Details
                </h3>
                <p className="text-[#fdfcf9]/80 font-['Cormorant_Garamond',serif] text-[17px] sm:text-[19px] md:text-[21px] leading-[1.8] tracking-[0.5px] mb-8">
                  This is where mastery reveals itself. In the tension of each warp thread. In the precision of the shuttle's path. In the weaver's ability to see imperfection invisible to untrained eyes.
                </p>
                <div className="w-24 h-[1px] bg-[#c9a060] mx-auto mb-8"></div>
                <p className="text-[#c9a060] font-['Cormorant_Garamond',serif] text-[19px] sm:text-[22px] md:text-[24px] leading-[1.6] tracking-[0.5px] italic">
                  "If you rush the loom, the loom will tell the world."
                </p>
                <p className="text-[#fdfcf9]/60 font-['Cormorant_Garamond',serif] text-[14px] tracking-[1px] mt-6">
                  — Master Weaver, Madhubani
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Decorative Elements */}
          <motion.div
            className="absolute top-1/4 left-8 w-2 h-2 bg-[#c9a060]/40 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-12 w-3 h-3 bg-[#c9a060]/30 rounded-full"
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="px-4 sm:px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#fdfcf9] font-['Cormorant_Garamond',serif] text-[24px] sm:text-[28px] md:text-[32px] leading-[1.6] tracking-[0.5px] mb-8">
            This is not manufacturing.<br />
            This is meditation made visible.
          </p>
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="w-20 h-[1px] bg-[#c9a060]"></div>
            <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#c9a060]/40">
              <path d="M15 3 L17 12 L26 15 L17 18 L15 27 L13 18 L4 15 L13 12 Z" fill="currentColor" />
            </svg>
            <div className="w-20 h-[1px] bg-[#c9a060]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}