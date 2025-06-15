
import React from "react";

const ClubLogo = ({ className = "" }: { className?: string }) => (
  <img
    src="/lovable-uploads/b5bf8e78-d929-4c1b-8735-019045a4fe6f.png"
    alt="Matnik Lumpini Tiger Logo"
    className={`w-16 h-16 md:w-20 md:h-20 object-contain ${className}`}
    draggable={false}
    aria-hidden="true"
  />
);

export default ClubLogo;
