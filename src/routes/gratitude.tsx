"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Nav, Footer } from "./index";

export default function GratitudeRoute() {
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
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  };

  const fadeDelay = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#faf9f1] text-[#1C1917] font-sans selection:bg-[#E7E5E4] selection:text-[#1C1917]">
      <Nav />

      {/* 1. HERO SECTION (Careers Style) */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-24 md:pb-32 px-6 md:px-10 overflow-visible z-20">
        
        {/* Left Edge Image - Anchored to bottom */}
        <motion.img 
          src="/IzRkb9QIOWOI4IYcR98WEF2QUUg.avif" 
          alt="" 
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "-40%", opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 bottom-[-10%] w-[35vw] max-w-[450px] pointer-events-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)] object-contain mix-blend-multiply"
          style={{ y: leftImgY }}
        />

        {/* Right Edge Image - Anchored to bottom */}
        <motion.img 
          src="/Gm6CrXzxO7OGmfeRPBsg12Uo.avif" 
          alt="" 
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "40%", opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 bottom-[-10%] w-[32vw] max-w-[420px] pointer-events-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)] object-contain mix-blend-multiply"
          style={{ y: rightImgY }}
        />

        <motion.div {...fadeUp} className="relative mx-auto max-w-[1024px] text-center z-20 pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-[13px] font-bold text-[#1E3048] tracking-wide uppercase">Your Practice</span>
          </div>

          <h2 className="main-page-title mb-8">
            Notice the good that<br className="hidden md:block" /> was already there.
          </h2>
          <p className="text-[#4F6072] max-w-[650px] mx-auto text-[18px] md:text-[20px] leading-relaxed">
            A gratitude practice designed to help you collect moments, nurture perspective, and grow a calmer relationship with life.
          </p>
        </motion.div>
      </section>

      {/* Page Wrapper */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">

        {/* 2. THE GRATITUDE WALL (Storytelling) */}
        <section className="relative py-20 md:py-48 flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div {...fadeUp} className="md:w-5/12 text-left relative z-10">
             <h2 className="font-serif text-4xl md:text-5xl leading-relaxed text-[#57534E] font-light mb-8">
               Every entry becomes part of a living collection of positive moments.
             </h2>
             <p className="text-lg text-[#78716C] font-light leading-relaxed">
               Not a database. A memory garden. Revisit old entries whenever you need encouragement, and watch the quiet architecture of your joy slowly take shape over time.
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
              src="/phone.svg" 
              alt="PeaceCode Gratitude Interface" 
              className="w-full h-auto max-w-[600px] z-10"
            />
          </motion.div>
        </section>

        {/* 3. THE GRATITUDE WALL - DYNAMIC FADING IMMERSION */}
        <section className="relative w-full py-10 mt-12 mb-32 flex justify-center">
          <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br from-[#f2f7f2]/60 to-[#e5ede5]/40 border border-[#d6e8d6]/50 overflow-hidden shadow-sm">
            
            {/* Soft decorative background orbs */}
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#dcebdc]/50 rounded-full blur-[60px] z-0 pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#d1e6d1]/40 rounded-full blur-[80px] z-0 pointer-events-none" />

            <div className="relative z-10 w-full h-full">
              {[
                { text: `"A good conversation with an old friend..."`, top: "20%", left: "25%", delay: 0 },
                { text: `"Finishing an assignment early."`, top: "45%", left: "75%", delay: 2 },
                { text: `"A peaceful, quiet morning."`, top: "65%", left: "30%", delay: 5 },
                { text: `"The smell of coffee brewing..."`, top: "25%", left: "70%", delay: 7 },
                { text: `"Finally understanding a difficult concept."`, top: "80%", left: "65%", delay: 1 },
                { text: `"Walking in the crisp autumn air."`, top: "35%", left: "20%", delay: 4 },
                { text: `"A stranger holding the door."`, top: "80%", left: "35%", delay: 8 },
                { text: `"Getting enough sleep."`, top: "55%", left: "80%", delay: 3 },
                { text: `"Listening to my favorite album."`, top: "50%", left: "15%", delay: 9 },
                { text: `"Time spent doing absolutely nothing."`, top: "15%", left: "50%", delay: 6 },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  animate={{ 
                    opacity: [0, 1, 1, 0, 0],
                    y: [15, 0, 0, -15, -15]
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    delay: item.delay,
                    times: [0, 0.15, 0.5, 0.65, 1],
                    ease: "easeInOut"
                  }}
                  className="absolute italic font-serif text-[16px] md:text-[18px] text-[#5c6e5c] w-max max-w-[250px] text-center tracking-wide"
                  style={{ top: item.top, left: item.left, x: "-50%", y: "-50%" }}
                >
                  {item.text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PUBLIC VS PRIVATE */}
        <section className="relative py-20 md:py-48 flex flex-col items-center text-center">
          <motion.div {...fadeUp} className="max-w-4xl flex flex-col md:flex-row gap-16 md:gap-32 text-left items-start">
            <div className="flex-1">
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Private Gratitude</h3>
              <p className="font-serif text-2xl md:text-3xl text-[#57534E] font-light leading-relaxed mb-4">
                Personal reflections stored only for you.
              </p>
              <p className="text-[#78716C] font-light leading-relaxed">
                A safe, entirely silent space to notice what matters. No one sees it but you.
              </p>
            </div>
            
            <div className="flex-1">
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Public Gratitude</h3>
              <p className="font-serif text-2xl md:text-3xl text-[#57534E] font-light leading-relaxed mb-4">
                Anonymously share moments with the community.
              </p>
              <p className="text-[#78716C] font-light leading-relaxed">
                Never social media. No likes. No followers. No popularity mechanics. Just genuine, collective appreciation drifting through a shared garden.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 4. THE KARMA TREE */}
        <section className="relative py-20 md:py-48 flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div {...fadeUp} className="w-full md:w-1/2 text-left relative z-10">
             <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1C1917] mb-8 leading-[1.2]">
               The Karma Tree
             </h2>
             <p className="text-xl text-[#78716C] font-light leading-relaxed mb-8">
               Every gratitude entry contributes to the quiet growth of a personal tree. A living companion that visually reflects your journey.
             </p>
             <div className="space-y-6 text-[#57534E] font-light leading-relaxed">
               <p className="italic font-serif text-2xl border-l-2 border-[#E7E5E4] pl-6 py-2">
                 "The more gratitude you notice, the more your tree remembers."
               </p>
               <p>
                 As you build consistency, branches expand, leaves appear, and seasonal transformations unfold. No aggressive gamification. Growth happens quietly.
               </p>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center items-center"
          >
            <img 
              src="/karma tree.svg" 
              alt="The Karma Tree" 
              className="w-full h-auto max-w-[500px] pointer-events-none mix-blend-multiply opacity-90"
            />
          </motion.div>
        </section>

        {/* 5. DAILY REFLECTIONS */}
        <section className="relative py-20 md:py-48 flex flex-col items-center">
          <motion.div {...fadeUp} className="max-w-2xl text-center mb-24">
             <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Daily Logging</h2>
             <p className="font-serif text-3xl md:text-5xl text-[#57534E] font-light leading-relaxed">
               Gentle prompts to capture the quiet moments.
             </p>
          </motion.div>

          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24 text-left">
            <motion.div {...fadeDelay(0.1)}>
              <h3 className="font-serif text-2xl text-[#1C1917] mb-3">Morning & Evening</h3>
              <p className="text-[#78716C] font-light leading-relaxed">Structured reflection spaces for bookending your day with intention.</p>
            </motion.div>
            <motion.div {...fadeDelay(0.2)}>
              <h3 className="font-serif text-2xl text-[#1C1917] mb-3">What made you smile?</h3>
              <p className="text-[#78716C] font-light leading-relaxed">Simple, guided questions that make starting a reflection effortless.</p>
            </motion.div>
            <motion.div {...fadeDelay(0.3)}>
              <h3 className="font-serif text-2xl text-[#1C1917] mb-3">Who helped you?</h3>
              <p className="text-[#78716C] font-light leading-relaxed">Noticing the support systems and kind gestures that often go unseen.</p>
            </motion.div>
            <motion.div {...fadeDelay(0.4)}>
              <h3 className="font-serif text-2xl text-[#1C1917] mb-3">What taught you?</h3>
              <p className="text-[#78716C] font-light leading-relaxed">Finding valuable perspective hidden within daily challenges.</p>
            </motion.div>
          </div>
        </section>

        {/* 6. GRATITUDE INSIGHTS */}
        <section className="relative py-20 md:py-48 flex flex-col items-center text-center">
          {/* Cloud Illustration */}
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
               Poetic Insights
             </h2>
             
             <div className="space-y-12 text-[#57534E]">
               <p className="text-2xl font-light italic">
                 "You mentioned family 18 times this month."
               </p>
               <p className="text-2xl font-light italic">
                 "Nature appeared often in your reflections."
               </p>
               <p className="text-2xl font-light italic">
                 "The past month contained more moments of calm than you realized."
               </p>
             </div>
             
             <p className="mt-16 text-lg text-[#78716C] font-light leading-relaxed max-w-xl mx-auto">
               No analytical dashboards or aggressive charts. Just quiet observations about the themes and emotional patterns of your life.
             </p>
          </motion.div>
        </section>

        {/* 7. COMMUNITY GARDEN & TESTIMONIALS */}
        <section className="relative py-20 md:py-48 flex flex-col items-center">
          <motion.div {...fadeUp} className="max-w-2xl text-center mb-32">
             <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">The Community Garden</h2>
             <p className="font-serif text-3xl md:text-5xl text-[#57534E] font-light leading-relaxed">
               A shared space of collective appreciation.
             </p>
          </motion.div>

          {/* Testimonials integrated organically */}
          <div className="flex flex-col gap-32 max-w-4xl text-center">
            {[
              { quote: "Grateful for chai with friends after class.", author: "Anonymous Entry" },
              { quote: "This helped me notice good moments even during exam season.", author: "Engineering Student" },
              { quote: "Grateful my grandmother is feeling better.", author: "Anonymous Entry" },
              { quote: "I never realized how much I had to be thankful for until I saw my Karma Tree growing.", author: "Medical Student" },
              { quote: "The public gratitude wall made me feel less alone.", author: "Placement Preparation Student" },
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                className="relative"
              >
                <p className="font-serif text-2xl md:text-4xl text-[#1C1917] leading-relaxed mb-6 font-light">
                  "{testimonial.quote}"
                </p>
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#78716C]">
                  — {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="relative py-20 md:py-48 flex flex-col items-center text-center mb-20">
          {/* Cloud Illustration */}
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
              A grateful mind <br className="hidden md:block" />
              <span className="italic text-[#57534E]">sees more light.</span>
            </h2>
            <p className="text-xl text-[#78716C] font-light mb-12 leading-relaxed">
              Small moments become meaningful when you remember them.
            </p>
            <button className="text-[13px] tracking-[0.15em] uppercase font-medium border-b border-[#1C1917] pb-1 hover:text-[#78716C] hover:border-[#78716C] transition-colors duration-500 mb-6">
              Begin your gratitude practice
            </button>
            <p className="text-sm text-[#A8A29E] font-light">
              Free to begin. One reflection at a time.
            </p>
          </motion.div>
        </section>
        
      </div>
      
      {/* Hyper minimalist footer override for Gratitude Page */}
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
