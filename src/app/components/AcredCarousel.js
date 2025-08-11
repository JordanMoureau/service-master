"use client";

import { useState } from "react";

const accreditationImages = [
  {
    src: "/acred-one.png",
    alt: "West Plains Chamber of Commerce Member Logo",
  },
  {
    src: "/acred-two.jpg",
    alt: "Greater Spokane Valley Chamber of Commerce Logo",
  },
  {
    src: "/acred-three.jpg",
    alt: "Hayden Chamber of Commerce Logo",
  },
  {
    src: "/acred-four.png",
    alt: "Post Falls Area Chamber of Commerce Logo",
  },
  {
    src: "/acred-five.png",
    alt: "Washington Multi-Family Housing Association Proud Member Logo",
  },
  {
    src: "/acred-six.png",
    alt: "Better Business Bureau Accredited Business Logo",
  },
  {
    src: "/acred-seven.png",
    alt: "Institute of Inspection Cleaning and Restoration Certification Logo",
  },
  {
    src: "/acred-eight.png",
    alt: "IAQA Indoor Air Quality Association Member Logo",
  },
  {
    src: "/acred-nine.png",
    alt: "EPA Lead-Safe Certified Firm Logo",
  },
  {
    src: "/acred-ten.png",
    alt: "National Association of Home Builders Member Logo",
  },
  {
    src: "/acred-eleven.jpg",
    alt: "ServiceMaster Clean Corporate Accreditation Logo",
  },
  {
    src: "/acred-twelve.jpg",
    alt: "Spokane Chamber of Commerce Member Logo",
  },
];

export default function AccredCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const next = () => {
    setStartIndex((prev) =>
      prev + visibleCount < accreditationImages.length ? prev + 1 : prev
    );
  };

  const prev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const visibleImages = accreditationImages.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">AWARDS & ACCREDITATIONS</h2>

      <div className="carousel">
        <button
          className="carousel-button"
          onClick={prev}
          aria-label="Previous"
        >
          &#x276E;
        </button>

        <div className="carousel-track">
          {visibleImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="carousel-img"
            />
          ))}
        </div>

        <button className="carousel-button" onClick={next} aria-label="Next">
          &#x276F;
        </button>
      </div>
    </div>
  );
}
