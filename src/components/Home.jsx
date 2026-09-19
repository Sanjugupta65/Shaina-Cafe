















import React from 'react';

import { Star, Sparkles, Heart, Coffee, ArrowRight, Utensils, MapPin } from 'lucide-react';

export default function Home({ onExploreMenu, onOpenReserve }) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-linear-to-b from-[#FFF9FC] via-[#FDE8F3]/30 to-[#FFF9FC]"
    >
      {/* Background blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#B298E7]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F5B8D5]/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#B8E3E9]/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">

        {/* Left: Text content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-in">

          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#F9BEDD] shadow-sm text-sm font-semibold">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>4.8</span>
            <span className="text-[#6B5B7B]">•</span>
            <span className="text-xs text-[#583A85]">Google Rated (6 Reviews)</span>
            <span className="bg-[#FDE8F3] text-[#AA326C] px-2 py-0.5 rounded-full text-xs font-bold">
              ₹100–250 / person
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-[#2B2135] leading-tight">
            A Cute & Peaceful <br />
            <span className="text-gradient-cute italic">Moment of Peace</span> <br />
            With Nice Food & Drinks.
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-[#6B5B7B] max-w-2xl mx-auto lg:mx-0">
            Welcome to <strong className="text-[#583A85]">Shaina Cafe</strong> — a cozy sanctuary
            where every treat is handcrafted with love by founder{' '}
            <strong className="text-[#AA326C]">Sandeep Rana</strong>, the owner & chef. Step in for
            a relaxed, peaceful vibe in the heart of Earth, Punjab
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#offerings"
              onClick={onExploreMenu}
              className="px-7 py-3.5 rounded-full bg-linear-to-r from-[#B298E7] via-[#F5B8D5] to-[#F9BEDD] font-bold flex items-center gap-2 hover:scale-105 transition">
              <Coffee className="w-5 h-5" /> Explore Offerings <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenReserve}
              className="px-7 py-3.5 rounded-full bg-white border-2 border-[#D7C7F4] font-bold flex items-center gap-2 hover:bg-[#FDE8F3] hover:scale-105 transition"
            >
              <Heart className="w-4 h-4 fill-[#AA326C] text-[#AA326C]" /> Pre-Order / Reserve
            </button>
          </div>

          {/* Feature badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#F9BEDD]/40 max-w-lg mx-auto lg:mx-0">
            {[
              { value: '100%', label: 'Chef Made', color: '#583A85' },
              { value: 'Cozy', label: 'Serene Vibe', color: '#377580' },
              { value: '₹100-250', label: 'Sweet Budget', color: '#AA326C' },
            ].map((item) => (
              <div key={item.label} className="bg-white/70 p-3 rounded-2xl border text-center">
                <span className="text-xl font-bold block" style={{ color: item.color }}>
                  {item.value}
                </span>
                <span className="text-xs text-[#6B5B7B]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="lg:col-span-5 relative animate-fade-in">
          <div className="relative rounded-[2.5rem] p-3 bg-gradient-to-tr from-[#B298E7] via-[#F5B8D5] to-[#B8E3E9] shadow-2xl">
            <div className="relative rounded-[2rem] overflow-hidden bg-white aspect-[4/5]">
              <img
                src="/images/Cafe front.jpg"
                alt="Shaina Cafe"
                className="w-full h-full object-cover hover:scale-105 transition-transform  duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2B2135]/50 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#2B2135]">Shaina Cafe</h4>
                  <p className="text-xs text-[#6B5B7B] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#AA326C]" /> Earth, Punjab
                  </p>
                </div>
                <span className="px-3 py-1 bg-[#FDE8F3] text-[#AA326C] rounded-full text-xs font-bold">
                  Sandeep Rana • Owner & Chef
                </span>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-6 left-2 bg-white/90 p-3 rounded-2xl shadow-lg flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#AA326C]" />
            <div>
              <p className="text-xs font-bold text-[#2B2135]">Handcrafted Brews & Bites</p>
              <p className="text-[10px] text-[#6B5B7B]">Tasty Drinks & Fast Foods</p>
            </div>
          </div>

          <div className="absolute -bottom-6 right-2 bg-white/90 p-3 rounded-2xl shadow-lg flex items-center gap-3">
            <Utensils className="w-5 h-5 text-[#377580]" />
            <div>
              <p className="text-xs font-bold text-[#2B2135]">Made Fresh Daily</p>
              <p className="text-[10px] text-[#6B5B7B]">By Owner & Chef</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}