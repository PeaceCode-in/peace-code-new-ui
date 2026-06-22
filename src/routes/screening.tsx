"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ClipboardCheck, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { Nav, Footer } from "./index";

export default function ScreeningRoute() {
  const { scrollY } = useScroll();

  // Gentle parallax for atmospheric illustrations
  const rightImgY = useTransform(scrollY, [0, 1000], [0, -120]);
  const leftImgY = useTransform(scrollY, [0, 1000], [0, -80]);

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
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#f7f3ea] text-[#1C1917] font-sans selection:bg-[#E7E5E4] selection:text-[#1C1917]">
      {/* Rotated Edge Image */}
      <img 
        src="/Untitled design (71).svg" 
        alt=""
        className="absolute left-[-10vw] md:left-[-15vw] lg:left-[-20vw] top-[50%] w-[40vw] max-w-[600px] object-contain rotate-90 pointer-events-none opacity-90 mix-blend-multiply z-0"
      />

      {/* Background Gradient */}
      <div 
        className="absolute top-0 inset-x-0 h-[800px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, #D9E4EF 0%, #F2E4EA 35%, #f7f3ea 80%)"
        }}
      />

      {/* Cloud Illustration */}
      <motion.img 
        src="/Untitled design (41).svg" 
        alt="" 
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
        className="absolute left-[-2%] top-[4%] w-[45vw] max-w-[600px] pointer-events-none z-10"
        style={{ y: leftImgY }}
      />

      <Nav />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-24 md:pb-32 px-6 md:px-10 overflow-visible z-20">
        


        <motion.div {...fadeUp} className="relative mx-auto max-w-[1024px] text-center z-20 pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white mb-8 shadow-sm">
            <ClipboardCheck className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-[13px] font-bold text-[#1E3048] tracking-wide uppercase">Screening & Clarity</span>
          </div>

          <h2 className="main-page-title mb-8 font-serif text-5xl md:text-7xl font-light tracking-tight text-[#1C1917] leading-[1.1]">
            Begin with clarity.
          </h2>
          <p className="text-[#4F6072] max-w-[550px] mx-auto text-[18px] md:text-[20px] leading-relaxed mb-10">
            Complete three gentle screenings to help PeaceCode understand your support needs and guide you to the right tools.
          </p>
          
          {/* Birds placed in the gap for breathing room */}
          <motion.div style={{ y: rightImgY }} className="w-full h-[160px] md:h-[220px] flex justify-center items-center gap-16 md:gap-32 pointer-events-none opacity-[0.9] mix-blend-multiply z-0 mb-16 md:mb-24">
            <img src="/Untitled design (67).svg" alt="" className="w-[160px] md:w-[220px] object-contain translate-y-6" />
            <img src="/Untitled design (68).svg" alt="" className="w-[130px] md:w-[180px] object-contain -translate-y-4" />
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#1C1917] text-white px-8 py-3.5 rounded-full text-[14px] tracking-wide font-medium hover:bg-[#333] transition-colors duration-500 shadow-sm">
              Start screening
            </button>
            <button className="text-[#1C1917] px-8 py-3.5 rounded-full text-[14px] tracking-wide font-medium border border-[#1C1917]/20 hover:border-[#1C1917]/40 transition-colors duration-500 bg-white/40 backdrop-blur-sm">
              Learn how it works
            </button>
          </div>
        </motion.div>
      </section>

      {/* Page Wrapper */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">

        {/* 2. WORKFLOW / PROCESS */}
        {/* 2. WORKFLOW / PROCESS */}
        <section className="relative py-24 md:py-40 flex flex-col items-center">
          {/* Ambient Background Blurs removed to keep it perfectly clean and minimalist */}

          <motion.div {...fadeUp} className="max-w-2xl text-center mb-24 md:mb-40">
             <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">The Journey</h2>
             <p className="font-serif text-3xl md:text-5xl text-[#57534E] font-light leading-relaxed">
               A calm, supportive sequence.
             </p>
          </motion.div>

          <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-y-32 md:gap-y-48">
            {[
              { step: "01", title: "Reflect", desc: "Take a quiet moment to complete three foundational tests.", hoverColor: "group-hover:bg-[#F2EAE4]/80" },
              { step: "02", title: "Understand", desc: "Receive your first Peace Score, a gentle reflection of where you are.", hoverColor: "group-hover:bg-[#E8EDE7]/80" },
              { step: "03", title: "Discover", desc: "Get thoughtful recommendations tailored to your current needs.", hoverColor: "group-hover:bg-[#F5E6D3]/80" },
              { step: "04", title: "Grow", desc: "Explore support tools, join the community, or connect with a counselor.", hoverColor: "group-hover:bg-[#EAE3D9]/80" }
            ].map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i}
                  {...fadeDelay(0.1)}
                  className={`relative flex flex-col md:flex-row items-center gap-12 lg:gap-24 group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-1/2 flex justify-center ${isEven ? 'md:justify-end' : 'md:justify-start'} relative z-10`}>

                    {/* Glass visual element with smooth unique hover colors */}
                    <div className={`w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/20 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] flex items-center justify-center relative z-10 overflow-hidden group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${item.hoverColor} transition-colors duration-[1500ms] ease-out`}>
                      {/* Inner delicate circle */}
                      <div className="w-3/4 h-3/4 rounded-full border border-[#1C1917]/10 flex items-center justify-center transition-transform duration-[2000ms] group-hover:rotate-90">
                        <span className="text-[12px] tracking-[0.25em] uppercase font-medium text-[#78716C]">{item.title}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`w-full md:w-1/2 relative z-10 text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="inline-flex items-baseline gap-4 mb-5 group-hover:-translate-y-1 transition-transform duration-700 ease-out">
                      <span className="font-serif text-2xl md:text-3xl text-[#A8A29E] font-light italic">{item.step}.</span>
                      <h3 className="font-serif text-3xl md:text-4xl text-[#1C1917]">{item.title}</h3>
                    </div>
                    <p className={`text-[#78716C] font-light leading-relaxed text-lg md:text-xl max-w-sm mx-auto ${isEven ? 'md:ml-0' : 'md:mr-0'}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 3. THE THREE CORE TESTS */}
        <section className="relative py-24 md:py-40 flex flex-col items-center">
          <motion.div {...fadeUp} className="max-w-3xl text-center mb-24 relative z-10">
             <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1C1917] mb-8 leading-[1.2]">
               The Foundation
             </h2>
             <p className="text-lg text-[#78716C] font-light leading-relaxed max-w-2xl mx-auto">
               These three screens help PeaceCode understand where you are starting from. They take only a few minutes, but provide essential clarity.
             </p>
          </motion.div>

          <style>{`
            .dull-text-overlay {
              clip-path: circle(150% at center);
              transition: clip-path 1.5s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .group:hover .dull-text-overlay {
              clip-path: circle(0% at center);
            }
          `}</style>

          <div className="flex flex-col gap-20 w-full max-w-5xl mx-auto">
            {/* Test 1 */}
            <motion.div {...fadeUp} className="group flex flex-col md:flex-row items-center gap-12 md:gap-24 relative cursor-default">
              <div className="md:w-1/3 flex justify-end relative">
                <h3 className="font-serif text-6xl md:text-8xl text-[#1C1917] font-light select-none whitespace-nowrap">
                  PHQ-9
                </h3>
                <h3 className="absolute top-0 right-0 font-serif text-6xl md:text-8xl text-[#D6D3D1] font-light select-none whitespace-nowrap dull-text-overlay">
                  PHQ-9
                </h3>
              </div>
              <div className="md:w-2/3 max-w-md text-left transition-all duration-[1500ms] group-hover:translate-x-2">
                <h4 className="text-[13px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-4">Mood & Energy</h4>
                <p className="text-[#57534E] text-xl font-light leading-relaxed mb-4">
                  A foundational screening for depressive symptoms and overall mood.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#A8A29E] font-light">
                  <span>~ 3 Minutes</span>
                  <span className="w-1 h-1 rounded-full bg-[#E7E5E4]" />
                  <span>9 Questions</span>
                </div>
              </div>
            </motion.div>

            {/* Test 2 */}
            <motion.div {...fadeUp} className="group flex flex-col md:flex-row items-center gap-12 md:gap-24 relative cursor-default">
              <div className="md:w-1/3 flex justify-end relative">
                <h3 className="font-serif text-6xl md:text-8xl text-[#1C1917] font-light select-none whitespace-nowrap">
                  GAD-7
                </h3>
                <h3 className="absolute top-0 right-0 font-serif text-6xl md:text-8xl text-[#D6D3D1] font-light select-none whitespace-nowrap dull-text-overlay">
                  GAD-7
                </h3>
              </div>
              <div className="md:w-2/3 max-w-md text-left transition-all duration-[1500ms] group-hover:translate-x-2">
                <h4 className="text-[13px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-4">Anxiety & Worry</h4>
                <p className="text-[#57534E] text-xl font-light leading-relaxed mb-4">
                  Measures the presence and severity of anxiety, tension, and worry.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#A8A29E] font-light">
                  <span>~ 2 Minutes</span>
                  <span className="w-1 h-1 rounded-full bg-[#E7E5E4]" />
                  <span>7 Questions</span>
                </div>
              </div>
            </motion.div>

            {/* Test 3 */}
            <motion.div {...fadeUp} className="group flex flex-col md:flex-row items-center gap-12 md:gap-24 relative cursor-default">
              <div className="md:w-1/3 flex justify-end relative">
                <h3 className="font-serif text-6xl md:text-8xl text-[#1C1917] font-light select-none whitespace-nowrap">
                  GHQ-12
                </h3>
                <h3 className="absolute top-0 right-0 font-serif text-6xl md:text-8xl text-[#D6D3D1] font-light select-none whitespace-nowrap dull-text-overlay">
                  GHQ-12
                </h3>
              </div>
              <div className="md:w-2/3 max-w-md text-left transition-all duration-[1500ms] group-hover:translate-x-2">
                <h4 className="text-[13px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-4">Overall Wellbeing</h4>
                <p className="text-[#57534E] text-xl font-light leading-relaxed mb-4">
                  A gentle assessment of your general psychological health and daily functioning.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#A8A29E] font-light">
                  <span>~ 4 Minutes</span>
                  <span className="w-1 h-1 rounded-full bg-[#E7E5E4]" />
                  <span>12 Questions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. PEACE SCORE */}
        <section className="relative py-32 md:py-48 flex justify-center">
          <div className="absolute inset-0 bg-[#F5F4EF] w-[100vw] left-1/2 -translate-x-1/2 z-0" />
          
          <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="md:w-5/12 flex justify-center items-center"
            >
              <img 
                src="/Untitled design (46).svg" 
                alt="Peace Score abstract" 
                className="w-full h-auto max-w-[400px] drop-shadow-sm"
              />
            </motion.div>

            <motion.div {...fadeUp} className="md:w-7/12 text-left">
              <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Your Reflection</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-[#57534E] font-light leading-relaxed mb-8">
                The Peace Score
              </h3>
              
              <div className="space-y-6 text-lg text-[#78716C] font-light leading-relaxed mb-10">
                <p>
                  A gentle signal, not a verdict. Your Peace Score is a calm mirror of your current state, designed entirely to guide you toward the right support.
                </p>
                <p>
                  It does not rank you, and it is not a competition. It is simply a starting point to help indicate whether you might benefit from self-guided tools, structured wellness resources, or a conversation with a counselor.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#E7E5E4]">
                <div>
                  <h4 className="font-serif text-xl text-[#1C1917] mb-2">Informative</h4>
                  <p className="text-sm text-[#A8A29E] font-light">A clear, private understanding of your emotional readiness.</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-[#1C1917] mb-2">Supportive</h4>
                  <p className="text-sm text-[#A8A29E] font-light">Used only to recommend the most helpful pathways for you.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. RECOMMENDATIONS */}
        <section className="relative py-24 md:py-40 flex flex-col items-center">
          <motion.div {...fadeUp} className="max-w-2xl text-center mb-24">
             <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Next Steps</h2>
             <p className="font-serif text-3xl md:text-5xl text-[#57534E] font-light leading-relaxed">
               Thoughtful recommendations.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 w-full max-w-6xl text-left">
            {[
              { title: "Wellness Tools", desc: "Breathing exercises, gratitude journals, and focus tools for daily balance." },
              { title: "Student Community", desc: "A moderated space to share experiences and find quiet belonging with peers." },
              { title: "Counselor Pathways", desc: "Direct, confidential connections to professional support when you need it." }
            ].map((rec, i) => (
              <motion.div 
                key={i}
                {...fadeDelay(i * 0.15)}
                className="relative flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-[#F5F4EF] mb-6 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#A8A29E]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1C1917] mb-4">{rec.title}</h3>
                <p className="text-[#78716C] font-light leading-relaxed text-lg">
                  {rec.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. PREMIUM TESTS */}
        <section className="relative py-24 md:py-40 flex flex-col items-center border-t border-[#E7E5E4]/50">
          
          {/* Floating Illustration */}
          <motion.img 
            src="/Untitled design (37).svg"
            alt="Abstract layers illustration"
            className="absolute left-[-15vw] md:left-[-20vw] lg:left-[-15vw] top-[-5%] md:top-[-10%] w-[45vw] md:w-[35vw] max-w-[450px] pointer-events-none z-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ y: leftImgY }}
          />
          <motion.div {...fadeUp} className="max-w-3xl text-center mb-20 relative z-10">
             <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] font-light mb-8">
               Deeper layers of insight.
             </h2>
             <p className="text-lg text-[#78716C] font-light leading-relaxed">
               Beyond the foundation, PeaceCode offers optional, advanced screening modules for when you want a more specific understanding of your experiences.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {[
              "ADHD Screening", "Burnout Checks", "Sleep Patterns", 
              "Relationship Health", "Focus & Attention", "Academic Stress Depth"
            ].map((tag, i) => (
              <span key={i} className="px-6 py-3 rounded-full border border-[#D6D3D1] text-[#57534E] text-sm tracking-wide bg-white/40 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </motion.div>
        </section>

        {/* 7. TRUST AND SAFETY (INDIAN CONTEXT) */}
        <section className="relative py-24 md:py-40 flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div {...fadeUp} className="md:w-6/12 text-left relative z-10">
             <div className="inline-flex items-center gap-2 mb-8 text-[#A8A29E]">
               <ShieldCheck className="w-5 h-5" />
               <span className="text-[11px] tracking-[0.2em] uppercase font-medium">Safe & Private</span>
             </div>
             
             <h2 className="font-serif text-4xl md:text-5xl text-[#57534E] font-light leading-relaxed mb-8">
               We understand the pressure.
             </h2>
             <div className="space-y-6 text-lg text-[#78716C] font-light leading-relaxed">
               <p>
                 From the anxiety of placements and heavy academic loads to adjusting to hostel life far from home—we know the unique weight Indian students carry.
               </p>
               <p>
                 This screening is completely private. The results are not shared with your college or peers. They exist solely to help PeaceCode suggest the right path forward for you, with zero judgment.
               </p>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="md:w-5/12 relative flex justify-center items-center"
          >
            <img 
              src="/svreen.svg" 
              alt="Safe environment" 
              className="w-full h-auto max-w-[450px] z-10 drop-shadow-sm"
            />
          </motion.div>
        </section>

      </div>
      {/* End of Page Wrapper */}

      {/* FINAL CTA (Moved outside wrapper for full width) */}
      <section className="relative py-20 md:py-40 flex flex-col items-center text-center mb-10 w-full">
          
          {/* Huge Edge Image on the right */}
          <motion.img 
            src="/Untitled design (63).svg" 
            alt="Cloud abstract" 
            className="absolute right-[-20vw] md:right-[-30vw] lg:right-[-25vw] top-[60%] -translate-y-1/2 w-[80vw] md:w-[70vw] max-w-[1200px] pointer-events-none z-0 object-contain mix-blend-multiply opacity-70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ y: rightImgY }}
          />

          <motion.div {...fadeUp} className="max-w-3xl flex flex-col items-center z-10 relative px-6">
            <h2 className="font-serif text-5xl md:text-6xl text-[#1C1917] font-light tracking-tight mb-8">
               Ready to begin?
            </h2>
            <p className="text-xl text-[#78716C] font-light leading-relaxed mb-12">
               Take the first quiet step toward clarity and support.
            </p>
            
            <button className="bg-[#1C1917] text-white px-10 py-4 rounded-full text-[15px] tracking-wide font-medium hover:bg-[#333] transition-colors duration-500 shadow-sm mb-6">
              Start your screening
            </button>
            <p className="text-sm text-[#A8A29E] font-light flex items-center gap-2">
              <Heart className="w-3.5 h-3.5" /> 100% Confidential
            </p>
          </motion.div>
        </section>
        
      {/* Hyper minimalist footer override for Editorial Pages */}
      <div className="relative w-full bg-transparent pt-12 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
        <style>{`
          .footer-editorial-override * {
            color: #1C1917 !important;
            border-color: rgba(0,0,0,0.15) !important;
          }
          .footer-editorial-override button,
          .footer-editorial-override span[style*="background"] {
            background: rgba(0,0,0,0.03) !important;
          }
          .footer-editorial-override button:hover {
            background: rgba(0,0,0,0.08) !important;
          }
          .footer-editorial-override a:hover,
          .footer-editorial-override a:hover * {
            color: #9b72cf !important;
            background: transparent !important;
          }
        `}</style>
        <div className="footer-editorial-override">
          <Footer />
        </div>
      </div>
    </main>
  );
}
