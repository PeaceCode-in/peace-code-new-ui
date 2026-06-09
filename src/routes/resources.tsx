"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import { Play, Headphones, BookOpen, Video, HeartPulse, Shield, Share2, Sparkles, Zap, Brain, Moon, GraduationCap, Users, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { Nav, Footer } from "./index";

const topics = [
  { id: "Burnout", title: "Academic Burnout" },
  { id: "Social", title: "Social Anxiety" },
  { id: "LeftBehind", title: "Feeling Left Behind" },
  { id: "Loneliness", title: "Loneliness" },
  { id: "Relationship", title: "Relationship Stress" },
  { id: "Pressure", title: "Family Pressure" },
  { id: "Career", title: "Career Uncertainty" },
  { id: "Imposter", title: "Imposter Syndrome" },
  { id: "More", title: "& more" },
];

const languages = [
  { code: "GB", title: "English" },
  { code: "IN", title: "Hindi" },
  { code: "IN", title: "Tamil" },
  { code: "IN", title: "Bengali" },
  { code: "IN", title: "Telugu" },
  { code: "IN", title: "Marathi" },
  { code: "IN", title: "Gujarati" },
  { code: "IN", title: "Kannada" },
];

const features = [
  { title: "Personalized Learning Paths", desc: "AI-powered recommendations based on your needs, progress, and preferences. Get content that truly matters to your current state of mind." },
  { title: "Progressive Difficulty Levels", desc: "Resources organized from beginner to advanced. Start gently and dive deeper into complex therapeutic concepts at your own pace." },
  { title: "Crisis Alerts & Reminders", desc: "Smart, gentle notifications for wellness check-ins, medication reminders, and important mental health updates when you need them most." },
];

const formats = [
  { 
    title: "Educational Videos", 
    desc: "Expert-led video series covering mental health topics, coping strategies, and wellness techniques. Watch on any device.",
    bg: "bg-[#F3F0FA]", text: "text-[#1E3048]", iconColor: "text-[#7B61FF]",
    features: ["HD Quality", "Subtitles Available", "Downloadable", "Mobile Optimized"]
  },
  { 
    title: "Relaxation Audio", 
    desc: "Guided meditations, breathing exercises, sleep stories, and calming soundscapes for your daily commute or bedtime routine.",
    bg: "bg-[#F0F7FF]", text: "text-[#1E3048]", iconColor: "text-[#3B82F6]",
    features: ["Multiple Formats", "Offline Mode", "Variable Speeds", "Background Sounds"]
  },
  { 
    title: "Wellness Guides", 
    desc: "Comprehensive, printable guides on mental health topics, self-care practices, and healthy habits. Backed by clinical research.",
    bg: "bg-[#FFF0E6]", text: "text-[#1E3048]", iconColor: "text-[#F97316]",
    features: ["Printable", "Interactive", "Updated Regularly", "Evidence-Based"]
  }
];

// --- Massive Content Generation ---
const generateResources = () => {
  const allResources = [];
  topics.forEach(topic => {
    for(let i=0; i<15; i++) {
      allResources.push({
        id: `r-${topic.id}-${i}`,
        type: ['video', 'podcast', 'article'][i%3],
        topicId: topic.id,
        title: `${['Masterclass', 'Session', 'Guide'][i%3]}: Overcoming ${topic.title} - Part ${i+1}`,
        duration: `${(i%3 + 1) * 15} min`,
        instructor: `Dr. ${["Sarah Chen", "Marcus Johnson", "Emily Taylor"][i%3]}`,
      });
    }
  });
  return allResources;
};

const massiveResourceDatabase = generateResources();

