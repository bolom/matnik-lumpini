
import React from "react";

const ClubLogo = ({ className = "" }: { className?: string }) => (
  <img
    src="/lovable-uploads/b5bf8e78-d929-4c1b-8735-019045a4fe6f.png"
    alt="Matnik Lumpini Tiger Logo"
    className={`w-20 h-20 md:w-28 md:h-28 object-contain mx-auto block drop-shadow-glow-green bg-card rounded-full border-2 border-green-dark ${className}`}
    draggable={false}
    style={{ background: "rgba(255,255,255,0.94)" }}
  />
);

export default ClubLogo;
