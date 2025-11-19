"use client";

import { useState } from "react";
import Link from "next/link";
import "../styles/mobile-nav.scss";
import { FaPhoneAlt } from "react-icons/fa";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div
        className={`bar ${
          isOpen ? "mobile-nav-toggle fixed" : "mobile-nav-toggle"
        }`}
        onClick={toggleMenu}
      >
        <div className="mobile-chevron">
          <div className={`bar ${isOpen ? "open" : ""}`}></div>{" "}
        </div>
        <a className="a-home" href="/">
          <img src="/logo.png" alt="ServiceMaster" className="mobile-logo" />
        </a>
        <a href="tel:5096467488">
          <FaPhoneAlt style={{ fontSize: "2em" }} />
        </a>
      </div>

      <div className={`mobile-menu-overlay ${isOpen ? "show" : ""}`}>
        <div className="mobile-menu-inner">
          <nav className="mobile-links">
            <Link href="/commercial" onClick={closeMenu}>
              Commercial
            </Link>
            <Link href="/residential" onClick={closeMenu}>
              Residential
            </Link>
            <Link href="/faqs" onClick={closeMenu}>
              FAQs
            </Link>
            <Link href="/insurance" onClick={closeMenu}>
              Insurance
            </Link>
            <Link href="/why-us" onClick={closeMenu}>
              Why Us
            </Link>
            <Link href="/payments" onClick={closeMenu}>
              Payments
            </Link>
          </nav>

          <div className="mobile-contact">
            <a href="tel:(509) 535-5440" className="phone-line">
              <FaPhoneAlt /> (509) 535-5440
            </a>
            <Link href="/contact" className="mobile-cta" onClick={closeMenu}>
              Contact Us Now
            </Link>
            <div className="emergency-text">
              <h3>24/7/365 Emergency Service</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