export default function ResourcesRoute() {
  const { scrollYProgress, scrollY } = useScroll();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll Animations
  const branchesY = useTransform(scrollY, [0, 2000], [0, -150]);
  const rotatedImageY = useTransform(scrollY, [500, 2500], [0, -200]);

  const activeContent = useMemo(() => {
    if (!activeTopic) return [];
    return massiveResourceDatabase.filter(r => r.topicId === activeTopic);
  }, [activeTopic]);

  useEffect(() => {
    if (activeTopic && contentRef.current) {
      setTimeout(() => {
        const yOffset = -100; 
        const y = contentRef.current!.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  }, [activeTopic]);

  return (
    <main className="relative min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#f7f3ea] text-[#1E3048]">
      
      {/* LONG GRADIENT HERO */}
      <div 
        className="absolute top-0 left-0 w-full h-[150vh] pointer-events-none z-0"
        style={{ background: `linear-gradient(180deg, #5E82A7 0%, #8DAECB 30%, #f7f3ea 100%)` }}
      />

      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-48 md:pt-40 md:pb-56 px-6 md:px-10 z-20">
        
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.img 
            src="/Untitled design (35).svg" 
            alt=""
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "10%", opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-[-2vw] top-[5%] w-[40vw] max-w-[500px] object-contain"
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 top-[500px] md:top-[600px] flex justify-center items-center gap-16 md:gap-32 w-full"
          >
            <img src="/Untitled design (41).svg" alt="" className="w-[140px] md:w-[200px] object-contain translate-y-4 md:translate-x-8" />
            <img src="/Untitled design (42).svg" alt="" className="w-[110px] md:w-[150px] object-contain -translate-y-2 md:-translate-x-8" />
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-[1024px] text-center z-20 mt-12 md:mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-[13px] font-bold text-white tracking-wide uppercase">Open Source Library</span>
          </div>

          <h1 className="main-page-title mb-8 text-white leading-tight">
            Your Complete Mental Wellness Library
          </h1>
          
          <div className="max-w-[750px] mx-auto text-white/90 text-[18px] md:text-[22px] leading-relaxed font-medium pb-12">
            <p>
              A beautifully designed, open-source hub of resources vetted by clinical partners. Explore our massive library of masterclasses, podcasts, and articles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="relative w-full z-20 pb-40">
        
        {/* Parallax Illustrations perfectly constrained to screen width */}
        <div className="absolute inset-0 w-full h-[150vh] overflow-hidden pointer-events-none z-0">
          <motion.img 
            src="/SbSqGCYAPE8Sz36boHNMBd7o2kY.avif" 
            alt=""
            style={{ y: branchesY }}
            className="absolute left-0 -translate-x-[30%] top-[5%] w-[35vw] max-w-[400px] object-contain"
          />
          <motion.img 
            src="/OBoSx2w5tMuy6gjBCfSAg8SuLvA.avif" 
            alt=""
            style={{ y: rotatedImageY }}
            className="absolute left-0 -translate-x-[40%] top-[40%] w-[500px] object-contain rotate-90"
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 z-20 space-y-32">
          
          {/* 1. Explore by Topic - Pure White Grid with Lines */}
          <section>
            <div className="text-center mb-16">
              <span className="inline-block tracking-widest text-[#4F6072] text-[11px] font-bold uppercase mb-4">For Every Student's Journey</span>
              <h2 className="text-[40px] md:text-[52px] font-display text-[#1E3048] mb-4 tracking-tight">
                At Peace Code, we believe healing<br />begins with feeling heard.
              </h2>
              <p className="text-[#4F6072] text-[18px] max-w-2xl mx-auto">
                Explore the conversations, emotions, and situations students bring into PeaceCode every day.
              </p>
            </div>
            
            {/* Transparent Grid with only borders separating items */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {topics.map((topic, i) => {
                const isActive = activeTopic === topic.id;
                const isMore = topic.id === 'More';
                const isBottomRow = i >= topics.length - 3;
                const isRightCol = (i + 1) % 3 === 0;
                const isLast = i === topics.length - 1;

                return (
                  <div 
                    key={topic.id}
                    onClick={() => !isMore && setActiveTopic(isActive ? null : topic.id)}
                    className={`relative p-8 md:p-12 transition-all duration-300 group flex justify-between items-center border-slate-900/10
                      ${!isLast ? 'border-b' : ''} 
                      ${!isBottomRow ? 'md:border-b' : 'md:border-b-0'} 
                      ${!isRightCol ? 'md:border-r' : 'md:border-r-0'}
                      ${isActive ? 'bg-slate-900/5' : 'hover:bg-slate-900/5'}
                      ${isMore ? 'cursor-default' : 'cursor-pointer'}
                    `}
                  >
                      <h3 className={`font-serif text-[22px] md:text-[24px] transition-colors
                        ${isMore ? 'italic text-slate-400' : 'text-[#1E3048]'} 
                        ${!isMore && 'group-hover:text-[#1E3A8A]'}
                      `}>
                        {topic.title}
                      </h3>
                      {!isMore ? (
                        <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#1E3A8A] transition-colors" />
                      ) : (
                        <button className="px-5 py-2.5 bg-[#1E3048] text-white text-[13px] font-bold rounded-full hover:bg-[#213145] transition-colors shadow-sm flex items-center gap-2">
                          Join Waitlist <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>

            {/* EXPANDABLE CONTENT SECTION - Highly Aesthetic Glassmorphism */}
            <AnimatePresence>
              {activeTopic && activeTopic !== 'More' && (
                <motion.div
                  ref={contentRef}
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 40 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="bg-white/50 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_60px_rgba(30,48,72,0.08)] border border-white/80 relative">
                    <button 
                      onClick={() => setActiveTopic(null)}
                      className="absolute top-8 right-8 w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-[#1E3048] hover:bg-slate-100 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    
                    <div className="mb-12">
                      <span className="text-[11px] font-bold tracking-widest text-[#1E3A8A] uppercase mb-3 block">Selected Topic</span>
                      <h3 className="font-serif text-[40px] text-[#1E3048] leading-tight">
                        Resources for {topics.find(t => t.id === activeTopic)?.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {activeContent.map((item) => (
                        <div key={item.id} className="group bg-white/70 hover:bg-white backdrop-blur-md border border-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-[0_20px_40px_rgba(30,48,72,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[180px]">
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-[10px] font-bold text-[#1E3048] uppercase tracking-wider bg-white/80 shadow-sm px-3 py-1.5 rounded-md">
                                {item.type}
                              </span>
                            </div>
                            <h4 className="text-[19px] font-bold text-[#1E3048] leading-snug mb-2 group-hover:text-[#1E3A8A] transition-colors">{item.title}</h4>
                          </div>
                          <div className="flex items-center justify-between text-[#4F6072] font-medium text-[13px] mt-6 pt-4 border-t border-slate-900/5">
                            <span>{item.duration}</span>
                            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#1E3A8A] transition-colors">
                              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* 2. Resources in Your Language - Transparent Marquee Strip without blur */}
          <section className="w-[100vw] relative left-1/2 -translate-x-1/2 py-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#f7f3ea] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#f7f3ea] to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              className="flex whitespace-nowrap px-12 items-center w-max"
            >
              {[...languages, ...languages, ...languages].map((lang, i) => (
                <div key={i} className="flex items-center group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="font-serif italic text-[32px] md:text-[40px] text-[#1E3048] group-hover:text-[#1E3A8A] transition-colors">{lang.title}</span>
                    <span className="text-[12px] text-[#4F6072] font-bold tracking-widest uppercase mt-3">{lang.code}</span>
                  </div>
                  <span className="text-slate-300 mx-8 md:mx-12 text-[20px]">•</span>
                </div>
              ))}
            </motion.div>
          </section>

          {/* 3. What Makes Us Different - Minimalist Vertical List */}
          <section className="max-w-[800px] mx-auto">
            <div className="mb-16">
              <h2 className="text-[40px] md:text-[52px] font-display text-[#1E3048] mb-4 tracking-tight">What Makes Us <span className="font-serif italic text-[#1E3A8A]">Different</span></h2>
            </div>
            
            <div className="space-y-12">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-b border-slate-200/60 pb-12 last:border-0">
                  <span className="font-display text-[48px] text-[#1E3A8A]/20 leading-none">0{i+1}</span>
                  <div>
                    <h3 className="font-serif text-[28px] text-[#1E3048] mb-4">{feature.title}</h3>
                    <p className="text-[#4F6072] text-[17px] leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Diverse Content Formats - Flip Cards (White Lavender, White Blue, White Peach) */}
          <section className="relative">
            {/* Big Decorative Illustration on the Right Edge */}
            <motion.img 
              src="/Gm6CrXzxO7OGmfeRPBsg12Uo.avif" 
              alt=""
              className="absolute right-[-10vw] md:right-[-15vw] xl:right-[-25vw] -top-[150px] md:-top-[350px] w-[400px] md:w-[650px] xl:w-[850px] object-contain pointer-events-none z-[-1]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            <div className="text-center mb-16">
              <h2 className="text-[40px] md:text-[52px] font-display text-[#1E3048] mb-4 tracking-tight">Diverse <span className="font-serif italic text-[#1E3A8A]">Formats</span></h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {formats.map((format, i) => (
                <div key={i} className="group w-full h-[400px] [perspective:1000px] cursor-pointer">
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* Front Face */}
                    <div className={`absolute inset-0 [backface-visibility:hidden] ${format.bg} ${format.text} p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-between shadow-sm`}>
                      <div className="flex justify-between items-start">
                        <div className={`w-14 h-14 rounded-2xl bg-white/60 flex items-center justify-center ${format.iconColor}`}>
                          {i === 0 ? <Video className="w-6 h-6" /> : i === 1 ? <Headphones className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                        </div>
                        <ArrowUpRight className="w-6 h-6 opacity-40" />
                      </div>
                      <div>
                        <h3 className="font-serif text-[32px] leading-tight">{format.title}</h3>
                      </div>
                    </div>

                    {/* Back Face (Reversed) */}
                    <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] ${format.bg} ${format.text} p-10 md:p-12 rounded-[2.5rem] flex flex-col shadow-lg`}>
                      <h3 className="font-serif text-[24px] mb-4">{format.title}</h3>
                      <p className="text-[#4F6072] text-[15px] leading-relaxed mb-6">{format.desc}</p>
                      <div className="space-y-3 mt-auto">
                        {format.features.map((feat, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border border-current flex items-center justify-center ${format.iconColor}`}>
                              <div className="w-1.5 h-1.5 bg-current rounded-full" />
                            </div>
                            <span className="text-[#1E3048] font-medium text-[13px]">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <div className="relative w-full bg-transparent z-20">
        <style>{`
          .footer-black-override * {
            color: #0f172a !important;
            border-color: rgba(0,0,0,0.15) !important;
          }
          .footer-black-override button,
          .footer-black-override span[style*="background"] {
            background: rgba(0,0,0,0.03) !important;
          }
          .footer-black-override button:hover {
            background: rgba(0,0,0,0.08) !important;
          }
          .footer-black-override a:hover {
            color: #1E3A8A !important;
            background: transparent !important;
          }
        `}</style>
        <div className="footer-black-override">
          <Footer />
        </div>
      </div>
    </main>
  );
}
