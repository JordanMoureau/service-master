import { FaTimes } from "react-icons/fa";
import LeadContactForm from "../../components/LeadContactForm";
import LeadReviews from "../../components/LeadReviews";
import TrustStrip from "../../components/TrustStrip";
import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function WaterDamageV2() {
  return (
    <div className="lead-container">
      <main className="for-disasters">
        <header>
          <h1>
            Spokane’s trusted water-damage team — on-site in just a few hours
          </h1>
          <p>Stop damage, prevent mold, and get your life back tonight.</p>
          <div>
            {/* Swap for real review widget */}
            <div aria-label="Rating">★★★★★ 4.9/5 (100+ local reviews)</div>
            <div>Insurance-friendly · Licensed & Insured</div>
          </div>

          <a href="tel:15092608166" className="btn">
            Call 24/7: (509) 260-8166
          </a>
        </header>
        <img
          src="/homebodyimage.jpg"
          alt="spokane couple dealing with water damage in their home"
        />
      </main>

      <TrustStrip />

      <section className="why-homeowners">
        <div className="why-inner">
          <div>
            <h1>Why homeowners choose us</h1>
          </div>
          <ul>
            <li>
              <IoMdTime />
              <h2>Rapid response:</h2> <p>minimize repairs & cost</p>
              <a className="btn" href="tel:+15096467488">
                Call Now
              </a>
            </li>
            <li>
              <FaCircleCheck />
              <h2>Mold prevention:</h2>
              <p> proper drying & dehumidification</p>
              <a className="btn" href="tel:+15096467488">
                Call Now
              </a>
            </li>
            <li>
              <IoShieldCheckmark />
              <h2>We handle insurance:</h2>
              <p> photos, documentation, billing</p>
              <a className="btn" href="tel:+15096467488">
                Call Now
              </a>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline />
              <h2>Full service:</h2> <p>extraction, drying, cleanup, repairs</p>
              <a className="btn" href="tel:+15096467488">
                Call Now
              </a>
            </li>
          </ul>
        </div>
        <div className="why-homeowners">
          <div className="why-inner">
            <h1>What we’ll do today</h1>
            <ol>
              <li>
                <div className="number">#1</div>
                <h2>Immediate phone triage & safety checklist</h2>
              </li>
              <li>
                <div className="number">#2</div>
                <h2>On-site assessment + water extraction</h2>
              </li>
              <li>
                <div className="number">#3</div>
                <h2>Drying plan with clear timeline & costs</h2>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <LeadReviews />

      <LeadContactForm />

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
