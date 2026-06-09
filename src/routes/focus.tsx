"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Nav, Footer } from "./index";

export default function FocusRoute() {
  const { scrollY } = useScroll();
  const yParallaxSlow = useTransform(scrollY, [0, 1000], [0, -150]);
  const yParallaxFast = useTransform(scrollY, [0, 1000], [0, -300]);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  };

  const fadeDelay = (delay: number) => ({
    ...fadeUp,
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <main className="min-h-screen bg-[#FAF9F1] overflow-hidden relative">
      <Nav />

      {/* Flock of Birds in Hero */}
      <div className="absolute inset-0 pointer-events-none z-[0] overflow-hidden">
        <motion.img 
          src="/Untitled design (41).svg" 
          alt="" 
          animate={{ x: ['-10vw', '110vw'], y: [100, -50] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear", delay: 0 }}
          className="absolute top-[20vh] left-0 w-16 opacity-80"
        />
        <motion.img 
          src="/Untitled design (42).svg" 
          alt="" 
          animate={{ x: ['-10vw', '110vw'], y: [120, -30] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear", delay: 2.5 }}
          className="absolute top-[18vh] left-0 w-12 opacity-80"
        />
        <motion.img 
          src="/Untitled design (41).svg" 
          alt="" 
          animate={{ x: ['-10vw', '110vw'], y: [80, -70] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear", delay: 4.5 }}
          className="absolute top-[22vh] left-0 w-10 opacity-80"
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center pt-32 pb-20">
          
          {/* Hero Background Image */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full pointer-events-none z-[-1] overflow-hidden">
            <img src="/section3-bg.png" alt="" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
          </div>

          <motion.div {...fadeUp} className="max-w-4xl flex flex-col items-center relative z-10 mt-16">
            <h1 className="main-page-title mb-8">
              Find your focus, <br className="hidden md:block" />
              gently.
            </h1>
            <p className="font-sans font-light text-[#57534E] text-xl md:text-2xl max-w-2xl leading-relaxed mb-16 mx-auto">
              A minimal focus timer for Indian students and anyone who wants calm, distraction-free study sessions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="text-[13px] tracking-[0.15em] uppercase font-medium border-b border-[#1C1917] pb-1 hover:text-[#78716C] hover:border-[#78716C] transition-colors duration-500">
                Start a focus session
              </button>
              <button className="text-[13px] tracking-[0.15em] uppercase font-light text-[#78716C] border-b border-transparent pb-1 hover:text-[#1C1917] transition-colors duration-500">
                Explore tools
              </button>
            </div>
          </motion.div>
        </section>

        {/* 2. WHY FOCUS FEELS HARD (Emotional Validation) */}
        <section className="relative py-20 md:py-48 flex flex-col items-center text-center">
          <motion.img 
            src="/Untitled design (37).svg" 
            alt="" 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute right-[-25vw] md:right-[-20vw] lg:right-[-15vw] bottom-[-10vh] md:bottom-[-20vh] w-[35vw] md:w-[25vw] max-w-[350px] pointer-events-none z-[0] -scale-x-100"
          />
          <motion.div {...fadeUp} className="max-w-3xl relative z-10">
             <h2 className="font-serif text-3xl md:text-5xl leading-relaxed text-[#57534E] font-light">
               Between the buzzing phone, the upcoming placements, and the weight of final exams—
               <span className="text-[#1C1917] block mt-6 italic">focus has never felt harder.</span>
             </h2>
          </motion.div>
        </section>

        {/* 3. THE RITUAL (Features) */}
        <section className="relative py-20 md:py-48 flex flex-col md:flex-row justify-between gap-16">
          <motion.img 
            src="/Untitled design (19).svg" 
            alt="" 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-[-40vw] md:left-[-30vw] lg:left-[-25vw] top-[65vh] md:top-[60vh] w-[80vw] md:w-[60vw] max-w-[800px] pointer-events-none z-[0]"
          />
          <motion.div {...fadeUp} className="md:w-5/12 relative z-10">
             <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight text-[#1C1917] mb-10">
               Not a dashboard. <br /> A quiet ritual.
             </h2>
             <p className="font-sans font-light text-[#57534E] text-lg md:text-xl leading-relaxed max-w-md">
               We removed the charts, the gamification, and the pressure. What's left is a calm space to do your best work.
             </p>
          </motion.div>
          
          <div className="md:w-6/12 flex flex-col gap-16 pt-4">
            {[
              { title: "Pomodoro, softened.", text: "Customizable focus blocks and gentle breaks that don't jolt you out of your flow." },
              { title: "Quiet tracking.", text: "A subtle streak system that celebrates consistency without the anxiety of breaking a chain." },
              { title: "Quick resets.", text: "Built-in grounding exercises for when you feel the urge to pick up your phone." }
            ].map((feature, i) => (
              <motion.div key={i} {...fadeDelay(i * 0.15)} className="flex flex-col gap-4">
                <h3 className="font-serif italic text-2xl md:text-3xl text-[#1C1917]">{feature.title}</h3>
                <p className="font-sans font-light text-[#57534E] text-lg leading-relaxed max-w-sm">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. SOUNDSCAPES */}
        <section className="py-20 md:py-48">
          <motion.div {...fadeUp} className="mb-24 text-center">
             <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1C1917] mb-6">
               Atmosphere over noise
             </h2>
             <p className="font-sans font-light text-[#57534E] text-xl">
               Curated background sounds for deep work.
             </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 max-w-5xl mx-auto">
            {[
              "Heavy Rain", "Cafe Ambience", "Soft Piano", "Brown Noise", 
              "Deep Silence", "Temple Bells", "Ceiling Fan", "Library"
            ].map((sound, i) => (
              <motion.div key={sound} {...fadeDelay(i * 0.1)} className="flex flex-col items-center group cursor-pointer">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#E7E5E4] mb-6 flex items-center justify-center group-hover:border-[#A8A29E] transition-colors duration-500">
                   {/* Abstract representation of sound */}
                   <div className="w-8 h-8 rounded-full bg-[#E7E5E4] group-hover:bg-[#D6D3D1] transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-lg text-[#57534E] group-hover:text-[#1C1917] transition-colors duration-500">{sound}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. THE STUDENT COMPANION */}
        <section className="relative py-20 md:py-48 flex flex-col md:flex-row items-center justify-end">
          
          <motion.img 
            src="/SbSqGCYAPE8Sz36boHNMBd7o2kY.avif" 
            alt="" 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-[-50vw] md:left-[-40vw] top-[10vh] w-[90vw] max-w-[900px] pointer-events-none z-[0] mix-blend-multiply"
          />

          <motion.div {...fadeUp} className="md:w-1/2 relative z-10 pl-8 md:pl-0 border-l border-[#E7E5E4] md:border-none">
             <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] text-[#1C1917] mb-8">
               A reassuring companion <br /> for long revision nights.
             </h2>
             <p className="font-sans font-light text-[#57534E] text-lg md:text-xl leading-relaxed mb-6">
               Whether you're pushing through engineering assignments, preparing for BBA placements, or surviving the night before final exams—this timer is built for the Indian student reality.
             </p>
             <p className="font-sans font-light text-[#57534E] text-lg md:text-xl leading-relaxed">
               It helps you block out hostel noise, reduce panic during study blocks, and build consistent habits without the guilt.
             </p>
          </motion.div>
        </section>

        {/* 6. REAL STORIES */}
        <section className="py-20 md:py-48 flex flex-col items-center">
          <div className="flex flex-col gap-32 max-w-3xl text-center">
            {[
              { quote: "It doesn’t feel like an app yelling at me to study. It just feels like a quiet room.", author: "Rahul, Engineering Student" },
              { quote: "During placement prep, my anxiety was peaking. Two minutes of grounding and a 25-minute focus session completely changed my routine.", author: "Ananya, BBA Final Year" }
            ].map((t, i) => (
              <motion.blockquote key={i} {...fadeDelay(i * 0.2)} className="relative">
                <p className="font-serif text-3xl md:text-4xl leading-relaxed text-[#1C1917] mb-8">
                  "{t.quote}"
                </p>
                <cite className="font-sans text-[11px] tracking-widest text-[#A8A29E] uppercase font-normal not-italic">
                  — {t.author}
                </cite>
              </motion.blockquote>
            ))}
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="relative py-20 md:py-48 flex flex-col items-center text-center mb-20">
          <motion.img 
            src="/Untitled design (35).svg" 
            alt="" 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute right-[-20vw] md:right-[-15vw] top-[-10vh] md:top-[-15vh] w-[60vw] max-w-[800px] pointer-events-none z-[0]"
          />
          <motion.div {...fadeUp} className="relative z-10">
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-[#1C1917] mb-16">
              A calmer study session <br />
              <span className="italic font-light">starts here.</span>
            </h2>
            <button className="text-[14px] tracking-[0.15em] uppercase font-medium text-[#1C1917] border-b border-[#1C1917] pb-2 hover:text-[#78716C] hover:border-[#78716C] transition-colors duration-500 mb-8">
              Create your account
            </button>
            <p className="font-sans text-sm text-[#A8A29E] font-light tracking-wide">
              Free to begin. No pressure. Just focus.
            </p>
          </motion.div>
        </section>

      </div>

      {/* FOOTER (Minimal Override) */}
      <div className="relative w-full bg-transparent mt-10">
        <style>{`
          .footer-black-override * {
            color: #44403C !important;
            border-color: rgba(0,0,0,0.05) !important;
          }
          .footer-black-override button,
          .footer-black-override span[style*="background"] {
            background: transparent !important;
            border: 1px solid rgba(0,0,0,0.05) !important;
          }
          .footer-black-override button:hover {
            background: rgba(0,0,0,0.03) !important;
          }
          .footer-black-override a:hover {
            color: #1C1917 !important;
          }
        `}</style>
        <div className="footer-black-override">
          <Footer />
        </div>
      </div>
    </main>
  );
}
