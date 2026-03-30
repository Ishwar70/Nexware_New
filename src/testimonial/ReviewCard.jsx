// ReviewCard.jsx
export const ReviewCard = ({ data, onNext, onPrev, total, current }) => {
  if (!data) return null;

  return (
    <div className="relative w-full max-w-[480px]">

      {/* Outer glow */}
      <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-transparent blur-md pointer-events-none" />

      {/* Card */}
      <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,.07)] flex flex-col gap-7 animate-[fadeIn_.4s_ease-out]">
        <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}`}</style>

        {/* Top: quote icon */}
        <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-emerald-500 opacity-70" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8C6.134 8 3 11.134 3 15v9h9v-9H6c0-2.206 1.794-4 4-4V8zm16 0c-3.866 0-7 3.134-7 7v9h9v-9h-6c0-2.206 1.794-4 4-4V8z" />
          </svg>
        </div>

        {/* Review text */}
        <p
          className="text-slate-700 text-[16px] leading-[1.8] italic flex-1"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          "{data.text}"
        </p>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span
            className="ml-2 text-slate-400 text-[12px] font-semibold"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {data.rating} / 5.0
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Author row + controls */}
        <div className="flex items-center justify-between gap-4">
          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div>
              <h4
                className="text-slate-900 font-black text-[14.5px] leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {data.name}
              </h4>
              <p
                className="text-emerald-600 text-[10.5px] font-semibold uppercase tracking-widest mt-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {data.role}
              </p>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Progress */}
            <span
              className="text-slate-300 text-[12px] font-semibold mr-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </span>
            <button
              onClick={onPrev}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onNext}
              className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};