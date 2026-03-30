// Services.jsx
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    title: "Custom Website Development & Design",
    desc: "Fully personalized websites crafted with pixel-perfect design, tailored to your brand and business goals.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600",
    isDark: true,
    offset: "lg:mt-0",
    icon: "🖥️",
    tag: "Web Dev",
  },
  {
    title: "E-Commerce Development",
    desc: "Secure, high-converting online stores with payment integration and seamless product management.",
    img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=600",
    isDark: false,
    offset: "lg:mt-14",
    icon: "🛒",
    tag: "E-Commerce",
  },
  {
    title: "WordPress & CMS Solutions",
    desc: "SEO-friendly, visually polished websites on WordPress or custom CMS platforms — easy to manage.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    isDark: false,
    offset: "lg:mt-24",
    icon: "⚙️",
    tag: "CMS",
  },
  {
    title: "Full-Stack Development",
    desc: "End-to-end web solutions — fast frontend, robust backend, and airtight security built in.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600",
    isDark: false,
    offset: "lg:mt-10",
    icon: "🔧",
    tag: "Full-Stack",
  },
  {
    title: "Digital Marketing Services",
    desc: "Measurable growth through SEO, social media marketing, and targeted paid ad campaigns.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600",
    isDark: false,
    offset: "lg:mt-0",
    icon: "📈",
    tag: "Marketing",
  },
];

const Services = () => (
  <section className="py-24 bg-[#f8fafb] relative overflow-hidden">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
    `}</style>

    {/* bg orbs */}
    <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/60 blur-[130px] rounded-full pointer-events-none" />
    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-100/40 blur-[100px] rounded-full pointer-events-none" />

    {/* Fine dot grid */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="sdots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#0f172a" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sdots)" />
    </svg>

    <div className="max-w-[1400px] mx-auto px-6 relative z-10">

      {/* ── HEADING ── */}
      <div className="text-center mb-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span
            className="text-emerald-700 text-[11px] font-semibold tracking-[.16em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            What We Do
          </span>
        </div>

        <h2
          className="text-3xl md:text-[2.8rem] font-black text-slate-900 leading-[1.1] tracking-tight max-w-2xl mx-auto"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Delhi's Trusted Web &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
            Marketing Experts
          </span>
        </h2>

        <p
          className="mt-4 text-slate-500 text-[15px] max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          From sleek websites to data-driven campaigns — we handle the digital side so you can focus on your business.
        </p>
      </div>

      {/* ── CARDS ── */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5 items-start pt-12 pb-4">
        {SERVICES.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>

      {/* ── BOTTOM CTA STRIP ── */}
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-slate-100 rounded-3xl px-8 py-6 shadow-sm">
        <div>
          <p
            className="text-slate-900 font-black text-lg"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Not sure which service fits you?
          </p>
          <p
            className="text-slate-400 text-[13.5px] mt-0.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Let's talk — we'll figure out the best plan for your business.
          </p>
        </div>
        <a
          href="#contact"
          className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white text-[13.5px] font-bold rounded-full hover:bg-emerald-600 transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,.12)]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Get Free Consultation
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

export default Services;