"use client";

import { Nav, Footer } from "../../routes/index";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] flex flex-col pt-32 font-sans text-slate-800">
      <Nav />
      <div className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-12 tracking-tight">Privacy Policy</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed text-lg font-light">
          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to Peace Code. We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy applies to all information collected through our website (https://www.peacecode.in), our PeaceBot service, and related applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or when you contact us (e.g., via peacecode.in@gmail.com).
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Personal details:</strong> Name, email address, contact information.</li>
              <li><strong>Usage data:</strong> Information about your activity on our focus timers, journal, and gratitude walls.</li>
              <li><strong>Health information:</strong> Self-reported moods or screening questionnaire results, strictly for providing you personalized resources.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p>
              We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use it to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Facilitate account creation and logon process.</li>
              <li>Provide and deliver the services you request (e.g., matching you with a counselor).</li>
              <li>Improve our website, PeaceBot algorithms, and user experience.</li>
              <li>Send administrative information and respond to inquiries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">4. Data Security & HIPAA Alignment</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. Our systems are ISO 27001 and HIPAA aligned, ensuring industry-standard protection for your sensitive data. However, despite our safeguards, no electronic transmission over the Internet can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">5. Contact Us</h2>
            <p>
              If you have questions or comments about this notice, you may email us at: <br />
              <a href="mailto:peacecode.in@gmail.com" className="text-blue-600 hover:underline">peacecode.in@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
      <div className="bg-[#59695C] text-white">
        <Footer />
      </div>
    </main>
  );
}
