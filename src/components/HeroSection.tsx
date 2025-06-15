
import React from "react";
import { Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-8 px-2 md:py-16 animate-fade-in">
      <h2 className="font-playfair text-2xl md:text-4xl font-extrabold uppercase text-gold drop-shadow-lg tracking-wide leading-tight mb-2">
        ENTÎMN RÉZISTANS <br className="hidden md:block" />
        PUISSANCE TRADITION
      </h2>
      <div className="w-20 h-1.5 rounded bg-gold my-3" />
      <p className="text-gray max-w-xl mx-auto text-base md:text-lg font-medium mb-8 opacity-95">
        Découvrez l&apos;art du Muay Thai dans une ambiance martiniquaise conviviale et exigeante.
        <br className="hidden md:block" />
        Encadrement passionné, respect des traditions, esprit de famille et performance.
      </p>
      <a
        className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-base md:text-lg bg-gold text-dark1 shadow-md transition-all hover:bg-[#ddb005] hover:scale-105 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-gold animate-scale-in"
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
