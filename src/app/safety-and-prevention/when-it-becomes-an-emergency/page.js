"use client";

import RestorePeace from "../../components/RestoringPeace";
import SideBarBox from "../../components/SideBarBox";
import UncertainTo from "../../components/UncertaintyTo";

const Links = [
  "/safety-and-prevention/protecting-your-home-from-water-damage",
  "/safety-and-prevention/safe-sewer-backup-protocols",
  "/safety-and-prevention/protecting-your-home-from-weather-damage",
  "/safety-and-prevention/repairing-burst-pipes",
  "/safety-and-prevention/first-24-after-water-damage",
  "/safety-and-prevention/signs-of-hidden-water-damage",
  "/safety-and-prevention/preparing-for-water-damage",
  "/safety-and-prevention/how-to-turn-off-water",
  "/safety-and-prevention/common-causes-of-water-damage",
  "/safety-and-prevention/before-damage-happens",
  "/safety-and-prevention/seasonal-risks-spokane-coeur-dalene",
  "/safety-and-prevention/when-it-becomes-an-emergency",
];

const List = [
  "Water Damage Prevention",
  "Safe Sewer Protocols",
  "Weather Damage Prevention",
  "Burst Pipes",
  "First 24hrs After Water Damage",
  "Signs of Water Damage",
  "Preparing for Water Damage",
  "How to Turn Off Main Water",
  "Common Causes of Water Damage",
  "Before Damage Happens",
  "Seasonal Risks in Spokane & CDA",
  "When It Becomes an Emergency",
];

