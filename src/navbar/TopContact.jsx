export const TopContact = () => (
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[13px] font-medium py-2 md:py-0">
    <div className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      <span>info@taxorlab.com</span>
    </div>
    <div className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      <span>D-126 Laxmi Nagar, New Delhi</span>
    </div>
  </div>
);