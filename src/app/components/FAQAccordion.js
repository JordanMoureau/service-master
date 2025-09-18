"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
<IoIosArrowDown />;

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="acc-item">
            <button
              className="acc-button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className="acc-dot" />
              <span className="acc-question">{item.question}</span>
              <span className={`acc-chevron ${isOpen ? "open" : ""}`}>
                <IoIosArrowDown size={30} />
              </span>
            </button>
            <div className={`acc-panel ${isOpen ? "open" : ""}`}>
              <div className="acc-panel-inner">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
