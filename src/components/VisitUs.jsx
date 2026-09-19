

import { MapPin, Clock, Navigation } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";

export default function VisitUs() {
  const mapSearchUrl = `public/images/give-me-the-job-.gif`;

  return (
    <section
      id="location"
      className="py-20 bg-[#FFF9FC]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E1F4F7] text-[#377580] text-sm font-semibold">
            <MapPin className="w-4 h-4" />
            Visit Our Cozy Shaina Cafe, Earth
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2135]">
            Find Your Way to <span className="text-gradient-cute font-cute italic"> Peace</span> 
          </h2>

          <p className="text-[#6B5B7B] mt-3">
            Come enjoy fresh coffee, delicious food, and a cozy atmosphere.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Café Information */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#F5B8D5]">

            {/* Address */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-[#AA326C] font-semibold mb-2">
                <MapPin className="w-5 h-5" />
                Address
              </div>

              <h3 className="text-xl font-bold text-[#2B2135]">
                {CAFE_INFO.name}
              </h3>

              <p className="text-[#6B5B7B] mt-2 leading-relaxed">
                {CAFE_INFO.address}
              </p>
            </div>

            {/* Opening Hours */}
            <div className="border-t border-[#D7C7F4] pt-6">
              <div className="flex items-center gap-2 text-[#583A85] font-semibold mb-4">
                <Clock className="w-5 h-5" />
                Opening Hours
              </div>

              <div className="space-y-2 text-sm text-[#6B5B7B]">
                <div className="flex justify-between">
                  <span>Monday – Sunday</span>
                  <strong className="text-[#2B2135]">
                    2:00 PM – 9:00 PM
                  </strong>
                </div>

                <div className="flex justify-between">
                  <span>Occasionally </span>
                  <strong className="text-[#AA326C]">
                    Closed
                  </strong>
                </div>
              </div>
            </div>

            {/* Average Spend */}
            <div className="border-t border-[#D7C7F4] mt-6 pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B5B7B]">
                  Average Spend
                </span>

                <strong className="text-[#583A85]">
                  ₹100 – ₹250 per person
                </strong>
              </div>
            </div>

          </div>

          {/* Map Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-[#F5B8D5] p-8 flex items-center justify-center text-center">

            <div>
              <div className="w-16 h-16 mx-auto rounded-full bg-[#F5B8D5] flex items-center justify-center text-[#AA326C]">
                <MapPin className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-[#2B2135] mt-5">
                {CAFE_INFO.name}
              </h3>

              <p className="text-sm text-[#6B5B7B] mt-3 max-w-md">
                {CAFE_INFO.address}
              </p>

              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-[#F5B8D5] text-[#2B2135] font-semibold hover:scale-105 transition"
              >
                <Navigation className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
