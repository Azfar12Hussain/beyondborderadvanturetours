import Image from "next/image";

export const metadata = {
  title: "About Us | Beyond Border Tours",
  description:
    "Learn about Beyond Border Tours – your trusted travel partner for Hunza, Skardu, and Northern Pakistan tours.",
};

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="/asset/favorite/k2.jpeg"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            About Us
          </h1>
        </div>
      </section>

      {/* ================= OUR STORY / MISSION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* OUR STORY */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/asset/team/pic6.jpeg"
         
            alt="Our Story"
            width={600}
            height={500}
            className="rounded-lg object-cover"
          />

          <div>
            <p className="text-sm text-gray-500 italic">
              Limitless possibilities
            </p>
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2025 by two local experts, Beyond Border Tours was
              created with a passion for travel and adventure. We aim to
              explore Pakistan’s most unspoiled regions while offering
              authentic cultural experiences guided by locals who know the
              land best.
            </p>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-gray-500 italic">
              The way forward
            </p>
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Mission & Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide memorable travel experiences through
              customized tours, professional guides, and exceptional service.
              We envision becoming one of Pakistan’s leading inbound travel
              companies, connecting travelers with nature, culture, and people.
            </p>
          </div>

          <Image
            src="/asset/team/pic5.jpeg"
            alt="Mission & Vision"
            width={600}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* ================= MEET OUR TEAM ================= */}
       <section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-center text-3xl font-bold text-orange-500">
      Meet Our Team
    </h2>
    <p className="text-center text-gray-500 mt-2 mb-12">
      No one can whistle a symphony. It takes a whole orchestra to play it.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {team.map((member) => (
        <div
          key={member.name}
          className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
        >
          {/* Profile Image */}
          <div className="flex justify-center -mt-16 mb-4">
            <Image
              src={member.image}
              alt={member.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-white object-cover bg-white"
            />
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


  
 
 

