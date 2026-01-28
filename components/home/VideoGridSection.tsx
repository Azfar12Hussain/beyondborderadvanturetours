"use client";

import { useState } from "react";
import VideoModal from "./VideoModal";

const videos = [
  { title: "Golden Memories in the Mountains", src: "/videos/v1.mp4" },
  { title: "Autumn Colors & Happy Faces", src: "/videos/v2.mp4" },
  { title: "Window to a Beautiful Journey", src: "/videos/v3.mp4" },
  { title: "Smiles Under the Night Sky", src: "/videos/v4.mp4" },
  { title: "Dinner Moments Filled with Laughter", src: "/videos/v5.mp4" },
  { title: "Family Time & Warm Conversations", src: "/videos/v6.mp4" },
  { title: "Hands Decorated in Celebration", src: "/videos/v7.mp4" },
  { title: "Bright Days, Brighter Memories", src: "/videos/v8.mp4" },
  { title: "Joyful Moments with Friends", src: "/videos/v9.mp4" },
  { title: "Food, Fun & Togetherness", src: "/videos/v10.mp4" },
  { title: "Capturing Pure Happiness", src: "/videos/v13.mp4" },
  { title: "Sharing Meals, Sharing Smiles", src: "/videos/v14.mp4" },
  { title: "Cultural Beauty & Traditions", src: "/videos/v15.mp4" },
  { title: "Travel Moments Worth Remembering", src: "/videos/v16.mp4" },
  { title: "Nature, Peace & Great Company", src: "/videos/v17.mp4" },
  { title: "A Day Full of Joy & Laughter", src: "/videos/v18.mp4" },
  { title: "Memorable Frames With Our Guests", src: "/videos/v19.mp4" },
  { title: "A Journey Filled With Warm Hearts", src: "/videos/v20.mp4" },
  { title: "Happy Clients, Happier Memories", src: "/videos/v21.mp4" },
  { title: "Every Trip Tells a Story", src: "/videos/v22.mp4" },
];

export default function VideoGridSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div
      className="w-full px-6 py-16 min-h-screen"
      style={{
        background: "linear-gradient(135deg, #f3f4f6 0%, #e0f7fa 50%, #fce4ec 100%)",
      }}
    >
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text drop-shadow-md">
          Heart-Touching Client Stories
        </h2>

        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Real moments. Real journeys. Real happiness. Enjoy a glimpse of the unforgettable
          memories our clients created with us.
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {videos.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border bg-white cursor-pointer overflow-hidden group"
            onClick={() => setSelectedVideo(item.src)}
          >
            {/* Video Thumbnail */}
            <video
              src={item.src}
              muted
              className="w-full h-56 object-cover transition-all duration-300 group-hover:scale-110"
            />

            {/* Overlay + Play Icon */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="black"
                  className="w-8 h-8 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653v12.694a.75.75 0 001.125.65l10.5-6.347a.75.75 0 000-1.3L6.375 5.002a.75.75 0 00-1.125.65z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 text-center">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal videoSrc={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
