import { useState } from 'react';
import { Camera, Sparkles, X, MapPin, ExternalLink } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    image: '/images/insta_8.webp',
    title: '"Fairy lights and quiet evening conversations"',
    category: 'Evening Glow ✨',
    tag: '@Shaina Cafe • Night Moments',
    description: 'A cozy night under our Assamese thatch gazebos. Gentle breezes and warm ambient lights make time stand still.',
  },
  {
    id: 2,
    image: '/images/Candlelight birthday.jpeg',
    title: '"Candlelight memories for special birthday dates"',
    category: 'Celebrations 🌹',
    tag: '@Shaina Cafe • Special Days',
    description: 'Fresh roses, handwritten chalkboard messages, and warm candlelight setups crafted for unforgettable birthdays.',
  },
  {
    id: 3,
    image: '/images/insta_3.jpg',
    title: '"Plated with love: Fresh rice & savory curry bowls"',
    category: 'Comfort Eats 🍲',
    tag: '@Shaina Cafe • Made Fresh',
    description: 'Warm comfort bowls cooked fresh to order on red checkered tables, straight from our owner-chef kitchen.',
  },
  {
    id: 4,
    image: '/images/kithchen.webp',
    title: '"Where the aroma of fresh spices fills the air"',
    category: ' Kitchen 🛖',
    tag: '@Shaina Cafe • Authentic Vibe',
    description: 'Stepping into our authentic Craving Delite bamboo kitchen cottage lit up with golden warm lights.',
  },
  {
    id: 5,
    image: '/images/snapping smile.jpg',
    title: '"Snapping smiles at the neon wall"',
    category: 'Photo Memories 📸',
    tag: '@Shaian Cafe • Photo Wall',
    description: 'Our favorite corner in the garden — capturing happy smiles and cherished memories against the illuminated bamboo backdrop.',
  },
  {
    id: 6,
    image: '/images/insta_5.jpg',
    title: '"Golden fairy lights canopy over glowing cottages"',
    category: 'Cottage Ambiance 🌟',
    tag: '@Shaina Cafe • Night Canopy',
    description: 'Warm evening lighting and serene outdoor gazebo dining glowing beautifully under the Assam night sky.',
  },
  {
    id: 7,
    image: '/images/insta_4.jpg',
    title: '"Peaceful garden strolls along the pebble walkway"',
    category: 'Garden Courtyard 🌿',
    tag: '@Shaina Cafe • Peaceful Walk',
    description: 'Unwinding with quiet garden walks framed by traditional Assamese craft accents and potted blooms.',
  },
  {
    id: 8,
    image: '/images/Owner-img.jpg',
    title: '"A warm welcome from Sandeep Rana"',
    category: 'Meet Chef Sandeep Rana 🌸',
    tag: '@Shaina Cafe • Cafe owner',
    description: 'Owner & Chef Sandeep Rana preparing every dish with personal care and greeting every guest like family.',
  },
];

// Shared Instagram glyph — used in both the CTA icon box and the button.
function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function InstagramGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#FFF9FC] via-[#FDE8F3]/30 to-[#FFF9FC] relative overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#B298E7]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F5B8D5]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDE8F3] text-[#AA326C] text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Atmospheric Snapshots • @Shaina_cafe</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-[#2B2135]">
            Moments Captured at <span className="text-gradient-cute italic">Shaina Cafe</span>
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[#F9BEDD]/40"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FDE8F3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2135]/85 to-transparent" />

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-[#AA326C] text-[11px] font-bold">
                  {item.category}
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-sm font-semibold italic truncate group-hover:text-[#F5B8D5] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-pink-200 block mt-0.5">{item.tag}</span>
                </div>
              </div>

              {/* Caption footer */}
              <div className="p-4 bg-white">
                <p className="text-xs text-[#6B5B7B] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-5 pt-2 border-t border-[#D7C7F4]/30 flex items-center justify-between text-[11px] font-bold text-[#583A85]">
                  <span>Tap to expand photo</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#AA326C]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA banner */}
        <div className="mt-16 bg-gradient-to-r from-[#B298E7]/20 via-[#F5B8D5]/30 to-[#B8E3E9]/20 rounded-3xl p-8 border border-white/80 shadow-lg text-center max-w-4xl mx-auto space-y-4">
          <div className="w-12 h-8 rounded-2xl bg-white flex items-center justify-center text-[#AA326C] mx-auto">
            <InstagramIcon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#2B2135]">Share your cozy moments with us!</h3>
          <p className="text-sm text-[#6B5B7B] max-w-xl mx-auto">
            Tag @Shaina Cafe on Instagram when you visit to get featured in our customer highlights!
          </p>
          <a
            href="/images/job dedo.webp"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B298E7] via-[#F5B8D5] to-[#F9BEDD] font-bold text-sm hover:scale-105 transition inline-flex items-center gap-2"
          >
            <InstagramIcon className="w-4 h-4 text-[#583A85]" />
            <span>Visit @Shaina Cafe</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2135]/80 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden relative shadow-2xl border border-[#F5B8D5]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 text-[#2B2135] hover:bg-[#FDE8F3] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] bg-[#2B2135]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#AA326C]">
                {selectedImage.tag}
              </div>
            </div>

            <div className="p-4 space-y-3">
              <span className="text-xs font-bold text-[#583A85] bg-[#FDE8F3] px-3 py-1 rounded-full inline-block">
                {selectedImage.category}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#2B2135] italic">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-[#6B5B7B] leading-relaxed">{selectedImage.description}</p>
              <div className="pt-2 text-xs text-[#6B5B7B] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#AA326C]" />
                <span>Shaina Cafe • Earth, Punjab</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}