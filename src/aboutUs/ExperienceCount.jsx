// ExperienceCount.jsx
export const ExperienceCount = () => (
  <div className="flex items-center gap-5 my-7">
    {/* Number */}
    <div className="relative flex-shrink-0">
      <span
        className="text-[72px] md:text-[88px] font-black leading-none tracking-tighter text-transparent select-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          fontFamily: "'Syne', sans-serif",
        }}
      >
        +05
      </span>
    </div>

    {/* Divider */}
    <div className="w-px h-14 bg-slate-200 flex-shrink-0" />

    {/* Label block */}
    <div className="flex flex-col gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <span className="text-slate-900 font-bold text-[15px] leading-tight">Years of</span>
      <span className="text-slate-900 font-bold text-[15px] leading-tight">Experience</span>
      <div className="flex items-center gap-1.5 mt-1">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-emerald-600 text-[11px] font-semibold tracking-widest uppercase">
          Since 2019
        </span>
      </div>
    </div>
  </div>
);