

"use client";

import { usePathname } from "next/navigation";
import HeroSlider from "./HeroSlider";

export default function HeroSliderClient() {
  const pathname = usePathname();

  // Only show on homepage
  if (pathname !== "/") return null;

  return <HeroSlider />;
}
