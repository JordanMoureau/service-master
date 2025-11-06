"use client";

import Contact from "../../components/Contact";
import LeadContactForm from "../../components/LeadContactForm";
import TrustStrip from "../../components/TrustStrip";
import { gtmEvent } from "../../components/gtm";

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
    </div>
  );
}

// {/* <div className="inner">
// {/* === HERO / URGENCY === */}
// <section aria-labelledby="critical-heading">
//   <h1 id="critical-heading">
//     Water damage in your home? The next few hours are critical.
//   </h1>
//   <h2>Every moment wasted after water damage matters.</h2>

//   <ul>
//     <li className="arrow-list">Within 24 hours, mold begins forming</li>
//     <li className="arrow-list">
//       By 48 hours, structural materials weaken
//     </li>
//     <li className="arrow-list">
//       After 72 hours, the cleanup cost can <em>triple</em>
//     </li>
//   </ul>

//   <p>
//     <strong>Call now</strong> to speak with a disaster-response pro.
//     We’ll tell you exactly what to do next and dispatch a{" "}
//     <strong>tech ASAP</strong>.
//   </p>

//   <a
//     className="btn"
//     href="tel:+15096467488"
//     aria-label="Call now for emergency water damage help"
//     onClick={handleClick}
//   >
//     Call 24/7: (509) 646-7488
//   </a>
// </section>

// <TrustStrip />

// {/* === WHY ACT FAST === */}
// <section className="why-fast" aria-labelledby="why-fast-heading">
//   <h2 id="why-fast-heading">Why fast action matters</h2>
//   <ul>
//     <li>Stops mold growth before it spreads</li>
//     <li>Protects floors, drywall, and electrical systems</li>
//     <li>Reduces insurance claim costs</li>
//     <li>Preserves valuables and prevents secondary damage</li>
//   </ul>
// </section>

// {/* === WHAT TO EXPECT === */}
// <section className="what-to-expect" aria-labelledby="expect-heading">
//   <h2 id="expect-heading">What to expect when you call</h2>
//   <ol>
//     <li>
//       <strong>1. Immediate dispatch:</strong> A restoration tech is
//       assigned within minutes.
//     </li>
//     <li>
//       <strong>2. On-site assessment:</strong> We identify source, damage
//       level, and risks.
//     </li>
//     <li>
//       <strong>3. Extraction & drying:</strong> Industrial-grade drying
//       starts immediately.
//     </li>
//     <li>
//       <strong>4. Insurance coordination:</strong> We handle
//       documentation and billing.
//     </li>
//   </ol>
// </section>

// <LeadContactForm />

// {/* === FAQ === */}
// <section className="faq" aria-labelledby="faq-heading">
//   <h2 id="faq-heading">FAQs</h2>
//   <details>
//     <summary>Do you handle insurance claims?</summary>
//     <p>
//       Yes. We document all damage, provide photo reports, and bill
//       directly to your insurance carrier.
//     </p>
//   </details>

//   <details>
//     <summary>How quickly can someone arrive?</summary>
//     <p>
//       We have 24/7 crews on call and can usually arrive within 60–90
//       minutes of your call.
//     </p>
//   </details>

//   <details>
//     <summary>What if I’m not sure how bad the damage is?</summary>
//     <p>
//       We offer free moisture inspections — our techs will assess and
//       advise on next steps before work begins.
//     </p>
//   </details>
// </section>

// {/* === FINAL CTA === */}
// <section className="final-cta" aria-label="final call to action">
//   <a
//     className="btn btn-primary"
//     href="tel:+15096467488"
//     onClick={handleClick}
//   >
//     Call Now: (509) 646-7488
//   </a>
//   <a className="btn btn-secondary" href="#contact-form-heading">
//     Request Help Online
//   </a>
// </section>
// </div> */}
