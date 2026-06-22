"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, CloudUpload, Sparkles, HeartHandshake, Brain, Terminal } from "lucide-react";
import { Nav, Footer } from "./index";

export default function CareersRoute() {
  const { scrollY } = useScroll();
  
  // Parallax animations
  const rightImgY = useTransform(scrollY, [0, 1000], [0, -120]);
  const leftImgY = useTransform(scrollY, [0, 1000], [0, -80]);
  const illustrationY = useTransform(scrollY, [0, 800], [0, -150]);

  const roles = [
    {
      title: "Student Buddy (Peer Counselor)",
      type: "Part-Time / Volunteer",
      icon: <HeartHandshake className="w-6 h-6 text-[#1E3A8A]" />,
      desc: "Provide empathetic, peer-to-peer support for students navigating college life. You'll be trained to listen, guide, and help peers find professional resources when needed.",
      bg: "bg-[#EAEAF3]"
    },
    {
      title: "Psychologist (Clinical Team)",
      type: "Full-Time / Contract",
      icon: <Brain className="w-6 h-6 text-[#1E3A8A]" />,
      desc: "Join our professional mental health staff to offer therapy, run campus workshops, and ensure our peer counselors are well-supported with clinical oversight.",
      bg: "bg-[#F3EAF1]"
    },
    {
      title: "Tech & Website Management",
      type: "Full-Time / Part-Time",
      icon: <Terminal className="w-6 h-6 text-[#1E3A8A]" />,
      desc: "Help build and maintain the digital infrastructure of PeaceCode. We're looking for engineers and designers passionate about mental health tech.",
      bg: "bg-[#E3EFFB]"
    }
  ];

  // Animation variants
  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-slate-900 bg-[#FBF8F3]">
      {/* Soft top gradient for navbar visibility */}
      <div 
        className="absolute top-0 inset-x-0 h-[300px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(217, 228, 239, 0.4) 0%, rgba(242, 228, 234, 0.1) 40%, transparent 100%)"
        }}
      />
      
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-24 md:pb-32 px-6 md:px-10 overflow-visible z-20">
        
        {/* Left Edge Image - Anchored to bottom */}
        <motion.img 
          src="/Untitled design (42).svg" 
          alt="" 
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "-40%", opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
          className="absolute left-0 bottom-[-10%] w-[35vw] max-w-[450px] pointer-events-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)] object-contain mix-blend-multiply"
          style={{ y: leftImgY }}
        />

        {/* Right Edge Image - Anchored to bottom */}
        <motion.img 
          src="/Untitled design (63).svg" 
          alt="" 
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "40%", opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
          className="absolute right-0 bottom-[-10%] w-[32vw] max-w-[420px] pointer-events-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)] object-contain mix-blend-multiply"
          style={{ y: rightImgY }}
        />

        <motion.div {...reveal} className="relative mx-auto max-w-[1024px] text-center z-20 pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-[13px] font-bold text-[#1E3048] tracking-wide uppercase">Join The Team</span>
          </div>

          <h2 className="main-page-title mb-8">
            Make an impact on<br className="hidden md:block" /> campus mental health.
          </h2>
          <p className="text-[#4F6072] max-w-[650px] mx-auto text-[18px] md:text-[20px] leading-relaxed">
            We are looking for passionate individuals to join our mission of making mental health support accessible to every college student.
          </p>
        </motion.div>
      </section>

      <section className="relative py-24 md:py-32 px-6 md:px-10 overflow-visible z-20">
        <div className="mx-auto max-w-[1024px]">
          


          {/* Two-Column Section Header */}
          <div className="flex flex-col md:flex-row text-left gap-10 md:gap-20 mb-20 relative z-20">
            <h3 className="main-page-title flex-1 leading-[1.1] !text-[44px] md:!text-[52px]">
              Helping students, on your terms.
            </h3>
            <div className="flex-1 space-y-4 text-[#4F6072] text-[16px] md:text-[18px] leading-relaxed font-sans">
              <p>
                We know that the human touch in campus healthcare is often the difference between struggling silently and safely finding support. Resources save lives, but so do the check-ins, the follow-ups, and the peer conversations that catch a problem before it becomes a crisis.
              </p>
              <p>
                It's this under-celebrated work, carried out every day by dedicated students and clinical staff, that keeps our campus wellness system thriving.
              </p>
            </div>
          </div>

          {/* Open Roles */}
          <div className="text-left mb-32 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  {...reveal}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                  className={`group flex flex-col p-8 rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    {role.icon}
                  </div>
                  <div className="inline-block px-3 py-1 bg-white/50 text-[#1E3048] rounded-full text-[11px] font-bold tracking-[0.02em] w-fit mb-4">
                    {role.type}
                  </div>
                  <h4 className="font-sans text-[20px] text-[#213145] leading-[1.3] font-semibold mb-3">
                    {role.title}
                  </h4>
                  <p className="text-slate-600 text-[14px] leading-relaxed mb-6 flex-1">
                    {role.desc}
                  </p>
                  <button className="flex items-center text-[14px] font-semibold text-[#1E3A8A] hover:text-[#112255] transition-colors mt-auto">
                    View Details <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <motion.div {...reveal} className="max-w-[800px] mx-auto text-left relative z-20">
            <div className="bg-white/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
              <div className="mb-10 text-center">
                <h3 className="font-serif text-[32px] text-[#1E3048] mb-3">Submit Your Application</h3>
                <p className="text-[#4F6072] text-[15px]">Fill out the form below to apply for any of our open roles.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1E3048] uppercase tracking-wide ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-white/60 border border-white rounded-2xl px-5 py-4 text-[#1E3048] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all text-[15px] shadow-inner"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1E3048] uppercase tracking-wide ml-1">College Email</label>
                    <input 
                      type="email" 
                      placeholder="jane@university.edu"
                      className="w-full bg-white/60 border border-white rounded-2xl px-5 py-4 text-[#1E3048] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all text-[15px] shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#1E3048] uppercase tracking-wide ml-1">Select Role</label>
                  <select className="w-full bg-white/60 border border-white rounded-2xl px-5 py-4 text-[#1E3048] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all text-[15px] shadow-inner appearance-none cursor-pointer">
                    <option value="" disabled selected>Select the role you're applying for</option>
                    <option value="buddy">Student Buddy (Peer Counselor)</option>
                    <option value="psychologist">Psychologist (Clinical Team)</option>
                    <option value="tech">Tech & Website Management</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#1E3048] uppercase tracking-wide ml-1">Why do you want to join PeaceCode?</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us a bit about your background and motivation..."
                    className="w-full bg-white/60 border border-white rounded-2xl px-5 py-4 text-[#1E3048] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all text-[15px] shadow-inner resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#1E3048] uppercase tracking-wide ml-1">Resume / Cover Letter</label>
                  <div className="w-full border-2 border-dashed border-slate-300 rounded-3xl p-8 flex flex-col items-center justify-center bg-white/30 hover:bg-white/50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                      <CloudUpload className="w-6 h-6 text-[#1E3A8A]" />
                    </div>
                    <span className="text-[14px] font-semibold text-[#1E3048] mb-1">Click to upload or drag and drop</span>
                    <span className="text-[12px] text-slate-500">PDF, DOCX up to 10MB</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-[#1E3048] text-white font-bold py-5 rounded-2xl hover:bg-[#112255] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                    Submit Application <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Hyper minimalist footer override */}
      <div className="relative w-full bg-transparent mt-12">
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
