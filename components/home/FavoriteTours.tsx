"use client";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function FeaturedTours() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setShowArrows(el.scrollWidth > el.clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const slideLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const slideRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(135deg, #f3f4f6 0%, #e8f5e9 40%, #e3f2fd 100%)",
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black drop-shadow-sm">
          OUR HANDPICKED ADVENTURE TRAVEL ITINERARIES
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          These journeys are ready to book as designed, and we’re always happy to customize them
           to match your travel style and preferences.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* LEFT ARROW */}
        {showArrows && (
          <button
            onClick={slideLeft}
            className="
              absolute left-0 top-1/2 -translate-y-1/2
              bg-[#F96D41] text-white 
              w-12 h-12 
              flex items-center justify-center
              shadow-lg rounded-full
              z-20
            "
          >
            ←
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar py-4"
        >
          <TourCard
            img="/asset/favorite/nan.jpeg"
            title="Nanga Parbat Rupal Face Trek | 2025 | BOOK NOW"
            duration="09 Nights & 10 Days"
          />

          <TourCard
            img="/asset/slidersection/pic1.jpeg"
            title="K2 Base Camp Trek | 2025 | BOOK NOW"
            duration="20 Nights 21 Days"
            reviews="(4 Reviews)"
          />

          <TourCard
            img="/asset/slidersection/pic4.jpeg"
            title="Rakaposhi & Diran Base Camp Trek | 2025 | BOOK NOW"
            duration="14 Days 13 Nights"
          />

          <TourCard
            img="/asset/favorite/k22.jpeg"
            title="K2 Gondogoro La Trek | 2025 | BOOK NOW"
            duration="20 Nights 21 Days"
            reviews="(3 Reviews)"
          />
        </div>

        {/* RIGHT ARROW */}
        {showArrows && (
          <button
            onClick={slideRight}
            className="
              absolute right-0 top-1/2 -translate-y-1/2
              bg-[#F96D41] text-white 
              w-12 h-12 
              flex items-center justify-center
              shadow-lg rounded-full
              z-20
            "
          >
            →
          </button>
        )}
      </div>

      <div className="text-center mt-10">
        <Link href="/tours">
          <button className="border border-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 text-black">
            View All Tours
          </button>
        </Link>
      </div>
    </section>
  );
}

function TourCard({ img, title, duration, reviews }: any) {
  return (
    <div className="min-w-[260px] max-w-[260px] bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <Image src={img} alt={title} width={300} height={200} className="h-40 w-full object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-md text-black">{title}</h3>

        <p className="text-gray-700 text-sm mt-2 flex items-center gap-2">
          ⏳ {duration}
        </p>

        
      </div>
    </div>
  );
}
