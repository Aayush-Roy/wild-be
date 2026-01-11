import { ArrowLeft } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ExperienceFooterWrapper } from './ExperienceFooterWrapper';
import { ParallaxImage } from './ParallaxImage';
import { HandloomCraftingSection } from './HandloomCraftingSection';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import image1 from 'figma:asset/5ccf59d65dad8825fe2c2cecb122131f8855ca5c.png';
import image2 from 'figma:asset/1457867737d401deaf1fbf348cd1c5c44ff180b3.png';
import image3 from 'figma:asset/1b69c0495fc4a10453f9e998d7d09cf6fa9e0437.png';

interface OurStoryPageProps {
  onBack: (event?: React.MouseEvent) => void;
  cartCount: number;
  onCartClick: () => void;
  onOurStoryClick: (event?: React.MouseEvent) => void;
  onCollectionClick?: (event?: React.MouseEvent) => void;
  onCraftsmanshipClick?: (event?: React.MouseEvent) => void;
}

export function OurStoryPage({ onBack, cartCount, onCartClick, onOurStoryClick, onCollectionClick, onCraftsmanshipClick }: OurStoryPageProps) {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroImageRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen bg-[#1a1410] overflow-x-hidden">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Navigation 
          cartCount={cartCount} 
          onCartClick={onCartClick} 
          mode="dark"
          onCollectionClick={onCollectionClick}
          onOurStoryClick={onOurStoryClick}
          onCraftsmanshipClick={onCraftsmanshipClick}
        />
      </div>

      {/* Content */}
      <div className="relative">
        {/* SECTION 1: EDITORIAL OPENING - Full Width Image with Overlapping Title */}
        <div ref={heroImageRef} className="relative h-screen overflow-hidden">
          {/* Back Button - Positioned over hero */}
          <div className="absolute top-24 sm:top-28 md:top-32 left-0 right-0 z-30 px-4 sm:px-6 md:px-12 lg:px-20">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[#fdfcf9]/90 hover:text-[#c9a060] transition-colors font-['Cormorant_Garamond',serif] tracking-[1.5px] text-[10px] sm:text-[11px] backdrop-blur-sm bg-[#1a1410]/30 px-4 py-2 rounded-full border border-[#fdfcf9]/10"
              aria-label="Go back to home page"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">BACK</span>
            </button>
          </div>

          {/* Background Pattern - Subtle */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="story-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="20" fill="none" stroke="#c9a060" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="12" fill="none" stroke="#c9a060" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#story-pattern)" />
            </svg>
          </div>

          {/* Large Hero Image with Parallax */}
          <motion.div 
            className="absolute inset-0"
            style={{ y: heroY }}
          >
            <img 
              src={image1} 
              alt="Traditional weaving loom in Bihar workshop"
              className="w-full h-[120%] object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/80 via-[#1a1410]/40 to-[#1a1410]"></div>
          </motion.div>

          {/* Overlapping Title - Asymmetric */}
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-12 lg:px-20 pb-16 sm:pb-20 md:pb-24 z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-7xl pt-1"
            >
              <h1 className="text-[#fdfcf9] font-['Cinzel_Decorative',serif] text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.95] tracking-[1px] mb-10 sm:mb-12">
                It Began<br />
                With<br />
                Listening
              </h1>
              <div className="max-w-md md:max-w-lg">
                <p className="text-[#fdfcf9]/80 font-['Cormorant_Garamond',serif] text-[17px] sm:text-[19px] md:text-[21px] leading-[1.8] tracking-[0.5px] italic">
                  Not with a grand vision, but with quiet mornings in village workshops. With hands stained by natural dyes. With the realization that what we sought to create, already existed—waiting to be understood.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 2: THE JOURNEY - Text Heavy with Vertical Storytelling */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative px-4 sm:px-6 md:px-12 lg:px-20 mb-32 sm:mb-40 md:mb-56"
        >
          <div className="max-w-6xl mx-auto">
            {/* Vertical Text Accent - Unorthodox Element */}
            <div className="absolute -left-4 top-0 hidden lg:block">
              <p className="text-[#c9a060]/20 font-['Cinzel_Decorative',serif] text-[14px] tracking-[4px] [writing-mode:vertical-lr] rotate-180">
                THE EARLY DAYS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-20">
              {/* Left Column - Title */}
              <div className="md:col-span-5">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#c9a060] font-['Cinzel_Decorative',serif] text-[40px] sm:text-[52px] md:text-[64px] leading-[1.1] tracking-[1.5px] mb-8 sticky top-32"
                >
                  The Early<br />Days
                </motion.h2>
              </div>

              {/* Right Column - Story */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-7 space-y-8"
              >
                <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[17px] sm:text-[18px] leading-[1.9] tracking-[0.4px]">
                  There was a small room above a textile shop in Madhubani. A single table. Notebooks filled with sketches that went nowhere. The work was slow, often discouraging. We didn't understand the language of the craft yet—the unspoken rhythm between artisan and material.
                </p>
                <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[17px] sm:text-[18px] leading-[1.9] tracking-[0.4px]">
                  In those first months, we spent more time drinking chai and sitting in silence than designing. That silence taught us more than any textile school ever could.
                </p>
                
                {/* Pull Quote - Editorial Element */}
                <div className="border-l-2 border-[#c9a060]/40 pl-6 md:pl-8 py-4 my-12">
                  <p className="text-[#fdfcf9] font-['Cormorant_Garamond',serif] text-[22px] sm:text-[26px] md:text-[28px] leading-[1.6] tracking-[0.3px] italic">
                    "The artisans didn't trust us at first. Why would they?"
                  </p>
                </div>

                <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[17px] sm:text-[18px] leading-[1.9] tracking-[0.4px]">
                  We were outsiders asking to learn what their grandmothers had taught them. So we waited. We watched. We listened to stories about lost techniques and fading traditions. We learned that respect isn't demanded—it's earned through patience.
                </p>
                <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[17px] sm:text-[18px] leading-[1.9] tracking-[0.4px]">
                  Eventually, a hand-painted motif. Then an embroidered border. Small gestures of acceptance. The beginning of something we couldn't yet name.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 3: BEHIND THE SCENES - Image Dominant with Overlapping Layouts */}
        <div className="relative mb-32 sm:mb-40 md:mb-56">
          {/* Dual Image Layout - Magazine Editorial Style */}
          <div className="relative">
            {/* Large Dominant Image - Loom Close-up with Deep Parallax */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[70vh] md:h-[85vh] mb-0"
            >
              {/* Create a ref for parallax on this image */}
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1617694820985-a5476fe22722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGxvb20lMjB0hHJlYWRzfGVufDF8fHx8MTc2NjA5NTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Intricate detail of traditional loom threads and hooks"
                parallaxRange={["-20%", "20%"]}
                className="absolute inset-0 md:left-0 md:right-[8%]"
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a1410]/60 md:to-[#1a1410]/80"></div>
            </motion.div>

            {/* Secondary Image - Workshop Machinery Overlapping with Different Parallax Speed */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative md:absolute md:right-0 md:bottom-0 md:w-[45%] h-[50vh] md:h-[55vh] md:-mb-24 z-10 shadow-2xl"
            >
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1762186540868-a7f3328c161d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwd29ya3Nob3AlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzY2MDk1MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Traditional textile workshop machinery with thread bobbins"
                parallaxRange={["-10%", "10%"]}
                className="absolute inset-0 border-8 border-[#1a1410]"
              />
            </motion.div>
          </div>

          {/* Content Overlays - Editorial Text Blocks */}
          <div className="px-4 sm:px-6 md:px-12 lg:px-20 mt-16 md:mt-0">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-0">
                {/* Left Text Block - Overlapping the first image */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-5 lg:col-start-1 bg-[#1a1410] border border-[#c9a060]/10 p-8 sm:p-10 md:p-12 lg:p-14 relative z-20 lg:-mt-[45vh] shadow-2xl"
                >
                  <span className="text-[#c9a060]/60 text-[10px] tracking-[2.5px] font-['Cormorant_Garamond',serif] mb-6 block">
                    LEARNING THE LANGUAGE
                  </span>
                  <h2 className="text-[#fdfcf9] font-['Cinzel_Decorative',serif] text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] tracking-[1.5px] mb-8">
                    The Machines<br />Remember
                  </h2>
                  <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] leading-[1.9] tracking-[0.4px] mb-6">
                    There were long afternoons spent watching these looms work. Machines passed down through generations, their wooden frames smoothed by decades of hands. We learned that true craftsmanship doesn't rush.
                  </p>
                  <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] leading-[1.9] tracking-[0.4px]">
                    That a single piece might take weeks, not because the work is slow, but because it's honest.
                  </p>
                  
                  {/* Decorative element */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-[#c9a060]/40"></div>
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#c9a060]/30">
                      <path d="M10 2 L11 8 L17 10 L11 12 L10 18 L9 12 L3 10 L9 8 Z" fill="currentColor" />
                    </svg>
                  </div>
                </motion.div>

                {/* Right Caption - Under second image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-5 lg:col-start-8 lg:mt-[12vh] space-y-4"
                >
                  <p className="text-[#fdfcf9]/40 font-['Cormorant_Garamond',serif] text-[11px] tracking-[1px] italic">
                    The workshop floor — where patience lives
                  </p>
                  <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[15px] sm:text-[16px] leading-[1.8] tracking-[0.4px]">
                    Each thread tells a story. Each bobbin holds hours of careful work. This is where heritage meets the hand.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Sourcing Story - Asymmetric Margins */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="px-4 sm:px-6 md:px-12 lg:px-20 mt-24 md:mt-32 lg:mt-40"
          >
            <div className="max-w-4xl mx-auto md:ml-auto md:mr-0 lg:mr-20">
              <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[17px] sm:text-[18px] leading-[1.9] tracking-[0.4px] mb-6">
                We struggled to source materials that met both traditional standards and our vision. Factory fabrics felt wrong. Chemical dyes looked harsh. It took months to find weavers who still worked with natural fibers, dyers who remembered old recipes for color.
              </p>
              <p className="text-[#fdfcf9]/70 font-['Cormorant_Garamond',serif] text-[17px] sm:text-[18px] leading-[1.9] tracking-[0.4px]">
                Each connection was hard-won, built on word of mouth and careful introduction. The first collection took two years. Not because we were perfectionists, but because we were students.
              </p>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="w-16 h-[1px] bg-[#c9a060]"></div>
                <p className="text-[#c9a060] font-['Cormorant_Garamond',serif] text-[14px] tracking-[2px] italic">
                  And the best teachers take time
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION 4: PHILOSOPHY - Center Aligned Editorial */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative px-4 sm:px-6 md:px-12 lg:px-20 mb-32 sm:mb-40 md:mb-56"
        >
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="manifesto-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <circle cx="60" cy="60" r="30" fill="none" stroke="#c9a060" strokeWidth="0.4" />
                  <circle cx="60" cy="60" r="20" fill="none" stroke="#c9a060" strokeWidth="0.3" />
                  <circle cx="60" cy="60" r="10" fill="none" stroke="#c9a060" strokeWidth="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#manifesto-pattern)" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Attribution Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#c9a060]"></div>
                <span className="text-[#c9a060]/70 text-[10px] tracking-[3px] font-['Cormorant_Garamond',serif]">
                  A MANIFESTO
                </span>
                <div className="w-12 h-[1px] bg-[#c9a060]"></div>
              </div>
              <p className="text-[#fdfcf9]/50 font-['Cormorant_Garamond',serif] text-[13px] tracking-[1px] italic">
                Words by Mrs. Najma Perween
              </p>
            </motion.div>

            {/* Manifesto Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#1a1410] border border-[#c9a060]/10 p-8 sm:p-10 md:p-12 lg:p-16"
            >
              <div className="space-y-6 text-[#fdfcf9]/80 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.9] tracking-[0.4px]">
                <p>
                  They told us that evolution meant more synthetic.<br />
                  More plastic.<br />
                  More chemical.<br />
                  More disposable.
                </p>
                
                <p className="text-[#c9a060] font-medium">
                  They were wrong.
                </p>
                
                <p>
                  That wasn't evolution.<br />
                  That was regression.
                </p>
                
                <p className="text-[#fdfcf9] text-[19px] sm:text-[20px] md:text-[21px] italic pt-4">
                  True evolution is refinement.<br />
                  The wisdom to trust nature's original perfection.
                </p>
                
                <div className="w-24 h-[1px] bg-[#c9a060]/40 my-8"></div>
                
                <p>
                  At Sohwais, we return to history.<br />
                  To real hand embroidery.<br />
                  To Sujani, where every stitch tells a story.<br />
                  To Madhubani, drawn from folklore and faith.<br />
                  To Nakashi, rich with heritage and detail.<br />
                  To marble inspired prints, fluid, timeless, and restrained.<br />
                  To Batik and Block Prints, shaped by human hands, not machines.
                </p>
                
                <p className="text-[#c9a060]/90 italic">
                  And we transform all of it into silence.<br />
                  Into elegance.
                </p>
                
                <p>
                  We strip away the clutter.<br />
                  We reject the funky.<br />
                  We scorn the fleeting.
                </p>
                
                <p className="text-[#fdfcf9] text-[20px] sm:text-[22px] md:text-[24px] font-['Cinzel_Decorative',serif] tracking-[1px] text-center my-8 py-4">
                  What remains is The Art and The Earth.
                </p>
                
                <div className="w-24 h-[1px] bg-[#c9a060]/40 my-8"></div>
                
                <p>
                  Polyester is a dead end. Skin suffocating, lifeless plastic.<br />
                  But Khadi. Cotton. Linen. Silk.<br />
                  <span className="text-[#c9a060]">They are supernatural.</span><br />
                  They breathe.<br />
                  They live.<br />
                  They endure.
                </p>
                
                <p className="text-[#fdfcf9] italic pt-4">
                  This is not nostalgia.<br />
                  This is progress, refined.
                </p>
                
                <div className="text-center mt-12 pt-8 border-t border-[#c9a060]/20">
                  <p className="text-[#c9a060] text-[22px] sm:text-[26px] md:text-[30px] font-['Cinzel_Decorative',serif] tracking-[1.5px] mb-4">
                    Wear the upgrade.
                  </p>
                  <p className="text-[#fdfcf9]/70 text-[15px] sm:text-[16px] tracking-[0.5px] italic mt-6">
                    Sohwais<br />
                    <span className="text-[#fdfcf9]/50 text-[13px]">Where heritage becomes modernity.</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element - Bottom */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mt-10 sm:mt-12"
            >
              <svg width="50" height="50" viewBox="0 0 50 50" className="text-[#c9a060]/20">
                <path d="M25 5 L28 20 L43 25 L28 30 L25 45 L22 30 L7 25 L22 20 Z" fill="currentColor" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* SECTION 4.5: HANDLOOM MASTERY - Advanced Parallax Showcase */}
        <HandloomCraftingSection />

        {/* SECTION 5: CLOSING - Reflective and Calm */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="relative px-4 sm:px-6 md:px-12 lg:px-20 pb-16 sm:pb-20 md:pb-24"
        >
          {/* Background Pattern - Subtle */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="closing-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M40 20 L45 35 L60 40 L45 45 L40 60 L35 45 L20 40 L35 35 Z" fill="none" stroke="#c9a060" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#closing-pattern)" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto text-center relative">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#fdfcf9] font-['Cormorant_Garamond',serif] text-[32px] sm:text-[38px] md:text-[44px] leading-[1.5] tracking-[0.5px] mb-12 sm:mb-16"
            >
              We are still learning.<br />
              Still listening.<br />
              Still becoming what we set out to be.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-32 h-[1px] bg-[#c9a060] mx-auto mb-10"
            ></motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#fdfcf9]/60 font-['Cormorant_Garamond',serif] text-[16px] sm:text-[17px] leading-[1.8] tracking-[0.4px] italic"
            >
              This is Sohwais Threads.<br />
              A quiet promise, woven slowly.
            </motion.p>
          </div>

          {/* Blessing Text - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-end mt-12 sm:mt-16 md:mt-20"
          >
            <div className="text-right">
              <p className="text-[#fdfcf9]/50 font-['Cormorant_Garamond',serif] text-[13px] sm:text-[14px] leading-[1.8] tracking-[0.5px] italic">
                With the Blessings of beloved<br />
                <span className="text-[#c9a060]/70">"Lt. Md. Owais Ansari"</span><br />
                and<br />
                <span className="text-[#c9a060]/70">"Md. Sohail Ansari"</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
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