export default function WhenSituationBecomesEmergency() {
  return (
    <div>
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Emergency restoration services in Spokane and Coeur d’Alene"
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>When a Situation Becomes an Emergency</h1>
            <h2>HOW TO KNOW IF IT’S TIME TO CALL A RESTORATION TEAM</h2>

            <p>
              Let’s answer the question people actually type into Google at 2:14
              a.m. while staring at a suspicious stain:{" "}
              <strong>“Is this bad enough to call someone?”</strong>
            </p>

            <p>
              You’re not overreacting for wanting clarity. Damage is stressful
              because it’s unpredictable—and because waiting can make it worse.
              This page is the no-nonsense guide to help you decide when to stop
              monitoring and start acting.
            </p>

            <div className="black-box">
              <h2>IF YOU’RE UNSURE, CALL</h2>
              <p>
                If there’s active water, smoke odor, safety concerns, or the
                damage is spreading, don’t gamble. Call{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  contact us online
                </a>
                . It’s always easier to stop damage early than fix it later.
              </p>

              <p>
                Need immediate response? Visit{" "}
                <a className="underline-link" href="/contact-us">
                  Emergency Services
                </a>{" "}
                for fast dispatch and next steps.
              </p>
            </div>

            <h2>THE EMERGENCY LINE</h2>
            <h3>If Any of These Are True, It’s Time to Call</h3>

            <ul>
              <li className="arrow-list">
                <strong>Water is active</strong> (dripping, pooling, soaking,
                leaking, or spreading).
              </li>
              <li className="arrow-list">
                <strong>You smell smoke</strong>, electrical burning, or strong
                chemical odor.
              </li>
              <li className="arrow-list">
                <strong>Power or electrical systems are affected</strong>{" "}
                (sparking, hot outlets, tripping breakers).
              </li>
              <li className="arrow-list">
                <strong>Materials are staying wet</strong> (carpet, drywall,
                insulation, subflooring).
              </li>
              <li className="arrow-list">
                <strong>Damage is spreading</strong> (stains growing, bubbling
                paint, warping, sagging).
              </li>
              <li className="arrow-list">
                <strong>There’s a safety risk</strong> (slip hazards,
                contaminated water, structural instability).
              </li>
              <li className="arrow-list">
                <strong>You can’t identify or stop the source</strong> quickly
                and safely.
              </li>
            </ul>

            <div className="yellow-box">
              <h3>The Simple Rule</h3>
              <p>
                If you’re asking yourself whether you should call, the answer is
                usually yes. That’s not dramatic—that’s you noticing a real
                risk.
              </p>
            </div>

            <h2>WATER DAMAGE</h2>
            <h3>When Water Goes From “Annoying” to “Emergency”</h3>

            <p>
              Water damage becomes an emergency when it’s active, when it’s
              touching building materials, or when it has any chance of becoming
              hidden (inside walls, under flooring, in insulation). Water
              spreads fast and does quiet damage before it gets obvious.
            </p>

            <h3>Call Now If You Notice:</h3>
            <ul>
              <li className="arrow-list">
                A burst pipe, appliance leak, or overflow that won’t stop
              </li>
              <li className="arrow-list">
                Water reaching drywall, baseboards, cabinets, or flooring seams
              </li>
              <li className="arrow-list">
                Ceiling staining, sagging drywall, or dripping from light
                fixtures
              </li>
              <li className="arrow-list">
                Wet carpet padding (even if the surface feels “kind of dry”)
              </li>
              <li className="arrow-list">
                A sewage backup or any contaminated water source
              </li>
              <li className="arrow-list">
                Standing water in a basement or crawl space
              </li>
              <li className="arrow-list">
                Persistent musty odor after a leak event
              </li>
            </ul>

            <p>
              If any of the above is happening, go straight to{" "}
              <a className="underline-link" href="/residential/water-damage">
                Water Damage Restoration
              </a>{" "}
              to understand what proper extraction and drying should include. If
              it’s active right now.
            </p>

            <h2>FIRE AND SMOKE</h2>
            <h3>When Smoke, Soot, or Odor Means You Need Help</h3>

            <p>
              Fire damage isn’t only flames. Smoke and soot can travel through
              HVAC systems, settle into porous materials, and create long-term
              odor and corrosion issues. If smoke is present, treat it as
              time-sensitive.
            </p>

            <h3>Call Now If You Notice:</h3>
            <ul>
              <li className="arrow-list">
                Any recent fire event (even if it seems “small”)
              </li>
              <li className="arrow-list">
                Smoke odor that returns after airing out the property
              </li>
              <li className="arrow-list">
                Visible soot residue on walls, ceilings, or vents
              </li>
              <li className="arrow-list">
                Irritation symptoms indoors (eyes/throat) after a smoke event
              </li>
              <li className="arrow-list">
                Electrical burning smell or melted plastic odor
              </li>
              <li className="arrow-list">
                Kitchen fire aftermath (grease smoke spreads aggressively)
              </li>
            </ul>

            <p>
              For next steps and service info, go to{" "}
              <a className="underline-link" href="/residential/fire-and-smoke">
                Fire and Smoke Damage Restoration
              </a>
              . If the situation is fresh or you need immediate stabilization,
              start at{" "}
              <a className="underline-link" href="/contact-us">
                Contact Us
              </a>
              .
            </p>

            <h2>WEATHER DAMAGE</h2>
            <h3>When Storm Damage Turns Into a Safety Issue</h3>

            <p>
              Weather events can cause hidden damage that escalates quickly:
              roof breaches, ice dams, wind-driven rain intrusion, and
              structural stress. The earlier you act, the less likely you are to
              end up with secondary water damage.
            </p>

            <h3>Call Now If You Notice:</h3>
            <ul>
              <li className="arrow-list">
                Roof leaks, missing shingles, or damaged flashing after wind
              </li>
              <li className="arrow-list">
                Water stains appearing after a storm or rapid melt
              </li>
              <li className="arrow-list">
                Ice dam buildup with interior dripping or attic moisture
              </li>
              <li className="arrow-list">
                Fallen tree/branch impact or structural compromise
              </li>
              <li className="arrow-list">
                Flooding risk near foundations, basements, or crawl spaces
              </li>
            </ul>

            <p>
              Learn more about response and repair on{" "}
              <a className="underline-link" href="/residential/weather">
                Weather Damage Restoration
              </a>
              , and use{" "}
              <a className="underline-link" href="/contact-us">
                Contact Us
              </a>{" "}
              when conditions are urgent or actively worsening.
            </p>

            <h2>AM I OVERREACTING?</h2>
            <h3>No. You’re Not. You’re Catching It Early.</h3>

            <p>
              People hesitate to call because they don’t want to be “dramatic.”
              The truth is: restoration is most effective when it’s early.
              Calling early doesn’t mean the situation is catastrophic—it means
              you’re preventing it from becoming catastrophic.
            </p>

            <p>
              If your gut says, “This might be getting worse,” trust that
              instinct. Damage doesn’t get easier with time. It gets wetter,
              smokier, smellier, or structurally more expensive.
            </p>

            <div className="yellow-box">
              <h3>Fast Decision Guide</h3>
              <p>
                <strong>Call today</strong> if you have any active water, smoke
                odor, spreading stains, electrical concerns, or wet materials
                that won’t dry quickly.
              </p>
              <p>
                <strong>Call immediately</strong> if the source can’t be
                stopped, safety is impacted, or you suspect contaminated water,
                structural instability, or electrical risk.
              </p>
            </div>

            <div className="black-box">
              <h2>READY FOR A REAL ANSWER?</h2>
              <p>
                If you’re unsure what you’re looking at, you don’t have to
                diagnose it alone. Call{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  contact us online
                </a>
                . For rapid response and urgent scenarios, go to{" "}
                <a className="underline-link" href="/contact-us">
                  Emergency Services
                </a>
                .
              </p>

              <p>
                For direct service pages, visit{" "}
                <a className="underline-link" href="/residential/water-damage">
                  Water Damage Restoration
                </a>{" "}
                and{" "}
                <a
                  className="underline-link"
                  href="/residential/fire-and-smoke"
                >
                  Fire and Smoke Damage Restoration
                </a>
                .
              </p>
            </div>
          </div>

          <div className="column-two">
            <SideBarBox
              title={"Safety & Prevention"}
              links={Links}
              list={List}
            />
            <UncertainTo />
          </div>
        </div>
      </div>

      <RestorePeace />
    </div>
  );
}
