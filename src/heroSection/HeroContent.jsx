// HeroContent.jsx
// Left column — badge · headline · subtext · CTA · stats strip

const STATS = [
  { value: "300+", label: "Projects" },
  { value: "98%",  label: "Retention" },
  { value: "12+",  label: "Years" },
];

// Tiny arrow-right icon (no library needed)
const ArrowRight = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const HeroContent = () => (
  <div className="flex flex-col gap-7 animate-[fadeUp_.65s_ease_both]">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeUp2 { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
      @keyframes shimmer { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
      .hero-gradient-text {
        background: linear-gradient(90deg, #34d399, #22d3ee, #34d399);
        background-size: 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 4s linear infinite;
      }
    `}</style>

    {/* Badge */}
    <div className="flex items-center gap-3 animate-[fadeUp_.5s_ease_both]">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-emerald-400 text-xs font-semibold tracking-[.18em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          #1 Digital Agency · Delhi
        </span>
      </div>
    </div>

    {/* Headline */}
    <h1
      className="text-[clamp(1.8rem,4vw,3.2rem)] font-black text-white leading-[1.08] tracking-tight"
      style={{ fontFamily: "'Syne', sans-serif", animationDelay: ".08s" }}
    >
      We Grow Your
      <br />
      <span className="hero-gradient-text">Digital Presence</span>
      <br />
      <span className="text-white/90">In Delhi & Beyond</span>
    </h1>

    {/* Sub-copy */}
    <p
      className="text-slate-400 text-[1.05rem] max-w-[420px] leading-[1.75] animate-[fadeUp2_.7s_.2s_ease_both_]"
      style={{ fontFamily: "'DM Sans', sans-serif", animationDelay: ".18s" }}
    >
      Data-driven marketing, premium web builds, and brand storytelling — engineered to convert visitors into loyal customers.
    </p>

    {/* CTA row */}
    <div className="flex flex-wrap items-center gap-4 animate-[fadeUp2_.7s_.3s_ease_both]" style={{ animationDelay: ".28s" }}>
      <button
        className="group flex items-center gap-2.5 px-7 py-3.5 bg-emerald-500 text-white font-bold rounded-full shadow-[0_0_28px_rgba(52,211,153,.35)] hover:shadow-[0_0_40px_rgba(52,211,153,.55)] hover:bg-emerald-400 transition-all duration-300"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Start Your Project
        <span className="group-hover:translate-x-1 transition-transform duration-200">
          <ArrowRight />
        </span>
      </button>

      <a
        href="#portfolio"
        className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <span className="w-8 h-px bg-slate-600" />
        View Our Work
      </a>
    </div>

    {/* Stats strip */}
    <div className="flex items-center gap-8 pt-4 border-t border-white/[0.07]">
      {STATS.map(({ value, label }, i) => (
        <div key={label} className="flex flex-col gap-0.5">
          <span
            className="text-2xl font-black text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {value}
          </span>
          <span className="text-xs text-slate-500 font-medium uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default HeroContent;