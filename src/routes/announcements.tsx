"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Clock, Bot, CalendarCheck, MapPin, ArrowRight } from "lucide-react";
import { Nav, Footer } from "./index";

export default function AnnouncementsRoute() {
  const { scrollY } = useScroll();
  
  // Parallax animations
  const cloudRightY = useTransform(scrollY, [0, 800], [0, -160]);
  const branchLeftY = useTransform(scrollY, [0, 1200], [0, -100]);
  const birdsY = useTransform(scrollY, [0, 800], [0, -80]);

  const featuredNews = [
    {
      tag: "AI & Tech",
      title: "1 in 5 Young Adults Now Use AI Chatbots for Mental Health Support",
      date: "June 2026",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop", 
    },
    {
      tag: "Policy",
      title: "New UGC Guidelines Push for 'Whole-Child' Mental Health in Universities",
      date: "May 2026",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop", 
    },
    {
      tag: "Research",
      title: "Digital Impacts: Screen Time Linked to Anxiety in Students",
      date: "April 2026",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop", 
    },
  ];

  const workshops = [
    {
      tag: "Workshop",
      title: "Managing Academic Anxiety Workshop",
      date: "June 15, 2026",
      location: "DTU Campus, Main Auditorium",
      desc: "Learn actionable strategies to cope with exam pressure, build resilience, and maintain a healthy academic-life balance.",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
      bentoClass: "md:col-span-2 md:row-span-2",
      imgAspect: "aspect-video md:aspect-auto md:h-[280px]"
    },
    {
      tag: "Event",
      title: "Integrative Psychiatry Seminar",
      date: "June 20, 2026",
      location: "Virtual (Zoom)",
      desc: "Explore the connection between nutrition, sleep, and mental well-being.",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop",
      bentoClass: "col-span-1",
      imgAspect: "aspect-[1.8]"
    },
    {
      tag: "Training",
      title: "Peer Support Session",
      date: "July 2, 2026",
      location: "DTU Campus, Hall 3",
      desc: "Become a certified peer counselor to support your fellow students.",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
      bentoClass: "col-span-1",
      imgAspect: "aspect-[1.8]"
    },
  ];

  const dailyUpdates = [
    { title: "Campus counseling hours extended for finals week.", date: "Today", icon: "Clock" },
    { title: "New AI companion feature added to PeaceCode app.", date: "Yesterday", icon: "Bot" },
    { title: "Reminder: Free screening available this Friday.", date: "2 days ago", icon: "CalendarCheck" },
  ];

  const categories = ["All", "Featured News", "Workshops", "Research", "Daily Updates", "Events"];

  // Animation variants
  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-slate-900 bg-[#FBF8F3]">
      {/* Background Gradient */}
      <div 
        className="absolute top-0 inset-x-0 h-[800px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, #D9E4EF 0%, #F2E4EA 35%, #FBF8F3 80%)"
        }}
      />

      {/* Cloud Illustration (Right Edge) */}
      <motion.img 
        src="/Untitled design (35).svg" 
        alt="" 
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
        className="absolute right-[-2%] top-[8%] w-[28vw] max-w-[360px] pointer-events-none z-10"
        style={{ y: cloudRightY }}
      />



      <Nav />
      
      <section className="relative pt-44 pb-20 md:py-48 px-6 md:px-10 overflow-visible z-20">
        <motion.div {...reveal} className="relative mx-auto max-w-[1024px] text-center">
          <h2 className="main-page-title mb-5">
            Campus Announcements & News
          </h2>
          <p className="text-[#4F6072] max-w-[700px] mx-auto text-[16px] md:text-[18px] leading-relaxed mb-10">
            Stay updated with the latest research, upcoming workshops, and important mental health news.
          </p>

          {/* Birds */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 0.9, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ y: birdsY }} 
            className="flex justify-center items-center gap-32 mb-10 pointer-events-none mix-blend-multiply"
          >
            <img src="/Untitled design (67).svg" alt="" className="w-[220px] object-contain translate-y-6" />
            <img src="/Untitled design (67).svg" alt="" className="w-[180px] object-contain -translate-y-4" />
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-[1024px] mx-auto mb-8">
            <div className="relative shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
              <input 
                type="text" 
                placeholder="Search updates..."
                className="w-full pl-[52px] pr-5 py-[18px] rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#1E3048] text-[15px] text-[#1E3048] bg-white transition-all placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-start gap-2.5 mb-14">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-[8px] text-[13px] font-medium transition-all ${
                  i === 0 
                    ? "bg-[#1E3A8A] text-white shadow-sm" 
                    : "bg-white text-[#596B78] hover:bg-slate-50 border border-transparent shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured News Section */}
          <div className="text-left mb-16">
            <h3 className="font-serif text-[28px] text-[#1E3048] mb-6 border-b border-slate-200 pb-3">Featured News</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredNews.map((p, i) => (
                <motion.div
                  key={p.title + i}
                  {...reveal}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                  className="group cursor-pointer flex flex-col h-full bg-white p-5 rounded-2xl shadow-sm border border-[rgba(0,0,0,0.03)]"
                >
                  <div className="w-full aspect-[1.6] rounded-[10px] overflow-hidden mb-4 bg-slate-100 relative flex items-center justify-center">
                    {p.img ? (
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-slate-400 text-xs font-medium">Image Placeholder</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-[10px] py-[3px] bg-[#E3DCE7] text-[#4F4655] rounded-full text-[10px] font-bold tracking-[0.02em]">
                      {p.tag}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">{p.date}</span>
                  </div>
                  <h4 className="font-sans text-[16px] text-[#213145] leading-[1.3] font-medium group-hover:text-[#1E3A8A] transition-colors">
                    {p.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workshops Section (Bento Grid) */}
          <div className="text-left mb-16 relative">
            {/* Branch Illustration (Behind Liquid Glass) */}
            <motion.img 
              src="/Untitled design (37).svg" 
              alt="" 
              initial={{ x: "-60%", opacity: 0 }}
              whileInView={{ x: "-20%", opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
              viewport={{ once: true }}
              className="absolute -left-[10vw] md:-left-[240px] top-[15%] w-[35vw] max-w-[320px] pointer-events-none z-0 drop-shadow-[0_8px_20px_rgba(0,0,0,0.06)] opacity-85"
              style={{ y: branchLeftY }}
            />
            
            <h3 className="font-serif text-[28px] text-[#1E3048] mb-6 border-b border-slate-200 pb-3 relative z-10">Workshops & Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {workshops.map((w, i) => (
                <motion.div
                  key={w.title + i}
                  {...reveal}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                  className={`group cursor-pointer flex flex-col bg-white/50 backdrop-blur-xl p-5 md:p-6 rounded-3xl border border-white/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 ${w.bentoClass}`}
                >
                  <div className={`w-full rounded-[16px] overflow-hidden mb-5 bg-slate-100 flex items-center justify-center relative ${w.imgAspect}`}>
                    {w.img ? (
                      <img src={w.img} alt={w.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <span className="text-slate-400 text-xs font-medium">Image Placeholder</span>
                    )}
                  </div>
                  
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="inline-block px-3 py-1 bg-white text-[#1E3048] rounded-full text-[11px] font-bold tracking-[0.02em] shadow-sm">
                          {w.tag}
                        </span>
                        <span className="text-[12px] text-slate-500 font-medium flex items-center gap-1.5">
                          <CalendarCheck className="w-3.5 h-3.5" /> {w.date}
                        </span>
                      </div>
                      <h4 className={`font-sans text-[#213145] leading-[1.3] font-semibold group-hover:text-[#1E3A8A] transition-colors mb-2 ${w.bentoClass.includes('col-span-2') ? 'text-[22px]' : 'text-[17px]'}`}>
                        {w.title}
                      </h4>
                      <p className={`text-slate-600 mb-4 ${w.bentoClass.includes('col-span-2') ? 'text-[15px]' : 'text-[13px] line-clamp-2'}`}>
                        {w.desc}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-[13px] font-medium text-[#1E3A8A] bg-white/60 w-fit px-3 py-1.5 rounded-lg border border-white">
                      <MapPin className="w-4 h-4 mr-1.5" />
                      {w.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Split Section: Daily News + Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
            {/* Daily News / Important Updates */}
            <div className="text-left lg:col-span-7">
              <h3 className="font-serif text-[28px] text-[#1E3048] mb-6 border-b border-slate-200 pb-3">Daily News & Important Updates</h3>
              <div className="flex flex-col gap-4">
                {dailyUpdates.map((update, i) => (
                  <motion.div 
                    key={i}
                    {...reveal}
                    className="flex flex-row items-center gap-5 bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 group cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
                  >
                    <div className="w-[72px] h-[72px] rounded-xl bg-gradient-to-br from-[#E3EFFB] to-[#F2E4EA] shrink-0 flex items-center justify-center text-[#1E3A8A] shadow-inner">
                      {update.icon === "Clock" && <Clock className="w-7 h-7" strokeWidth={1.5} />}
                      {update.icon === "Bot" && <Bot className="w-7 h-7" strokeWidth={1.5} />}
                      {update.icon === "CalendarCheck" && <CalendarCheck className="w-7 h-7" strokeWidth={1.5} />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[16px] font-semibold text-[#1E3048] group-hover:text-[#1E3A8A] transition-colors leading-snug">{update.title}</h4>
                      <span className="text-[13px] font-medium text-slate-400 mt-1 block">{update.date}</span>
                    </div>
                    <div className="pr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-[#1E3A8A]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="text-left lg:col-span-5 flex flex-col">
              <h3 className="font-serif text-[28px] text-[#1E3048] mb-6 border-b border-slate-200 pb-3">Never Miss an Update</h3>
              <motion.div 
                {...reveal}
                className="bg-[#1E3048] rounded-[32px] p-8 text-white h-full flex flex-col justify-center relative overflow-hidden"
              >
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 bg-white/5 rounded-full blur-xl" />

                <h4 className="text-[22px] font-serif font-medium mb-3 relative z-10">Get updates directly to your inbox.</h4>
                <p className="text-[#A2B3C5] text-[15px] mb-8 relative z-10">
                  Subscribe to the PeaceCode campus newsletter for mental health resources, event invites, and daily tips.
                </p>
                <form className="relative z-10 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Your campus email address" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 text-[15px]"
                  />
                  <button className="w-full bg-white text-[#1E3048] font-bold py-4 rounded-xl hover:bg-slate-100 transition-colors">
                    Subscribe Now
                  </button>
                </form>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </section>

      {/* Hyper minimalist footer override */}
      <div className="relative w-full bg-transparent">
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
