// ServiceIcon.jsx
// Reusable floating icon pill for service cards
// Pass `icon` (emoji or SVG), `color` for bg, `label` for tooltip

const ServiceIcon = ({ emoji = "💻", label = "" }) => (
  <div className="absolute -bottom-4 left-5 z-20 flex items-center gap-2 bg-emerald-500 text-white px-3.5 py-2 rounded-xl shadow-[0_4px_16px_rgba(16,185,129,.4)]">
    <span className="text-base leading-none">{emoji}</span>
    {label && (
      <span
        className="text-[11px] font-semibold tracking-wide hidden sm:inline"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </span>
    )}
  </div>
);

export { ServiceIcon };