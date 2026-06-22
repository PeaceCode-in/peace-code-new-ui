"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";
import { Nav, Footer } from "./index";

export default function PeaceBuddiesRoute() {
  const { scrollY } = useScroll();

  // Gentle parallax for atmospheric illustrations
  const yParallaxSlow = useTransform(scrollY, [0, 3000], [0, -150]);
  const yParallaxFast = useTransform(scrollY, [0, 3000], [0, -300]);
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
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#faf9f1] text-[#1C1917] font-sans selection:bg-[#E7E5E4] selection:text-[#1C1917]">
      <Nav />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-40 pb-24 md:pb-32 px-6 md:px-10 overflow-visible z-20 bg-gradient-to-b from-[#EAF0F6] via-[#F0F5F9] to-[#faf9f1]">
        
        {/* Top Right Cloud */}
        <motion.img 
          src="/Untitled design (35).svg" 
          alt="" 
          initial={{ x: "20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
          className="absolute top-0 right-[-5%] w-[35vw] max-w-[500px] pointer-events-none z-10 drop-shadow-sm object-contain mix-blend-multiply"
          style={{ y: rightImgY }}
        />

        {/* Bottom Left Cloud */}
        <motion.img 
          src="/Untitled design (41).svg" 
          alt="" 
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
          className="absolute bottom-[-25%] left-[-15%] w-[45vw] max-w-[650px] pointer-events-none z-10 drop-shadow-sm object-contain mix-blend-multiply"
          style={{ y: leftImgY }}
        />

        {/* FLOCK OF BIRDS (Moved to bottom right to avoid text) */}
        {/* Leading Bird */}
        <motion.div
          animate={{ y: [-6, 6, -6], x: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute z-[15] pointer-events-none select-none"
          style={{ bottom: "12%", right: "8%" }}
        >
          <img
            src="/Untitled design (67).svg"
            alt=""
            className="w-[12vw] max-w-[160px] min-w-[70px] drop-shadow-md"
            style={{ transform: "scaleX(-1)" }}
          />
        </motion.div>

        {/* Following Bird 1 (Lower) */}
        <motion.div
          animate={{ y: [-4, 4, -4], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.4 }}
          className="absolute z-[15] pointer-events-none select-none"
          style={{ bottom: "5%", right: "16%" }}
        >
          <img
            src="/Untitled design (68).svg"
            alt=""
            className="w-[8vw] max-w-[100px] min-w-[50px] drop-shadow-sm opacity-90"
            style={{ transform: "scaleX(-1)" }}
          />
        </motion.div>

        {/* Following Bird 2 (Higher) */}
        <motion.div
          animate={{ y: [-5, 5, -5], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.8 }}
          className="absolute z-[15] pointer-events-none select-none"
          style={{ bottom: "18%", right: "20%" }}
        >
          <img
            src="/Untitled design (68).svg"
            alt=""
            className="w-[6vw] max-w-[80px] min-w-[40px] drop-shadow-sm opacity-80"
            style={{ transform: "scaleX(-1)" }}
          />
        </motion.div>

        <motion.div {...fadeUp} className="relative mx-auto max-w-[1024px] text-center z-20 pt-16">
          <h1 className="main-page-title mb-8 font-serif text-5xl md:text-7xl font-light tracking-tight text-[#0A2540] leading-[1.1]">
            Who are Peace Buddies?
          </h1>
          <p className="text-[#334155] max-w-[800px] mx-auto text-[18px] md:text-[22px] leading-relaxed mb-12 font-light">
            University life can be confusing and overwhelming to navigate alone. Your Peace Buddy helps you understand your feelings, resolve internal conflicts, and cut through the mental noise. We listen on your behalf and ensure you get access to all the emotional support and care you've earned.
          </p>
        </motion.div>
      </section>

      {/* Page Wrapper */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">

        {/* 2. THE SUPPORT LADDER */}
        <section className="relative py-24 md:py-40 flex flex-col items-center justify-center text-center px-6">
          <motion.div {...fadeUp} className="w-full max-w-5xl flex flex-col items-center">
             <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-20">The Support Ecosystem</h2>
             
             <div className="w-full max-w-4xl flex flex-col gap-6 relative">
               
               {/* Vertical connecting line */}
               <div className="absolute left-[52px] md:left-[68px] top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-[#D6D3D1] to-transparent z-0 hidden sm:block" />

               {/* PeaceBot */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 1 }}
                 className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-10 p-8 md:p-10 rounded-[2rem] hover:bg-white/40 transition-colors duration-500 group text-center sm:text-left"
               >
                 <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm flex items-center justify-center text-[#A8A29E] font-serif text-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-700">
                   01
                 </div>
                 <div>
                   <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-3 text-[#1C1917]">PeaceBot</h3>
                   <p className="text-[#78716C] font-light text-lg leading-relaxed max-w-lg">An AI companion available 24/7. Sometimes a quick, structured, conversational check-in is all you need to ground yourself.</p>
                 </div>
               </motion.div>

               {/* Peace Buddy */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 1, delay: 0.15 }}
                 className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-10 p-8 md:p-12 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_60px_rgba(0,0,0,0.08)] transition-all duration-700 group md:scale-[1.03] my-2 text-center sm:text-left overflow-hidden"
               >
                 <div className="absolute inset-0 bg-gradient-to-r from-[#F0F5F9]/50 to-[#f2f7f2]/50 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[-1]" />
                 
                 <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A] font-serif text-3xl group-hover:scale-110 transition-all duration-700 shadow-inner">
                   02
                 </div>
                 <div>
                   <h3 className="font-serif text-4xl md:text-5xl tracking-tight mb-4 text-[#1E3A8A]">Peace Buddy</h3>
                   <p className="text-[#57534E] font-medium text-lg md:text-xl leading-relaxed max-w-xl">Sometimes a human conversation helps. Real students, trained in peer support, ready to hold space for you when you need to be heard.</p>
                 </div>
               </motion.div>

               {/* Psychologist */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-10 p-8 md:p-10 rounded-[2rem] hover:bg-white/40 transition-colors duration-500 group text-center sm:text-left"
               >
                 <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm flex items-center justify-center text-[#A8A29E] font-serif text-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-700">
                   03
                 </div>
                 <div>
                   <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-3 text-[#1C1917]">Psychologist</h3>
                   <p className="text-[#78716C] font-light text-lg leading-relaxed max-w-lg">Professional, clinical support. When deeper intervention and structured therapeutic care is necessary to help you heal and grow.</p>
                 </div>
               </motion.div>

             </div>

             <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.6 }}
               className="mt-24 text-[19px] text-[#78716C] font-light italic max-w-2xl mx-auto leading-relaxed"
             >
               "PeaceCode exists to meet students wherever they are. Not every difficult moment requires a psychologist. Sometimes people simply need another human being who understands."
             </motion.p>
          </motion.div>
        </section>

        {/* 3. WHO ARE PEACE BUDDIES? */}
        <section className="relative py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="md:w-5/12 text-left relative z-10"
          >
             <h2 className="font-serif text-4xl md:text-5xl leading-[1.2] text-[#1C1917] font-light mb-8">
               Who are Peace Buddies?
             </h2>
             <p className="text-xl text-[#57534E] font-light leading-relaxed mb-6">
               They are carefully selected psychology students from respected institutions.
             </p>
             <ul className="text-[#78716C] font-light leading-relaxed space-y-4 mb-8 text-lg">
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" /> MA Psychology</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" /> MSc Psychology</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" /> Counselling Psychology</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" /> Applied Psychology</li>
             </ul>
             <p className="text-lg text-[#78716C] font-light leading-relaxed mb-8">
               Supported by the PeaceCode framework, they are trained in active listening, empathy, and student wellbeing. 
             </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="md:w-7/12 relative flex justify-end items-center"
          >
            {/* Ambient Illustration */}
            <img 
              src="/Untitled design (48).svg" 
              alt="Soft cloud ambient shape" 
              className="w-full h-auto max-w-[550px] z-10 mix-blend-multiply opacity-80"
            />
          </motion.div>
        </section>

        {/* FULL PAGE STATEMENT */}
        <section className="relative w-full py-16 md:py-24 flex justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-5xl border-y border-[#E7E5E4]/60 py-16 px-6"
          >
            <p className="font-serif text-3xl md:text-[40px] text-[#1C1917] font-light italic leading-relaxed">
              They are peers with training—not therapists, not influencers, and not anonymous internet strangers.
            </p>
          </motion.div>
        </section>

        {/* 4. WHEN STUDENTS REACH OUT */}
        <section className="relative py-20 md:py-40 flex flex-col items-center">
          <motion.div {...fadeUp} className="max-w-3xl text-center mb-24">
             <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Moments of connection</h2>
             <p className="font-serif text-3xl md:text-5xl text-[#57534E] font-light leading-relaxed">
               Because student life is beautifully complicated.
             </p>
          </motion.div>

          <div className="w-full max-w-6xl flex flex-wrap justify-center gap-x-8 gap-y-12 text-center">
            {[
               { quote: "When everything feels heavier than it should.", explanation: "A Peace Buddy provides a safe space to unpack those feelings without judgment." },
               { quote: "When your thoughts won't slow down.", explanation: "We're here to help you find a moment of stillness amidst the anxiety." },
               { quote: "When you need perspective.", explanation: "Sometimes you just need an outside, empathetic ear to see things clearly." },
               { quote: "When you don't know who to talk to.", explanation: "We are available to listen. You don't have to carry it alone." },
               { quote: "When exam anxiety takes over.", explanation: "Performance pressure is real. Let's talk through it and find ways to cope." },
               { quote: "When hostel loneliness hits hard.", explanation: "Being surrounded by people doesn't mean you can't feel alone. Reach out." },
               { quote: "When placement pressure feels suffocating.", explanation: "Career anxiety is heavy. We understand the specific pressures you face." },
               { quote: "When you are simply feeling stuck.", explanation: "We all hit walls. Talking it out is often the first step to moving forward." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeDelay(i * 0.1)} 
                className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33%-24px)] relative group cursor-default md:cursor-pointer min-h-[160px] md:min-h-[200px]"
              >
                {/* Hover Background (Always visible on mobile, hover on desktop) */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-3xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 shadow-sm border border-white pointer-events-none" />
                
                <div className="relative p-8 md:p-8 h-full flex flex-col items-center justify-center">
                  <p className="font-serif text-[22px] md:text-[26px] text-[#1C1917] leading-relaxed italic transform md:group-hover:-translate-y-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    "{item.quote}"
                  </p>
                  
                  <p className="relative md:absolute mt-6 md:mt-0 md:bottom-8 px-2 md:px-6 text-[14px] text-[#78716C] leading-relaxed font-light opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:delay-75 pointer-events-none">
                    {item.explanation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Ambient Divider Illustration */}
        <div className="w-full flex justify-center py-10 md:py-16">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/Untitled design (47).svg" 
            alt="Ambient divider" 
            className="w-full max-w-[800px] h-auto object-contain mix-blend-multiply opacity-90"
          />
        </div>

        {/* 5. MEET THE PEACE BUDDIES */}
        <section className="relative py-20 md:py-32 flex flex-col items-center text-left">
          
          {/* Ambient Left Edge Cloud */}
          <motion.img 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/Untitled design (37).svg" 
            alt="Ambient cloud" 
            className="absolute top-[10%] left-[-20%] md:left-[-10%] w-[50vw] max-w-[500px] pointer-events-none z-0 mix-blend-multiply opacity-80"
          />
          <motion.div {...fadeUp} className="w-full max-w-[1100px] mb-20 text-center">
             <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1C1917] mb-6 leading-[1.2]">
               Meet the Peace Buddies
             </h2>
             <p className="text-xl text-[#78716C] font-light max-w-2xl mx-auto">
               Compassionate listeners waiting to hold space for you.
             </p>
          </motion.div>

          {/* Magazine-style profile presentation */}
          <div className="w-full max-w-[1100px] flex flex-col gap-24">
            
            {/* Profile 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-12 md:gap-20 items-start"
            >
              <div className="w-full md:w-1/3 aspect-[3/4] relative overflow-hidden rounded-3xl bg-[#EFECE6] border border-[#E7E5E4] shadow-sm">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E7E5E4] to-transparent opacity-50 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center text-[#A8A29E] font-light italic">Portrait Space</div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col pt-4">
                <div className="mb-6">
                  <h3 className="font-serif text-4xl text-[#1C1917] mb-2">Aanya Sharma</h3>
                  <p className="text-[13px] tracking-[0.15em] uppercase font-medium text-[#78716C]">MA Psychology · Delhi University</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-white border border-[#E7E5E4] rounded-full text-sm text-[#57534E]">Academic Burnout</span>
                  <span className="px-3 py-1 bg-white border border-[#E7E5E4] rounded-full text-sm text-[#57534E]">Overthinking</span>
                  <span className="px-3 py-1 bg-white border border-[#E7E5E4] rounded-full text-sm text-[#57534E]">Relationship Confusion</span>
                </div>

                <p className="text-lg text-[#57534E] font-light leading-relaxed mb-10 max-w-xl">
                  "I believe that navigating university life is overwhelming, and sometimes the best remedy is simply having someone quietly listen without trying to fix everything immediately. I'm here to provide a safe, non-judgmental space for your thoughts."
                </p>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-sm text-[#10B981] font-medium bg-[#10B981]/10 px-4 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    Available today
                  </span>
                  <button className="text-[14px] font-medium text-[#1C1917] border-b border-[#1C1917] pb-0.5 hover:text-[#57534E] transition-colors">
                    Schedule a chat
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Profile 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-12 md:gap-20 items-start"
            >
              <div className="w-full md:w-1/3 aspect-[3/4] relative overflow-hidden rounded-3xl bg-[#EFECE6] border border-[#E7E5E4] shadow-sm">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E7E5E4] to-transparent opacity-50 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center text-[#A8A29E] font-light italic">Portrait Space</div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col pt-4">
                <div className="mb-6">
                  <h3 className="font-serif text-4xl text-[#1C1917] mb-2">Rohan Desai</h3>
                  <p className="text-[13px] tracking-[0.15em] uppercase font-medium text-[#78716C]">MSc Counselling Psychology · Christ University</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-white border border-[#E7E5E4] rounded-full text-sm text-[#57534E]">Placement Pressure</span>
                  <span className="px-3 py-1 bg-white border border-[#E7E5E4] rounded-full text-sm text-[#57534E]">Anxiety</span>
                  <span className="px-3 py-1 bg-white border border-[#E7E5E4] rounded-full text-sm text-[#57534E]">Homesickness</span>
                </div>

                <p className="text-lg text-[#57534E] font-light leading-relaxed mb-10 max-w-xl">
                  "Transitioning into adulthood while managing expectations can feel incredibly isolating. My approach is to help you unravel the tangled thoughts and find clarity at your own pace, like untying a knot gently."
                </p>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-sm text-[#78716C] font-medium bg-white border border-[#E7E5E4] px-4 py-1.5 rounded-full">
                    Available tomorrow
                  </span>
                  <button className="text-[14px] font-medium text-[#1C1917] border-b border-[#1C1917] pb-0.5 hover:text-[#57534E] transition-colors">
                    Schedule a chat
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 6. STUDENT STORIES */}
        <section className="relative py-24 md:py-48 flex flex-col items-center">
          
          <motion.div {...fadeUp} className="max-w-2xl text-center mb-24 md:mb-32">
             <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-6">Shared Experiences</h2>
             <p className="font-serif text-3xl md:text-5xl text-[#1C1917] font-light leading-relaxed">
               Voices from the community.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 w-full max-w-6xl relative z-10 px-6">
             {[
               { quote: "I wasn't looking for therapy. I just needed someone to quietly listen to me.", author: "Second Year Student" },
               { quote: "Talking to a Peace Buddy helped me organise my thoughts when I was overwhelmed.", author: "Final Year Student" },
               { quote: "It felt like talking to someone who actually understood student life.", author: "Hostel Resident" },
             ].map((testimonial, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                 className="flex flex-col text-left relative"
               >
                 <span className="text-[#E7E5E4] font-serif text-7xl leading-none absolute -top-8 -left-4 select-none pointer-events-none">"</span>
                 
                 <p className="font-serif text-2xl text-[#1C1917] leading-relaxed mb-10 font-light relative z-10">
                   {testimonial.quote}
                 </p>
                 
                 <div className="mt-auto relative z-10">
                   <div className="w-6 h-[1px] bg-[#A8A29E] mb-5" />
                   <p className="text-[11px] tracking-[0.2em] uppercase text-[#78716C] font-medium">
                     {testimonial.author}
                   </p>
                 </div>
               </motion.div>
             ))}
          </div>
        </section>

        {/* 7. WHEN WE RECOMMEND PROFESSIONAL SUPPORT */}
        <section className="relative py-20 md:py-32 flex justify-center text-center px-6">
           <motion.div 
             {...fadeUp}
             className="w-full max-w-3xl bg-[#f2f7f2]/40 rounded-3xl p-12 md:p-20 border border-[#d6e8d6]/50 shadow-sm relative overflow-hidden"
           >
             <div className="absolute inset-0 bg-[url('/grain-overlay.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
             <h3 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6 font-light">Professional Care</h3>
             <p className="text-[#57534E] font-light leading-relaxed text-lg md:text-xl">
               Sometimes students need deeper support. Peace Buddies are trained to recognize when a student may benefit from professional care. When needed, PeaceCode gently guides students toward our network of licensed psychologists.
             </p>
           </motion.div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="relative py-20 md:py-48 flex flex-col items-center text-center mb-20">
          <motion.img 
            src="/Untitled design (35).svg" 
            alt="" 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute right-[-25vw] md:right-[-15vw] top-[-10%] w-[50vw] max-w-[600px] pointer-events-none z-[0] opacity-80 mix-blend-multiply drop-shadow-sm"
          />
          <motion.div {...fadeUp} className="max-w-2xl flex flex-col items-center z-10 relative">
            <h2 className="font-serif text-5xl md:text-7xl text-[#1C1917] tracking-tight mb-8">
              Support begins with <br className="hidden md:block" />
              <span className="italic text-[#57534E]">a conversation.</span>
            </h2>
            <p className="text-xl text-[#78716C] font-light mb-12 leading-relaxed">
              Sometimes the next step is simply talking to someone who understands.
            </p>
            <button className="text-[14px] tracking-[0.1em] uppercase font-medium bg-[#1C1917] text-white px-10 py-5 rounded-full hover:bg-[#292524] transition-all duration-300 shadow-md hover:-translate-y-0.5 mb-8">
              Meet a Peace Buddy
            </button>
            <p className="text-[13px] tracking-[0.1em] uppercase text-[#A8A29E] font-medium">
              Thoughtful support. Real people. Student-first.
            </p>
          </motion.div>
        </section>
        
      </div>
      
      {/* Hyper minimalist footer override for Peace Buddies Page */}
      <div className="relative w-full bg-transparent pt-12">
        <style>{`
          .footer-buddies-override * {
            color: #1C1917 !important;
            border-color: rgba(0,0,0,0.15) !important;
          }
          .footer-buddies-override button,
          .footer-buddies-override span[style*="background"] {
            background: rgba(0,0,0,0.03) !important;
          }
          .footer-buddies-override button:hover {
            background: rgba(0,0,0,0.08) !important;
          }
          .footer-buddies-override a:hover,
          .footer-buddies-override a:hover * {
            color: #98A6D4 !important;
            background: transparent !important;
          }
        `}</style>
        <div className="footer-buddies-override">
          <Footer />
        </div>
      </div>
    </main>
  );
}
