"use client";

import Image from "next/image";
import HeroSection from "./herosection";

export default function Background() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <Image
        src="/image/BgImage.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
        {/* Hero + Resume */}
        <div className="flex flex-col items-center justify-center flex-grow gap-6">
          <HeroSection />
        </div>
      </div>
   
  );
}
