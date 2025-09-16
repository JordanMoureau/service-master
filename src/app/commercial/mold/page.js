"use client";

import RestorePeace from "./components/RestoringPeace";
import SideBarBox from "./components/SideBarBox";
import UncertainTo from "./components/UncertaintyTo";

const Links = [
  "/commercial/fire-and-smoke",
  "/commercial/mold",
  "/commercial/odor",
  "/commercial/specialty-services",
  "/commercial/pre-loss-planning",
  "/commercial/water-damage",
  "/commercial/weather",
];

const List = [
  "Fire And Smoke",
  "Mold Damage",
  "Odor Removal",
  "Specialty Services",
  "Pre-Loss Planning",
  "Water Damage",
  "Weather",
];

export default function CommercialMoldDamage() {
  return (
    <div>
      <div className="top-image">
        <img
          src="/mold-damage.jpg"
          alt="Commercial mold damage restoration in Spokane"
        />
      </div>
      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Commercial Mold Damage Restoration in Spokane</h1>
            <h2>Protect Your Business from the Harmful Effects of Mold</h2>

            <p>
              Mold growth in commercial properties can pose serious risks to
              both the structural integrity of your building and the health of
              your employees and customers. At ServiceMaster by Compass, we
              specialize in <strong>commercial mold damage restoration</strong>{" "}
              in Spokane, helping you identify, contain, and eliminate mold with
              proven methods and expert care.
            </p>

            <div className="outline-box yellow">
              <h2>
                Dealing with mold in your Spokane business? Call{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  contact us online
                </a>{" "}
                today for fast, effective mold removal and restoration!
              </h2>
            </div>

            <h3>Common Signs of Mold in Commercial Buildings</h3>
            <p>
              Mold can often go undetected until it becomes a major issue. Here
              are some signs that your business may be experiencing mold growth:
            </p>
            <ul>
              <li className="arrow-list">Persistent musty or mildew odor</li>
              <li className="arrow-list">
                Visible mold growth on walls, ceilings, or floors
              </li>
              <li className="arrow-list">
                Increased allergy or respiratory issues among employees
              </li>
              <li className="arrow-list">
                Water stains or previous water damage
              </li>
              <li className="arrow-list">Peeling paint or wallpaper</li>
            </ul>

            <h3>Our Commercial Mold Remediation Process</h3>
            <p>
              Our mold remediation experts use advanced equipment and industry
              best practices to ensure your property is safe and mold-free. Our
              typical mold removal process includes:
            </p>
            <ol>
              <li>Inspection and assessment of mold damage</li>
              <li>Containment of affected areas to prevent spread</li>
              <li>Air filtration using HEPA filters</li>
              <li>Removal of mold-infested materials</li>
              <li>Cleaning and sanitizing of surfaces and contents</li>
              <li>Restoration of property to pre-damage condition</li>
            </ol>

            <h3>Health Risks of Commercial Mold Damage</h3>
            <p>
              Mold exposure can cause health issues, especially in individuals
              with allergies, asthma, or compromised immune systems. Some of the
              potential health effects include:
            </p>
            <ul>
              <li className="arrow-list">Nasal congestion and sneezing</li>
              <li className="arrow-list">Throat irritation and coughing</li>
              <li className="arrow-list">Eye and skin irritation</li>
              <li className="arrow-list">Worsening asthma symptoms</li>
              <li className="arrow-list">
                Respiratory infections in severe cases
              </li>
            </ul>

            <h3>Preventing Future Mold Issues</h3>
            <p>
              Preventing mold is just as important as removing it. Our team
              provides expert recommendations and preventive services to reduce
              the risk of future outbreaks. These include:
            </p>
            <ul>
              <li className="arrow-list">Improving ventilation and airflow</li>
              <li className="arrow-list">Controlling indoor humidity levels</li>
              <li className="arrow-list">
                Routine inspections and maintenance
              </li>
              <li className="arrow-list">
                Prompt repair of plumbing and roof leaks
              </li>
              <li className="arrow-list">
                Use of mold-resistant materials when rebuilding
              </li>
            </ul>

            <div className="outline-box yellow">
              <h2>
                Don’t let mold threaten your business. Contact ServiceMaster by
                Compass today at{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  request service online
                </a>{" "}
                to schedule an inspection and mold assessment.
              </h2>
            </div>

            <h3>Why Choose ServiceMaster by Compass?</h3>
            <ul>
              <li className="arrow-list">
                <strong>Certified mold remediation experts</strong> with years
                of experience
              </li>
              <li className="arrow-list">
                <strong>State-of-the-art equipment</strong> for detection,
                filtration, and cleanup
              </li>
              <li className="arrow-list">
                <strong>24/7 emergency response</strong> to minimize downtime
              </li>
              <li className="arrow-list">
                <strong>Tailored solutions</strong> for Spokane-area businesses
                of all sizes
              </li>
              <li className="arrow-list">
                <strong>Satisfaction guaranteed</strong>—we don’t stop until the
                job is done right
              </li>
            </ul>

            <p>
              Whether you operate a retail store, office, restaurant, or
              industrial facility, ServiceMaster by Compass is ready to help
              restore a safe, mold-free environment for your team and customers.
            </p>
          </div>

          <div className="column-two">
            <SideBarBox title={"Commercial"} links={Links} list={List} />
            <UncertainTo />
          </div>
        </div>
      </div>
      <RestorePeace />
    </div>
  );
}
