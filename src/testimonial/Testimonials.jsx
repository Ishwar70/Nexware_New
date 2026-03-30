// Testimonials.jsx
import { useState, useEffect, useCallback } from "react";
import TestimonialLeft from "./TestimonialLeft";
import { ReviewCard } from "./ReviewCard";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Malhotra",
    role: "Digital Marketing Head",
    image: "https://i.pravatar.cc/150?u=priya",
    text: "TaxorLab completely transformed our digital presence. Our ROI improved by 3x within the first quarter — beyond anything we expected.",
    rating: "5.0",
  },
  {
    id: 2,
    name: "Arjun Singh",
    role: "Founder, TechStart",
    image: "https://i.pravatar.cc/150?u=arjun",
    text: "The team delivered pixel-perfect code in record time. Their attention to SEO and performance meant we ranked on page one within 6 weeks.",
    rating: "4.9",
  },
  {
    id: 3,
    name: "Neha Sharma",
    role: "E-Commerce Owner",
    image: "https://i.pravatar.cc/150?u=neha",
    text: "Our online store went from 0 to ₹4L/month in revenue after TaxorLab rebuilt and marketed it. Genuinely life-changing partnership.",
    rating: "5.0",
  },
];

const Testimonials = () => {
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);

  const next = useCallback(() =>
    setActive((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1)), []);
  const prev = useCallback(() =>
    setActive((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1)), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <section className="py-24 bg-[#f8fafb] relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      {/* bg orbs */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none" />

      {/* dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tdots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#0f172a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tdots)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <TestimonialLeft />

          {/* Review card + dots */}
          <div
            className="flex flex-col items-center lg:items-end gap-6"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <ReviewCard
              data={TESTIMONIALS[active]}
              onNext={next}
              onPrev={prev}
              total={TESTIMONIALS.length}
              current={active}
            />

            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2 bg-emerald-500"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;