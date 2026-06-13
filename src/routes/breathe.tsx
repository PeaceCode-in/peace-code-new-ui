"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Nav, Footer } from "./index";

export default function BreatheRoute() {
  const { scrollY } = useScroll();
  const yParallaxSlow = useTransform(scrollY, [0, 2000], [0, -100]);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any },
  };

  const fadeDelay = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] as any },
  });

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#faf9f1] text-[#1C1917] font-sans selection:bg-[#E7E5E4] selection:text-[#1C1917]">
      {/* Background Gradient — matching PeaceBot page */}
      <div
        className="absolute top-0 inset-x-0 h-[900px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, #E8E0F0 0%, #EDE8F4 25%, #F2E8EA 50%, #faf9f1 85%)"
        }}
      />

      <Nav />

      {/* Atmospheric Illustration: Soft, airy abstraction placed elegantly in the background */}
      <motion.img 
        src="/6hJMdyZmB1ZzlX6REYIXYMeVWf0 (2).avif" 
        alt="" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute right-[-10vw] top-[5vh] w-[45vw] max-w-[600px] pointer-events-none z-[0]"
        style={{ y: yParallaxSlow }}
      />

      {/* Flock of Birds in Hero */}
      <div className="absolute inset-0 pointer-events-none z-[0] overflow-hidden">
        <motion.img 
          src="/Untitled design (41).svg" 
          alt="" 
          animate={{ x: ['-10vw', '110vw'], y: [100, -50] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear", delay: 0 }}
          className="absolute top-[20vh] left-0 w-16 opacity-100"
        />
        <motion.img 
          src="/Untitled design (42).svg" 
          alt="" 
          animate={{ x: ['-10vw', '110vw'], y: [120, -30] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear", delay: 1.5 }}
          className="absolute top-[18vh] left-0 w-12 opacity-100"
        />
        <motion.img 
          src="/Untitled design (41).svg" 
          alt="" 
          animate={{ x: ['-10vw', '110vw'], y: [80, -70] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear", delay: 2.5 }}
          className="absolute top-[22vh] left-0 w-10 opacity-100"
        />
        <motion.img 
          src="/Untitled design (42).svg" 
          alt="" 
          animate={{ x: ['-10vw', '110vw'], y: [140, -10] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear", delay: 0.8 }}
          className="absolute top-[25vh] left-0 w-14 opacity-100"
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center pt-40 pb-20">
          <motion.div {...fadeUp} className="max-w-4xl flex flex-col items-center relative z-10">
            <h1 className="main-page-title mb-8 font-serif text-5xl md:text-7xl font-light tracking-tight text-[#0A2540] leading-[1.1]">
              Find your calm,
              <br />
              <span className="italic text-[#57534E]">in one breath.</span>
            </h1>
            <p className="font-sans font-light text-[#57534E] text-xl md:text-2xl max-w-2xl leading-relaxed mb-16 mx-auto">
              A minimal breathing companion designed to help you slow down, reset, and return to yourself.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="text-[13px] tracking-[0.15em] uppercase font-medium border-b border-[#1C1917] pb-1 hover:text-[#78716C] hover:border-[#78716C] transition-colors duration-500">
                Start free
              </button>
              <button className="text-[13px] tracking-[0.15em] uppercase font-light text-[#78716C] border-b border-transparent pb-1 hover:text-[#1C1917] transition-colors duration-500">
                Learn more
              </button>
            </div>
          </motion.div>
        </section>

        {/* 2. HOW IT WORKS (3 Simple Steps) */}
        <section className="py-32 md:py-48 flex flex-col md:flex-row justify-between items-start md:items-center gap-16 border-t border-[#E7E5E4]/50">
          {[
            { title: "Breathe", text: "Follow the gentle rhythm of the pacer." },
            { title: "Track", text: "Notice how your heart rate and mind settle." },
            { title: "Return", text: "Step back into your day with quiet clarity." }
          ].map((step, i) => (
            <motion.div key={step.title} {...fadeDelay(i * 0.2)} className="flex-1 max-w-[280px]">
              <h2 className="font-serif text-3xl md:text-4xl italic text-[#1C1917] mb-6">{step.title}.</h2>
              <p className="font-sans font-light text-[#57534E] text-lg leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </section>

        {/* 3. PROBLEM SECTION ("What feels heavy today?") */}
        <section className="py-32 md:py-48 border-t border-[#E7E5E4]/50 relative">
          <motion.div {...fadeUp} className="max-w-2xl">
            <h2 className="font-sans text-[13px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-8">
              Acknowledge the weight
            </h2>
            <h3 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight text-[#1C1917] mb-20">
              What feels heavy today?
            </h3>
            
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              {["Overthinking", "Stress before sleep", "Study pressure", "Social exhaustion", "Racing thoughts"].map((issue, i) => (
                <motion.span 
                  key={issue} 
                  {...fadeDelay(i * 0.1)}
                  className="font-serif italic text-2xl md:text-3xl text-[#57534E]/70 hover:text-[#1C1917] transition-colors duration-700 cursor-default"
                >
                  {issue}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Subtle decoration */}
          <motion.img 
            src="/Untitled design (26).svg" 
            alt="" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute right-[-15vw] top-[10vh] w-[35vw] max-w-[450px] pointer-events-none z-[0]"
          />
        </section>

        {/* 4. SUPPORT SECTION */}
        <section className="relative py-20 md:py-48 border-t border-[#E7E5E4]/50 flex flex-col md:flex-row justify-between gap-16">
          <motion.img 
            src="/SbSqGCYAPE8Sz36boHNMBd7o2kY.avif" 
            alt="" 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-[-50vw] md:left-[-45vw] lg:left-[-35vw] top-[40vh] md:top-[50vh] w-[90vw] max-w-[1000px] pointer-events-none z-[0]"
          />
          <motion.div {...fadeUp} className="md:w-1/2 relative z-10">
             <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight text-[#1C1917] mb-10 max-w-lg">
               Gentle support, <br /> exactly when you need it.
             </h2>
          </motion.div>
          
          <div className="md:w-1/2 flex flex-col gap-12 pt-4">
            {[
              "Guided breathing pacers to instantly regulate your nervous system.",
              "Grounding prompts designed to pull you out of the spiral.",
              "Quiet reflection spaces to process without judgment.",
              "Mood-aware sessions offering quick relief in under 2 minutes."
            ].map((text, i) => (
              <motion.div key={i} {...fadeDelay(i * 0.15)} className="flex gap-6 items-start">
                <span className="font-sans text-[11px] tracking-widest text-[#A8A29E] mt-2">0{i+1}</span>
                <p className="font-sans font-light text-[#44403C] text-xl md:text-2xl leading-relaxed max-w-sm">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. BENEFITS SECTION */}
        <section className="relative py-20 md:py-48 border-t border-[#E7E5E4]/50">
          <motion.div {...fadeUp} className="mb-24 text-center">
             <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1C1917]">
               The art of exhaling
             </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-24 max-w-4xl mx-auto">
            {[
              { title: "Immediate Calm", text: "Feel calmer in minutes through proven rhythm." },
              { title: "Daily Ritual", text: "Build a daily breathing habit without the pressure." },
              { title: "Mental Space", text: "Reduce mental overload and quiet the noise." },
              { title: "Deep Focus", text: "Return to focus gently, leaving anxiety behind." }
            ].map((benefit, i) => (
              <motion.div key={benefit.title} {...fadeDelay(i * 0.1)}>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1C1917] mb-4">{benefit.title}</h3>
                <p className="font-sans font-light text-[#57534E] text-lg leading-relaxed">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. TESTIMONIALS (Hyper minimal quotes) */}
        <section className="py-20 md:py-48 border-t border-[#E7E5E4]/50 flex flex-col items-center">
          <div className="flex flex-col gap-32 max-w-3xl text-center">
            {[
              { quote: "It’s the first app that doesn't feel like another task on my to-do list. It just lets me breathe.", author: "Sarah, University Student" },
              { quote: "When the study pressure builds, I use this for two minutes. It completely shifts my perspective.", author: "James, Grad Student" }
            ].map((t, i) => (
              <motion.div key={i} {...fadeDelay(i * 0.2)}>
                <p className="font-serif italic text-3xl md:text-4xl text-[#292524] leading-snug mb-8">
                  "{t.quote}"
                </p>
                <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#78716C]">
                  — {t.author}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="relative py-20 md:py-48 border-t border-[#E7E5E4]/50 flex flex-col items-center text-center mb-20">
          <motion.img 
            src="/Untitled design (35).svg" 
            alt="" 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute right-[-20vw] md:right-[-15vw] top-[5vh] md:top-[10vh] w-[60vw] max-w-[800px] pointer-events-none z-[0]"
          />
          <motion.div {...fadeUp} className="relative z-10">
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-[#1C1917] mb-16">
              A quieter mind <br />
              <span className="italic font-light">starts here.</span>
            </h2>
            <button className="text-[14px] tracking-[0.15em] uppercase font-medium text-[#1C1917] border-b border-[#1C1917] pb-2 hover:text-[#78716C] hover:border-[#78716C] transition-colors duration-500 mb-8">
              Create your account
            </button>
            <p className="font-sans text-sm text-[#A8A29E] font-light tracking-wide">
              Free to begin. No pressure, no noise.
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
