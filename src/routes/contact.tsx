"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, PhoneCall, Sparkles } from "lucide-react";
import { Nav, Footer } from "./index";

export default function ContactRoute() {
  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
  };

  const { scrollY } = useScroll();
  const cloudLeftY = useTransform(scrollY, [0, 800], [0, -100]);
  const birdsY = useTransform(scrollY, [0, 800], [0, -80]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-slate-900 bg-[#f7f3ea]">
      
      {/* Rotated Edge Image */}
      <img 
        src="/OBoSx2w5tMuy6gjBCfSAg8SuLvA.avif" 
        alt=""
        className="absolute left-[-10vw] md:left-[-15vw] lg:left-[-20vw] top-[50%] w-[40vw] max-w-[600px] object-contain rotate-90 pointer-events-none opacity-90 mix-blend-multiply z-0"
      />

      {/* Background Gradient (Blue -> Soft Pink -> Beige) */}
      <div 
        className="absolute top-0 inset-x-0 h-[800px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, #D9E4EF 0%, #F2E4EA 35%, #f7f3ea 80%)"
        }}
      />

      {/* Cloud Illustration */}
      <motion.img 
        src="/Untitled design (36).svg" 
        alt="" 
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
        className="absolute left-[-2%] top-[4%] w-[45vw] max-w-[600px] pointer-events-none z-10"
        style={{ y: cloudLeftY }}
      />

      <Nav />
      
      <section className="relative pt-44 pb-28 md:py-48 px-6 md:px-10 overflow-visible z-20">
        <motion.div {...reveal} className="relative mx-auto max-w-[1024px] text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white mb-14 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-[13px] font-bold text-[#1E3048] tracking-wide uppercase">Get in Touch</span>
          </div>



          <h2 className="main-page-title mb-6 relative z-10">
            We'd love to hear from you
          </h2>
          <p className="text-[#4F6072] max-w-[650px] mx-auto text-[17px] md:text-[19px] leading-relaxed mb-10">
            Whether you have a question about our services, want to partner with us, or are interested in joining the team, we are here to listen.
          </p>

          {/* Birds placed in the gap for breathing room */}
          <motion.div style={{ y: birdsY }} className="w-full h-[160px] md:h-[220px] flex justify-center items-center gap-16 md:gap-32 pointer-events-none opacity-[0.9] mix-blend-multiply z-0 mb-16 md:mb-24">
            <img src="/Untitled design (41).svg" alt="" className="w-[160px] md:w-[220px] object-contain translate-y-6" />
            <img src="/Untitled design (42).svg" alt="" className="w-[130px] md:w-[180px] object-contain -translate-y-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 text-left">
            
            {/* Contact Details Column */}
            <div className="space-y-10">
              
              <motion.div {...reveal} transition={{ delay: 0.1, duration: 0.8 }} className="group p-8 rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform text-[#1E3A8A]">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-sans text-[22px] font-semibold text-[#213145] mb-2">General Inquiries</h3>
                <p className="text-[#4F6072] text-[16px] mb-4">For any general questions, partnership opportunities, or feedback.</p>
                <a href="mailto:hello@peacecode.in" className="text-[#1E3A8A] font-bold text-[18px] hover:underline">hello@peacecode.in</a>
              </motion.div>

              <motion.div {...reveal} transition={{ delay: 0.2, duration: 0.8 }} className="group p-8 rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform text-[#1E3A8A]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-sans text-[22px] font-semibold text-[#213145] mb-2">Careers</h3>
                <p className="text-[#4F6072] text-[16px] mb-4">Want to join our mission? We are always looking for passionate individuals.</p>
                <a href="mailto:career@peacecode.in" className="text-[#1E3A8A] font-bold text-[18px] hover:underline">career@peacecode.in</a>
              </motion.div>

            </div>

            {/* Contact Form Column */}
            <motion.div {...reveal} transition={{ delay: 0.3, duration: 0.8 }} className="bg-white/40 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] h-fit">
              <h3 className="font-serif text-[28px] text-[#1E3048] mb-8">Send us a message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#1E3048] uppercase tracking-wide ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-white/60 border border-white rounded-2xl px-5 py-4 text-[#1E3048] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all text-[15px] shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#1E3048] uppercase tracking-wide ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full bg-white/60 border border-white rounded-2xl px-5 py-4 text-[#1E3048] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all text-[15px] shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#1E3048] uppercase tracking-wide ml-1">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full bg-white/60 border border-white rounded-2xl px-5 py-4 text-[#1E3048] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all text-[15px] shadow-inner resize-none"
                  />
                </div>
                <div className="pt-2">
                  <button className="w-full bg-[#1E3048] text-white font-bold py-5 rounded-2xl hover:bg-[#112255] hover:shadow-lg hover:-translate-y-0.5 transition-all text-[15px]">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* FAQs and What to Expect Section to make page more scrollable */}
      <section className="relative py-20 md:py-32 px-6 md:px-10 z-20 max-w-[900px] mx-auto text-left">
        <motion.div {...reveal} className="mb-16 text-center">
          <h2 className="font-serif text-[36px] md:text-[42px] text-[#1E3048] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#4F6072] text-[17px]">We've gathered some common questions to help you out.</p>
        </motion.div>

        <div className="space-y-6">
          {[
            { q: "How quickly will I hear back?", a: "We aim to respond to all general inquiries within 24-48 business hours. For partnership or press inquiries, it may take slightly longer as we route it to the appropriate team." },
            { q: "Do you offer emergency mental health services?", a: "PeaceCode is not an emergency service. If you or someone you know is in immediate danger or experiencing a mental health crisis, please call your local emergency number or go to the nearest emergency room." },
            { q: "How do I update my account email?", a: "If you need to change your primary account email, please send us a message above from your current email address with the subject line 'Email Change Request' and we will assist you." },
            { q: "Can I use PeaceCode if I am not a student?", a: "Currently, our core focus is on college students and campus wellness. However, many of our resources and articles are publicly available and beneficial to anyone looking to improve their mental health." }
          ].map((faq, i) => (
            <motion.div 
              key={i}
              {...reveal} 
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-white/50 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/60 shadow-sm"
            >
              <h4 className="font-bold text-[18px] text-[#1E3048] mb-3">{faq.q}</h4>
              <p className="text-[#4F6072] text-[16px] leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
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
