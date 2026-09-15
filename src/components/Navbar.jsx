



import React, { useState, useEffect } from "react";
import {
  Coffee,
  Sparkles,
  Menu,
  X,
  Calendar,
  Clock,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Chef Story", href: "#story" },
  { name: "Offerings", href: "#offerings" },
  { name: "Real Moments", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Visit Us", href: "#location" },
];

export default function Navbar({ onOpenReserve }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenuAndReserve = () => {
    setMenuOpen(false);
    onOpenReserve();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFF9FC]/85 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-[#B298E7] via-[#F5B8D5] to-[#B8E3E9] flex items-center justify-center">
            <div className="w-[85%] h-[85%] bg-white rounded-xl flex items-center justify-center text-[#583A85]">
              <Coffee className="w-5 h-5" />
            </div>
          </div>

          <div>
            <span className="text-xl font-bold text-[#2B2135] flex items-center gap-1">
              Shaina Cafe
              <Sparkles className="w-4 h-4 text-[#F5B8D5]" />
            </span>

            <span className="text-[10px] uppercase text-[#6B5B7B] tracking-widest block -mt-1">
              Cozy Haven • Gidderbaha
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 border border-[#D7C7F4]/40 px-4 py-1.5 rounded-full">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-[#2B2135] hover:bg-[#FDE8F3] rounded-full transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#E1F4F7] text-[#377580] px-3 py-1.5 rounded-full text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Opens 2 PM</span>
          </div>

          <button
            onClick={onOpenReserve}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-[#B298E7] via-[#F5B8D5] to-[#F9BEDD] font-semibold text-sm hover:scale-105 transition"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve & Order</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-2xl bg-white/90 border border-[#F9BEDD]"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-[#FFF9FC]/95 backdrop-blur-xl border-b border-[#F5B8D5] px-6 py-6 space-y-4">
          
          <div>
            <span className="text-xs font-semibold text-[#583A85] bg-[#E1F4F7] px-3 py-1 rounded-full inline-block">
              Opens 2 PM (Tue - Sun)
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-[#2B2135] hover:bg-[#FDE8F3] rounded-xl transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={closeMenuAndReserve}
            className="w-full py-3 rounded-full bg-linear-to-r from-[#B298E7] via-[#F5B8D5] to-[#F9BEDD] font-bold"
          >
            Book a Table / Pre-Order
          </button>
        </div>
      )}
    </header>
  );
}
