// FAQItem.jsx
export const FAQItem = ({ question, answer, isOpen, onClick, index }) => (
  <div
    className={`group transition-all duration-300 ${
      isOpen ? "shadow-[0_8px_32px_rgba(16,185,129,.10)]" : "shadow-sm hover:shadow-md"
    }`}
  >
    <div
      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen ? "border-emerald-300" : "border-slate-100 hover:border-slate-200"
      }`}
    >
      {/* Question row */}
      <button
        onClick={onClick}
        className="w-full flex items-center gap-5 px-6 py-5 text-left"
      >
        {/* Index */}
        <span
          className={`text-[11px] font-black tabular-nums flex-shrink-0 transition-colors duration-200 ${
            isOpen ? "text-emerald-500" : "text-slate-300"
          }`}
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {String(index).padStart(2, "0")}
        </span>

        {/* Question text */}
        <span
          className={`flex-1 font-semibold text-[14.5px] leading-snug transition-colors duration-200 ${
            isOpen ? "text-slate-900" : "text-slate-700"
          }`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {question}
        </span>

        {/* Toggle icon */}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-emerald-500 rotate-180 shadow-[0_4px_12px_rgba(16,185,129,.35)]"
              : "bg-slate-100 group-hover:bg-slate-200"
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors duration-200 ${isOpen ? "text-white" : "text-slate-500"}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div
        className={`transition-all duration-400 ease-in-out overflow-hidden ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 ml-10">
          <div className="h-px bg-slate-100 mb-4" />
          <p
            className="text-slate-500 text-[13.5px] leading-[1.8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  </div>
);