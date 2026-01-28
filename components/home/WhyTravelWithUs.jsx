import Image from "next/image";

export default function WhyTravelWithUs() {
  return (
 <section className="w-full bg-white py-16">
  {/* HEADING */}
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold tracking-wide">
      EXPERIENCE THE DIFFERENCE
    </h2>
    <p className="text-sky-700 italic mt-2">
      Beyond Border Adventure Tours creates unforgettable journeys, blending adventure, culture, and authentic experiences.
    </p>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 w-full">

    {/* ROW 1 */}
    <div className="relative h-64 md:h-80">
      <Image src="/asset/whytravels/friend.jpeg" alt="" fill className="object-cover" />
    </div>

    <div className="bg-[#0E6E8F] text-white p-8 flex flex-col justify-center">
      <h3 className="text-lg font-semibold mb-4 text-center">
        JOURNEYS YOUR WAY
      </h3>
      <p className="text-sm leading-relaxed text-center">
        Discover unique adventures crafted just for you — whether exploring solo, with friends, or with family.
      </p>
      <button className="mt-6 mx-auto border px-5 py-2 text-sm font-semibold hover:bg-white hover:text-[#0E6E8F] transition">
        START EXPLORING
      </button>
    </div>

    <div className="relative h-64 md:h-80">
      <Image src="/asset/whytravels/group.jpeg" alt="" fill className="object-cover" />
    </div>

    <div className="bg-[#4F8E62] text-white p-8 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-center mb-4">
        LOCAL EXPERT GUIDES
      </h3>
      <p className="text-sm leading-relaxed text-center">
        Travel with passionate locals who reveal hidden gems, authentic experiences, and the true soul of every destination.
      </p>
      <button className="mt-6 mx-auto border px-5 py-2 text-sm font-semibold hover:bg-white hover:text-[#4F8E62] transition">
        MEET THE EXPERTS
      </button>
    </div>

    {/* ROW 2 */}
    <div className="bg-[#8E623C] text-white p-8 flex flex-col justify-center order-2 md:order-none">
      <h3 className="text-lg font-semibold text-center mb-4">
        ADVENTURE WITH FRIENDS
      </h3>
      <p className="text-sm leading-relaxed text-center">
        Share extraordinary moments with fellow explorers and create memories that last a lifetime.
      </p>
      <button className="mt-6 mx-auto border px-5 py-2 text-sm font-semibold hover:bg-white hover:text-[#8E623C] transition">
        JOIN THE ADVENTURE
      </button>
    </div>

    <div className="relative h-64 md:h-80">
      <Image src="/asset/whytravels/yourway.jpeg" alt="" fill className="object-cover" />
    </div>

    <div className="bg-[#0E6E8F] text-white p-8 flex flex-col justify-center">
      <h3 className="text-lg font-semibold mb-4 text-center">
        INTIMATE GROUPS
      </h3>
      <p className="text-sm leading-relaxed text-center">
        Travel in small, curated groups for a personal, immersive, and unforgettable experience every step of the way.
      </p>
      <button className="mt-6 mx-auto border px-5 py-2 text-sm font-semibold hover:bg-white hover:text-[#0E6E8F] transition">
        START YOUR JOURNEY
      </button>
    </div>

    <div className="relative h-64 md:h-80">
      <Image src="/asset/whytravels/local.jpeg" alt="" fill className="object-cover" />
    </div>
  </div>
</section>


  );
}
