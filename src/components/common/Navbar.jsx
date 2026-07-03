import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { company } from "../../data/company";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add a subtle shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3" 
          : "bg-white border-b border-gray-100 py-4 md:py-5"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 group">
          <img 
            src="./Images/Home_page_img/logo.jpeg" 
            alt="R.A. Engineering Logo" 
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg md:text-2xl font-bold tracking-tight text-[var(--color-navy-950)] group-hover:text-[var(--color-gold-600)] transition-colors duration-300">
              R.A. Engineering <span className="hidden sm:inline text-[var(--color-gold-600)]">&amp; Construction</span>
            </span>
            <span className="sm:hidden text-[10px] font-semibold text-[var(--color-gold-600)] mt-1 uppercase tracking-wider">
              &amp; Construction
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[15px] font-semibold transition-colors relative 
                  after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-[var(--color-gold-500)] after:transition-all after:duration-300
                  ${isActive 
                    ? 'text-[var(--color-gold-600)] after:w-full' 
                    : 'text-[var(--color-navy-800)] hover:text-[var(--color-gold-600)] after:w-0 hover:after:w-full'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${company.contact.phone}`}
            className="hidden md:flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] text-[var(--color-navy-950)] text-sm font-bold px-6 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone size={16} className="animate-pulse" />
            <span>{company.contact.phoneDisplay}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[var(--color-navy-950)] hover:text-[var(--color-gold-600)] transition-colors p-2 rounded-md hover:bg-gray-50"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl animate-[slideDown_0.2s_ease-out]">
          <div className="max-w-[90rem] mx-auto px-6 py-4 flex flex-col">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`py-3 text-lg font-bold border-b border-gray-50 flex items-center justify-between group transition-colors ${
                      isActive ? 'text-[var(--color-gold-600)]' : 'text-[var(--color-navy-800)]'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={18} className={`transition-transform duration-300 ${isActive ? 'translate-x-1 text-[var(--color-gold-600)]' : 'text-gray-300 group-hover:translate-x-1 group-hover:text-[var(--color-gold-600)]'}`} />
                  </Link>
                );
              })}
            </nav>
            <div className="mt-8 mb-4">
              <a
                href={`tel:${company.contact.phone}`}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[var(--color-gold-500)] text-[var(--color-navy-950)] text-base font-bold px-6 py-4 shadow-md active:scale-95 transition-transform"
              >
                <Phone size={18} />
                Call {company.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
