import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Beyond Border Tours",
  description:
    "Learn about Beyond Border Tours – your trusted travel partner for Hunza, Skardu, and Northern Pakistan tours.",
};



export default function AboutPage() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[60vh] group">
        <Image
          src="/asset/favorite/k2.jpeg"
          alt="About Us"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-orange-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover the heart behind Beyond Border Tours – where passion meets adventure.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY / MISSION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* OUR STORY */}
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-orange-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <Image
                src="/asset/team/pic6.jpeg"
                alt="Our Story"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl border-4 border-white relative z-10 group-hover:scale-105 transition-transform duration-500 object-cover"
              />
            </div>

            <div>
              <p className="text-sm text-gray-500 italic">
                🌟 Limitless possibilities
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative">
                Our Story
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-orange-500 rounded-full"></div>
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Founded in 2025 by two local experts, Beyond Border Tours was
                created with a passion for travel and adventure. We aim to
                explore Pakistan’s most unspoiled regions while offering
                authentic cultural experiences guided by locals who know the
                land best.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-500 italic">
                🚀 The way forward
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative">
                Mission & Vision
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded-full"></div>
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Our mission is to provide memorable travel experiences through
                customized tours, professional guides, and exceptional service.
                We envision becoming one of Pakistan’s leading inbound travel
                companies, connecting travelers with nature, culture, and people.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <Image
                src="/asset/team/pic5.jpeg"
                alt="Mission & Vision"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl border-4 border-white relative z-10 group-hover:scale-105 transition-transform duration-500 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEET OUR TEAM ================= */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-gray-900 relative">
            Meet Our Team
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500 rounded-full"></div>
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-12 text-lg leading-relaxed">
            🎼 No one can whistle a symphony. It takes a whole orchestra to play it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group"
              >
                {/* Profile Image */}
                <div className="flex justify-center -mt-16 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-full transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-white object-cover bg-white relative z-10 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-orange-500 font-medium">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="mt-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready to Explore with Us?
          </h2>
          <p className="mb-10 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Join Beyond Border Tours and discover the magic of Northern Pakistan. Let us create unforgettable memories together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/tours"
              className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 hover:bg-orange-50"
            >
              Explore Our Tours
            </Link>

            <Link
              href="https://wa.me/923135235207"
              className="border-2 border-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white hover:text-gray-900 hover:scale-110 transition-all duration-300"
            >
              Get in Touch
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
              <source src="/videos/v1.mp4" type="video/mp4" />
              <source src="/videos/v1.webm" type="video/webm" />

              Your browser does not support HTML5 video.
              <a href="videos/v1.mp4" className="underline text-blue-400 ml-1">
               Download the video
              </a>
            </video>

            <p className="mt-4 text-sm text-white/90 text-center">
              Experience the beauty of Northern Pakistan through our lens.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ================= TEAM DATA ================= */
const team = [
  {
    name: "Hassanain Shah",
    role: "Founder",
    image: "/asset/team/ceo.jpeg",
    description:
      "Visionary leader and travel expert with deep roots in Northern Pakistan tourism.",
  },
  {
    name: "Safdar Shah",
    role: "Managing Director",
    image: "/asset/team/pic2.jpeg",
    description:
      "Oversees operations and ensures seamless travel experiences for every client.",
  },
  {
    name: "Naeem Abbas",
    role: "General Manager",
    image: "/asset/team/pic3.jpeg",
    description:
      "Manages logistics, partnerships, and customer satisfaction across all tours.",
  },
  {
    name: "Hassanain Shah",
    role: "Tour Guide",
    image: "/asset/team/pic4.jpeg",
    description:
      "Specializes in crafting personalized adventure and cultural tour packages.",
  },
];


  
 
 

