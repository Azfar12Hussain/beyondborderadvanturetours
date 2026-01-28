import Image from "next/image";
import Link from "next/link";

const months = [
  { name: "JANUARY", img: "/asset/season/jan.jpeg" },
  { name: "FEBRUARY", img: "/asset/season/feb.jpeg" },
  { name: "MARCH", img: "/asset/season/mar.jpeg" },
  { name: "APRIL", img: "/asset/season/apr.jpeg" },
  { name: "MAY", img: "/asset/season/may.jpeg" },
  { name: "JUNE", img: "/asset/season/jun.jpeg" },
  { name: "JULY", img: "/asset/season/july.jpeg" },
  { name: "AUGUST", img: "/asset/season/aug.jpeg" },
  { name: "SEPTEMBER", img: "/asset/season/sep.jpeg" },
  { name: "OCTOBER", img: "/asset/season/oct.jpeg" },
  { name: "NOVEMBER", img: "/asset/season/nov.jpeg" },
  { name: "DECEMBER", img: "/asset/season/dec.jpeg" },
];

export default function SeasonGrid() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <h2 className="text-center text-4xl font-bold tracking-wide mb-12">
        CHOOSE YOUR SEASON
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {months.map((m) => (
          <div
            key={m.name}
            className="group relative w-full h-56 overflow-hidden rounded"
          >
            {/* IMAGE */}
            <Image
              src={m.img}
              alt={m.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

            {/* TEXT */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 transition-all duration-500 group-hover:justify-center">
              <h3 className="text-white text-xl font-semibold tracking-wider transition-all duration-500 group-hover:mb-2">
                {m.name}
              </h3>

              {/* VIEW ALL TOURS */}
               <Link
                href={`/tours?month=${m.name}`}
                className="text-white opacity-0 text-sm tracking-wide transition-all duration-500 
                           group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer"
              >
                VIEW ALL TOURS
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
