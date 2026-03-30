const links = ["Home", "About Us", "Services", "Portfolio", "Our Faq", "Contact Us"];

export const NavLinks = () => (
  <ul className="hidden lg:flex items-center gap-8">
    {links.map((link) => (
      <li key={link}>
        <a href={`#${link.toLowerCase().replace(" ", "")}`} 
           className="text-[15px] font-semibold text-slate-800 hover:text-emerald-600 transition-colors">
          {link}
        </a>
      </li>
    ))}
  </ul>
);