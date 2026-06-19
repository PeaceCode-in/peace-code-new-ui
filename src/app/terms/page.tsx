"use client";

import { Nav, Footer } from "../../routes/index";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] flex flex-col pt-32 font-sans text-slate-800">
      <Nav />
      <div className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-12 tracking-tight">Terms & Conditions</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed text-lg font-light">
          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Use constitute a legally binding agreement made between you and Peace Code concerning your access to and use of the https://www.peacecode.in website and its services. By accessing the site, you agree that you have read, understood, and agree to be bound by all of these Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">2. Medical Disclaimer</h2>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-md">
              <p className="text-orange-800 font-medium">
                Peace Code provides digital self-help resources and access to licensed professionals. We are NOT equipped for severe psychiatric crises. 
              </p>
              <p className="text-orange-800 mt-2 text-sm">
                If you or someone you know is experiencing suicidal thoughts, a mental health crisis, or life-threatening situations, please contact your local emergency services or a trusted helpline immediately. Our platform is not a substitute for emergency medical care.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">3. User Representation</h2>
            <p>
              By using the Site, you represent and warrant that: 
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information.</li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">4. Platform Rules</h2>
            <p>
              When utilizing our community features, forums, or Peace Buddies, you agree to maintain a respectful, supportive, and non-judgmental environment. Harassment, hate speech, spam, and inappropriate content will result in immediate termination of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">5. Contact Information</h2>
            <p>
              For any questions regarding these terms, please contact us at: <br />
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
