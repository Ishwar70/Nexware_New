// HeroForm.jsx
// Glassmorphism consultation card with floating-label inputs

import { useState } from "react";

const FIELDS = [
  { id: "name",    type: "text",  label: "Full Name",     icon: "👤" },
  { id: "email",   type: "email", label: "Email Address", icon: "✉️" },
  { id: "phone",   type: "tel",   label: "Phone Number",  icon: "📞" },
];

const FloatInput = ({ id, type, label, icon, value, onChange }) => {
  const filled = value.length > 0;
  return (
    <div className="relative group">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        autoComplete="off"
        className="peer w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 pt-5 pb-2.5 text-[14.5px] text-white placeholder-transparent outline-none focus:border-emerald-500/60 focus:bg-white/[0.08] transition-all duration-200"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      />
      <label
        htmlFor={id}
        className="absolute left-4 text-slate-500 text-[13px] transition-all duration-200 pointer-events-none
          peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14.5px]
          peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:text-emerald-400
          top-2 translate-y-0 text-[11px]"
        style={{ top: filled ? "8px" : undefined, fontSize: filled ? "11px" : undefined, color: filled ? "rgb(74,222,128)" : undefined, fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </label>
    </div>
  );
};

const HeroForm = () => {
  const [fields, setFields] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!fields.name || !fields.email) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFields({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      className="relative w-full max-w-[420px] animate-[fadeUp_.65s_.15s_ease_both]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      {/* Outer glow ring */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-500/30 via-cyan-500/10 to-transparent blur-sm opacity-70 pointer-events-none" />

      {/* Card */}
      <div className="relative bg-[#0c1525]/90 backdrop-blur-2xl border border-white/[0.09] rounded-3xl p-8 shadow-[0_32px_64px_rgba(0,0,0,.5)]">

        {/* Header */}
        <div className="flex items-start justify-between mb-7">
          <div>
            <p className="text-emerald-400 text-[11px] font-semibold tracking-[.18em] uppercase mb-1">Free Consultation</p>
            <h3 className="text-xl font-black text-white leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
              Let's Talk Growth
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-lg">
            💬
          </div>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-3.5 mb-4">
          {FIELDS.map(({ id, type, label, icon }) => (
            <FloatInput
              key={id}
              id={id}
              type={type}
              label={label}
              icon={icon}
              value={fields[id]}
              onChange={update(id)}
            />
          ))}
          <div className="relative">
            <textarea
              value={fields.message}
              onChange={update("message")}
              rows={3}
              placeholder="Tell us about your project…"
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-[14.5px] text-white placeholder-slate-600 outline-none focus:border-emerald-500/60 focus:bg-white/[0.08] transition-all duration-200 resize-none"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className={[
            "w-full py-3.5 rounded-xl font-bold text-[14.5px] transition-all duration-300 flex items-center justify-center gap-2.5",
            sent
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : "bg-emerald-500 text-white shadow-[0_0_24px_rgba(52,211,153,.3)] hover:shadow-[0_0_36px_rgba(52,211,153,.5)] hover:bg-emerald-400",
          ].join(" ")}
        >
          {sent ? (
            <>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Message Sent!
            </>
          ) : (
            <>
              Send Message
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </>
          )}
        </button>

        {/* Trust line */}
        <p className="text-center text-slate-600 text-[11.5px] mt-3.5">
          🔒 No spam. We reply within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default HeroForm;