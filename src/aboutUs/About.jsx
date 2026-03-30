// About.jsx
import { ExperienceCount } from "./ExperienceCount";
import { TestimonialMini } from "./TestimonialMini";

const Feature = ({ text }) => (
  <div className="flex items-center gap-2.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-emerald-600" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
    <span className="text-slate-600 text-[13.5px] font-medium">{text}</span>
  </div>
);

const FEATURES = [
  "Custom Web Development & Design",
  "SEO-Optimised, High-Performance Sites",
  "Data-Driven Digital Marketing",
  "Secure Coding & Ongoing Support",
];

const About = () => (
  <section className="py-20 bg-white overflow-hidden w-full relative">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
    `}</style>

    {/* bg orb */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── LEFT ── */}
        <div className="order-2 lg:order-1 flex flex-col">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 w-fit mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-emerald-700 text-[11px] font-semibold tracking-[.16em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              About TaxorLab
            </span>
          </div>

          {/* Heading — short & clean */}
          <h2
            className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            We Build Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              Digital Future
            </span>
          </h2>

          <ExperienceCount />

          <p className="text-slate-500 text-[15px] leading-[1.8] max-w-lg mb-7"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Partner with TaxorLab for custom web development, responsive design, secure coding,
            and digital marketing that drives real revenue — not just vanity metrics.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {FEATURES.map((f) => <Feature key={f} text={f} />)}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-[13.5px] font-bold rounded-full hover:bg-emerald-600 transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,.12)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Work With Us
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#portfolio"
              className="text-slate-500 hover:text-slate-900 text-[13.5px] font-medium flex items-center gap-2 transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-6 h-px bg-slate-300 inline-block" />
              View Portfolio
            </a>
          </div>
        </div>

        {/* ── RIGHT: Fixed Image Mosaic ── */}
        <div className="order-1 lg:order-2 relative h-[520px] lg:h-[580px]">

          {/* Top-right large image */}
          <div className="absolute top-0 right-0 w-[68%] h-[55%] rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800"
              alt="Tech workspace"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-left portrait image */}
          <div className="absolute bottom-0 left-0 w-[55%] h-[58%] rounded-3xl overflow-hidden shadow-2xl border-[5px] border-white hover:scale-[1.02] transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
              alt="Expert professional"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimonial card — bottom right */}
          <div className="absolute bottom-0 right-0 w-[42%]">
            <TestimonialMini />
          </div>

          {/* Floating stat badge — top left */}
          <div className="absolute top-6 left-0 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,.10)] border border-slate-100 px-4 py-3 flex items-center gap-3 z-20">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-slate-900 font-black text-base" style={{ fontFamily: "'Syne', sans-serif" }}>
                300+
              </span>
              <span className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Projects Done
              </span>
            </div>
          </div>

          {/* Dot grid decoration */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-[0.07] -z-10 pointer-events-none select-none">
            <svg width="120" height="200" viewBox="0 0 120 200">
              {[...Array(6)].map((_, row) =>
                [...Array(4)].map((_, col) => (
                  <circle key={`${row}-${col}`}
                    cx={col * 28 + 14} cy={row * 32 + 16} r="3" fill="#059669" />
                ))
              )}
            </svg>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default About;