"use client";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function SMCOverlay() {
  const [active, setActive] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const dismiss = () => {
    setActive(false);
    setTimeout(() => setDismissed(true), 850);
  };

  useEffect(() => {
    // Slide in shortly after mount
    const slideIn = setTimeout(() => setActive(true), 300);

    // Any scroll down → slide back out
    let alreadyDismissing = false;
    const handleScroll = () => {
      if (window.scrollY > 20 && !alreadyDismissing) {
        alreadyDismissing = true;
        dismiss();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(slideIn);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div className={`smc-overlay ${active ? "smc-overlay--active" : ""}`}>
      {/* White panel — slides in from the right */}
      <div className="smc-overlay__white" />

      {/* Yellow arrow panel — slides in from the left */}
      <div className="smc-overlay__yellow">
        <div className="smc-overlay__content">
          <p className="smc-overlay__eyebrow">24 / 7 Emergency Response</p>
          <h2 className="smc-overlay__headline">
            Is There Water Damage In Your Home?
          </h2>
          <p className="smc-overlay__sub">Response times under 1 hour.</p>
          <p className="smc-overlay__body">
            We&apos;re ready around the clock, every day of the year.
          </p>
          <a href="tel:+15095355440" className="smc-overlay__cta">
            <span>Call Now</span>
            <span>(509) 535-5440</span>
          </a>
        </div>
      </div>

      {/* Close button */}
      <button
        className="smc-overlay__close"
        onClick={dismiss}
        aria-label="Close"
      >
        <IoClose />
      </button>
    </div>
  );
}
