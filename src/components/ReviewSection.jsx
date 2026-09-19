import { useState } from 'react';
import confetti from 'canvas-confetti';
import { REVIEWS, RATING_STATS } from '../data/reviewsData';
import { Star, Quote } from 'lucide-react';

// Small helper so we don't repeat the 5-star loop three times
function StarRow({ filled = 5, size = 'w-4 h-4' }) {
  return (
    <div className="flex text-amber-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${size} ${i < filled ? 'fill-amber-400' : 'text-gray-300'}`} />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  // const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const reviewToAdd = {
      id: Date.now(),
      name: newReview.name,
      role: 'Recent Guest',
      rating: newReview.rating,
      date: 'Just now',
      text: newReview.text,
      highlight: 'Warm Memory',
      avatarBg: '#B298E7',
      avatarInitial: newReview.name.charAt(0).toUpperCase(),
    };

    setReviewsList([reviewToAdd, ...reviewsList]);
    // setShowReviewModal(false);
    setNewReview({ name: '', text: '', rating: 5 });

    confetti({
      particleCount: 40,
      spread: 60,
      colors: ['#B298E7', '#F5B8D5', '#B8E3E9', '#F9BEDD'],
    });
  };

  return (
    <section id="reviews" className="py-24 bg-[#FFF9FC] relative">

      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#B8E3E9]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1F4F7] text-[#377580] text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#377580]" />
            <span>Google Review Rating • 4.8 / 5 Stars</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-[#2B2135]">
            Loved by <span className="text-gradient-cute italic">Local Foodies</span>
          </h2>
          <p className="text-base text-[#6B5B7B]">
            Read real guest experiences from our cozy cafe in Earth, Punjab.
          </p>
        </div>

        {/* Rating summary */}
        <div className="glass-card p-8 rounded-3xl mb-12 border border-[#F9BEDD]/60 max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-center">

          <div className="md:col-span-5 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-[#D7C7F4]/40 pb-6 md:pb-0 md:pr-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-5xl font-bold text-[#2B2135]">4.8</span>
              <div>
                <StarRow filled={5} size="w-5 h-5" />
                <span className="text-xs text-[#6B5B7B] font-semibold">Based on 6+ Google Reviews</span>
              </div>
            </div>
            <p className="text-xs text-[#583A85] font-medium pt-1">
              "Nice and cozy. Good place to enjoy a moment of peace with some nice food"
            </p>
          </div>

          <div className="md:col-span-7 space-y-2">
            {RATING_STATS.breakdown.map((b) => (
              <div key={b.stars} className="flex items-center gap-3 text-xs">
                <span className="w-12 font-bold text-[#2B2135]">{b.stars} Stars</span>
                <div className="flex-1 bg-[#FDE8F3] h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#B298E7] to-[#F5B8D5] h-full rounded-full"
                    style={{ width: `${b.percentage}%` }}
                  />
                </div>
                <span className="w-8 text-right text-[#6B5B7B] font-medium">{b.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviewsList.map((rev) => (
            <div key={rev.id} className="glass-card p-6 rounded-3xl border border-[#D7C7F4]/50 relative">
              <Quote className="w-8 h-8 text-[#F5B8D5]/60 absolute top-4 right-4" />

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: rev.avatarBg }}
                  >
                    {rev.avatarInitial}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2B2135]">{rev.name}</h4>
                    <p className="text-[11px] text-[#6B5B7B]">{rev.role}</p>
                    {rev.spend && <p className="text-[10px] text-[#AA326C] font-semibold">{rev.spend}</p>}
                  </div>
                </div>

                <StarRow filled={Math.floor(rev.rating)} />

                <p className="text-xs text-[#2B2135] leading-relaxed italic">"{rev.text}"</p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#D7C7F4]/30 flex items-center justify-between text-[11px]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#E1F4F7] text-[#377580] font-bold">
                  {rev.highlight}
                </span>
                <span className="text-[#6B5B7B]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}