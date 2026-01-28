import Image from "next/image";

export default function MoodSection() {
  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#2E5C82] mb-12">
        WHAT ADVENTURE AWAITS YOU?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4">
  
        {/* 1 ─ IMAGE */}
        <MoodImage img="/asset/mood/trek.jpeg" />

        {/* 2 ─ TEXT BLOCK */}
        <MoodText
          title="CULTURAL JOURNEYS"
          desc="Travel deeper into local traditions, stories, and heritage through carefully planned journeys that reveal authentic and untouched destinations."
          btn="DISCOVER CULTURE"
          color="#0F597A"
        />

        {/* 3 ─ IMAGE */}
        <MoodImage img="/asset/mood/expedition1.jpeg" />

        {/* 4 ─ TEXT BLOCK */}
        <MoodText
          title="WILDLIFE & NATURE ESCAPES"
          desc="Step into raw landscapes where mountains, wildlife, and open skies create unforgettable experiences close to nature."
          btn="EXPLORE NATURE"
          color="#E78960"
        />

        {/* 5 ─ TEXT BLOCK */}
        <MoodText
          title="MOUNTAIN TREKS"
          desc="Walk through scenic valleys, cross high passes, and reach remote regions that offer challenge, beauty, and true adventure."
          btn="START TREKKING"
          color="#6C4A77"
        />

        {/* 6 ─ IMAGE */}
        <MoodImage img="/asset/mood/culture.jpeg" />

        {/* 7 ─ TEXT BLOCK */}
        <MoodText
          title="HIGH-ALTITUDE EXPEDITIONS"
          desc="Enter the realm of towering peaks and icy landscapes, where legendary mountains test endurance and reward the bold."
          btn="BEGIN THE CLIMB"
          color="#4A6987"
        />

        {/* 8 ─ IMAGE */}
        <MoodImage img="/asset/mood/nature.jpeg" />
      </div>
    </section>
  );
}

function MoodImage({ img }: any) {
  return (
    <div className="relative h-64 md:h-80 w-full">
      <Image src={img} alt="mood image" fill className="object-cover" />
    </div>
  );
}

function MoodText({ title, desc, btn, color }: any) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center p-10"
      style={{ backgroundColor: color }}
    >
      <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
      <p className="text-white text-sm mb-6">{desc}</p>

      <button className="border border-white px-5 py-2 text-white text-sm hover:bg-white hover:text-black transition">
        {btn}
      </button>
    </div>
  );
}
