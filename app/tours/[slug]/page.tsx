"use client"
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import { tours } from "../data";
import { itineraries } from "../itineraries";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// =================== Tabs Component ===================
function Tabs({ itinerary }: { itinerary: any }) {
  const [activeTab, setActiveTab] = useState<"air" | "road" | "mixed">("air");

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex gap-3 mb-4">
        {[
          { label: "By Air", value: "air" },
          { label: "By Road", value: "road" },
          { label: "Mixed", value: "mixed" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value as any)}
            className={`px-4 py-2 rounded-md border text-sm font-medium ${
              activeTab === tab.value
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Intro */}
      <div className="bg-white rounded-xl p-6 shadow">
        {itinerary.intro.map((p: string, i: number) => (
          <p key={i} className="text-gray-700 mb-2">
            {p}
          </p>
        ))}
      </div>

      {/* Day Wise Itinerary */}
      {itinerary.itinerariesByType[activeTab].map((d: any, i: number) => (
        <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold text-gray-900">
              {d.day}: {d.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {d.hotel} • {d.meals}
            </p>
          </div>

          <div className="p-6">
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              {d.points.map((p: string, idx: number) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

// =================== Main Tour Page ===================
export default async function TourPage({ params }: PageProps) {
  const { slug } = await params;

  const tour = tours.find((t) => t.slug === slug);
  if (!tour) notFound();

  const itinerary = itineraries[slug];
  if (!itinerary) notFound();

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* HERO */}
      <div className="relative h-[55vh] w-full">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-bold">{itinerary.title}</h1>
          <p className="text-lg mt-1">{itinerary.subtitle}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: Tabs & Itinerary */}
        <div className="lg:col-span-2">
          <Tabs itinerary={itinerary} />
        </div>

        {/* RIGHT: Trip Summary */}
        <aside className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Trip Summary</h3>

            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>Duration:</strong> {tour.duration}
              </p>
             
            </div>

           <div className="mt-6 space-y-3">
              <a
                href="https://wa.me/923135235207"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-600 text-white py-3 rounded-lg font-medium"
              >
                WhatsApp Booking
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
