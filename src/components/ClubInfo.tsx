
import React from "react";

const ClubInfo = () => (
  <section className="bg-dark2 border-2 border-gold rounded-2xl max-w-xl mx-auto px-6 py-8 mt-8 mb-8 shadow-xl text-center animate-fade-in">
    <h3 className="font-playfair font-bold text-gold text-xl uppercase mb-5 tracking-wide">
      Horaires &amp; Lieu
    </h3>
    <ul className="schedule space-y-4 mb-5">
      <li className="flex flex-col md:flex-row md:justify-center md:gap-5 text-gray text-base">
        <span className="font-semibold text-white">Lundi &amp; Jeudi :</span>
        <span className="font-bold text-gold">19h — 21h</span>
        <span className="italic opacity-80">Adultes &amp; Ados</span>
      </li>
      <li className="flex flex-col md:flex-row md:justify-center md:gap-5 text-gray text-base">
        <span className="font-semibold text-white">Samedi :</span>
        <span className="font-bold text-gold">10h — 12h</span>
        <span className="italic opacity-80">Enfants (à partir de 7 ans)</span>
      </li>
    </ul>
    <div className="address text-base text-white/90">
      <strong>Adresse :</strong>
      <br />
      17 route de Balata,
      <br />
      97200 Fort-de-France, Martinique
    </div>
    <a
      href="https://goo.gl/maps/YFVXpSv9jnmvP3Bc9"
      target="_blank"
      rel="noopener"
      className="inline-block mt-4 text-gold underline hover:text-[#FFB800] transition"
    >
      Voir sur Google Maps
    </a>
  </section>
);

export default ClubInfo;
