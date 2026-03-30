// StepCard.jsx
export const StepCard = ({ number, title, desc, isLast, icon }) => (
  <div className="relative flex-1 min-w-[240px] group">

    {/* Connector arrow between cards */}
    {!isLast && (
      <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm">
        <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="14 7 19 12 14 17" />
        </svg>
      </div>
    )}

    {/* Card */}
    <div className="h-full border border-slate-100 rounded-3xl p-8 bg-white transition-all duration-400 hover:border-emerald-300 hover:shadow-[0_12px_40px_rgba(16,185,129,.12)] hover:-translate-y-1.5 relative overflow-hidden">

      {/* Hover bg wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-cyan-50/0 group-hover:from-emerald-50/60 group-hover:to-cyan-50/30 transition-all duration-500 rounded-3xl pointer-events-none" />

      {/* Step number badge */}
      <div className="relative z-10 flex items-center justify-between mb-7">
        <span
          className="text-[56px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-cyan-500 select-none"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {number}
        </span>

        {/* Icon circle */}
        <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-xl group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
          <span className="group-hover:scale-110 transition-transform duration-200 block">{icon}</span>
        </div>
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col gap-2.5">
        <h3
          className="text-[17px] font-black text-slate-900 leading-snug"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h3>
        <p
          className="text-slate-500 text-[13px] leading-[1.75]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {desc}
        </p>
      </div>

      {/* Bottom step label */}
      <div className="relative z-10 mt-6 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <span
          className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Step {number}
        </span>
      </div>

      {/* Decorative corner circle */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full border-[6px] border-slate-100 group-hover:border-emerald-100 transition-colors duration-500 pointer-events-none" />
    </div>
  </div>
);