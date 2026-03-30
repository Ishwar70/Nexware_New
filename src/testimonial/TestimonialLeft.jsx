// TestimonialLeft.jsx
import { memo } from "react";

const SuccessBadge = () => (
  <div className="flex items-center gap-3 mb-7">
    <div className="flex -space-x-2.5">
      {[21, 22, 23].map((u) => (
        <div key={u} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm bg-slate-200">
          <img src={`https://i.pravatar.cc/100?u=${u}`} alt="user" className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="w-9 h-9 rounded-full border-2 border-white bg-emerald-600 flex items-center justify-center text-[9px] text-white font-bold shadow-sm">
        +1k
      </div>
    </div>
    <div className="flex flex-col leading-tight">
      <span
        className="text-[12.5px] font-black text-slate-900"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        98% Success Rate
      </span>
      <span
        className="text-[11px] text-slate-400 font-medium"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Based on 1,200+ projects
      </span>
    </div>
  </div>
);

const TestimonialLeft = () => (
  <div className="relative z-10 lg:pr-8">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      <span
        className="text-emerald-700 text-[11px] font-semibold tracking-[.16em] uppercase"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Client Feedback
      </span>
    </div>

    {/* Heading */}
    <h2
      className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      What Our
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
        Clients Say
      </span>
      <br />
      About Us
    </h2>

    <SuccessBadge />

    {/* Body text */}
    <p
      className="text-slate-500 text-[15px] leading-[1.8] mb-10 max-w-md"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      We don't just build websites — we build digital growth engines. Hear from founders who scaled their business with TaxorLab.
    </p>

    {/* Stats row */}
    <div className="flex items-center gap-8 mb-10 pb-10 border-b border-slate-100">
      {[
        { value: "300+", label: "Projects" },
        { value: "5★",   label: "Avg Rating" },
        { value: "98%",  label: "Retention" },
      ].map(({ value, label }) => (
        <div key={label} className="flex flex-col gap-0.5">
          <span
            className="text-2xl font-black text-slate-900"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {value}
          </span>
          <span
            className="text-[11px] text-slate-400 font-semibold uppercase tracking-widest"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>

    {/* CTAs */}
    <div className="flex flex-wrap items-center gap-4">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white text-[13.5px] font-bold rounded-full hover:bg-emerald-600 transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,.12)]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Join Our Success
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
      <a
        href="#contact"
        className="text-slate-500 hover:text-slate-900 text-[13.5px] font-medium flex items-center gap-2 transition-colors duration-200"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <span className="w-6 h-px bg-slate-300 inline-block" />
        Let's Talk
      </a>
    </div>
  </div>
);

export default memo(TestimonialLeft);