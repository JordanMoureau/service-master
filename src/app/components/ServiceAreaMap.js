// pages/areas-we-serve.jsx
"use client";

import Image from "next/image";

export default function AreasWeServe() {
  return (
    <div className="areas-section">
      <div
        className="map-wrapper"
        style={{
          backgroundImage: "url('/service-area-map.png')",
          // or 'url("/service-area-map.png")' if you prefer
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
        <a className="phone" href="tel:(509)646-7488">
          (509) 646-7488
        </a>
        <p>
          <strong>Proudly serving:</strong>
          <br />
          Airway Heights, Athol, Bayview, Cataldo, Chattaroy, Cheney, Coeur D
          Alene, Colbert, Deer Park, Fairchild Air Force Base...
        </p>
        <a className="see-all underline-link" href="#">
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
