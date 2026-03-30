// ClientLogo.jsx
import { useState } from "react";

export const ClientLogo = ({ src, alt }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative bg-white border border-slate-100 rounded-2xl flex items-center justify-center aspect-[3/2] overflow-hidden transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_8px_30px_rgba(0,0,0,.08)] hover:-translate-y-1">
      {/* Hover green tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/60 group-hover:to-cyan-50/40 transition-all duration-500 rounded-2xl" />

      {!imgError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className="relative z-10 max-w-[75%] max-h-[60%] object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
      ) : (
        <div className="relative z-10 flex flex-col items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-black">
            {alt.charAt(0)}
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center leading-tight px-2">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
};