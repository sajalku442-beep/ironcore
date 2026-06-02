import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { CTAButton } from "../shared/CTAButton";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Memberships", path: "/memberships" },
    { name: "Trainers", path: "/trainers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // Listen to scrolling state to apply frosted-glass effects on sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-slate-100"
            : "bg-white border-b border-slate-50"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 px-4 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6.5 6.5 11 11" />
                <path d="m21 21-1-1" />
                <path d="m3 3 1 1" />
                <path d="m18 22 4-4" />
                <path d="m2 6 4-4" />
                <path d="m3 10 7-7" />
                <path d="m14 21 7-7" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              IRON<span className="text-amber-500">CORE</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold tracking-wide uppercase transition-colors relative py-2 ${
                    isActive
                      ? "text-amber-500"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Action Block */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918013160400"
              className="flex items-center gap-2 font-bold text-slate-800 hover:text-amber-500 transition-colors text-sm"
              title="Call Sales Team"
            >
              <Phone size={16} className="text-amber-500 animate-pulse" />
              <span>+91 8013160400</span>
            </a>
            <CTAButton to="/memberships" variant="amber" size="sm">
              JOIN NOW
            </CTAButton>
          </div>

          {/* Mobile Hamburg Trigger button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-3 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 cursor-pointer outline-none focus:ring-1 focus:ring-amber-500"
            aria-label="Open navigation drawer"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Slide drawer menu */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        links={navLinks}
      />
    </>
  );
};
export default Navbar;
