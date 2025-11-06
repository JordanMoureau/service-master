import LeadContactForm from "../../components/LeadContactForm";
import TrustStrip from "../../components/TrustStrip";

export default function AreYou() {
  return (
    <div className="we-can-help">
      <div className="inner">
        {/* === HERO / PAIN CHECK === */}
        <section aria-labelledby="are-you-heading">
          <h1 id="are-you-heading">
            Are you currently dealing with water damage in your home?
          </h1>
          <ul>
            <li className="arrow-list">Is it getting worse by the minute?</li>
            <li className="arrow-list">
              Is your property damaged or destroyed?
            </li>
            <li className="arrow-list">
              Are you not sure where you're going to sleep tonight?
            </li>
            <li className="arrow-list">
              Is your insurance putting you on hold?
            </li>
            <li className="arrow-list">Are you not sure where to start?</li>
          </ul>

          <div className="button-box">
            <a className="btn" href="tel:+15096467488">
              We can help.
            </a>
          </div>

          <h2>
            Call us now at{" "}
            <a className="underline" href="tel:+15096467488">
              (509) 646-7488
            </a>{" "}
            to speak to a disaster-response professional. We’ll explain exactly
            what to do and dispatch a tech within a few hours.
          </h2>
        </section>

        <TrustStrip />

        {/* === SERVICE DETAILS === */}
        <section className="service-details" aria-labelledby="what-we-do">
          <h2 id="what-we-do">What we do</h2>
          <ul className="bullets">
            {/* TODO: tailor per service */}
            <li>Water extraction & removal</li>
            <li>Structural drying & dehumidification</li>
            <li>Sanitization & odor control</li>
            <li>Moisture monitoring until safe</li>
            <li>Repairs & restoration</li>
          </ul>
        </section>

        {/* === 3-STEP PROCESS === */}
        <section className="process" aria-labelledby="how-it-works">
          <h2 id="how-it-works">How it works</h2>
          <ol className="steps">
            <li>
              <strong>Dispatch:</strong> Call us 24/7 and we deploy a crew.
            </li>
            <li>
              <strong>Stabilize:</strong> Extract water, set equipment, monitor
              moisture.
            </li>
            <li>
              <strong>Restore:</strong> Cleanup, repairs, and direct insurance
              billing.
            </li>
          </ol>
        </section>

        {/* === COVERAGE / LOCAL CREDIBILITY === */}
        <section className="coverage" aria-labelledby="areas-we-serve">
          <h2 id="areas-we-serve">Areas we serve</h2>
          <p className="coverage-list">
            {/* TODO: swap for real cities/neighborhoods */}
            Spokane · Spokane Valley · Liberty Lake · Airway Heights · Coeur
            d’Alene
          </p>
          <p className="local-note">Locally owned & operated.</p>
        </section>

        <LeadContactForm />

        {/* === FAQ === */}
        <section className="faq" aria-labelledby="faq-heading">
          <h2 id="faq-heading">FAQs</h2>

          <details>
            <summary>Do you work with my insurance?</summary>
            <p>
              Yes. We document all damage, coordinate with your adjuster, and
              bill insurance directly.
            </p>
          </details>

          <details>
            <summary>How fast can you arrive?</summary>
            <p>
              We dispatch immediately and typically arrive within 60–90 minutes
              depending on distance and traffic.
            </p>
          </details>

          <details>
            <summary>Will this prevent mold?</summary>
            <p>
              Rapid extraction and professional dry-out drastically reduce risk.
              We monitor moisture until safe.
            </p>
          </details>
        </section>

        {/* === FINAL CTA === */}
        <section className="final-cta" aria-label="Call to action">
          <div className="cta-row">
            <a className="btn" href="tel:+15096467488">
              Call 24/7: (509) 646-7488
            </a>
            <a className="btn btn-secondary" href="#request-help">
              Request fast help
            </a>
          </div>
        </section>
      </div>
      {/* Optional: drop Contact component below or replace the form above */}
      {/* <Contact /> */}
    </div>
  );
}
