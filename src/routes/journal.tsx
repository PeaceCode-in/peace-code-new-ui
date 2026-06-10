"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PenTool } from "lucide-react";
import { Nav, Footer } from "./index";

export default function JournalRoute() {
  const { scrollY } = useScroll();

  // Gentle parallax for atmospheric illustrations
  const rightImgY = useTransform(scrollY, [0, 1000], [0, -120]);
  const leftImgY = useTransform(scrollY, [0, 1000], [0, -80]);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  const fadeDelay = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#faf9f1] text-[#1C1917] font-sans selection:bg-[#E7E5E4] selection:text-[#1C1917]">
      <Nav />

      {/* 1. HERO SECTION (Gratitude Style) */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-24 md:pb-32 px-6 md:px-10 overflow-visible z-20">
        
        {/* Left Edge Image - Anchored to bottom (borrowed soft cloud from gratitude for atmosphere) */}
        <motion.img 
          src="/IzRkb9QIOWOI4IYcR98WEF2QUUg.avif" 
          alt="" 
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "-40%", opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 bottom-[-10%] w-[35vw] max-w-[450px] pointer-events-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)] object-contain mix-blend-multiply"
          style={{ y: leftImgY }}
        />

        {/* Right Edge Image - The Phone as requested */}
        <motion.img 
          src="/Gm6CrXzxO7OGmfeRPBsg12Uo.avif" 
          alt="" 
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "40%", opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 bottom-[-10%] w-[35vw] max-w-[450px] pointer-events-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)] object-contain mix-blend-multiply"
          style={{ y: rightImgY }}
        />

        <motion.div {...fadeUp} className="relative mx-auto max-w-[1024px] text-center z-20 pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white mb-8 shadow-sm">
            <PenTool className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-[13px] font-bold text-[#1E3048] tracking-wide uppercase">Your Private Space</span>
          </div>

          <h2 className="main-page-title mb-8">
            Write what<br className="hidden md:block" /> you carry.
          </h2>
          <p className="text-[#4F6072] max-w-[650px] mx-auto text-[18px] md:text-[20px] leading-relaxed mb-10">
            A quiet journaling space for Indian students to reflect, release thoughts, and turn private writing into meaningful blog posts when they choose.
          </p>

          <div className="flex items-center justify-center gap-6">
            <button className="bg-[#1C1917] text-white px-8 py-3.5 rounded-full text-[15px] font-medium tracking-wide hover:bg-[#333] transition-colors">
              Start journaling
            </button>
            <button className="text-[#4F6072] px-6 py-3.5 rounded-full text-[15px] font-medium tracking-wide hover:text-[#1C1917] transition-colors">
              See how it works
            </button>
          </div>
        </motion.div>
      </section>

      {/* Page Wrapper */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">

        {/* 2. WHY JOURNALING MATTERS (Storytelling) */}
        <section className="relative py-20 md:py-48 flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div {...fadeUp} className="md:w-5/12 text-left relative z-10">
             <h2 className="font-serif text-4xl md:text-5xl leading-relaxed text-[#57534E] font-light mb-8">
               A forgiving place to untangle a crowded mind.
             </h2>
             <p className="text-lg text-[#78716C] font-light leading-relaxed mb-6">
               Between semester exams, placement prep, and hostel life, emotional overload happens. The mind rarely gets a moment to pause.
             </p>
             <p className="text-lg text-[#78716C] font-light leading-relaxed">
               You need a private space. A blank canvas to write down late-night overthinking and find clarity before the next day begins. This isn't about being productive—it’s about being present.
             </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-7/12 relative flex justify-end items-center"
          >
            <img 
              src="/phone2.svg" 
              alt="Journaling Illustration" 
              className="w-full h-auto max-w-[500px] z-10 opacity-90 mix-blend-multiply"
            />
          </motion.div>
        </section>

        {/* 3. PUBLIC VS PRIVATE */}
        <section className="relative py-20 md:py-48 flex flex-col items-center text-center">
          <motion.div {...fadeUp} className="max-w-4xl flex flex-col md:flex-row gap-16 md:gap-32 text-left items-start">
            <div className="flex-1">
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Private Journal</h3>
              <p className="font-serif text-2xl md:text-3xl text-[#57534E] font-light leading-relaxed mb-4">
                Some thoughts are just for you.
              </p>
              <p className="text-[#78716C] font-light leading-relaxed">
                A secure, quiet place to write freely without the pressure of an audience. Your reflections remain entirely personal and silent.
              </p>
            </div>
            
            <div className="flex-1">
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Published Story</h3>
              <p className="font-serif text-2xl md:text-3xl text-[#57534E] font-light leading-relaxed mb-4">
                Some deserve to be shared.
              </p>
              <p className="text-[#78716C] font-light leading-relaxed">
                When an entry feels meaningful, you hold the power to shape it into a blog post. Grow a public writing presence only when you choose. An empowering, gentle choice.
              </p>
            </div>
          </motion.div>
        </section>

      </div>

      {/* 4. FEATURES (FeatureHighlight style) */}
      <section
        className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden flex items-center justify-center my-32"
        style={{ background: "linear-gradient(180deg, #93A8C1 0%, #faf9f1 100%)" }}
      >
        {/* Top/Bottom Lines */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-[#1C1917]/10" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-[#1C1917]/10" />

        {/* Left Bleed Illustration (SVG) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 hidden xl:block w-[30vw] max-w-[420px] mix-blend-multiply opacity-90">
          <img
            src="/left.svg"
            alt=""
            className="w-full h-auto object-contain object-left scale-[1.35] origin-left"
          />
        </div>

        {/* Right Bleed Illustration (AVIF) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 hidden xl:block w-[30vw] max-w-[420px] opacity-90">
          <img
            src="/right.avif"
            alt=""
            className="w-full h-auto object-contain object-right scale-[1.25] origin-right"
            style={{ transform: "rotate(-90deg)" }}
          />
        </div>

        {/* Central Premium Liquid Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative z-20 mx-auto max-w-6xl w-full"
        >
          <div className="rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-white/60">
            {/* LEFT COLUMN: Image (58%) */}
            <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto lg:h-full min-h-[250px] lg:min-h-[350px]">
              <img
                src="/Cozy Writing Scene.png"
                alt="Journaling environment"
                className="absolute inset-0 w-full h-full object-cover block object-center"
                loading="lazy"
              />
            </div>

            {/* RIGHT COLUMN: Content (42%) */}
            <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center text-left">
              <span className="text-[10px] md:text-[11px] font-sans tracking-[0.3em] uppercase text-slate-500 font-bold mb-4 block">
                EVERYTHING YOU NEED
              </span>

              <h2 className="font-serif text-3xl md:text-[34px] lg:text-[36px] text-slate-900 font-light leading-[1.2] tracking-tight mb-6">
                Tools to capture the quiet moments.
                <span className="font-display italic block mt-2 text-[34px] md:text-[38px] lg:text-[40px] font-normal text-[#93A8C1]">
                  Nothing more.
                </span>
              </h2>

              <div className="space-y-4 text-slate-600 text-[14px] md:text-[15px] font-normal leading-relaxed max-w-sm">
                <p>
                  <strong>Daily Prompts:</strong> Thoughtful questions to help you start when the page feels too blank.
                </p>
                <p>
                  <strong>Mood Reflection:</strong> Look back at how you've felt over the semester, without judgment.
                </p>
                <p>
                  <strong>Publishing Control:</strong> Easily transition your favorite private entries into formatted blog posts.
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* Page Wrapper (Continued) */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">

        {/* 5. STUDENT USE CASES (Insights style) */}
        <section className="relative py-20 md:py-48 flex flex-col items-center text-center">
          {/* Transparent botanical illustration */}
          <motion.img 
            src="/Untitled design (36).svg" 
            alt="" 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-[-25vw] md:left-[-15vw] top-[-5%] w-[60vw] max-w-[700px] pointer-events-none z-[0] opacity-80 mix-blend-multiply drop-shadow-sm"
          />
          <motion.div {...fadeUp} className="max-w-3xl relative z-10">
             <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1C1917] mb-12 leading-[1.2]">
               When to write
             </h2>
             
             <div className="space-y-12 text-[#57534E]">
               <p className="text-2xl font-light italic">
                 "After a difficult placement interview."
               </p>
               <p className="text-2xl font-light italic">
                 "When feeling overwhelmed before semester exams."
               </p>
               <p className="text-2xl font-light italic">
                 "Right before sleep, to empty the mind."
               </p>
             </div>
             
             <p className="mt-16 text-lg text-[#78716C] font-light leading-relaxed max-w-xl mx-auto">
               You are not alone in the things you feel. Writing them down is the first step toward releasing them.
             </p>
          </motion.div>
        </section>

        {/* 6. TESTIMONIALS (Asymmetric Typographic Collage) */}
        <section className="relative py-20 md:py-32 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-2xl text-center mb-24 md:mb-32"
          >
             <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Shared Experiences</h2>
             <p className="font-serif text-3xl md:text-5xl text-[#57534E] font-light leading-relaxed">
               Notes from students like you.
             </p>
          </motion.div>

          <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24 text-left relative">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-24">
              {/* Quote 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
              >
                <p className="font-serif text-3xl md:text-[2.5rem] text-[#1C1917] font-light leading-[1.2] tracking-tight">
                  "This helped me clear my head after long study days. It feels calm."
                </p>
                <p className="mt-8 text-[11px] tracking-[0.15em] uppercase text-[#78716C]">— Engineering Student</p>
              </motion.div>

              {/* Quote 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              >
                <p className="font-serif text-2xl md:text-[1.75rem] text-[#78716C] font-light leading-snug">
                  "Writing down my anxiety about placements made it feel much more manageable."
                </p>
                <p className="mt-6 text-[11px] tracking-[0.15em] uppercase text-[#A8A29E]">— Placement Prep</p>
              </motion.div>
            </div>

            {/* Column 2 (Staggered down via mt) */}
            <div className="flex flex-col gap-24 md:mt-32">
              {/* Quote 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              >
                <p className="font-serif text-2xl md:text-[2rem] text-[#57534E] italic font-light leading-snug">
                  "The transition from private reflection to public blogging is empowering."
                </p>
                <p className="mt-6 text-[11px] tracking-[0.15em] uppercase text-[#78716C]">— Final-Year BBA</p>
              </motion.div>

              {/* Quote 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              >
                <p className="font-serif text-4xl md:text-[3.5rem] text-[#1C1917] font-light leading-[1.1] tracking-tight">
                  "I feel safe writing here. It's just me and my thoughts."
                </p>
                <p className="mt-8 text-[11px] tracking-[0.15em] uppercase text-[#78716C]">— Medical Student</p>
              </motion.div>
            </div>
            
          </div>
        </section>

      </div>

      {/* 7. FINAL CTA */}
      <section className="relative py-20 md:py-48 flex flex-col items-center text-center overflow-hidden w-full max-w-[100vw]">
        
        {/* Right Edge Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute right-[-15%] lg:right-[-12%] top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden md:block mix-blend-multiply"
        >
          <img 
            src="/Untitled design (34).svg" 
            alt="" 
            className="w-[60vw] max-w-[800px] object-contain object-right opacity-90 origin-right scale-125 translate-x-[15%]" 
          />
        </motion.div>

        <motion.div {...fadeUp} className="max-w-2xl flex flex-col items-center z-10 relative">
          <h2 className="font-serif text-5xl md:text-7xl text-[#1C1917] tracking-tight mb-8">
            Your thoughts deserve <br className="hidden md:block" />
            <span className="italic text-[#57534E]">a place to land.</span>
          </h2>
          <button className="text-[13px] tracking-[0.15em] uppercase font-medium border-b border-[#1C1917] pb-1 hover:text-[#78716C] hover:border-[#78716C] transition-colors duration-500 mb-6 mt-8">
            Create your account
          </button>
          <p className="text-sm text-[#A8A29E] font-light">
            Free to begin. Just write.
          </p>
        </motion.div>
      </section>
      
      {/* Hyper minimalist footer override */}
      <div className="relative w-full bg-transparent pt-12">
        <style>{`
          .footer-gratitude-override * {
            color: #1C1917 !important;
            border-color: rgba(0,0,0,0.15) !important;
          }
          .footer-gratitude-override button,
          .footer-gratitude-override span[style*="background"] {
            background: rgba(0,0,0,0.03) !important;
          }
          .footer-gratitude-override button:hover {
            background: rgba(0,0,0,0.08) !important;
          }
          .footer-gratitude-override a:hover,
          .footer-gratitude-override a:hover * {
            color: #9b72cf !important;
            background: transparent !important;
          }
        `}</style>
        <div className="footer-gratitude-override">
          <Footer />
        </div>
      </div>
    </main>
  );
}
