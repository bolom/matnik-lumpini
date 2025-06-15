
import React from "react";
import ClubLogo from "@/components/ClubLogo";
import HeroSection from "@/components/HeroSection";
import ClubInfo from "@/components/ClubInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter text-foreground overflow-x-hidden relative">
      {/* Gradient BG/texture */}
      <div className="fixed inset-0 -z-10 bg-hero-gradient bg-diagonal-texture" aria-hidden="true"></div>
      <header className="flex flex-col items-center pt-10 pb-2 select-none">
        <ClubLogo className="mb-2 mx-auto" />
        <h1 className="font-playfair text-3xl md:text-5xl font-extrabold uppercase text-green-dark tracking-wider drop-shadow-lg mb-1">
          Matnik Lumpini
        </h1>
        <p className="text-foreground/90 font-semibold text-base md:text-lg tracking-wider uppercase opacity-90 mb-2">
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
