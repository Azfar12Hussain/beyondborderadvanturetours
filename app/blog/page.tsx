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
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
          Where Mountains Touch the Sky
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          A journey through Northern Pakistan — where nature, culture, and adventure come together in the heart of the Karakoram.
        </p>
        {/* HERO IMAGE */}
        <div className="mt-8">
          <Image
            src="/asset/blog/village.jpeg"
            alt="Panoramic view of Hunza Valley with mountains"
            width={1200}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      <article className="space-y-16">

        {/* WHY NORTHERN PAKISTAN IS SPECIAL */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Why Northern Pakistan Is Special</h2>
          <p>
            Northern Pakistan is home to some of the world’s most dramatic landscapes.
            It is the only place on Earth where the Karakoram, Himalaya, and Hindu Kush mountain ranges meet.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>K2 (8,611m):</strong> Second highest mountain on Earth</li>
            <li>Five of the world’s fourteen 8,000m peaks are located here</li>
            <li>Attabad Lake & Sarfaranga Cold Desert — untouched natural wonders</li>
          </ul>
          <div className="mt-6">
            <Image
              src="/asset/tours/k22.jpeg"
              alt="K2 mountain peak in Karakoram Range"
              width={1200}
              height={700}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* THE JOURNEY EXPERIENCE */}
        <section>
          <h2 className="text-3xl font-bold mb-4">The Journey Experience</h2>
          <p>
            From a scenic flight to Skardu to peaceful evenings in Hunza, each day feels like a living postcard.
            Lakes, glaciers, deserts, forts, and valleys unfold naturally as the journey continues.
          </p>

          {/* Video placeholder */}
          <div className="mt-8">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full rounded-xl shadow-lg"
              >
                <source src="/videos/v21.mp4" type="video/mp4" />
                <source src="/videos/v21.webm" type="video/webm" />

                Your browser does not support HTML5 video.
                <a href="/videos/v21.mp4" className="underline text-blue-400 ml-1">
                  Download the video
                </a>
              </video>

              <p className="mt-2 text-sm text-white/80">
                Emotional montage: travelers enjoying landscapes & moments
              </p>
            </div>

        </section>

        {/* HUMAN MOMENTS & CULTURE */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Human Moments & Culture</h2>
          <p>
            Sharing tea with locals, laughter around dinners, and stories passed through generations make this journey unforgettable. Hospitality here is a tradition, not service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6" >
            <Image
              src="/asset/blog/dinner.jpeg"
              alt="Tourists sharing tea with Hunza locals"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <Image
              src="/asset/blog/picture.jpeg"
              alt="Tourists enjoying campfire dinner in mountains"
              width={600}
              height={600}
              className="rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* PHOTOGRAPHY & VIEWS */}
        <section>
          <h2 className="text-3xl font-bold mb-4">A Photographer’s Paradise 📸</h2>
          <p>
            Every turn of the road offers a new frame worth capturing:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Sunrise over Rakaposhi (7,788m)</li>
            <li>Reflections at Attabad Lake</li>
            <li>Vast golden landscapes of Sarfaranga Desert</li>
            <li>Dramatic mountain backdrops in Hunza & Passu</li>
            <li>Star-filled skies in Gilgit</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Image
              src="/asset/blog/attabad.jpeg"
              alt="Turquoise waters of Attabad Lake, Pakistan"
              width={600}
              height={0}
              style={{height:'300px !important'}}
              className="rounded-xl shadow-md"
            />
            <Image
              src="/asset/blog/passu.jpeg"
              alt="Passu Cones mountain peaks in Hunza"
              width={600}
              height={0}
               style={{height:'300px !important'}}
              className="rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* COMFORT & SAFETY */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Comfort, Food & Safety</h2>
          <p>
            Adventure does not mean discomfort. After each day of exploration, travelers relax in comfortable hotels and resorts, enjoying warm meals. Our tours are led by experienced professionals, carefully planned with safety in mind, giving you peace of mind throughout the journey.
          </p>
          <div className="mt-6">
            <Image
              src="/asset/blog/dinner.jpeg"
              alt="Comfortable hotel in Hunza Valley"
              width={1200}
              height={700}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Northern Pakistan?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let us take you beyond borders into unforgettable memories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              View Tour Itinerary
            </Link>

            <Link
              href="https://wa.me/923135235207"
              className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              Chat on WhatsApp
            </Link>
          </div>

          {/* CTA VIDEO */}
           <div className="mt-8">
  <video
    controls
    preload="metadata"
    playsInline
    className="w-full rounded-xl shadow-lg"
  >
    <source src="/videos/v13.mp4" type="video/mp4" />
    <source src="/videos/13.webm" type="video/webm" />

    Your browser does not support HTML5 video.
    <a href="/videos/v13.mp4" className="underline text-blue-400 ml-1">
      Download the video
    </a>
  </video>

  <p className="mt-2 text-sm text-white/80">
    Emotional montage: travelers enjoying landscapes & moments
  </p>
</div>

        </section>

      </article>
    </main>
  );
}
