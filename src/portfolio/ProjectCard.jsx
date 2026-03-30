// ProjectCard.jsx
const ProjectCard = ({ image, title, link, tag, index }) => (
  <div className="group relative">

    {/* Image container */}
    <div className="relative overflow-hidden rounded-3xl shadow-md transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,.15)]">
      <img
        src={image}
        alt={title}
        className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Tag — top left */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
        <span
          className="text-white text-[10.5px] font-semibold tracking-wider uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {tag}
        </span>
      </div>

      {/* Title on hover — bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350">
        <h3
          className="text-white font-black text-[17px] leading-snug"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h3>
      </div>
    </div>

    {/* Index number — bottom left */}
    <div className="absolute -bottom-3 left-4 flex items-center gap-2">
      <span
        className="text-[11px] font-black text-slate-300 tabular-nums"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {String(index).padStart(2, "0")}
      </span>
      <span className="w-6 h-px bg-slate-200" />
    </div>

    {/* Arrow button — bottom right */}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute -bottom-4 -right-2 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg z-20 transition-all duration-300 hover:bg-emerald-500 hover:scale-110 group-hover:shadow-[0_6px_20px_rgba(16,185,129,.4)]"
      aria-label={`View ${title}`}
    >
      <svg className="w-4.5 h-4.5 -rotate-45" fill="none" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  </div>
);

export default ProjectCard;