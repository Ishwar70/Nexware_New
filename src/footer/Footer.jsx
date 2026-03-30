import React from 'react';

// Sub-Component: The Floating "Pill" CTA
const FooterCTA = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-5xl z-30">
    <div className="bg-slate-50 border-2 border-emerald-500/30 rounded-[4rem] p-10 md:p-16 text-center shadow-2xl backdrop-blur-sm">
      <p className="text-slate-500 text-sm font-medium max-w-2xl mx-auto mb-4">
        Our team builds modern, scalable, and conversion-focused websites paired with digital marketing expertise.
      </p>
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 tracking-tighter">
        High-Performance <span className="text-emerald-600">MERN</span> Solutions
      </h2>
      <button className="px-12 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-slate-900 transition-all shadow-lg hover:-translate-y-1">
        Get A Quote
      </button>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="relative mt-60 pt-80 pb-12 bg-[#001f2d] text-white">
      {/* 1. The Overlapping Layout Element */}
      <FooterCTA />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          
          {/* Column 1: Identity */}
          <div className="space-y-8">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg rotate-3 flex items-center justify-center text-white text-xs">TX</div>
              Taxor<span className="text-emerald-500">Lab</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading the digital transformation with premium web development and strategic marketing.
            </p>
            <div>
              <h4 className="font-bold text-emerald-500 uppercase tracking-widest text-[10px] mb-2">Location</h4>
              <p className="text-sm text-slate-300">Laxmi Nagar, Delhi - 110092</p>
            </div>
          </div>

          {/* Column 2: About (Structure matching the image) */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">About Us</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              We specialize in the MERN stack, delivering pixel-perfect interfaces and robust backend architectures.
            </p>
            <div>
              <h5 className="font-bold text-xs text-emerald-500">Open Hours:</h5>
              <p className="text-xs text-slate-400">Mon - Sat: 9am - 6pm</p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Company</h4>
            <ul className="grid grid-cols-1 gap-4 text-sm text-slate-400">
              {['Home', 'Services', 'Portfolio', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="hover:text-emerald-500 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500/20 rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Interlocking with Call Action) */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact Us</h4>
            <div className="p-6 bg-slate-800/50 rounded-3xl border border-white/5">
              <p className="text-xs text-emerald-500 font-bold mb-1 uppercase">Let's Discuss Growth</p>
              <p className="text-xl font-black underline decoration-emerald-500 underline-offset-4">
                +91-9065491569
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Layout exact to image */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="px-8 py-2 bg-white/5 rounded-full border border-white/5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              TaxorLab © 2026 All Rights Reserved
            </p>
          </div>
          <div className="flex gap-4">
             {/* Social Circles */}
             {[1, 2, 3].map((i) => (
               <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 transition-all cursor-pointer">
                 <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;