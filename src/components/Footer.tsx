
import React from "react";

const Footer = () => (
  <footer className="mt-10 pb-4 text-center text-xs md:text-sm text-gray-500 opacity-90">
    <div className="flex items-center gap-2 justify-center mb-1">
      <span>© 2025</span>
      <span className="font-bold text-green-dark tracking-wide">Matnik Lumpini</span>
      <span className="hidden md:inline">— Tous droits réservés</span>
    </div>
    <div>
      <a
        href="https://www.instagram.com/matnik_lumpini/"
        target="_blank"
        rel="noopener"
        className="text-green-dark hover:text-green-accent hover:underline transition"
      >
        @matnik_lumpini
      </a>
    </div>
  </footer>
);

export default Footer;
