"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Nav, Footer } from "./index";

export default function CommunityRoute() {
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
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#faf9f1] text-[#1C1917] font-sans selection:bg-[#E7E5E4] selection:text-[#1C1917]">
      <Nav />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-24 md:pb-32 px-6 md:px-10 overflow-visible z-20">
        
        {/* Left Edge Image - Anchored to bottom */}
        <motion.img 
          src="/IzRkb9QIOWOI4IYcR98WEF2QUUg.avif" 
          alt="" 
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "-40%", opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
          className="absolute left-0 bottom-[-10%] w-[35vw] max-w-[450px] pointer-events-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)] object-contain mix-blend-multiply"
          style={{ y: leftImgY }}
        />

        {/* Right Edge Image - Anchored to bottom */}
        <motion.img 
          src="/Gm6CrXzxO7OGmfeRPBsg12Uo.avif" 
          alt="" 
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "40%", opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
          className="absolute right-0 bottom-[-10%] w-[32vw] max-w-[420px] pointer-events-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)] object-contain mix-blend-multiply"
          style={{ y: rightImgY }}
        />

        <motion.div {...fadeUp} className="relative mx-auto max-w-[1024px] text-center z-20 pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-[13px] font-bold text-[#1E3048] tracking-wide uppercase">Student Community</span>
          </div>

          <h2 className="main-page-title mb-8 font-serif text-5xl md:text-7xl font-light tracking-tight text-[#1C1917]">
            Find your people, <br className="hidden md:block" /> gently.
          </h2>
          <p className="text-[#4F6072] max-w-[650px] mx-auto text-[18px] md:text-[20px] leading-relaxed mb-12">
            A moderated student community for sharing struggles, interests, study wins, and everyday college life without the noise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#1C1917] text-white px-8 py-3.5 rounded-full text-[14px] tracking-wide font-medium hover:bg-[#333] transition-colors duration-500 shadow-sm">
              Join the community
            </button>
            <button className="text-[#1C1917] px-8 py-3.5 rounded-full text-[14px] tracking-wide font-medium border border-[#1C1917]/20 hover:border-[#1C1917]/40 transition-colors duration-500 bg-white/40 backdrop-blur-sm">
              Explore conversations
            </button>
          </div>
        </motion.div>
      </section>

      {/* Page Wrapper */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">

        {/* 2. WHY COMMUNITY MATTERS */}
        <section className="relative py-20 md:py-48 flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div {...fadeUp} className="md:w-6/12 text-left relative z-10">
             <h2 className="font-serif text-4xl md:text-5xl leading-relaxed text-[#57534E] font-light mb-8">
               You are not the only one dealing with this.
             </h2>
             <div className="space-y-6 text-lg text-[#78716C] font-light leading-relaxed">
               <p>
                 Whether it's feeling alone during exams, confusion about placements, or just adjusting to college life, there are thousands of students quietly experiencing the exact same thing.
               </p>
               <p>
                 We built a safe place to ask questions, share advice, and find encouragement without judgment. A trusted campus commons, entirely free from the chaos of generic forums.
               </p>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="md:w-5/12 relative flex justify-center items-center opacity-80 mix-blend-multiply"
          >
            {/* Placeholder for editorial illustration of students, connection, shared notes */}
            <img 
              src="/Untitled design (36).svg" 
              alt="Community Connection" 
              className="w-full h-auto max-w-[400px] z-10 drop-shadow-sm"
            />
          </motion.div>
        </section>

        {/* 3. HOW THE COMMUNITY WORKS */}
        <section className="relative py-20 md:py-40 flex flex-col items-center">
          <motion.div {...fadeUp} className="max-w-2xl text-center mb-24">
             <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">How it works</h2>
             <p className="font-serif text-3xl md:text-5xl text-[#57534E] font-light leading-relaxed">
               A simple social ritual with clear boundaries.
             </p>
          </motion.div>

          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24 text-left">
            <motion.div {...fadeDelay(0.1)}>
              <h3 className="font-serif text-2xl text-[#1C1917] mb-3">Moderated Spaces</h3>
              <p className="text-[#78716C] font-light leading-relaxed">Every conversation is guided to ensure safety, kindness, and genuine value.</p>
            </motion.div>
            <motion.div {...fadeDelay(0.2)}>
              <h3 className="font-serif text-2xl text-[#1C1917] mb-3">Topic & Interest Groups</h3>
              <p className="text-[#78716C] font-light leading-relaxed">Find your exact niche. From deep study routines to quiet hostel life discussions.</p>
            </motion.div>
            <motion.div {...fadeDelay(0.3)}>
              <h3 className="font-serif text-2xl text-[#1C1917] mb-3">Student Identity</h3>
              <p className="text-[#78716C] font-light leading-relaxed">Connect as yourself, or use anonymous mode when you need to ask something sensitive.</p>
            </motion.div>
            <motion.div {...fadeDelay(0.4)}>
              <h3 className="font-serif text-2xl text-[#1C1917] mb-3">Curated Replies</h3>
              <p className="text-[#78716C] font-light leading-relaxed">Thoughtful answers rise to the top. Spam and noise are quietly filtered out.</p>
            </motion.div>
          </div>
        </section>

        {/* 4. TOPICS / SPACES */}
        <section className="relative py-20 md:py-48 flex flex-col items-center text-center">
          <motion.div {...fadeUp} className="max-w-3xl relative z-10">
             <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1C1917] mb-12 leading-[1.2]">
               Spaces for every moment
             </h2>
             
             <div className="space-y-8 text-[#57534E] flex flex-col items-center">
               <p className="text-2xl md:text-3xl font-light italic">
                 Exam Stress • Placement Prep • College Life
               </p>
               <p className="text-2xl md:text-3xl font-light italic text-[#78716C]">
                 Hostel Life • Study Routines • Friend Circles
               </p>
               <p className="text-2xl md:text-3xl font-light italic">
                 Career Confusion • Mental Clarity • Habit Building
               </p>
             </div>
             
             <p className="mt-16 text-lg text-[#78716C] font-light leading-relaxed max-w-xl mx-auto">
               Find the conversations you actually want to read, neatly sorted by topic, mood, or immediate need.
             </p>
          </motion.div>
        </section>

        {/* 5. MODERATION AND SAFETY */}
        <section className="relative py-20 md:py-40 flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full md:w-5/12 flex justify-center items-center"
          >
            <img 
              src="/karma tree.svg" 
              alt="Community Growth" 
              className="w-full h-auto max-w-[400px] pointer-events-none mix-blend-multiply opacity-80"
            />
          </motion.div>

          <motion.div {...fadeUp} className="w-full md:w-6/12 text-left relative z-10">
             <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1C1917] mb-8 leading-[1.2]">
               Thoughtfully Moderated
             </h2>
             <p className="text-xl text-[#78716C] font-light leading-relaxed mb-8">
               A healthy community requires careful tending. We actively protect this space so you can trust it.
             </p>
             <div className="space-y-6 text-[#57534E] font-light leading-relaxed">
               <p className="italic font-serif text-2xl border-l-2 border-[#E7E5E4] pl-6 py-2">
                 "No toxic competition. No popularity-first behavior. Just genuine support."
               </p>
               <p>
                 We enforce respectful conversation rules and reduce spam, ensuring that the community remains a safe, kind, and useful environment for everyone.
               </p>
             </div>
          </motion.div>
        </section>

        {/* 6. FEATURED CONVERSATIONS - DYNAMIC FADING IMMERSION */}
        <section className="relative w-full py-10 mt-12 mb-32 flex justify-center">
          <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br from-[#f5f3ff]/60 to-[#faf5ff]/40 border border-[#ede9fe]/50 overflow-hidden shadow-sm">
            
            {/* Soft decorative background orbs */}
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#e9d5ff]/30 rounded-full blur-[60px] z-0 pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#fbcfe8]/20 rounded-full blur-[80px] z-0 pointer-events-none" />

            <div className="relative z-10 w-full h-full">
              {[
                { text: `"How do I stay focused during semester exams?"`, top: "25%", left: "30%", delay: 0 },
                { text: `"Placement season is making me anxious — what helped you?"`, top: "45%", left: "70%", delay: 2 },
                { text: `"Best way to deal with hostel loneliness?"`, top: "65%", left: "35%", delay: 5 },
                { text: `"What study habit actually worked for you?"`, top: "30%", left: "75%", delay: 7 },
                { text: `"How do you restart after a bad week?"`, top: "80%", left: "60%", delay: 1 },
                { text: `"Feeling behind everyone else in my batch."`, top: "35%", left: "20%", delay: 4 },
                { text: `"Looking for study buddies for the weekend."`, top: "75%", left: "35%", delay: 8 },
                { text: `"Any tips for managing time between clubs and academics?"`, top: "55%", left: "80%", delay: 3 },
                { text: `"Just bombed a mid-term. Need some encouragement."`, top: "50%", left: "15%", delay: 9 },
                { text: `"What's your go-to comfort meal in the mess?"`, top: "15%", left: "60%", delay: 6 },
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
                  className="absolute italic font-serif text-[16px] md:text-[18px] text-[#4c4263] w-max max-w-[320px] text-center tracking-wide"
                  style={{ top: item.top, left: item.left, x: "-50%", y: "-50%" }}
                >
                  {item.text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. SOCIAL VALUE & BELONGING */}
        <section className="relative py-20 md:py-48 flex flex-col items-center text-center">
          <motion.div {...fadeUp} className="max-w-4xl flex flex-col md:flex-row gap-16 md:gap-32 text-left items-start">
            <div className="flex-1">
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Shared Experience</h3>
              <p className="font-serif text-2xl md:text-3xl text-[#57534E] font-light leading-relaxed mb-4">
                Learn from those who have been there.
              </p>
              <p className="text-[#78716C] font-light leading-relaxed">
                Discover helpful routines, gain fresh perspectives, and realize that the pressure you feel is completely normal. 
              </p>
            </div>
            
            <div className="flex-1">
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Quiet Belonging</h3>
              <p className="font-serif text-2xl md:text-3xl text-[#57534E] font-light leading-relaxed mb-4">
                A community where you feel understood.
              </p>
              <p className="text-[#78716C] font-light leading-relaxed">
                No loud social media metrics. Just a space to listen, be heard, and quietly support one another through the academic journey.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 8. TESTIMONIALS */}
        <section className="relative py-20 md:py-48 flex flex-col items-center">
          <motion.div {...fadeUp} className="max-w-2xl text-center mb-32">
             <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Student Voices</h2>
             <p className="font-serif text-3xl md:text-5xl text-[#57534E] font-light leading-relaxed">
               Honest thoughts from the community.
             </p>
          </motion.div>

          <div className="flex flex-col gap-32 max-w-4xl text-center">
            {[
              { quote: "Finally a place where people talk about placement anxiety without turning it into a competition.", author: "Engineering Student" },
              { quote: "It helps to read about others going through the exact same syllabus struggles.", author: "Medical Student" },
              { quote: "I love that there are no 'likes' or popularity contests here. It just feels like a genuine conversation.", author: "BBA Student" },
              { quote: "When I was confused about my final-year project, the advice I got here was actually grounded and realistic.", author: "Final-Year Student" },
              { quote: "It’s my safe space to vent about hostel life and realize I'm not alone.", author: "Postgraduate Student" },
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

        {/* FINAL CTA */}
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
          <motion.div {...fadeUp} className="max-w-3xl flex flex-col items-center z-10 relative">
            <h2 className="font-serif text-5xl md:text-7xl text-[#1C1917] tracking-tight mb-8">
              Find a space that <br className="hidden md:block" />
              <span className="italic text-[#57534E]">understands student life.</span>
            </h2>
            
            <button className="text-[13px] tracking-[0.15em] uppercase font-medium border-b border-[#1C1917] pb-1 hover:text-[#78716C] hover:border-[#78716C] transition-colors duration-500 mb-6 mt-12">
              Join the community
            </button>
            <p className="text-sm text-[#A8A29E] font-light">
              Free to join. Thoughtfully moderated. Made for students.
            </p>
          </motion.div>
        </section>
        
      </div>
      
      {/* Hyper minimalist footer override for Community Page */}
      <div className="relative w-full bg-transparent pt-12">
        <style>{`
          .footer-community-override * {
            color: #1C1917 !important;
            border-color: rgba(0,0,0,0.15) !important;
          }
          .footer-community-override button,
          .footer-community-override span[style*="background"] {
            background: rgba(0,0,0,0.03) !important;
          }
          .footer-community-override button:hover {
            background: rgba(0,0,0,0.08) !important;
          }
          .footer-community-override a:hover,
          .footer-community-override a:hover * {
            color: #9b72cf !important;
            background: transparent !important;
          }
        `}</style>
        <div className="footer-community-override">
          <Footer />
        </div>
      </div>
    </main>
  );
}
