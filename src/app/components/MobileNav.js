"use client";

import { useState } from "react";
import Link from "next/link";
import "../styles/mobile-nav.scss";
import { FaPhoneAlt } from "react-icons/fa";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
        <img src="/logo.png" alt="ServiceMaster" className="mobile-logo" />
        <FaPhoneAlt style={{ fontSize: "2em" }} />
      </div>

      <div className={`mobile-menu-overlay ${isOpen ? "show" : ""}`}>
        <div className="mobile-menu-inner">
          <nav className="mobile-links">
            <Link href="#">Commercial</Link>
            <Link href="#">Residential</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Insurance</Link>
            <Link href="#">Why Us</Link>
            <Link href="#">Payments</Link>
            <Link href="#">Franchise Opportunities</Link>
          </nav>

          <div className="mobile-contact">
            <a href="tel:5096467488" className="phone-line">
              <FaPhoneAlt /> (509) 646-7488
            </a>
            <Link href="/contact" className="mobile-cta">
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
