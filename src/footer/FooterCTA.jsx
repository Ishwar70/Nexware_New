  import React from 'react';

  const FooterCTA = () => (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl z-20">
      <div className="bg-[#e0f7ff] border-2 border-indigo-400 rounded-[4rem] p-10 md:p-16 text-center shadow-2xl">
        <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto mb-6">
          Our team builds modern, scalable, and conversion-focused websites paired with digital marketing expertise, helping businesses thrive online with confidence.
        </p>
        <h2 className="text-2xl md:text-4xl font-black text-[#001f2d] mb-10">
          We Deliver High-Performance Web & Digital Solutions
        </h2>
        <button className="px-10 py-4 bg-[#001f2d] text-white rounded-full font-bold hover:bg-indigo-600 transition-all shadow-xl hover:scale-105 active:scale-95">
          Get A Quote
        </button>
      </div>
    </div>
  );

  export default FooterCTA;