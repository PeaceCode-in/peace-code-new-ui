"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Nav, Footer } from "./index";

/* ─── Interactive hover phrase ─── */
function HoverPhrase({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline cursor-default group/phrase">
      <span className="relative z-10 transition-all duration-500 ease-out group-hover/phrase:text-[#1C1917] group-hover/phrase:font-normal">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#8B6DB0]/40 origin-left scale-x-0 group-hover/phrase:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </span>
  );
}

export default function PeaceBotRoute() {
  const { scrollY } = useScroll();
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

  /* Chat interface state for the visual showcase */
  const [visibleMessages, setVisibleMessages] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);
  const [chatInView, setChatInView] = useState(false);

  useEffect(() => {
    if (!chatInView) return;
    const msgs = 5;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleMessages(i);
      if (i >= msgs) clearInterval(interval);
    }, 800);
    return () => clearInterval(interval);
  }, [chatInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setChatInView(true);
      },
      { threshold: 0.3 }
    );
    if (chatRef.current) observer.observe(chatRef.current);
    return () => observer.disconnect();
  }, []);

  const chatMessages = [
    { from: "user" as const, text: "I can't sleep. My exam is tomorrow and I keep thinking I'm going to fail." },
    { from: "bot" as const, text: "I hear you. That spiral of worry before an exam is really common — you're not alone in this. Let's take a moment together." },
    { from: "bot" as const, text: "Can we try something? Take one slow breath with me. In for 4 counts, hold for 4, out for 6." },
    { from: "user" as const, text: "Okay... that actually helped a little." },
    { from: "bot" as const, text: "Good. You've already prepared. Your mind just needs permission to rest. Would you like a short grounding exercise, or would you prefer to talk through what's worrying you most?" },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#faf9f1] text-[#1C1917] font-sans selection:bg-[#E7E5E4] selection:text-[#1C1917]">

      {/* Background Gradient — matching Counseling page */}
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
          1. HERO SECTION — Light editorial gradient
          ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-40 pb-24 md:pb-32 px-6 md:px-10 overflow-visible z-20">

        {/* Flock of Birds */}
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

        {/* Hero Illustration moved down */}

        {/* Hero Content */}
        <motion.div {...fadeUp} className="relative mx-auto max-w-[1024px] text-center z-20 pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#8B6DB0] animate-pulse" />
            <span className="text-[13px] font-bold text-[#1E3048] tracking-wide uppercase">Always Available</span>
          </div>

          <h1 className="main-page-title mb-8 font-serif text-5xl md:text-7xl font-light tracking-tight text-[#0A2540] leading-[1.1]">
            Your calm companion,
            <br />
            <span className="italic text-[#57534E]">any time.</span>
          </h1>

          <p className="text-[#4F6072] max-w-[680px] mx-auto text-[18px] md:text-[21px] leading-relaxed mb-14 font-light">
            An intelligent AI support layer built for students — ready for <HoverPhrase>late-night thoughts</HoverPhrase>, <HoverPhrase>academic stress</HoverPhrase>, <HoverPhrase>emotional spirals</HoverPhrase>, and gentle next-step guidance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="bg-[#1C1917] text-white px-9 py-4 rounded-full text-[14px] tracking-wide font-medium hover:bg-[#333] transition-colors duration-500 shadow-sm">
              Open PeaceBot
            </button>
            <button className="text-[#1C1917] px-8 py-3.5 rounded-full text-[14px] tracking-wide font-medium border border-[#1C1917]/20 hover:border-[#1C1917]/40 transition-colors duration-500 bg-white/40 backdrop-blur-sm">
              See what it can do
            </button>
          </div>
        </motion.div>
      </section>

      {/* Page Wrapper */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">

        {/* ═══════════════════════════════════════════════════
            2. CAPABILITIES — Sticky heading + flowing scroll
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 flex flex-col items-center justify-center gap-16 md:gap-20 w-full">
          <motion.div {...fadeUp} className="w-full max-w-4xl text-center z-10 flex flex-col items-center mx-auto">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-6">
              Capabilities
            </h2>
            <p className="font-serif text-4xl md:text-[52px] text-[#1C1917] font-light leading-[1.15] mb-8 text-center">
              More than a chatbot.{" "}
              <span className="text-[#57534E] italic">A calm intelligence.</span>
            </p>
            <p className="text-[#78716C] font-light text-lg leading-relaxed text-center mx-auto max-w-2xl">
              PeaceBot understands the rhythm of student life. It responds with emotional awareness, not generic answers.
            </p>
          </motion.div>

          <div className="w-full max-w-5xl flex flex-col mx-auto">
            {[
              { icon: "/Untitled design (58).svg", label: "24/7 Emotional Check-ins", desc: "Structured support conversations available any hour, any day. Because difficult moments do not follow a schedule. Whether it's a sudden wave of panic at 3 AM or a subtle sense of unease before a morning class, PeaceBot is always awake and ready to listen without judgment. It offers a continuous presence that you can rely on whenever you need a safe space to unpack your thoughts." },
              { icon: "/Untitled design (59).svg", label: "Exam Anxiety Support", desc: "Calm guidance before, during, and after high-stakes assessments. It helps separate real concerns from anxiety spirals, allowing you to focus on your preparation rather than your fear. By offering tailored grounding techniques and realistic reassurance, it ensures that the pressure feels manageable, helping you approach your exams with a clear, steady mind." },
              { icon: "/Untitled design (60).svg", label: "Grounding Exercises", desc: "Quick mindfulness anchors when your thoughts spiral. Breathing cycles, body scans, and gentle recentering exercises — available instantly to help you regain control. These tools are meticulously designed to pull you out of your head and anchor you safely back into the present moment, shifting your nervous system from panic to peace." },
              { icon: "/Untitled design (61).svg", label: "Mood-Aware Responses", desc: "Adapts its tone to match your emotional state. It meets you where you are, not where it thinks you should be. By recognizing the subtle cues and emotional undertones in your messages, PeaceBot provides exactly the kind of response you need — whether that's gentle comfort, logical restructuring, or just a quiet, empathetic space to vent." },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeDelay(i * 0.06)}
                className="group relative py-12 border-b border-[#E7E5E4]/40 last:border-b-0 cursor-default flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
              >
                <div className="w-24 h-24 md:w-36 md:h-36 flex-shrink-0 flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm" />
                </div>
                <div className="w-full text-center md:text-left">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1C1917] mb-4 tracking-tight group-hover:text-[#8B6DB0] transition-colors duration-700">
                    {item.label}
                  </h3>
                  <p className="text-[#78716C] font-light text-[16px] md:text-[17px] leading-relaxed group-hover:text-[#57534E] transition-colors duration-700">
                    {item.desc}
                  </p>
                </div>
                {/* Subtle hover accent line */}
                <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-[#8B6DB0]/0 group-hover:bg-[#8B6DB0]/30 transition-colors duration-700" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            EDITORIAL STATEMENT BREAK
            ═══════════════════════════════════════════════════ */}
        <section className="relative w-full py-8 md:py-12 flex justify-center text-center">
          <motion.div
            {...fadeUp}
            className="w-full max-w-5xl border-y border-[#E7E5E4]/60 py-16 px-6"
          >
            <p className="font-serif text-3xl md:text-[42px] text-[#1C1917] font-light italic leading-relaxed">
              "It feels like talking to something that actually understands student life."
            </p>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            3. WHAT MAKES PEACEBOT DIFFERENT — Animated Sequences
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-48 w-full max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-32">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-6">The Difference</h2>
            <h3 className="font-serif text-4xl md:text-6xl text-[#1C1917] font-light leading-tight mb-8">
              Not just <span className="italic text-[#8B6DB0]">another</span> chatbot.
            </h3>
            <p className="text-[#78716C] font-light text-xl max-w-2xl mx-auto">
              We didn't build a generic AI. We built a true companion that genuinely understands and adapts to the student experience.
            </p>
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-32">
            {[
              {
                bad: "A generic AI trained on the open internet, optimized for speed, giving cold answers and moving on.",
                good: "Trained specifically for student mental wellness. It understands exam cycles, hostel loneliness, placement stress, and the quiet weight of growing up."
              },
              {
                bad: "A one-size-fits-all productivity assistant that treats everyone the same, regardless of how they feel.",
                good: "Designed around emotional safety and reflective pace. It never rushes you, never judges, never pushes you toward an answer you are not ready for."
              },
              {
                bad: "An isolated tool with no support beyond itself — a standalone chatbot disconnected from real care.",
                good: "A companion that adapts its tone to your emotional state — meeting you where you are, not where it thinks you should be."
              },
              {
                bad: "A replacement for professional help that gives advice it is not qualified to give.",
                good: "Part of a complete support ecosystem. A bridge that gently connects you to Peace Buddies or a Psychologist when you need human support."
              }
            ].map((diff, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                
                {/* 1. Coming Up & 2. Cutting */}
                <div className="md:w-5/12 relative flex justify-end text-center md:text-right">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative inline-block"
                  >
                    <p className="text-[#A8A29E] font-light text-xl md:text-2xl leading-relaxed">
                      {diff.bad}
                    </p>
                    {/* The Cutting Animation */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
                      className="absolute top-[50%] left-0 h-[2px] bg-[#A8A29E]/80 transform -translate-y-1/2"
                    />
                  </motion.div>
                </div>

                {/* Center subtle separator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="hidden md:flex w-[2px] h-16 bg-[#E7E5E4]"
                />

                {/* 3. Sideways (Better approach) */}
                <div className="md:w-5/12 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                  >
                    <p className="font-serif text-2xl md:text-4xl text-[#1C1917] leading-relaxed">
                      {diff.good}
                    </p>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
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
              "PeaceBot is the first calm response. It is not the end of support. It is the start of the right support."
            </p>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            4. PEACEBOT IN ACTION — Alternating editorial layouts
            ═══════════════════════════════════════════════════ */}




        {/* ═══════════════════════════════════════════════════
            5. THE SUPPORT LADDER
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-48 flex flex-col items-center justify-center text-center px-6">
          <motion.div {...fadeUp} className="w-full max-w-5xl flex flex-col items-center z-10">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-6">The Support Ladder</h2>
            <p className="font-serif text-3xl md:text-5xl text-[#57534E] font-light leading-relaxed mb-24 max-w-3xl">
              A graceful path to the right care.
            </p>

            <div className="w-full max-w-4xl flex flex-col gap-8 relative">

              {/* PeaceBot — Layer 01 (EMPHASIZED — this is the PeaceBot page) */}
              <motion.div
                {...fadeDelay(0)}
                className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-10 p-8 md:p-12 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_60px_rgba(0,0,0,0.08)] transition-all duration-700 group md:scale-[1.02] my-2 text-center sm:text-left cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#EDE8F4]/40 to-[#F2E8EA]/30 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[-1]" />
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-[#8B6DB0]/8 border border-[#8B6DB0]/15 flex items-center justify-center text-[#8B6DB0] font-serif text-3xl group-hover:scale-110 transition-all duration-700 shadow-inner">
                  01
                </div>
                <div>
                  <h3 className="font-serif text-4xl md:text-5xl tracking-tight mb-4 text-[#1C1917]">PeaceBot</h3>
                  <p className="text-[#57534E] font-medium text-lg md:text-xl leading-relaxed max-w-xl">The always-available first response. Calm check-ins, grounding exercises, and structured support at any hour. Your calm companion, any time.</p>
                </div>
              </motion.div>

              {/* Peace Buddies — Layer 02 (with hover preview) */}
              <motion.div
                {...fadeDelay(0.15)}
                className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-10 p-8 md:p-10 rounded-[2rem] hover:bg-white/40 transition-colors duration-500 group/ladder text-center sm:text-left cursor-default"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm flex items-center justify-center text-[#A8A29E] font-serif text-2xl group-hover/ladder:scale-110 group-hover/ladder:bg-white group-hover/ladder:text-[#1C1917] transition-all duration-700">
                  02
                </div>
                <div className="relative">
                  <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-3 text-[#1C1917]">Peace Buddies</h3>
                  <p className="text-[#78716C] font-light text-lg leading-relaxed max-w-lg">Trained student listeners who hold space for you. Real human connection when you need more than AI.</p>
                </div>

                {/* Hover Preview Popup */}
                <div className="absolute right-0 md:right-[-20px] top-full mt-3 w-[320px] opacity-0 scale-95 pointer-events-none group-hover/ladder:opacity-100 group-hover/ladder:scale-100 group-hover/ladder:pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 hidden md:block">
                  <a href="/peace-buddies" className="block">
                    <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/80">
                      {/* Mini page preview header */}
                      <div className="relative h-[140px] overflow-hidden" style={{ background: "linear-gradient(to bottom, #EAF0F6 0%, #F0F5F9 60%, #faf9f1 100%)" }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                          <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#1E3048]/60 mb-2">Peer Support</span>
                          <p className="font-serif text-[18px] text-[#0A2540] font-light leading-tight">Who are Peace Buddies?</p>
                        </div>
                        {/* Mini birds */}
                        <img src="/Untitled design (42).svg" alt="" className="absolute bottom-3 right-4 w-6 opacity-40" style={{ transform: "scaleX(-1)" }} />
                      </div>
                      {/* Preview footer */}
                      <div className="bg-white px-5 py-3.5 flex items-center justify-between">
                        <span className="text-[12px] text-[#78716C] font-light">peacecode.in/peace-buddies</span>
                        <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-[#8B6DB0]">Visit →</span>
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Psychologist — Layer 03 (with hover preview) */}
              <motion.div
                {...fadeDelay(0.3)}
                className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-10 p-8 md:p-10 rounded-[2rem] hover:bg-white/40 transition-colors duration-500 group/ladder text-center sm:text-left cursor-default"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm flex items-center justify-center text-[#A8A29E] font-serif text-2xl group-hover/ladder:scale-110 group-hover/ladder:bg-white group-hover/ladder:text-[#1C1917] transition-all duration-700">
                  03
                </div>
                <div className="relative">
                  <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-3 text-[#1C1917]">Psychologist</h3>
                  <p className="text-[#78716C] font-light text-lg leading-relaxed max-w-lg">Professional, clinical support. When deeper care and structured therapeutic guidance is needed.</p>
                </div>

                {/* Hover Preview Popup */}
                <div className="absolute right-0 md:right-[-20px] top-full mt-3 w-[320px] opacity-0 scale-95 pointer-events-none group-hover/ladder:opacity-100 group-hover/ladder:scale-100 group-hover/ladder:pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 hidden md:block">
                  <a href="/psychologist" className="block">
                    <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/80">
                      {/* Mini page preview header */}
                      <div className="relative h-[140px] overflow-hidden" style={{ background: "linear-gradient(to bottom, #E8E0F0 0%, #EDE8F4 50%, #faf9f1 100%)" }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                          <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#8B6DB0]/60 mb-2">Professional Support</span>
                          <p className="font-serif text-[18px] text-[#0A2540] font-light leading-tight">Real support, without the wait.</p>
                        </div>
                        {/* Mini cloud */}
                        <img src="/Untitled design (35).svg" alt="" className="absolute top-0 right-[-10px] w-16 opacity-30 mix-blend-multiply" />
                      </div>
                      {/* Preview footer */}
                      <div className="bg-white px-5 py-3.5 flex items-center justify-between">
                        <span className="text-[12px] text-[#78716C] font-light">peacecode.in/psychologist</span>
                        <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-[#8B6DB0]">Visit →</span>
                      </div>
                    </div>
                  </a>
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
              "Every student's journey is different. PeaceBot helps you find the right level of care — not too much, not too little."
            </motion.p>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            6. WHY STUDENTS TRUST PEACEBOT — Typographic flow
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-48 flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24">

          <motion.div {...fadeUp} className="md:w-5/12 md:sticky md:top-48 z-10">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-6">
              Built on Trust
            </h2>
            <p className="font-serif text-4xl md:text-[52px] text-[#1C1917] font-light leading-[1.15] mb-8">
              Designed for students who need to{" "}
              <span className="text-[#57534E] italic">feel safe first.</span>
            </p>

            {/* Tree illustration flipped horizontally via Framer Motion */}
            <motion.img
              src="/Untitled design (34).svg"
              alt=""
              initial={{ opacity: 0, x: -30, scaleX: -1 }}
              whileInView={{ opacity: 1, x: 0, scaleX: -1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              className="mt-16 -ml-[35%] md:-ml-[55%] w-[160%] max-w-[750px] pointer-events-none z-0 mix-blend-multiply opacity-80"
            />
          </motion.div>

          <div className="md:w-6/12 relative z-10">
            {[
              "Available at any hour — because difficult moments do not follow a schedule.",
              "Designed around student life — exam cycles, hostel loneliness, placement stress, and everything in between.",
              "Always calm, always respectful — it never rushes you, never judges you, never pushes you.",
              "Responds with empathy — not scripts, not templates, not generic motivational phrases.",
              "Helps you feel less alone — even at 3 AM when no one else is awake.",
              "Part of a trusted ecosystem — not a standalone app, but a layer in a complete support system.",
              "The first safe step — before you are ready to talk to another human, PeaceBot is here.",
            ].map((statement, i) => (
              <motion.div
                key={i}
                {...fadeDelay(i * 0.06)}
                className="group py-8 border-b border-[#E7E5E4]/30 last:border-b-0 cursor-default"
              >
                <p className="font-serif text-xl md:text-2xl text-[#57534E] font-light leading-relaxed group-hover:text-[#1C1917] transition-colors duration-700">
                  {statement}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            7. RESPONSIBLE AI
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-16 md:py-24 flex justify-center">
          <motion.div
            {...fadeUp}
            className="w-full max-w-3xl bg-[#EDE8F4]/20 rounded-[2rem] p-12 md:p-20 border border-[#E0D8EA]/30 shadow-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
                backgroundSize: "240px 240px",
              }}
            />

            <h3 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-8 font-light text-center">
              Responsible by Design
            </h3>
            <div className="space-y-6 text-[#57534E] font-light text-lg md:text-[19px] leading-relaxed text-center max-w-2xl mx-auto">
              <p>
                PeaceBot is designed to support, not replace professional care. It is a student companion — not a therapist, not a diagnosis engine.
              </p>
              <p>
                When deeper help is needed, PeaceBot actively encourages connecting with real human support. It knows its own limits.
              </p>
              <p>
                It works best as part of the PeaceCode ecosystem — an intelligent first step in a thoughtful support ladder.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              {["Student-first", "Emotionally safe", "Non-diagnostic", "Ecosystem-aligned"].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-1.5 bg-white/60 border border-[#E0D8EA]/40 rounded-full text-[13px] text-[#78716C] font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            8. VISUAL SHOWCASE — Chat Interface (text + chat side-by-side)
            ═══════════════════════════════════════════════════ */}
        <section ref={chatRef} className="relative py-24 md:py-48 flex flex-col md:flex-row items-center justify-between gap-16">

          {/* Ambient right edge cloud */}
          <motion.img
            src="/Untitled design (35).svg"
            alt=""
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-[10%] right-[-25%] md:right-[-15%] w-[45vw] max-w-[550px] pointer-events-none z-0 mix-blend-multiply opacity-70"
          />

          {/* Left: Heading + description */}
          <motion.div {...fadeUp} className="md:w-5/12 relative z-10">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-6">
              The Experience
            </h2>
            <p className="font-serif text-4xl md:text-5xl text-[#1C1917] font-light leading-relaxed mb-10">
              A conversation that feels{" "}
              <span className="italic text-[#57534E]">different.</span>
            </p>
            <div className="space-y-6 text-lg text-[#78716C] font-light leading-relaxed">
              <p>
                PeaceBot does not feel like a chatbot. It feels like <HoverPhrase>a calm presence</HoverPhrase> that understands the weight of what you are carrying.
              </p>
              <p>
                Every response is paced, <HoverPhrase>contextually aware</HoverPhrase>, and designed to create space — not fill it with generic advice.
              </p>
              <p>
                It remembers the rhythm of your conversation. It pauses when you need silence. It moves forward when you are ready.
              </p>
            </div>
          </motion.div>

          {/* Right: Chat Interface */}
          <motion.div
            {...fadeUp}
            className="md:w-6/12 relative z-10"
          >
            <div className="relative rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_20px_80px_rgba(0,0,0,0.06)] overflow-hidden">

              {/* Header bar */}
              <div className="flex items-center gap-3 px-8 py-5 border-b border-[#E7E5E4]/50">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#8B6DB0] flex items-center justify-center">
                    <span className="text-white text-sm font-medium">P</span>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#10B981] border-2 border-white" />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-[#1C1917]">PeaceBot</p>
                  <p className="text-[12px] text-[#A8A29E] font-light">Always here for you</p>
                </div>
              </div>

              {/* Messages */}
              <div className="px-6 md:px-8 py-8 space-y-5 min-h-[320px]">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15, scale: 0.97 }}
                    animate={
                      i < visibleMessages
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 15, scale: 0.97 }
                    }
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-5 py-3.5 rounded-[1.25rem] text-[14px] leading-relaxed ${
                        msg.from === "user"
                          ? "bg-[#1C1917] text-white/90 rounded-br-md"
                          : "bg-[#F5F3FF] text-[#1C1917] rounded-bl-md border border-[#E8E0F0]/60"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {visibleMessages < chatMessages.length && visibleMessages > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-[#F5F3FF] border border-[#E8E0F0]/60 rounded-[1.25rem] rounded-bl-md px-5 py-3.5 flex gap-1.5">
                      {[0, 1, 2].map((d) => (
                        <motion.div
                          key={d}
                          className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]/40"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-3 px-6 md:px-8 py-5 border-t border-[#E7E5E4]/30 bg-white/50">
                <div className="flex-1 bg-[#F5F3F0] rounded-full px-5 py-3 text-[14px] text-[#A8A29E] font-light">
                  Share what's on your mind...
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1C1917] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-center text-[12px] text-[#A8A29E] font-light mt-6 italic">
              A real conversation flow — calm, contextual, student-first.
            </p>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            9. STUDENT VOICES — 3-column with quote marks
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-48 flex flex-col items-center">

          {/* Ambient left cloud */}
          <motion.img
            src="/Untitled design (36).svg"
            alt=""
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-[10%] left-[-25%] md:left-[-15%] w-[50vw] max-w-[500px] pointer-events-none z-0 mix-blend-multiply opacity-70"
            style={{ y: leftImgY }}
          />

          <motion.div {...fadeUp} className="max-w-2xl text-center mb-24 md:mb-32 relative z-10">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#78716C] mb-6">
              Student Voices
            </h2>
            <p className="font-serif text-3xl md:text-5xl text-[#1C1917] font-light leading-relaxed">
              What students say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 w-full max-w-6xl relative z-10 px-6">
            {[
              { quote: "It felt like the bot understood my exam stress without making me explain everything.", author: "Second Year Student" },
              { quote: "I used it at night when I could not calm my thoughts. It helped me breathe through it.", author: "Hostel Resident" },
              { quote: "It helped me slow down before I spoke to anyone else. Like a warm-up for vulnerability.", author: "Third Year Student" },
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

      </div>
      {/* End of Page Wrapper */}

      {/* ═══════════════════════════════════════════════════
          10. FINAL CTA
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
            PeaceBot is{" "}
            <span className="italic text-[#57534E]">always here.</span>
          </h2>
          <p className="text-xl text-[#78716C] font-light mb-14 leading-relaxed max-w-2xl">
            Start with calm support, then move into the right next step if needed. Your journey through the support ladder begins with a single conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="bg-[#1C1917] text-white px-10 py-4 rounded-full text-[15px] tracking-wide font-medium hover:bg-[#333] transition-colors duration-500 shadow-sm">
              Open PeaceBot
            </button>
            <a
              href="/psychologist"
              className="text-[14px] font-medium text-[#1C1917] border-b border-[#1C1917] pb-0.5 hover:text-[#57534E] hover:border-[#57534E] transition-colors duration-500"
            >
              Explore the support ladder
            </a>
          </div>

          <p className="mt-10 text-sm text-[#A8A29E] font-light flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B6DB0]/40" />
            Always available. Student-first. Emotionally intelligent.
          </p>
        </motion.div>
      </section>

      {/* Footer override */}
      <div className="relative w-full bg-transparent pt-12 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
        <style>{`
          .footer-peacebot-override * {
            color: #1C1917 !important;
            border-color: rgba(0,0,0,0.15) !important;
          }
          .footer-peacebot-override button,
          .footer-peacebot-override span[style*="background"] {
            background: rgba(0,0,0,0.03) !important;
          }
          .footer-peacebot-override button:hover {
            background: rgba(0,0,0,0.08) !important;
          }
          .footer-peacebot-override a:hover,
          .footer-peacebot-override a:hover * {
            color: #8B6DB0 !important;
            background: transparent !important;
          }
        `}</style>
        <div className="footer-peacebot-override">
          <Footer />
        </div>
      </div>
    </main>
  );
}
