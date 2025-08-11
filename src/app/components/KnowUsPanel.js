"use client";
import { useState } from "react";

import {
  FaStar,
  FaPhoneAlt,
  FaUsers,
  FaBuilding,
  FaHouseDamage,
  FaShieldAlt,
} from "react-icons/fa";
import "../styles/knowus.scss";

const buttons = [
  {
    title: "Meet the team",
    link: "/why-us/meet-the-team",
    icon: <FaUsers />,
  },
  {
    title: "Commercial services",
    link: "/commercial",
    icon: <FaBuilding />,
  },
  {
    title: "Residential services",
    link: "/residential",
    icon: <FaHouseDamage />,
  },
  {
    title: "Insurance professionals",
    link: "/insurance",
    icon: <FaShieldAlt />,
  },
];

export default function KnowUsPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`know-us ${open ? "open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Tab */}
      <div className="tab">
        <h2>
          Get To
          <br />
          Know Us
        </h2>
      </div>

      {/* Panel */}
      <div className="open-pop">
        <h2>Get to know us</h2>

        <div className="box">
          <a className="phone" href="tel:5096467488">
            <FaPhoneAlt style={{ marginRight: "6px" }} />
            (509) 646-7488
          </a>
          <a className="btn" href="/contact">
            Contact Us
          </a>
        </div>

        {/* Reviews */}
        <div className="reviews">
          <div className="google">
            4.9 <small>Out Of</small> 5 Stars <small>on</small> Google
          </div>{" "}
          <div className="box">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="see-all">
              <a href="/testimonials">See all reviews</a>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="button-box">
          {buttons.map((btn, index) => (
            <a key={index} href={btn.link} className="get-to-button">
              {btn.icon}
              <span style={{ marginLeft: "6px" }}>{btn.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
