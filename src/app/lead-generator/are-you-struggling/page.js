"use client";

import Contact from "../../components/Contact";
import LeadContactForm from "../../components/LeadContactForm";
import TrustStrip from "../../components/TrustStrip";
import { gtmEvent } from "../../components/gtm";
import LeadReviews from "../../components/LeadReviews";
import FAQAccordion from "../../components/FAQAccordion";

// water-damage-faq-items.js
export const waterDamageLeadFAQs = [
  {
    question: "How fast can you get here?",
    answer:
      "Usually same day—often within 60–90 minutes in Spokane, Spokane Valley, and Coeur d’Alene.",
  },
  {
    question: "How long does drying take?",
    answer:
      "Most homes dry in ~3–5 days depending on materials, moisture levels, and airflow. We meter everything daily until it’s truly dry.",
  },
  {
    question: "Do I call insurance first or you?",
    answer:
      "Call us first so we can stop active damage. We document everything and work with your adjuster. You’re only responsible for your deductible in most covered losses.",
  },
  {
    question: "Will you handle the demo and rebuild?",
    answer:
      "Yes. We handle mitigation (drying, demo if needed) and coordinate reconstruction so you’re not juggling vendors.",
  },
  {
    question: "Is it safe to stay in the house?",
    answer:
      "Often yes, but it depends on the area affected, power availability, and contamination. We’ll advise on day one and set equipment safely.",
  },
  {
    question: "What about odors and mold?",
    answer:
      "Elevated moisture can cause odors. We control humidity, remove wet materials when needed, and apply antimicrobials to prevent growth.",
  },
];

export default function AreYouStruggling() {
  const handleClick = () => {
    gtmEvent({ event: "click_to_call", label: "header_phone" });
  };

  return (
    <div className="lead-container">
      <section className="are-you-struggling">
        <div className="inner">
          <h1>Water damage in your home? The next few hours are critical.</h1>
          <h2>Every moment wasted after water damage matters.</h2>

          <ul>
            <li className="arrow-list">Within 24 hours, mold begins forming</li>
            <li className="arrow-list">
              By 48 hours, structural materials weaken
            </li>
            <li className="arrow-list">
              After 72 hours, the cleanup cost can <em>triple</em>
            </li>
          </ul>

          <p>
            <strong>Call now</strong> to speak with a disaster-response pro.
            We’ll tell you exactly what to do next and dispatch a{" "}
            <strong>tech ASAP</strong>.
          </p>

          <a
            className="btn"
            href="tel:+15096467488"
            aria-label="Call now for emergency water damage help"
            onClick={handleClick}
          >
            Call 24/7: (509) 646-7488
          </a>
        </div>
      </section>

      <TrustStrip />

      <LeadContactForm />

      <LeadReviews />
      <div className="faq-container">
        <FAQAccordion items={waterDamageLeadFAQs} />
      </div>

      <div className="final-cta">
        <h1>Ready to stop the damage?</h1>
        <p>
          Our certified restoration team is on call 24/7 and can be at your door
          within hours. Don’t wait—every minute counts.
        </p>
        <div className="button-box">
          <a className="btn" href="tel:+15096467488">
            Call Now — (509) 646-7488
          </a>
          <a className="btn secondary" href="#lead-form">
            Request Immediate Help
          </a>
        </div>
      </div>
    </div>
  );
}
