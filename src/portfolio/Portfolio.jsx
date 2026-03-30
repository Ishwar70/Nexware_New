// Portfolio.jsx
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    id: 1,
    title: "Doon Public School",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800",
    tag: "Education",
    link: "#",
  },
  {
    id: 2,
    title: "Indian Defence Forces",
    image: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=800",
    tag: "Government",
    link: "#",
  },
  {
    id: 3,
    title: "Travel & Flowers",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    tag: "E-Commerce",
    link: "#",
  },
];

const Portfolio = () => (
  <section className="py-24 bg-[#f8fafb] relative overflow-hidden">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
    `}</style>

    {/* bg orbs */}
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-100/50 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-100/40 blur-[100px] rounded-full pointer-events-none" />

    {/* dot grid */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pdots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#0f172a" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pdots)" />
    </svg>

    <div className="max-w-7xl mx-auto px-6 relative z-10">

      {/* ── HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">

        {/* Left text */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span
              className="text-emerald-700 text-[11px] font-semibold tracking-[.16em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Our Work
            </span>
          </div>

          <h2
            className="text-3xl md:text-[2.8rem] font-black text-slate-900 leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            We Believe In The
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              Power Of Results
            </span>
          </h2>
        </div>

        {/* Right — small stat strip */}
        <div className="flex items-center gap-6 flex-shrink-0">
          {[
            { value: "300+", label: "Projects" },
            { value: "50+",  label: "Industries" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <span
                className="text-2xl font-black text-slate-900"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {value}
              </span>
              <span
                className="text-[11px] text-slate-400 font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
          <a
            href="#portfolio"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-[13px] font-bold rounded-full hover:bg-emerald-600 transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,.12)]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            All Projects
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── CARDS ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 mb-12">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} {...project} index={i + 1} />
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="text-center md:hidden mt-8">
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white text-[13.5px] font-bold rounded-full hover:bg-emerald-600 transition-colors duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          More Portfolio
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

    </div>
  </section>
);

export default Portfolio;