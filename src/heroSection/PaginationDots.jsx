// PaginationDots.jsx
// Vertical step indicator — shown alongside sections on large screens

import { useState } from "react";

const STEPS = [
  { id: "01", label: "Overview" },
  { id: "02", label: "Services" },
  { id: "03", label: "Results"  },
];

const PaginationDots = ({ activeIndex = 0, onChange }) => (
  <div className="hidden lg:flex flex-col items-start gap-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
    {STEPS.map(({ id, label }, i) => {
      const isActive = i === activeIndex;
      return (
        <button
          key={id}
          onClick={() => onChange?.(i)}
          aria-label={`Go to step ${id}`}
          className="flex items-center gap-4 group cursor-pointer border-none bg-transparent p-0"
        >
          {/* Dot + ring */}
          <div className="relative flex items-center justify-center w-6 h-6">
            {isActive && (
              <span className="absolute inset-0 rounded-full border border-white/35 scale-125 animate-[ping_.8s_cubic-bezier(0,0,.2,1)_1_both]" />
            )}
            <span
              className={[
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                isActive
                  ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)] scale-110"
                  : "bg-white/20 group-hover:bg-white/50 group-hover:scale-110",
              ].join(" ")}
            />
          </div>

          {/* Label */}
          <div className="flex flex-col leading-none gap-0.5">
            <span
              className={[
                "text-[11px] font-semibold tracking-[.14em] uppercase transition-colors duration-200",
                isActive ? "text-emerald-400" : "text-white/25 group-hover:text-white/50",
              ].join(" ")}
            >
              {id}
            </span>
            <span
              className={[
                "text-[13px] font-medium transition-colors duration-200",
                isActive ? "text-white" : "text-white/30 group-hover:text-white/60",
              ].join(" ")}
            >
              {label}
            </span>
          </div>
        </button>
      );
    })}
  </div>
);

export default PaginationDots;