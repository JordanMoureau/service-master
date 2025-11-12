import LeadContactForm from "../../components/LeadContactForm";
import LeadReviews from "../../components/LeadReviews";
import TrustStrip from "../../components/TrustStrip";

export default function WeCan() {
  return (
    <div className="lead-container">
      <div className="we-can-help">
        <div className="inner">
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
              to speak to a disaster-response professional. We’ll explain
              exactly what to do and dispatch a tech within a few hours.
            </h2>
          </section>
        </div>
      </div>

      <TrustStrip />

      <LeadContactForm />
      <LeadReviews />

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
