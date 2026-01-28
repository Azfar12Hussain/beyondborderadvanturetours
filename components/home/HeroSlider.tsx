"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        loop
        className="h-full"
      >
        {/* ---------------------------------------------------------------- */}
        {/* SLIDE 1 */}
        {/* ---------------------------------------------------------------- */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/asset/slidersection/hero11.jpeg"
              alt="Slide 1"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Floating Circles */}
            <div className="absolute top-16 left-4 sm:top-20 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white animate-float shadow-xl">
              <Image src="/asset/slidersection/circle1.jpg" alt="circle" fill className="object-cover" />
            </div>
            <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white animate-float delay-300 shadow-xl">
              <Image src="/asset/slidersection/circle2.jpg" alt="circle" fill className="object-cover" />
            </div>

            {/* TEXT */}
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-10 md:px-24 text-center md:text-left">
              <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold drop-shadow-xl leading-tight">
                Travel <br />
                <span className="text-blue-400">Beyond</span> <br />
                Borders
              </h1>

              <p className="text-white text-base sm:text-lg md:text-xl max-w-full sm:max-w-lg md:max-w-xl mt-4">
                Thoughtfully crafted journeys for comfort, culture, and adventure.
              </p>

              <Link href="/booking">
                <button
                  className="
                    mt-6
                    bg-orange-500 text-white
                    w-[200px] sm:w-[220px]
                    py-3
                    rounded-lg
                    shadow-lg
                    hover:bg-orange-400
                    text-base
                    font-semibold
                    transition
                    whitespace-nowrap
                  "
                >
                  Book Now
                </button>
              </Link>


            </div>
          </div>
        </SwiperSlide>

        {/* ---------------------------------------------------------------- */}
        {/* SLIDE 2 */}
        {/* ---------------------------------------------------------------- */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/asset/slidersection/p3.jpeg" alt="Slide 2" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Polaroids */}
            <div className="absolute right-2 sm:right-10 md:right-24 top-1/2 -translate-y-1/2 flex gap-2 sm:gap-4 md:gap-6">
              {[ "/asset/slidersection/p1.jpeg", "/asset/slidersection/p2.jpeg", "/asset/slidersection/p3.jpeg" ].map((img, i) => (
                <div key={i} className="polaroid w-20 sm:w-40 md:w-56 h-24 sm:h-52 md:h-56 relative">
                  <Image src={img} fill alt="" className="object-cover" />
                </div>
              ))}
            </div>

            {/* TEXT */}
            <div className="absolute left-2 sm:left-10 md:left-20 top-1/2 -translate-y-1/2 text-white max-w-full sm:max-w-md md:max-w-xl text-center md:text-left">
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
                Live the Journey <br />
                <span className="text-red-400 italic">with Purpose</span>
              </h1>

              <p className="text-base sm:text-lg mt-4 text-white">
                Experience authentic traditions, stories, and local lifestyles.
              </p>
              <Link href="/booking">
                <button className="mt-6 bg-orange-500 px-4 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-orange-400 text-sm sm:text-base">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* ---------------------------------------------------------------- */}
        {/* SLIDE 3 */}
        {/* ---------------------------------------------------------------- */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/asset/slidersection/pic14.jpeg" alt="Slide 3" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Polaroids */}
            <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-4 md:gap-6">
              {[ "/asset/slidersection/pic3.jpeg", "/asset/slidersection/pic1.jpeg", "/asset/slidersection/pic2.jpeg" ].map((img, i) => (
                <div key={i} className="polaroid w-20 sm:w-40 md:w-56 h-24 sm:h-52 md:h-56 relative">
                  <Image src={img} fill alt="" className="object-cover" />
                </div>
              ))}
            </div>

            {/* TEXT */}
            <div className="absolute top-16 sm:top-20 left-2 sm:left-10 md:left-20 max-w-full sm:max-w-md md:max-w-xl text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
                  Where Nature <br /> Writes Stories
                </h1>

                <p className="text-white mt-4 text-base sm:text-lg">
                  Discover the untouched beauty of Pakistan’s mountains and valleys.
                </p>
              <Link href="/booking">
                <button className="mt-6 bg-orange-600 px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-white hover:bg-orange-500 text-sm sm:text-base">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* ---------------------------------------------------------------- */}
        {/* SLIDE 4 */}
        {/* ---------------------------------------------------------------- */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image src="/asset/slidersection/pic6.jpeg" fill alt="Slide 4" className="object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Floating Circles */}
            <div className="absolute top-16 sm:top-24 right-4 sm:right-24 w-20 sm:w-40 h-20 sm:h-40 rounded-full overflow-hidden border-4 border-white animate-float shadow-xl">
              <Image src="/asset/slidersection/pic14.jpeg" fill alt="" className="object-cover" />
            </div>

            {/* TEXT */}
            <div className="absolute right-2 sm:right-10 md:right-20 top-1/2 -translate-y-1/2 text-center md:text-right max-w-full sm:max-w-md md:max-w-xl">
              <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                  Paths Less Traveled
                </h1>

                <p className="text-white mt-4 text-base sm:text-lg">
                  Exclusive routes, hidden landscapes, and unforgettable adventures.
                </p>
              <Link href="/booking">
                <button className="mt-6 bg-orange-500 px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-white hover:bg-orange-400 text-sm sm:text-base">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* ---------------------------------------------------------------- */}
        {/* SLIDE 5 */}
        {/* ---------------------------------------------------------------- */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image src="/asset/slidersection/pic7.jpeg" fill alt="Slide 5" className="object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Floating Circles */}
            <div className="absolute top-12 left-4 sm:top-16 sm:left-16 w-16 sm:w-32 h-20 sm:h-50 rounded-full overflow-hidden border-4 border-white animate-float shadow-xl">
              <Image src="/asset/slidersection/pic2.jpeg" alt="circle" fill className="object-cover" />
            </div>
            <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-16 w-16 sm:w-32 h-20 sm:h-50 rounded-full overflow-hidden border-4 border-white animate-float delay-300 shadow-xl">
              <Image src="/asset/slidersection/pic5.jpeg" alt="circle" fill className="object-cover" />
            </div>

            {/* Centered Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
              <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-xl">
              Journeys That Stay With You
            </h1>

            <p className="text-white mt-4 text-base sm:text-lg drop-shadow">
              From high peaks to serene valleys — every trip tells a story.
            </p>
            <Link href="/booking">
              <button className="mt-6 bg-orange-500 px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-white hover:bg-orange-400 text-sm sm:text-base">
                Book Now
              </button>
            </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
