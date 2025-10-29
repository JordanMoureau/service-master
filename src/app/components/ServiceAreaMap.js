// pages/areas-we-serve.jsx
"use client";
import { useState } from "react";

export default function AreasWeServe() {
  const [showRegions, setShowRegions] = useState(false);

  function toggleRegions() {
    setShowRegions((prev) => !prev);
  }
  return (
    <div className="areas-section">
      <div
        className="map-wrapper"
        style={{
          backgroundImage: "url('/service-area-map.png')",
        }}
      >
        <a
          href="https://maps.google.com/?q=ServiceMaster+by+Compass"
          target="_blank"
          rel="noopener"
          /* set the background image here */

          aria-label="Open ServiceMaster by Compass on Google Maps"
        >
          <span className="map-cta underline-link">View on Google Maps →</span>
        </a>
      </div>

      <div className="content-wrapper">
        <h2>AREAS WE SERVE</h2>
        <a className="phone" href="tel:(509) 535-5440">
          (509) 535-5440
        </a>
        <strong>Proudly serving:</strong>
        <p>
          <span>
            Airway Heights, Athol, Bayview, Cataldo, Chattaroy, Cheney, Coeur D
            Alene, Colbert, Deer Park, Fairchild Air Force Base...
          </span>
          {/* <span className={`regions-more ${showRegions ? "expanded" : ""}`}>
            Airway Heights, Athol, Bayview, Cataldo, Chattaroy, Cheney, Coeur D
            Alene, Colbert, Deer Park, Fairchild Air Force Base, Greenacres,
            Harrison, Hayden, Liberty Lake, Mead, Medical Lake, Medimont, Newman
            Lake, Nine Mile Falls, Otis Orchards, Post Falls, Rathdrum, Spirit
            Lake, Spokane, Veradale, Worley
          </span> */}
        </p>

        <a className="see-all underline-link" onClick={toggleRegions}>
          SEE ALL.
        </a>

        <div className="btn-con">
          <a className="contact-btn" href="/contact">
            Contact Us
          </a>
          <p className="small-text">
            We may service additional areas. Please contact us for more
            information.
          </p>
        </div>
      </div>
    </div>
  );
}
