import  { useState } from 'react';
import { Heart, Sparkles, Award, Coffee, Smile, Quote } from 'lucide-react';

const STORY_TABS = [
  {
    title: 'The Owner & Chef',
    icon: Heart,
    highlight: 'He is both the Owner & Chef!',
    content:
      'Shaina Cafe  is born out of a deep love for handcrafted food and heartwarming hospitality. Every dish is personally crafted by our owner and chef — from hot bites to beverages and sweet treats, every recipe carries a personal touch.',
    tag: 'Personalized Care',
  },
  {
    title: 'Our Cozy Philosophy',
    icon: Coffee,
    highlight: 'A Peaceful Haven on Earth',
    content:
      '"Welcome to Shaina Cafe, a space built for quiet, peaceful moments of happiness. We designed our cafe in Earth as a sanctuary where you can pause time, dive into a good book, catch up with old friends, or simply savor your food without ever feeling rushed. Take a breath, slow down, and make yourself at home.',
    tag: 'Quiet Comfort',
  },
  {
    title: 'Fresh & Artisanal',
    icon: Sparkles,
    highlight: 'Under ₹250 Everyday Delight',
    content:
      'We believe great food, cute aesthetics, and delightful flavors should be accessible to everyone. That\'s why all our handcrafted food, snacks, and beverages are priced thoughtfully between ₹100 - ₹200.',
    tag: 'Affordable Luxury',
  },
];

export default function StorySection() {
  const [activeTab, setActiveTab] = useState(0);
  const active = STORY_TABS[activeTab];

  return (
    <section id="story" className="py-24 bg-gradient-to-b from-[#FFF9FC] via-[#FDE8F3]/20 to-[#FFF9FC] relative overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#B298E7]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B8E3E9]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDE8F3] text-[#AA326C] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#AA326C]" />
            <span>Meet Sandeep Rana • Owner & Chef</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-[#2B2135]">
            "He's both the <span className="text-gradient-cute italic">owner</span> and the{' '}
            <span className="text-gradient-cute italic">chef!</span>"
          </h2>
          <p className="text-base text-[#6B5B7B] leading-relaxed">
            Every delicious bite, every refreshing drink, and every warm smile at Shaina Cafe comes
            straight from the heart of our founder, <strong className="text-[#583A85]">Sandeep Rana</strong>.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Left: Chef photo */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl p-3 bg-gradient-to-br from-[#F5B8D5] via-[#B298E7] to-[#B8E3E9] shadow-xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-white">
                <img
                  src="public/images/Owner-img.jpg"
                  alt="Sandeep Rana - Owner & Chef of Shaina Cafe"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2135]/80 to-transparent" />

                {/* Quote badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg">
                  <Quote className="w-5 h-5 text-[#F5B8D5] mb-1" />
                  <p className="text-xs font-serif italic text-[#2B2135] leading-snug">
                    "I want everyone who walks into  Shaina Cafe to feel like they've stepped into a
                    warm, friendly living room."
                  </p>
                  <span className="text-[11px] font-bold text-[#583A85] block mt-2">
                    — Sandeep Rana, Owner & Head Chef
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tabs */}
          <div className="lg:col-span-7 space-y-6">

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-3">
              {STORY_TABS.map((tab, idx) => {
                const Icon = tab.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={tab.title}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#B298E7] to-[#F5B8D5] text-[#2B2135] scale-105'
                        : 'bg-white/80 text-[#6B5B7B] border border-[#D7C7F4]/50 hover:bg-[#FDE8F3]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#583A85]' : 'text-[#6B5B7B]'}`} />
                    <span>{tab.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active tab content */}
            <div className="glass-card p-8 rounded-3xl space-y-6 border border-[#F9BEDD]/60">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#E1F4F7] text-[#377580] text-xs font-bold">
                  {active.tag}
                </span>
                <span className="text-xs text-[#583A85] font-semibold flex items-center gap-1">
                  <Award className="w-4 h-4 text-[#AA326C]" />
                  Verified Review Highlight
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2B2135]">{active.highlight}</h3>

              <p className="text-base text-[#6B5B7B] leading-relaxed">{active.content}</p>

              {/* Feature highlights */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[#D7C7F4]/40">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#FDE8F3] text-[#AA326C]">
                    <Smile className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#2B2135]">Warm Hospitality</h5>
                    <p className="text-xs text-[#6B5B7B]">Always served with a friendly smile</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#E1F4F7] text-[#377580]">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#2B2135]">Handcrafted Recipes</h5>
                    <p className="text-xs text-[#6B5B7B]">Made using pure quality ingredients</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}