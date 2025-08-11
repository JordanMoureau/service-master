// pages/areas-we-serve.jsx
"use client";

import Image from "next/image";

export default function AreasWeServe() {
  return (
    <div className="areas-section">
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.0401430917155!2d-117.42604868444328!3d47.65878057918857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e18531e34f2ff%3A0x7c2c6cfa84b9b1ba!2sServiceMaster%20by%20Compass!5e0!3m2!1sen!2sus!4v1699484845765!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
