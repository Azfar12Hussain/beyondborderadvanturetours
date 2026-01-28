import Image from "next/image";
import Link from "next/link";
import { tours } from "./data";

export default function ToursPage() {
  return (
    <main className="bg-gray-100/50 min-h-screen">
      {/* HEADER */}
      <header
        className="text-center py-12 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/pakistan-mountains-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-black">
          OUR FAVORITE ITINERARIES
        </h1>
      </header>

      {/* TOUR GRID */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {tours.map((tour) => (
          <Link
            key={tour.slug}
            href={`/tours/${tour.slug}`}
            className="group"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-[1.03] transition cursor-pointer">
              <div className="relative h-48 w-full">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-black">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  ⏱️ {tour.duration}
                </p>
                
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* BACK */}
      <div className="text-center my-12">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
