// Roadmap.jsx
import { StepCard } from "./StepCard";

const STEPS = [
  {
    number: "01",
    title: "Choose Strategy",
    desc: "We analyse your business and pick the web & marketing strategy best suited for real growth.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Free Consultation",
    desc: "Book a call to align on goals, timelines, budget, and the exact plan we'll execute together.",
    icon: "💬",
  },
  {
    number: "03",
    title: "Development",
    desc: "We build secure, scalable, SEO-optimised websites with full digital marketing integration.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Growth & Optimisation",
    desc: "Track live performance, run A/B tests, and continuously optimise for long-term success.",
    icon: "📈",
  },
];

const Roadmap = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
    `}</style>

    {/* Subtle background orb */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

    {/* Dot grid */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="rdots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#0f172a" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rdots)" />
    </svg>

    <div className="max-w-7xl mx-auto px-6 relative z-10">

      {/* ── HEADER ── */}
      <div className="text-center mb-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span
            className="text-emerald-700 text-[11px] font-semibold tracking-[.16em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            How We Work
          </span>
        </div>

        <h2
          className="text-3xl md:text-[2.8rem] font-black text-slate-900 leading-[1.1] tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Our 4-Step Roadmap{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
            To Success
          </span>
        </h2>

        <p
          className="mt-4 text-slate-500 text-[15px] max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          A clear, proven process from strategy to results — no guesswork, just growth.
        </p>
      </div>

      {/* ── STEP CARDS ── */}
      <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-4 relative items-stretch">
        {STEPS.map((step, i) => (
          <StepCard
            key={i}
            {...step}
            isLast={i === STEPS.length - 1}
          />
        ))}
      </div>

      {/* ── BOTTOM TRUST BAR ── */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { emoji: "⚡", text: "Fast Turnaround" },
          { emoji: "🔒", text: "Secure & Reliable" },
          { emoji: "📊", text: "Data-Driven" },
          { emoji: "🤝", text: "Dedicated Support" },
        ].map(({ emoji, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5"
          >
            <span className="text-xl">{emoji}</span>
            <span
              className="text-slate-700 text-[13px] font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Roadmap;