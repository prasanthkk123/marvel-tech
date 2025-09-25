import React from "react";
import "./BrandMarquee.css";


// Add your brand logo image paths here (public/brands/)
const brandLogos = [
  "/brands/fanuc.jpg",
  "/brands/mitsubishi.jpg",
  "/brands/siemens.jpg",
  "/brands/delta.jpg",
  "/brands/Schneider Electric.jpg",
  // Add more as needed
];

export default function BrandMarquee() {
  // Duplicate the logos  times for a wider seamless loop
  const allLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];
  return (
    <div className="brand-marquee-container">
      <div className="brand-marquee">
        {allLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Brand ${(idx % brandLogos.length) + 1}`}
            className={
              (idx + 1) % brandLogos.length === 0 ? "brand-logo last-logo" : "brand-logo"
            }
          />
        ))}
        {/* Spacer between loops */}
        <div style={{ width: 120 }} />
        {allLogos.map((logo, idx) => (
          <img
            key={idx + allLogos.length}
            src={logo}
            alt={`Brand ${(idx % brandLogos.length) + 1}`}
            className={
              (idx + 1) % brandLogos.length === 0 ? "brand-logo last-logo" : "brand-logo"
            }
          />
        ))}
      </div>
    </div>
  );
}
