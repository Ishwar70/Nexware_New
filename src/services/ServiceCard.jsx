// ServiceCard.jsx
const ServiceCard = ({ title, desc, img, isDark, offset, icon, tag }) => (
  <div className={`relative w-full md:w-64 lg:w-72 group transition-all duration-500 hover:-translate-y-3 ${offset} flex-shrink-0`}>

    {/* Glow halo on hover */}
    <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-emerald-400/40 via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

    {/* Gradient border wrapper */}
    <div className={`h-full p-[1.5px] rounded-[2rem] bg-gradient-to-b ${isDark ? 'from-emerald-500/60 via-cyan-500/30' : 'from-slate-200 via-slate-100'} to-transparent shadow-lg group-hover:shadow-xl transition-shadow duration-500`}>

      {/* Card body */}
      <div className={`h-full flex flex-col rounded-[1.9rem] overflow-hidden ${isDark ? 'bg-[#080f1a] text-white' : 'bg-white text-slate-900'}`}>

        {/* Image */}
        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Tag badge top-right */}
          <div className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-full">
            <span className="text-white text-[10px] font-semibold tracking-wider uppercase">{tag}</span>
          </div>

          {/* Icon pill — overlaps image bottom */}
          <div className="absolute -bottom-4 left-5 flex items-center gap-2 bg-emerald-500 text-white px-3.5 py-2 rounded-xl shadow-[0_4px_16px_rgba(16,185,129,.4)] z-20">
            <span className="text-base leading-none">{icon}</span>
          </div>
        </div>

        {/* Text */}
        <div className="p-6 pt-9 flex-1 flex flex-col gap-3">
          <h3
            className="text-[15px] font-black leading-snug"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {title}
          </h3>
          <p
            className={`text-[12.5px] leading-[1.7] flex-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {desc}
          </p>

          {/* Learn more link */}
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`text-[12px] font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'} group-hover:gap-2 transition-all`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Learn more
            </span>
            <svg
              className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'} group-hover:translate-x-1 transition-transform duration-200`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceCard;