"use client";

import { Nav, Footer } from "../../routes/index";

export default function CancellationPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] flex flex-col pt-32 font-sans text-slate-800">
      <Nav />
      <div className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-12 tracking-tight">Cancellation & Refund Policy</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed text-lg font-light">
          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">1. Session Cancellations</h2>
            <p>
              We understand that schedules can change. If you need to cancel or reschedule a counseling session with one of our licensed psychologists, we require at least <strong>24 hours notice</strong> prior to your scheduled appointment time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">2. Late Cancellations & No-Shows</h2>
            <p>
              Cancellations made less than 24 hours before the appointment, or failure to attend a scheduled session (no-show), may be subject to a fee up to the full cost of the session. This policy ensures our professionals' time is respected and allows us to offer the slot to another student in need.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">3. Refunds for Subscriptions</h2>
            <p>
              If you have purchased a premium subscription for advanced Peace Code features, you may cancel your subscription at any time. Cancellations will take effect at the end of your current billing cycle. We do not provide partial refunds for unused time in a billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">4. Extenuating Circumstances</h2>
            <p>
              We recognize that emergencies happen. In the event of a sudden medical emergency or severe personal crisis, please reach out to our support team. Exceptions to our cancellation policy are evaluated on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-slate-900 mb-4">5. Contact Support</h2>
            <p>
              To request a cancellation, reschedule, or discuss a refund, please contact us immediately at: <br />
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
