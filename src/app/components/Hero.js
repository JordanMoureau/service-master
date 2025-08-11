"use client";
import { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  const heroRef = useRef(null);
  const [animateLines, setAnimateLines] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animateLines) {
            setAnimateLines(true);
            observer.disconnect(); // only run once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [animateLines]);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero">
        <div className="hero-inner">
          <h1>
            <FaMapMarkerAlt />
            <span>ServiceMaster by Compass</span>
          </h1>
          <div className="box-animation">
            <div className={`a1 line ${animateLines ? "grow" : ""}`}></div>
            <div className="inner-box">
              <div className={`a2 line ${animateLines ? "grow" : ""}`}></div>
              <div className={`a3 line ${animateLines ? "grow" : ""}`}></div>
              <div className={`a4 line ${animateLines ? "grow" : ""}`}></div>
            </div>
            <div className={`a5 line ${animateLines ? "grow" : ""}`}></div>
          </div>
        </div>

        <div className="hero-lower">
          <h3>
            Providing Commercial & Residential Restoration Services to Spokane
            and Surrounding Areas
          </h3>
          <div className="button-box">
            <button>contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
