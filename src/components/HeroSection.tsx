
import React from "react";
import { Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-10 px-3 md:py-18 animate-stagger-enter mb-2 relative">
      <h2 className="font-playfair text-2xl md:text-4xl font-extrabold uppercase text-green-dark drop-shadow-lg tracking-wide leading-tight mb-2">
        ENTÎMN RÉZISTANS <br className="hidden md:block" />
        <span className="text-green-accent">PUISSANCE TRADITION</span>
      </h2>
      <div className="section-bar" />
      <p className="text-gray-700 max-w-xl mx-auto text-base md:text-lg font-medium mb-8 opacity-95">
        Découvrez l&apos;art du Muay Thai dans une ambiance martiniquaise conviviale et exigeante.
        <br className="hidden md:block" />
        Encadrement passionné, respect des traditions, esprit de famille et performance.
      </p>
      <a
        className="button-cta animate-scale-in focus-visible:ring-green-dark"
        href="https://www.instagram.com/matnik_lumpini/"
        target="_blank"
        rel="noopener"
      >
        <Instagram className="w-6 h-6" />
        Suivez-nous sur Instagram
      </a>
    </section>
  );
};
export default HeroSection;
