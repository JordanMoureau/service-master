"use client";

import Image from "next/image";
import Link from "next/link";
import "../styles/nav.scss";
import { Phone, Search } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { use, useState } from "react";
import Dropdown from "../components/Dropdown";

const commercialItems = [
  { href: "/commercial/pre-loss-planning", label: "Pre Loss Planning" },
  { href: "/commercial/water-damage", label: "Water Damage" },
  { href: "/commercial/fire-and-smoke", label: "Fire and Smoke Damage" },
  { href: "/commercial/mold", label: "Mold Damage" },
  { href: "/commercial/specialty-services", label: "Specialty Services" },
  { href: "/commercial/weather", label: "Weather Damage" },
];

const residentialItems = [
  { href: "/residential/water-damage", label: "Water Damage" },
  { href: "/residential/fire-and-smoke", label: "Fire and Smoke Damage" },
  { href: "/residential/mold", label: "Mold" },
  { href: "/residential/weather", label: "Weather Damage" },
  { href: "/residential/odor", label: "Odor Damage" },
  { href: "/residential/specialty-services", label: "Specialty Services" },
];

const faqItems = [
  { href: "/faqs/residential", label: "FAQs - Residential" },
  { href: "/faqs/commercial", label: "FAQs - Commercial" },
];

const insuranceItems = [
  {
    href: "/insurance/residential",
    label: "Residential Benefits and Services",
  },
  { href: "/insurance/commercial", label: "Commercial Benefits and Services" },
  { href: "/insurance/education", label: "Continuing Education Classes" },
];

const whyUsItems = [
  { href: "/why-us/about-us", label: "About Us" },
  { href: "/why-us/testimonials", label: "Testimonials" },
  { href: "/why-us/meet-the-team", label: "Meet the Team" },
];

export default function Nav() {
  const [phone, setPhone] = useState("(509) 535-5440");
  const [hover, setHover] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <div className="arrow-block">
          <span className="arrow-body"></span>
          <span className="arrow-head"></span>
        </div>
        <a href="/">
          <Image src="/logo.png" alt="ServiceMaster" width={150} height={40} />
        </a>
        <div className="chevron" />
      </div>
      <div className="header-right">
        {/* TOP BAR SECTION */}
        <div className="top-bar">
          <a
            href="https://www.servicemasterrestore.com/site-search/"
            className="search"
          >
            <Search
              style={{
                width: "13px",
                height: "13px",
              }}
            />{" "}
            Search
          </a>
          <div
            className="hover-location"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <FaMapMarkerAlt style={{ color: "black" }} />
            <a onClick={() => setPhone("(509) 535-5440")} className="serve">
              Spokane, WA
            </a>

            <div className={`location-drop${hover ? " location-hover" : ""}`}>
              <a className="serve" onClick={() => setPhone("(208) 277-4329")}>
                Coeur D'Alene, ID
              </a>
            </div>
          </div>

          <Link href="https://share.google/ZDhbY0puAXNduv9yp" target="_blank">
            ServiceMaster
          </Link>
          <Link href="https://share.google/ZDhbY0puAXNduv9yp" target="_blank">
            Inland Northwest
          </Link>
        </div>

        <div className="bottom-bar">
          <nav>
            <Dropdown
              label="Commercial"
              href="/commercial"
              items={commercialItems}
            />
            <Dropdown
              label="Residential"
              href="/residential"
              items={residentialItems}
            />
            <Dropdown label="FAQs" href="/faqs" items={faqItems} />
            <Dropdown
              label="Insurance"
              href="/insurance"
              items={insuranceItems}
            />
            <Dropdown label="Why Us" href="/why-us" items={whyUsItems} />

            <Link href="/payments" className="nav-links">
              Payments
            </Link>
          </nav>

          <div className="contact">
            <div className="call-us">
              <a href={`tel:${phone}`} className="phone">
                <Phone
                  style={{
                    width: "20px",
                    height: "20px",
                    stroke: "none",
                    fill: "currentColor",
                    color: "black",
                  }}
                />
                {phone}
              </a>
            </div>
            <div className="cta-container">
              <Link href="/contact/direct-form" className="cta">
                Contact Us Now
              </Link>
              <div className="emergency">24/7/365 Emergency Service</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
