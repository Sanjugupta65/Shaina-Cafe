
import { useLenis } from "lenis/react";
import { Coffee, Heart, MapPin, ArrowUp } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";

export default function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#2B2135] text-white border-t border-[#F5B8D5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Cafe Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F5B8D5] flex items-center justify-center text-[#2B2135]">
                <Coffee className="w-5 h-5" />
              </div>

              <h2 className="text-xl font-bold">
                Shaina Cafe
              </h2>
            </div>

            <p className="text-sm text-[#D7C7F4]/80 leading-relaxed max-w-sm">
              {CAFE_INFO.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-bold text-[#F5B8D5] uppercase tracking-wide mb-4">
              Connect With Us
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[#D7C7F4]/80">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>

              <a
                href="https://github.com/Sanjugupta65"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sanju-gupta-509147296"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div>
            <h3 className="text-sm font-bold text-[#B8E3E9] uppercase tracking-wide mb-4">
              Cafe Hours & Location
            </h3>

            <div className="text-sm text-[#D7C7F4]/80 space-y-3">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F5B8D5] shrink-0 mt-0.5" />
                <span>Near HDFC Bank, Earth</span>
              </p>

              <p>
                <span className="text-white font-semibold">Hours:</span>{" "}
                10:00 AM – 9:00 PM
              </p>

              <p className="text-xs text-[#F5B8D5] italic">
                Open Monday – Sunday
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7C7F4]/60">

          <p className="flex items-center gap-1 text-center sm:text-left">
            Crafted with
            <Heart className="w-3.5 h-3.5 fill-[#F5B8D5] text-[#F5B8D5]" />
            by Sanju for Shaina Cafe • All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-[#B298E7] hover:text-[#2B2135] transition"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
}