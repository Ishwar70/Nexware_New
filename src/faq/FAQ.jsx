// FAQ.jsx
import { useState } from "react";
import { FAQItem } from "./FAQItem";

const FAQ_DATA = [
  {
    question: "How much will my website or digital marketing project cost?",
    answer: "Our pricing depends on project size and requirements. We provide tailored packages to suit your budget while delivering high-quality results and measurable ROI. Most projects start from ₹15,000.",
  },
  {
    question: "What services does your company provide?",
    answer: "We offer full-stack web development (MERN), SEO, digital marketing, app development, and custom CMS solutions — all designed for business growth.",
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard business website usually takes 2–3 weeks. Larger platforms or custom builds may take 6–8 weeks depending on scope and feedback cycles.",
  },
  {
    question: "Can you redesign my existing website and improve its performance?",
    answer: "Yes — we specialise in modernising legacy sites with React and Tailwind to dramatically boost speed, SEO scores, and conversion rates.",
  },
  {
    question: "Do you provide social media marketing and paid ads?",
    answer: "Absolutely. We run comprehensive digital marketing campaigns including Meta Ads, Google Ads, content strategy, and monthly performance reports.",
  },
  {
    question: "Can you migrate my site from WordPress or Wix without losing data?",
    answer: "Yes. We handle seamless migrations from any platform while preserving all content, SEO rankings, and URL structures.",
  },
  {
    question: "How do you improve conversion rate and lead generation?",
    answer: "We use data-driven CRO strategies, heatmap analysis, A/B testing, and optimised landing pages to turn more visitors into paying customers.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      {/* bg orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-50/80 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-50/60 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-14">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span
              className="text-emerald-700 text-[11px] font-semibold tracking-[.16em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              FAQs
            </span>
          </div>

          <h2
            className="text-3xl md:text-[2.6rem] font-black text-slate-900 leading-[1.15] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Got Questions?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              We've Got Answers.
            </span>
          </h2>

          <p
            className="mt-4 text-slate-500 text-[15px] max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Everything you need to know before starting your project with us.
          </p>
        </div>

        {/* ── FAQ LIST ── */}
        <div className="flex flex-col gap-2.5">
          {FAQ_DATA.map((faq, i) => (
            <FAQItem
              key={i}
              index={i + 1}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 border border-slate-100 rounded-3xl px-7 py-6">
          <div>
            <p
              className="text-slate-900 font-black text-[16px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Still have questions?
            </p>
            <p
              className="text-slate-400 text-[13px] mt-0.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              We're happy to walk you through everything.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-[13px] font-bold rounded-full hover:bg-emerald-600 transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,.12)]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Talk to Us
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;