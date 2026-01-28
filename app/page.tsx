import Image from "next/image";

import FavoriteTours from "@/components/home/FavoriteTours";
import MoodSection from "@/components/home/MoodSection";
import SeasonGride from  "@/components/home/SeasonGrid";
import WhyTravelWithUs from "@/components/home/WhyTravelWithUs"
import Footer  from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      
      <FavoriteTours />
      <MoodSection />
      <SeasonGride/>
      <WhyTravelWithUs/>
      
      
    </main>
  );
}
