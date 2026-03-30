import { useState, useCallback } from "react";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home",      href: "#home" },
  { label: "About Us",  href: "#aboutus" },
  { label: "Services",  href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ",       href: "#faq" },
  { label: "Contact",   href: "#contact" },
];

const SOCIAL_ICONS = [
  {
    name: "Facebook",
    href: "#",
    svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    name: "YouTube",
    href: "#",
    svg: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" />
        <polyline points="10 15 15 12 10 9 10 15" />
      </>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    svg: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
  },
  {
    name: "Instagram",
    href: "#",
    svg: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
];

// ─── PRIMITIVES ───────────────────────────────────────────────────────────────
const SvgIcon = ({ children, className = "w-3.5 h-3.5" }) => (
  <svg
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true"
  >
    {children}
  </svg>
);

const ArrowRight = () => (
  <SvgIcon>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </SvgIcon>
);

// ─── TOP BAR ─────────────────────────────────────────────────────────────────
const ContactLink = ({ href, iconPaths, children }) => (
  <a
    href={href}
    className="flex items-center gap-2 text-[12.5px] font-medium text-white/50 hover:text-emerald-400 no-underline transition-colors duration-200"
  >
    <SvgIcon className="w-3.5 h-3.5 opacity-70 flex-shrink-0">{iconPaths}</SvgIcon>
    {children}
  </a>
);

const TopBar = () => (
  <div className="bg-[#050d1a] border-b border-white/[0.06]">
    <div className="max-w-7xl mx-auto px-5 md:px-8 h-11 flex items-center justify-between gap-4">
      <div className="flex items-center gap-5">
        <ContactLink
          href="mailto:info@taxorlab.com"
          iconPaths={
            <>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </>
          }
        >
          info@taxorlab.com
        </ContactLink>

        <ContactLink
          href="#location"
          iconPaths={
            <>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </>
          }
        >
          <span className="hidden sm:inline">D-126 Laxmi Nagar, New Delhi</span>
          <span className="sm:hidden">New Delhi</span>
        </ContactLink>
      </div>

      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-400/25 bg-emerald-400/10 text-[11px] font-semibold tracking-widest uppercase text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Available for projects
      </div>
    </div>
  </div>
);

// ─── FLOATING SOCIALS ────────────────────────────────────────────────────────
const FloatingSocials = () => (
  <div className="hidden lg:flex absolute right-8 top-11 z-40 items-center gap-0.5 bg-white border border-slate-100 border-t-0 rounded-b-2xl px-3 pb-2.5 pt-2 shadow-[0_8px_24px_rgba(0,0,0,.07)]">
    {SOCIAL_ICONS.map(({ name, href, svg }) => (
      <a
        key={name} href={href} aria-label={name}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 hover:-translate-y-0.5 transition-all duration-150"
      >
        <SvgIcon className="w-[15px] h-[15px]">{svg}</SvgIcon>
      </a>
    ))}
  </div>
);

// ─── LOGO ─────────────────────────────────────────────────────────────────────
const Logo = () => (
  <a href="#home" className="flex items-center gap-3 no-underline group flex-shrink-0">
    <div className="w-10 h-10 rounded-xl bg-[#0a0f1e] flex items-center justify-center relative overflow-hidden group-hover:-rotate-6 group-hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 to-transparent" />
      <span className="relative z-10 font-black text-xl text-white leading-none" style={{ fontFamily: "'Syne',sans-serif" }}>
        T
      </span>
    </div>
    <div className="flex flex-col leading-none gap-0.5">
      <span className="text-[19px] font-black tracking-tighter text-[#0a0f1e]" style={{ fontFamily: "'Syne',sans-serif" }}>
        TAXOR
      </span>
      <span className="text-[9px] font-semibold tracking-[.2em] uppercase text-emerald-600">
        Digital Agency
      </span>
    </div>
  </a>
);

// ─── DESKTOP NAV LINKS ────────────────────────────────────────────────────────
const NavLinks = ({ active, onSelect }) => (
  <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
    {NAV_LINKS.map(({ label, href }) => {
      const isActive = active === label;
      return (
        <li key={label} className="relative">
          <a
            href={href}
            onClick={() => onSelect(label)}
            className={[
              "block px-3.5 py-2 text-[13.5px] font-medium rounded-lg no-underline tracking-[-0.01em] transition-all duration-150",
              isActive
                ? "text-emerald-600 font-semibold"
                : "text-slate-500 hover:text-[#0a0f1e] hover:bg-slate-100",
            ].join(" ")}
          >
            {label}
          </a>
          {isActive && (
            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500" />
          )}
        </li>
      );
    })}
  </ul>
);

// ─── HAMBURGER ────────────────────────────────────────────────────────────────
const Hamburger = ({ open, toggle }) => (
  <button
    onClick={toggle}
    aria-label="Toggle navigation"
    aria-expanded={open}
    className="lg:hidden flex flex-col gap-[5px] items-center justify-center w-9 h-9 rounded-[9px] bg-slate-100 hover:bg-slate-200 border-none cursor-pointer transition-colors duration-150 flex-shrink-0"
  >
    <span className={`block w-[18px] h-0.5 bg-[#0a0f1e] rounded-sm transition-transform duration-200 origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`} />
    <span className={`block h-0.5 bg-[#0a0f1e] rounded-sm transition-all duration-200 ${open ? "w-0 opacity-0" : "w-[18px] opacity-100"}`} />
    <span className={`block w-[18px] h-0.5 bg-[#0a0f1e] rounded-sm transition-transform duration-200 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
  </button>
);

// ─── MOBILE MENU ─────────────────────────────────────────────────────────────
const MobileMenu = ({ active, onSelect, onClose }) => (
  <div className="lg:hidden border-t border-slate-100 bg-white px-5 pb-6 pt-3 animate-[slideDown_.2s_ease]">
    <style>{`@keyframes slideDown{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}`}</style>

    <ul className="list-none m-0 p-0 flex flex-col gap-0.5 mb-4">
      {NAV_LINKS.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            onClick={() => { onSelect(label); onClose(); }}
            className={[
              "block px-3.5 py-2.5 text-[15px] font-medium rounded-lg no-underline transition-all duration-150",
              active === label
                ? "text-emerald-600 bg-emerald-50 font-semibold"
                : "text-slate-500 hover:text-[#0a0f1e] hover:bg-slate-50",
            ].join(" ")}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>

    <div className="flex gap-2.5 border-t border-slate-100 pt-4">
      <button className="flex-1 py-2.5 text-[13px] font-semibold text-[#0a0f1e] bg-transparent border-[1.5px] border-slate-200 rounded-[10px] hover:border-slate-400 hover:bg-slate-50 cursor-pointer transition-all duration-150">
        Sign In
      </button>
      <button className="flex-[2] flex items-center justify-center gap-2 py-2.5 text-[13px] font-bold text-white bg-[#0a0f1e] rounded-[10px] border-none cursor-pointer hover:bg-emerald-700 transition-colors duration-200">
        Get Started <ArrowRight />
      </button>
    </div>

    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
      {SOCIAL_ICONS.map(({ name, href, svg }) => (
        <a
          key={name} href={href} aria-label={name}
          className="w-9 h-9 flex items-center justify-center rounded-[9px] text-slate-500 border-[1.5px] border-slate-200 hover:text-emerald-600 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-150"
        >
          <SvgIcon className="w-3.5 h-3.5">{svg}</SvgIcon>
        </a>
      ))}
    </div>
  </div>
);

// ─── ROOT ─────────────────────────────────────────────────────────────────────
const Header = () => {
  const [isOpen,     setIsOpen]     = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleSelect = useCallback((label) => setActiveLink(label), []);
  const toggle       = useCallback(() => setIsOpen((v) => !v), []);
  const close        = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <header className="sticky top-0 z-50">
        <TopBar />

        <nav className="bg-white border-b border-slate-100 relative">
          <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between gap-6 md:gap-10">
            <Logo />
            <NavLinks active={activeLink} onSelect={handleSelect} />

            {/* Right actions */}
            <div className="flex items-center gap-3 flex-shrink-0 ml-auto lg:ml-0">
              {/* <button className="hidden md:block px-5 py-2.5 text-[13px] font-semibold text-[#0a0f1e] bg-transparent border-[1.5px] border-slate-200 rounded-[10px] hover:border-slate-400 hover:bg-slate-50 cursor-pointer transition-all duration-150">
                Sign In
              </button> */}
              <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold text-white bg-[#0a0f1e] rounded-[10px] border-none cursor-pointer shadow-[0_4px_14px_rgba(10,15,30,.18)] hover:bg-emerald-700 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,143,94,.3)] transition-all duration-200">
                Get Started <ArrowRight />
              </button>
              <Hamburger open={isOpen} toggle={toggle} />
            </div>
          </div>

          <FloatingSocials />
          {isOpen && <MobileMenu active={activeLink} onSelect={handleSelect} onClose={close} />}
        </nav>
      </header>
    </>
  );
};

export default Header;