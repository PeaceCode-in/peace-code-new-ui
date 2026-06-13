"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Heart, Phone, Clock, ArrowRight } from "lucide-react";
import { Nav, Footer } from "./index";
import { useState } from "react";

/* ─── Hover-highlight word component ─── */
function HighlightWord({ children, color = "#1E3A8A" }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="relative inline-block cursor-default transition-all duration-700 ease-out hover:text-[var(--hw-color)]"
      style={{ "--hw-color": color } as React.CSSProperties}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-0 peer-hover:scale-x-100" />
    </span>
  );
}

/* ─── Interactive hover phrase ─── */
function HoverPhrase({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline cursor-default group/phrase">
      <span className="relative z-10 transition-all duration-500 ease-out group-hover/phrase:text-[#1C1917] group-hover/phrase:font-normal">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1E3A8A]/30 origin-left scale-x-0 group-hover/phrase:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </span>
  );
}

export default function PsychologistRoute() {
  const { scrollY } = useScroll();
  const rightImgY = useTransform(scrollY, [0, 1000], [0, -120]);
  const leftImgY = useTransform(scrollY, [0, 1000], [0, -80]);
  const parallaxSlow = useTransform(scrollY, [0, 3000], [0, -100]);

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

  // Active step for the "How it works" section
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { label: "Choose", desc: "Select college counselor or PeaceCode psychologist based on your needs." },
    { label: "Browse", desc: "View available professionals and their open time slots." },
    { label: "Book", desc: "Reserve a session in seconds, directly from your phone." },
    { label: "Connect", desc: "Join the session privately through the PeaceCode mobile app." },
    { label: "Speak", desc: "Talk openly in a safe, confidential, judgment-free space." },
    { label: "Continue", desc: "Schedule follow-ups or explore other support layers anytime." },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#faf9f1] text-[#1C1917] font-sans selection:bg-[#E7E5E4] selection:text-[#1C1917]">

      {/* Background Gradient */}
      <div
        className="absolute top-0 inset-x-0 h-[900px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, #E8E0F0 0%, #EDE8F4 25%, #F2E8EA 50%, #faf9f1 85%)"
        }}
      />

      {/* Top Right Cloud */}
      <motion.img
        src="/Untitled design (35).svg"
        alt=""
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
        className="absolute top-0 right-[-8%] w-[35vw] max-w-[500px] pointer-events-none z-[1] drop-shadow-sm object-contain mix-blend-multiply"
        style={{ y: rightImgY }}
      />

      {/* Bottom Left Cloud */}
      <motion.img
        src="/Untitled design (36).svg"
        alt=""
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
        className="absolute top-[60vh] left-[-18%] w-[40vw] max-w-[550px] pointer-events-none z-[1] drop-shadow-sm object-contain mix-blend-multiply"
        style={{ y: leftImgY }}
      />

      <Nav />

      {/* ═══════════════════════════════════════════════════
          1. HERO SECTION
          ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-40 pb-24 md:pb-32 px-6 md:px-10 overflow-visible z-20">

        {/* Flock of Birds */}
        {/* Lead bird */}
        <motion.div
          animate={{ y: [-6, 6, -6], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute z-[15] pointer-events-none select-none"
          style={{ bottom: "30%", right: "8%" }}
        >
          <img
            src="/Untitled design (41).svg"
            alt=""
            className="w-[9vw] max-w-[120px] min-w-[60px] drop-shadow-md"
            style={{ transform: "scaleX(-1)" }}
          />
        </motion.div>

        {/* Left wing follower 1 */}
        <motion.div
          animate={{ y: [-5, 5, -5], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.3 }}
          className="absolute z-[15] pointer-events-none select-none"
          style={{ bottom: "20%", right: "15%" }}
        >
          <img
            src="/Untitled design (42).svg"
            alt=""
            className="w-[7vw] max-w-[90px] min-w-[45px] drop-shadow-sm opacity-90"
            style={{ transform: "scaleX(-1)" }}
          />
        </motion.div>

        {/* Right wing follower 1 */}
        <motion.div
          animate={{ y: [-4, 4, -4], x: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 11, ease: "easeInOut", delay: 0.6 }}
          className="absolute z-[15] pointer-events-none select-none"
          style={{ bottom: "38%", right: "16%" }}
        >
          <img
            src="/Untitled design (42).svg"
            alt=""
            className="w-[6vw] max-w-[80px] min-w-[40px] drop-shadow-sm opacity-85"
            style={{ transform: "scaleX(-1)" }}
          />
        </motion.div>

        {/* Left wing follower 2 */}
        <motion.div
          animate={{ y: [-6, 6, -6], x: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 9.5, ease: "easeInOut", delay: 0.9 }}
          className="absolute z-[15] pointer-events-none select-none"
          style={{ bottom: "12%", right: "22%" }}
        >
          <img
            src="/Untitled design (41).svg"
            alt=""
            className="w-[5vw] max-w-[70px] min-w-[35px] drop-shadow-sm opacity-80"
            style={{ transform: "scaleX(-1)" }}
          />
        </motion.div>

        {/* Right wing follower 2 */}
        <motion.div
          animate={{ y: [-5, 5, -5], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 10.5, ease: "easeInOut", delay: 1.2 }}
          className="absolute z-[15] pointer-events-none select-none"
          style={{ bottom: "44%", right: "24%" }}
        >
          <img
            src="/Untitled design (41).svg"
            alt=""
            className="w-[5.5vw] max-w-[75px] min-w-[35px] drop-shadow-sm opacity-75"
            style={{ transform: "scaleX(-1)" }}
          />
        </motion.div>

        {/* Trailing bird */}
        <motion.div
          animate={{ y: [-4, 4, -4], x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 8.5, ease: "easeInOut", delay: 1.5 }}
          className="absolute z-[15] pointer-events-none select-none"
          style={{ bottom: "28%", right: "26%" }}
        >
          <img
            src="/Untitled design (42).svg"
            alt=""
            className="w-[4vw] max-w-[60px] min-w-[30px] drop-shadow-sm opacity-70"
            style={{ transform: "scaleX(-1)" }}
          />
        </motion.div>

        <motion.div {...fadeUp} className="relative mx-auto max-w-[1024px] text-center z-20 pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white mb-8 shadow-sm">
            <Heart className="w-4 h-4 text-[#8B6DB0]" />
            <span className="text-[13px] font-bold text-[#1E3048] tracking-wide uppercase">Professional Support</span>
          </div>

          <h1 className="main-page-title mb-8 font-serif text-5xl md:text-7xl font-light tracking-tight text-[#0A2540] leading-[1.1]">
            Real support, without the wait.
          </h1>
          <p className="text-[#4F6072] max-w-[680px] mx-auto text-[18px] md:text-[21px] leading-relaxed mb-14 font-light">
            PeaceCode connects students to <HoverPhrase>campus psychologists</HoverPhrase> and <HoverPhrase>PeaceCode psychologists</HoverPhrase>, so getting professional help feels simple, private, and immediate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="bg-[#1C1917] text-white px-9 py-4 rounded-full text-[14px] tracking-wide font-medium hover:bg-[#333] transition-colors duration-500 shadow-sm">
              Explore psychologist support
            </button>
            <button className="text-[#1C1917] px-8 py-3.5 rounded-full text-[14px] tracking-wide font-medium border border-[#1C1917]/20 hover:border-[#1C1917]/40 transition-colors duration-500 bg-white/40 backdrop-blur-sm">
              How it works
            </button>
          </div>
        </motion.div>

      </section>

      {/* Page Wrapper */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">

        {/* ═══════════════════════════════════════════════════
            2. THE SUPPORT LADDER
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-48 flex flex-col items-center justify-center text-center px-6">
          <motion.div {...fadeUp} className="w-full max-w-5xl flex flex-col items-center z-10">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-6">The Support Ecosystem</h2>
            <p className="font-serif text-3xl md:text-5xl text-[#57534E] font-light leading-relaxed mb-24 max-w-3xl">
              Three layers of care, each building on the last.
            </p>

            <div className="w-full max-w-4xl flex flex-col gap-8 relative">

              {/* PeaceBot */}
              <motion.div
                {...fadeDelay(0)}
                className="relative z-10 flex flex-col items-center gap-6 p-8 md:p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-700 group cursor-default"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/80 border border-[#D6D3D1]/50 shadow-sm flex items-center justify-center text-[#A8A29E] font-serif text-2xl group-hover:scale-110 group-hover:bg-white group-hover:text-[#1C1917] transition-all duration-700">
                  01
                </div>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-[#1C1917]">PeaceBot</h3>
                  <p className="text-[#78716C] font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">An AI companion available 24/7. Quick, structured check-ins to ground yourself when you need a first step.</p>
                </div>
              </motion.div>

              {/* Peace Buddies */}
              <motion.div
                {...fadeDelay(0.15)}
                className="relative z-10 flex flex-col items-center gap-6 p-8 md:p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-700 group cursor-default"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/80 border border-[#D6D3D1]/50 shadow-sm flex items-center justify-center text-[#A8A29E] font-serif text-2xl group-hover:scale-110 group-hover:bg-white group-hover:text-[#1C1917] transition-all duration-700">
                  02
                </div>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-[#1C1917]">Peace Buddies</h3>
                  <p className="text-[#78716C] font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">Trained student listeners who hold space for you. Real humans who understand what you are going through.</p>
                </div>
              </motion.div>

              {/* Psychologist */}
              <motion.div
                {...fadeDelay(0.3)}
                className="relative z-10 flex flex-col items-center gap-6 p-8 md:p-12 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_80px_rgba(139,109,176,0.15)] hover:-translate-y-2 transition-all duration-700 group cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#EDE8F4]/40 to-[#F2E8EA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[-1]" />
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#8B6DB0]/8 border border-[#8B6DB0]/20 flex items-center justify-center text-[#8B6DB0] font-serif text-3xl group-hover:scale-110 group-hover:bg-[#8B6DB0]/15 transition-all duration-700 shadow-inner">
                  03
                </div>
                <div>
                  <h3 className="font-serif text-4xl md:text-5xl tracking-tight mb-4 text-[#1C1917]">Psychologist</h3>
                  <p className="text-[#57534E] font-medium text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">Professional, clinical support. When deeper care and structured therapeutic guidance is needed to help you heal and grow.</p>
                </div>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-20 text-[19px] text-[#78716C] font-light italic leading-relaxed font-serif max-w-2xl mx-auto"
            >
              "Not every difficult moment requires a psychologist. But when it does, PeaceCode makes reaching one simple."
            </motion.p>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            EDITORIAL STATEMENT BREAK
            ═══════════════════════════════════════════════════ */}
        <section className="relative w-full py-8 md:py-12 flex justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-5xl border-y border-[#E7E5E4]/60 py-10 px-6"
          >
            <p className="font-serif text-3xl md:text-[40px] text-[#1C1917] font-light italic leading-relaxed">
              A psychologist, directly in your pocket.
            </p>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            3. TWO TYPES OF PSYCHOLOGISTS
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-48 flex flex-col items-center">
          <motion.div {...fadeUp} className="max-w-3xl text-center mb-20">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Two Pathways</h2>
            <p className="font-serif text-3xl md:text-5xl text-[#57534E] font-light leading-relaxed">
              Professional support, two ways.
            </p>
          </motion.div>

          <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-8 items-stretch">

            {/* College Counselors */}
            <motion.div
              {...fadeDelay(0)}
              className="flex-1 relative group"
            >
              <div className="relative h-full p-10 md:p-14 rounded-[2.5rem] bg-white/50 backdrop-blur-xl border border-white/70 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.07)] transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8F0E8]/40 to-[#f2f7f2]/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[-1]" />

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#4CAF50]/60" />
                  <span className="text-[12px] tracking-[0.2em] uppercase font-medium text-[#78716C]">Free Access</span>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6 leading-tight">
                  College<br />Counselors
                </h3>

                <div className="space-y-5 text-[#57534E] font-light text-[17px] leading-relaxed mb-10">
                  <p>Professional counselors provided directly by your college, now accessible through PeaceCode.</p>
                  <p>No more awkward walks to the counseling cell. Book discreetly and connect right from your hostel room.</p>
                </div>

                <div className="space-y-3">
                  {[
                    "Provided by your college",
                    "Free for enrolled students",
                    "Available during college hours",
                    "Accessible through PeaceCode"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[15px] text-[#78716C] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]/50 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* PeaceCode Psychologists */}
            <motion.div
              {...fadeDelay(0.15)}
              className="flex-1 relative group"
            >
              <div className="relative h-full p-10 md:p-14 rounded-[2.5rem] bg-white/50 backdrop-blur-xl border border-white/70 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.07)] transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EDE8F4]/40 to-[#E8E0F0]/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[-1]" />

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#8B6DB0]/60" />
                  <span className="text-[12px] tracking-[0.2em] uppercase font-medium text-[#78716C]">Paid Access</span>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6 leading-tight">
                  PeaceCode<br />Psychologists
                </h3>

                <div className="space-y-5 text-[#57534E] font-light text-[17px] leading-relaxed mb-10">
                  <p>Professional psychologists available directly through PeaceCode for deeper or continued support.</p>
                  <p>When you need more flexible access, extended sessions, or professional help beyond what the college provides.</p>
                </div>

                <div className="space-y-3">
                  {[
                    "Available through PeaceCode",
                    "Flexible scheduling",
                    "Extended and continued support",
                    "Private, mobile-first access"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[15px] text-[#78716C] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B6DB0]/50 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            4. WHEN TO SEEK PROFESSIONAL HELP
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-48 flex flex-col md:flex-row items-center justify-between gap-16">

          <motion.div {...fadeUp} className="md:w-6/12 text-left relative z-10">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-6">Recognizing the Moment</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-[#57534E] font-light leading-relaxed mb-10">
              When things feel too heavy to carry alone.
            </h3>

            <div className="space-y-5 text-[#57534E] font-light text-lg leading-relaxed mb-10">
              <p>
                Sometimes the weight is more than a conversation with a friend can hold. There is no shame in that. It is wisdom.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {[
                "Persistent anxiety",
                "Emotional overwhelm",
                "Panic or distress",
                "Burnout and exhaustion",
                "Sleep difficulties",
                "Loss of motivation",
                "Feeling stuck for too long",
                "Difficulty functioning"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeDelay(i * 0.05)}
                  className="flex items-center gap-3 group/item cursor-default"
                >
                  <span className="w-1 h-1 rounded-full bg-[#A8A29E] group-hover/item:bg-[#8B6DB0] transition-colors duration-500 shrink-0" />
                  <span className="text-[16px] text-[#78716C] font-light group-hover/item:text-[#1C1917] transition-colors duration-500">{item}</span>
                </motion.div>
              ))}
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
              src="/Untitled design (51).svg"
              alt="Finding calm through support"
              className="w-full h-auto max-w-[420px] z-10 mix-blend-multiply opacity-85 rounded-3xl"
            />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            EDITORIAL QUOTE BREAK
            ═══════════════════════════════════════════════════ */}
        <section className="relative w-full py-8 md:py-12 flex justify-center text-center">
          <motion.div
            {...fadeUp}
            className="w-full max-w-4xl py-10 px-6"
          >
            <p className="font-serif text-3xl md:text-[42px] text-[#1C1917] font-light italic leading-relaxed">
              "A psychologist can help you understand what your mind is trying to tell you."
            </p>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            5. WHY MOBILE MATTERS
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-48 flex flex-col md:flex-row-reverse items-center justify-between gap-16">
          <motion.div {...fadeUp} className="md:w-6/12 text-left relative z-10">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">Accessible by Design</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-[#57534E] font-light leading-relaxed mb-10">
              Help should be reachable in the moment it is needed.
            </h3>

            <div className="space-y-6 text-lg text-[#78716C] font-light leading-relaxed">
              <p>
                Students do not always want to visit the college counseling cell. Some may feel hesitant, overwhelmed, or simply not have the time.
              </p>
              <p>
                <HoverPhrase>Mobile consultation</HoverPhrase> lowers friction. It makes access feel easier, more private, and more immediate. Help becomes reachable from wherever you are—your hostel room, a quiet library corner, or outside the mess.
              </p>
              <p>
                No running across campus. No awkward waiting rooms. Just <HoverPhrase>direct consultation</HoverPhrase> from your phone.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-12">
              <div className="flex items-center gap-2 text-sm text-[#78716C]">
                <Phone className="w-4 h-4" />
                <span>Mobile-first</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#78716C]">
                <ShieldCheck className="w-4 h-4" />
                <span>Private and secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#78716C]">
                <Clock className="w-4 h-4" />
                <span>Available when needed</span>
              </div>
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
              src="/Untitled design (54).svg"
              alt="Mobile psychologist consultation"
              className="w-full h-auto max-w-[450px] z-10 mix-blend-multiply opacity-90 rounded-3xl"
            />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            6. HOW THE SESSION WORKS
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-48 flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24 w-full">
          {/* Sticky Left Header */}
          <motion.div {...fadeUp} className="w-full md:w-5/12 md:sticky md:top-48 z-10">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1C1917] mb-6">The Process</h2>
            <p className="font-serif text-4xl md:text-6xl text-[#57534E] font-light leading-tight">
              Calm,<br className="hidden md:block" />seamless,<br className="hidden md:block" />and simple.
            </p>
          </motion.div>

          {/* Vertical Steps */}
          <div className="w-full md:w-7/12 relative">
            {/* Minimal vertical line */}
            <div className="absolute left-[3px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-[#E7E5E4] via-[#D6D3D1] to-transparent z-0" />

            <div className="flex flex-col gap-12 sm:gap-20 relative z-10 pl-10 md:pl-16">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  {...fadeDelay(i * 0.1)}
                  className="group relative"
                >
                  {/* Subtle Node */}
                  <div className="absolute -left-[38px] md:-left-[62px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#A8A29E] group-hover:bg-[#8B6DB0] group-hover:scale-[2] transition-all duration-700 shadow-sm" />
                  
                  <span className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#A8A29E] mb-3 group-hover:text-[#8B6DB0] transition-colors duration-700">
                    Step 0{i + 1}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-4">
                    {step.label}
                  </h3>
                  <p className="text-[#78716C] font-light text-lg md:text-[19px] leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            7. TESTIMONIALS / QUOTES
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-48 flex flex-col items-center">

          {/* Ambient Cloud */}
          <motion.img
            src="/Untitled design (37).svg"
            alt=""
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-[5%] left-[-20%] md:left-[-10%] w-[50vw] max-w-[500px] pointer-events-none z-0 mix-blend-multiply opacity-80"
          />

          <motion.div {...fadeUp} className="max-w-2xl text-center mb-24 md:mb-32 relative z-10">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-6">Student Reflections</h2>
            <p className="font-serif text-3xl md:text-5xl text-[#1C1917] font-light leading-relaxed">
              Voices from the community.
            </p>
          </motion.div>

          <div className="flex flex-col gap-16 max-w-3xl relative z-10 px-6 mx-auto w-full">
            {[
              { quote: "I did not want to wait for a separate college process. PeaceCode made it simpler.", author: "Third Year Student" },
              { quote: "It felt much easier to talk to someone directly from my phone.", author: "Hostel Resident" },
              { quote: "I started with PeaceBot, then a Peace Buddy, and only then needed psychologist support. The flow made sense.", author: "Final Year Student" },
              { quote: "Having both free college access and paid support feels reassuring.", author: "Second Year Student" },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                className="relative pl-8 md:pl-12 border-l-[1.5px] border-[#D6D3D1]/50 hover:border-[#8B6DB0]/50 transition-colors duration-700 group cursor-default"
              >
                <p className="font-serif text-2xl md:text-3xl text-[#1C1917] leading-relaxed mb-6 font-light group-hover:text-[#57534E] transition-colors duration-700">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#78716C] font-medium">
                    {testimonial.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            8. TRUST AND SAFETY
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-48 flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div {...fadeUp} className="md:w-6/12 text-left relative z-10">
            <div className="inline-flex items-center gap-2 mb-8 text-[#A8A29E]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-medium">Safe & Trustworthy</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-[#57534E] font-light leading-relaxed mb-10">
              Built on care, guided by trust.
            </h2>
            <div className="space-y-6 text-lg text-[#78716C] font-light leading-relaxed">
              <p>
                Every psychologist on PeaceCode is a real, licensed professional. Access is structured, support is private, and students are guided thoughtfully toward the right level of help.
              </p>
              <p>
                The experience is designed to be respectful and safe. Your conversations remain confidential, your data stays private, and the platform exists solely to connect you with the care you deserve.
              </p>
              <p>
                PeaceCode does not replace emergency services. If you are in crisis, the platform will guide you to immediate help.
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
              src="/Untitled design (50).svg"
              alt="Trust and safety"
              className="w-full h-auto max-w-[420px] z-10 mix-blend-multiply opacity-85 rounded-3xl"
            />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            EDITORIAL QUOTE BREAK — COMPASSION
            ═══════════════════════════════════════════════════ */}
        <section className="relative w-full py-16 md:py-24 flex justify-center text-center">
          <motion.div
            {...fadeUp}
            className="w-full max-w-3xl bg-[#EDE8F4]/30 rounded-3xl p-12 md:p-20 border border-[#E0D8EA]/50 shadow-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grain-overlay.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
            <h3 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6 font-light">The Right Level of Care</h3>
            <p className="text-[#57534E] font-light leading-relaxed text-lg md:text-xl">
              PeaceCode's three support layers are designed to meet students wherever they are. AI support, peer support, and professional care work together to ensure that no student has to navigate difficult moments alone.
            </p>
          </motion.div>
        </section>

      </div>
      {/* End of Page Wrapper */}

      {/* ═══════════════════════════════════════════════════
          9. FINAL CTA
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-48 flex flex-col items-center text-center mb-10 w-full">

        {/* Edge Illustration */}
        <motion.img
          src="/Untitled design (35).svg"
          alt=""
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute right-[-25vw] md:right-[-15vw] top-[-10%] w-[50vw] max-w-[600px] pointer-events-none z-[0] opacity-80 mix-blend-multiply drop-shadow-sm"
          style={{ y: rightImgY }}
        />

        {/* Left Cloud */}
        <motion.img
          src="/Untitled design (36).svg"
          alt=""
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-[-25vw] md:left-[-15vw] bottom-[-10%] w-[45vw] max-w-[550px] pointer-events-none z-[0] opacity-70 mix-blend-multiply drop-shadow-sm"
        />

        <motion.div {...fadeUp} className="max-w-3xl flex flex-col items-center z-10 relative px-6">
          <h2 className="font-serif text-5xl md:text-7xl text-[#1C1917] tracking-tight mb-8">
            Professional support,<br className="hidden md:block" />
            <span className="italic text-[#57534E]">made accessible.</span>
          </h2>
          <p className="text-xl text-[#78716C] font-light mb-14 leading-relaxed max-w-2xl">
            Reach a psychologist through PeaceCode when you need deeper guidance. From your phone. On your terms.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="bg-[#1C1917] text-white px-10 py-4 rounded-full text-[15px] tracking-wide font-medium hover:bg-[#333] transition-colors duration-500 shadow-sm">
              Book a session
            </button>
            <button className="text-[14px] font-medium text-[#1C1917] border-b border-[#1C1917] pb-0.5 hover:text-[#57534E] hover:border-[#57534E] transition-colors duration-500">
              Explore support layers
            </button>
          </div>

          <p className="mt-10 text-sm text-[#A8A29E] font-light flex items-center gap-2">
            <Heart className="w-3.5 h-3.5" /> Confidential. Respectful. Student-first.
          </p>
        </motion.div>
      </section>

      {/* Hyper minimalist footer override */}
      <div className="relative w-full bg-transparent pt-12 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
        <style>{`
          .footer-psychologist-override * {
            color: #1C1917 !important;
            border-color: rgba(0,0,0,0.15) !important;
          }
          .footer-psychologist-override button,
          .footer-psychologist-override span[style*="background"] {
            background: rgba(0,0,0,0.03) !important;
          }
          .footer-psychologist-override button:hover {
            background: rgba(0,0,0,0.08) !important;
          }
          .footer-psychologist-override a:hover,
          .footer-psychologist-override a:hover * {
            color: #8B6DB0 !important;
            background: transparent !important;
          }
        `}</style>
        <div className="footer-psychologist-override">
          <Footer />
        </div>
      </div>
    </main>
  );
}
