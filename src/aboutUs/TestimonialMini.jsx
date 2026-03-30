// TestimonialMini.jsx
const Star = () => (
  <svg className="w-3 h-3 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const TestimonialMini = () => (
  <div
    className="w-full bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,.09)] border border-slate-100 flex flex-col gap-3"
    style={{ fontFamily: "'DM Sans', sans-serif" }}
  >
    {/* Stars */}
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => <Star key={i} />)}
    </div>

    {/* Quote */}
    <p className="text-slate-500 text-[12.5px] leading-[1.65] italic">
      "TaxorLab completely transformed our online presence. Results were beyond expectations."
    </p>

    {/* Author */}
    <div className="flex items-center gap-2.5 pt-1 border-t border-slate-100">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
        SK
      </div>
      <div className="flex flex-col leading-none gap-0.5">
        <span className="text-slate-900 font-bold text-[12.5px]">Sanya Kapoor</span>
        <span className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Web Design</span>
      </div>
      <div className="ml-auto bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full flex items-center gap-1">
        <Star />
        <span className="text-amber-600 text-[10.5px] font-bold">4.5</span>
      </div>
    </div>
  </div>
);