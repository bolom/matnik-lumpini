
import React from "react";
import ClubLogo from "@/components/ClubLogo";
import HeroSection from "@/components/HeroSection";
import ClubInfo from "@/components/ClubInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark1 font-inter overflow-x-hidden relative">
      {/* Gold/black gradient BG */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/80 via-dark1 to-[#1e1912]"></div>
      <header className="flex flex-col items-center pt-9 pb-2 select-none">
        <ClubLogo className="mb-2 mx-auto" />
        <h1 className="font-playfair text-3xl md:text-5xl font-extrabold uppercase text-gold tracking-wider drop-shadow-lg mb-1">
          Matnik Lumpini
        </h1>
        <p className="text-white/90 font-semibold text-base md:text-lg tracking-wider uppercase opacity-90 mb-2">
          Club de Muay Thaï – Martinique
        </p>
      </header>
      <main className="flex flex-col items-center justify-center w-full px-1">
        <HeroSection />
        <ClubInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
