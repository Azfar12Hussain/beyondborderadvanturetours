// File: app/blog/northern-pakistan/page.tsx

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Northern Pakistan Tour | Hunza, Skardu & Karakoram Adventure",
  description:
    "Explore Northern Pakistan with our unforgettable tour to Hunza, Skardu, Gilgit & Naran. Witness K2, turquoise lakes, ancient forts & breathtaking mountain views.",
  keywords: [
    "Northern Pakistan Tour",
    "Hunza Valley Tour",
    "Skardu Tour",
    "K2 Mountain Pakistan",
    "Karakoram Range",
    "Pakistan Travel",
    "Best Tour to Pakistan",
  ],
};

export default function NorthernPakistanBlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">

      {/* HERO SECTION */}
      <section className="text-center mb-20 relative">
        <div className="animate-float">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 via-orange-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
            Where Mountains Touch the Sky
          </h1>
        </div>
        <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 mb-10 leading-relaxed">
          A journey through Northern Pakistan — where nature, culture, and adventure come together in the heart of the Karakoram.
        </p>
        {/* HERO IMAGE */}
        <div className="mt-10 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
          <Image
            src="/asset/blog/village.jpeg"
            alt="Panoramic view of Hunza Valley with mountains"
            width={1200}
            height={600}
            className="rounded-2xl shadow-2xl border-4 border-white relative z-10 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      <article className="space-y-16">

        {/* WHY NORTHERN PAKISTAN IS SPECIAL */}
        <section className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-orange-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative">
            Why Northern Pakistan Is Special
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-orange-500 rounded-full"></div>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Northern Pakistan is home to some of the world's most dramatic landscapes.
            It is the only place on Earth where the Karakoram, Himalaya, and Hindu Kush mountain ranges meet.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start space-x-3">
              <span className="text-orange-500 text-xl mt-1">🏔️</span>
              <span className="text-gray-800"><strong className="text-blue-600">K2 (8,611m):</strong> Second highest mountain on Earth</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-orange-500 text-xl mt-1">⛰️</span>
              <span className="text-gray-800">Five of the world's fourteen 8,000m peaks are located here</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-orange-500 text-xl mt-1">🌊</span>
              <span className="text-gray-800">Attabad Lake & Sarfaranga Cold Desert — untouched natural wonders</span>
            </li>
          </ul>
          <div className="mt-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <Image
              src="/asset/tours/k22.jpeg"
              alt="K2 mountain peak in Karakoram Range"
              width={1200}
              height={700}
              className="rounded-2xl shadow-2xl border-4 border-white relative z-10 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* THE JOURNEY EXPERIENCE */}
        <section className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative">
            The Journey Experience
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded-full"></div>
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            From a scenic flight to Skardu to peaceful evenings in Hunza, each day feels like a living postcard.
            Lakes, glaciers, deserts, forts, and valleys unfold naturally as the journey continues.
          </p>

          {/* Video placeholder */}
          <div className="mt-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full rounded-2xl shadow-2xl border-4 border-white relative z-10 group-hover:scale-105 transition-transform duration-500"
            >
              <source src="/videos/v21.mp4" type="video/mp4" />
              <source src="/videos/v21.webm" type="video/webm" />

              Your browser does not support HTML5 video.
              <a href="/videos/v21.mp4" className="underline text-blue-400 ml-1">
                Download the video
              </a>
            </video>

            <p className="mt-4 text-sm text-gray-600 text-center">
              Emotional montage: travelers enjoying landscapes & moments
            </p>
          </div>

        </section>

        {/* HUMAN MOMENTS & CULTURE */}
        <section className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-red-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative">
            Human Moments & Culture
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-red-500 rounded-full"></div>
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            Sharing tea with locals, laughter around dinners, and stories passed through generations make this journey unforgettable. Hospitality here is a tradition, not service.
          </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="relative h-64 w-full group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <Image
              src="/asset/blog/dinner.jpeg"
              alt="Tourists sharing tea with Hunza locals"
              fill
              className="rounded-2xl shadow-xl border-4 border-white object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative h-64 w-full group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <Image
              src="/asset/blog/picture.jpeg"
              alt="Tourists enjoying campfire dinner in mountains"
              fill
              className="rounded-2xl shadow-xl border-4 border-white object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        </section>

        {/* PHOTOGRAPHY & VIEWS */}
        <section className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl shadow-lg border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative">
            A Photographer's Paradise 📸
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded-full"></div>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Every turn of the road offers a new frame worth capturing:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-xl mt-1">🌅</span>
              <span className="text-gray-800">Sunrise over Rakaposhi (7,788m)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-xl mt-1">🌊</span>
              <span className="text-gray-800">Reflections at Attabad Lake</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-xl mt-1">🏜️</span>
              <span className="text-gray-800">Vast golden landscapes of Sarfaranga Desert</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-xl mt-1">🏔️</span>
              <span className="text-gray-800">Dramatic mountain backdrops in Hunza & Passu</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-xl mt-1">⭐</span>
              <span className="text-gray-800">Star-filled skies in Gilgit</span>
            </li>
          </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="relative h-64 w-full group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-red-400/20 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <Image
              src="/asset/blog/attabad.jpeg"
              alt="Turquoise waters of Attabad Lake, Pakistan"
              fill
              className="rounded-2xl shadow-xl border-4 border-white object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative h-64 w-full group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-blue-400/20 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <Image
              src="/asset/blog/passu.jpeg"
              alt="Passu Cones mountain peaks in Hunza"
              fill
              className="rounded-2xl shadow-xl border-4 border-white object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        </section>

        {/* COMFORT & SAFETY */}
        <section className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg border border-orange-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative">
            Comfort, Food & Safety
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-orange-500 rounded-full"></div>
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            Adventure does not mean discomfort. After each day of exploration, travelers relax in comfortable hotels and resorts, enjoying warm meals. Our tours are led by experienced professionals, carefully planned with safety in mind, giving you peace of mind throughout the journey.
          </p>
          <div className="mt-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <Image
              src="/asset/blog/dinner.jpeg"
              alt="Comfortable hotel in Hunza Valley"
              width={1200}
              height={700}
              className="rounded-2xl shadow-2xl border-4 border-white relative z-10 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mt-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Ready to Experience Northern Pakistan?
            </h2>
            <p className="mb-10 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Let us take you beyond borders into unforgettable memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/tours"
                className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 hover:bg-orange-50"
              >
                View Tour Itinerary
              </Link>

              <Link
                href="https://wa.me/923135235207"
                className="border-2 border-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white hover:text-gray-900 hover:scale-110 transition-all duration-300"
              >
                Chat on WhatsApp
              </Link>
            </div>

            {/* CTA VIDEO */}
            <div className="mt-12 relative group">
              <div className="absolute inset-0 bg-white/10 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <video
                controls
                preload="metadata"
                playsInline
                className="w-full rounded-2xl shadow-2xl border-4 border-white/50 relative z-10 group-hover:scale-105 transition-transform duration-500"
              >
                <source src="/videos/v13.mp4" type="video/mp4" />
                <source src="/videos/13.webm" type="video/webm" />

                Your browser does not support HTML5 video.
                <a href="/videos/v13.mp4" className="underline text-blue-400 ml-1">
                  Download the video
                </a>
              </video>

              <p className="mt-4 text-sm text-white/90 text-center">
                Emotional montage: travelers enjoying landscapes & moments
              </p>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}
