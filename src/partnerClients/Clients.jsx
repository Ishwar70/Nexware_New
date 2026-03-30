// Clients.jsx
import { ClientLogo } from "./ClientLogo";

const CLIENT_DATA = [
  { id: 1,  name: "Happiness Institute", logo: "https://happinessinstitute.in/assets/images/logo.png" },
  { id: 2,  name: "Kakkar Chaap",        logo: "https://th.bing.com/th/id/OIP.0WKhg2MBju48t8UlkSv-zQHaDU?w=349&h=156&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3r" },
  { id: 3,  name: "Mahendra RO",         logo: "https://th.bing.com/th/id/OIP.Dto8zZ52oCvyvMpXdwTnPwHaEV?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 4,  name: "Philips",             logo: "https://placehold.co/150x80/ffffff/059669?text=Philips" },
  { id: 5,  name: "Sankalp",             logo: "https://placehold.co/150x80/ffffff/059669?text=Sankalp" },
  { id: 6,  name: "Sukhsagar",           logo: "https://placehold.co/150x80/ffffff/059669?text=Sukhsagar" },
  { id: 7,  name: "Vidya Hub",           logo: "https://placehold.co/150x80/ffffff/059669?text=Vidya+Hub" },
  { id: 8,  name: "Alpine Eco",          logo: "https://placehold.co/150x80/ffffff/059669?text=Alpine" },
  { id: 9,  name: "Broadstar",           logo: "https://placehold.co/150x80/ffffff/059669?text=Broadstar" },
  { id: 10, name: "Gangotri",            logo: "https://placehold.co/150x80/ffffff/059669?text=Gangotri" },
  { id: 11, name: "Multani",             logo: "https://placehold.co/150x80/ffffff/059669?text=Multani" },
  { id: 12, name: "Healths",             logo: "https://placehold.co/150x80/ffffff/059669?text=Healths" },
];

const STATS = [
  { value: "300+", label: "Projects Delivered" },
  { value: "12+",  label: "Years Experience" },
  { value: "98%",  label: "Client Retention" },
];

// Infinite auto-scroll marquee row
const MarqueeRow = ({ items, reverse = false }) => (
  <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
    <div
      className={`flex gap-4 w-max ${reverse ? "animate-[marquee-reverse_30s_linear_infinite]" : "animate-[marquee_30s_linear_infinite]"}`}
    >
      {[...items, ...items].map((client, i) => (
        <div key={`${client.id}-${i}`} className="w-40 flex-shrink-0">
          <ClientLogo src={client.logo} alt={client.name} />
        </div>
      ))}
    </div>
  </div>
);

const Clients = () => {
  const half = Math.ceil(CLIENT_DATA.length / 2);
  const row1 = CLIENT_DATA.slice(0, half);
  const row2 = CLIENT_DATA.slice(half);

  return (
    <section className="py-20 bg-[#f8fafb] relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes marquee         { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>

      {/* Subtle bg decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-400/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-emerald-700 text-[11px] font-semibold tracking-[.16em] uppercase" style={{ fontFamily: "'DM Sans',sans-serif" }}>
              Trusted by 300+ Brands
            </span>
          </div>

          <h2
            className="text-3xl md:text-[2.8rem] font-black text-slate-900 tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Syne',sans-serif" }}
          >
            Brands That Trust{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald-600">Our Work</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-emerald-100 -z-0 rounded" />
            </span>
          </h2>

          <p className="mt-4 text-slate-500 max-w-md mx-auto text-[15px] leading-relaxed" style={{ fontFamily: "'DM Sans',sans-serif" }}>
            Powering innovative brands across Delhi and beyond with data-driven strategies.
          </p>
        </div>

        {/* ── STATS STRIP ── */}
        <div className="flex items-center justify-center gap-10 md:gap-16 mb-12 pb-12 border-b border-slate-100">
          {STATS.map(({ value, label }, i) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <span
                className="text-2xl md:text-3xl font-black text-slate-900"
                style={{ fontFamily: "'Syne',sans-serif" }}
              >
                {value}
              </span>
              <span className="text-[11.5px] text-slate-400 font-medium uppercase tracking-widest" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── MARQUEE ROWS ── */}
        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm mb-4" style={{ fontFamily: "'DM Sans',sans-serif" }}>
            Ready to join our growing client family?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-emerald-600 transition-colors duration-300"
            style={{ fontFamily: "'DM Sans',sans-serif" }}
          >
            Start Your Project
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Clients;