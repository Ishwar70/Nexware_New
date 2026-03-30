import HeroContent from "./HeroContent";
import HeroForm from "./HeroForm";
import FloatingCTA from "./FloatingCTA";
import CursorFollower from "./CursorFollower";

const HeroSection = () => (
  <section className="relative min-h-screen bg-[#020810] flex items-center pt-2 pb-10 overflow-hidden">

    {/* ── BACKGROUND LAYER ── */}
    <div className="absolute inset-0 z-0 pointer-events-none select-none">
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      {/* Mesh orbs */}
      <div className="absolute -top-1/4 -left-1/4 w-[55%] h-[55%] rounded-full bg-emerald-600/10 blur-[140px]" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[50%] h-[50%] rounded-full bg-cyan-500/8 blur-[130px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full bg-teal-500/5 blur-[100px]" />

      {/* Fine dot-grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Thin diagonal accent line */}
      <div className="absolute top-0 right-[38%] w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
    </div>

    {/* Cursor glow follower */}
    <CursorFollower />

    {/* ── MAIN GRID ── */}
    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 xl:gap-24 items-center">
        <HeroContent />
        <div className="flex justify-center lg:justify-end">
          <HeroForm />
        </div>
      </div>
    </div>

    {/* Fixed floating actions */}
    <FloatingCTA />
  </section>
);

export default HeroSection;