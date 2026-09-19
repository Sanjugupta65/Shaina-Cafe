
import { Utensils, Sparkles, CheckCircle2, Heart, Flame } from 'lucide-react';

const OFFERINGS = [
  {
    id: 'fresh-meals',
    title: "Chef's Handcrafted Meals & Comfort Eats",
    subtitle: "Signature Rice Bowls, Hot Snacks & Fresh Brews",
    description: "Every meal is cooked fresh to order by our owner & chef. Enjoy savory rice bowls, creamy curries, hot crispy snacks, and refreshing beverages prepared with personal care.",
    image: "/images/insta_3.jpg",
    badge: "Freshly Cooked",
    icon: Utensils,
    highlights: [
      "100% Owner-Chef Recipe",
      "Signature Creamy Rice Bowls",
      "Hot Snacks & Refreshing Shakes",
    ],
  },
  {
    id: 'candlelight-decor',
    title: "Romantic Candlelight & Birthday Setups",
    subtitle: "Custom Private Table Decor & Celebrations",
    description: "Transform your special dates and birthdays into unforgettable memories. We craft private candlelit table arrangements with fresh roses, golden cutlery, fairy lights, and custom decorations.",
    image: "/images/Birthday_setup.jpg",
    badge: "Pre-Book Special",
    icon: Flame,
    highlights: [
      "Custom Birthday & Anniversary Decor",
      "Romantic Candlelight Dinners",
      "Personalized Chalkboard Messages",
    ],
  },
  {
    id: 'fresh-meals',
    title: "Freshly crafged Cafe & Dinner Favorites",
    subtitle: "Signature Bowls, Comfort Meals & Fresh Brews",
    description: "Enjoy freshly prepared café favorites and satisfying dinner meals, made with quality ingredients and served with care. From flavorful rice bowls and creamy curries to crispy snacks and refreshing beverages, there is something for every craving." ,
    image: "images/cozy food.jpg",
    badge: "Freshly Prepared",
    icon: Utensils,
    highlights: [
      "Warm Fairy Light & Neon Canopy",
      "Traditional Thatch Bamboo Huts",
      "Serene Nighttime Sanctuary",
    ],
  },
  {
    id: 'garden-photo-nooks',
    title: "Garden Gazebos & Photobooth Nooks",
    subtitle: "Pebble Walkways, Jaapi Craft & Cute Memories",
    description: "Enjoy your coffee, snacks, or dinner in our charming garden spaces. With cozy seating, beautiful surroundings, and aesthetic photo corners, it is the perfect place to relax with friends, family, or someone special.",
    image: "/images/insta_4.jpg",
    badge: "Photo Haven",
    icon: Heart,
    highlights: 
    [ "Aesthetic Garden & Outdoor Seating", "Beautiful Photo-Worthy Corners", "Perfect for Friends, Dates & Family" 
    ],
  },
];

export default function OfferingsSection({ onOpenReserve }) {
  return (
    <section id="offerings" className="py-24 bg-gradient-to-b from-[#FFF9FC] via-[#FDE8F3]/30 to-[#FFF9FC] relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#B298E7]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F5B8D5]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1F4F7] text-[#377580] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Authentic Experience • Thoughtfully Priced (₹150-₹250)</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-[#2B2135]">
            Our Cafe Experience & <span className="text-gradient-cute italic">Special Offerings</span>
          </h2>
        </div>

        {/* Offering cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {OFFERINGS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-card rounded-[2.5rem] p-8 border border-[#F9BEDD]/50 group"
              >
                {/* Icon + badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF9FC] border border-[#D7C7F4] flex items-center justify-center text-[#583A85]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#FDE8F3] text-[#AA326C] text-xs font-bold">
                    {item.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 bg-[#FDE8F3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2135]/50 to-transparent" />
                </div>

                {/* Text */}
                <h3 className="font-serif text-2xl font-bold text-[#2B2135]">{item.title}</h3>
                <p className="text-xs font-semibold text-[#AA326C] mt-1 mb-3">{item.subtitle}</p>
                <p className="text-sm text-[#6B5B7B] leading-relaxed mb-6">{item.description}</p>

                {/* Highlights */}
                <div className="space-y-2 border-t border-[#D7C7F4]/40 pt-4">
                  {item.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs font-medium text-[#2B2135]">
                      <CheckCircle2 className="w-4 h-4 text-[#377580]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 bg-gradient-to-r from-[#B298E7]/20 via-[#F5B8D5]/30 to-[#B8E3E9]/20 rounded-3xl p-8 border border-white/80 shadow-lg text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-[#2B2135]">
            Planning a visit or special candlelit surprise?
          </h3>
          <p className="text-sm text-[#6B5B7B] max-w-xl mx-auto">
            Reserve a cozy bamboo gazebo, book a candlelit birthday setup, or pre-order your favorite treats!
          </p>
          <button
            onClick={onOpenReserve}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B298E7] via-[#F5B8D5] to-[#F9BEDD] font-bold text-sm hover:scale-105 transition inline-flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-[#AA326C]" />
            <span>Reserve & Pre-Order</span>
          </button>
        </div>

      </div>
    </section>
  );
}