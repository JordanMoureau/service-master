"use client";

import RestorePeace from "../../components/RestoringPeace";
import SideBarBox from "../../components/SideBarBox";
import UncertainTo from "../../components/UncertaintyTo";
import JsonLd from "../../components/JsonLd";

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
  "/safety-and-prevention/does-homeowners-insurance-cover-water-damage-cda",
  "/safety-and-prevention/does-homeowners-insurance-cover-water-damage-spokane",
  "/safety-and-prevention/water-damage-repair",
  "/safety-and-prevention/basement-water-damage-spokane",
  "/safety-and-prevention/burst-pipe-water-damage-spokane",
  "/safety-and-prevention/reduce-downtime-after-water-damage",
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
  "Water Damage & Insurance, CDA",
  "Water Damage & Insurance, Spokane",
  "Repair vs. Restoration",
  "Basement Water Damage",
  "Burst Pipe Water Damage",
  "Commercial Water Damage Downtime",
];

export default function TurnOffWaterSupplyEmergency() {
  return (
    <div>
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Homeowner shutting off water supply during a water damage emergency"
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>
              How to Turn Off Your Water Supply During a Water Damage Emergency
            </h1>
            <h2>
              WATER SHUT-OFF GUIDE FOR SPOKANE &amp; NORTH IDAHO HOMEOWNERS
            </h2>
            <h3>
              Step-by-Step Instructions to Stop Water Fast and Limit Damage
            </h3>

            <p>
              When water is actively leaking, the best “tool” you have is speed.
              Knowing how to shut off your water supply can be the difference
              between a small cleanup and a major restoration project. This
              guide walks you through locating and operating your main shut-off
              valve, using fixture shut-off valves when appropriate, and what to
              do immediately after you stop the flow.
            </p>

            <div className="yellow-box">
              <h3>
                Active leak or flooding? Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                for 24/7 water damage mitigation in Spokane and North Idaho.
              </h3>
            </div>

            <h2>WHERE IS THE MAIN WATER SHUT-OFF VALVE LOCATED?</h2>
            <h3>Find It Before You Need It</h3>

            <p>
              The main water shut-off valve controls water to your entire home.
              In most houses, it’s located near where the water line enters the
              building. If you can locate it ahead of time, you’ll be able to
              react faster during a plumbing emergency.
            </p>

            <h3>Common locations for main water shut-off valves</h3>
            <ul>
              <li className="arrow-list">
                <strong>Basement:</strong> Often on the wall or floor where the
                main water line enters the home.
              </li>
              <li className="arrow-list">
                <strong>Garage:</strong> Frequently near the front wall, the
                main water line entry, or close to the water heater.
              </li>
              <li className="arrow-list">
                <strong>Outside:</strong> Sometimes near the water meter in a
                covered box or pit, especially in homes without basements.
              </li>
            </ul>

            <h3>How to identify your water meter and common valve types</h3>
            <p>
              If your shut-off is outside, you’ll typically find it near the
              water meter. The meter measures usage and may have a shut-off
              valve nearby.
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Ball valve:</strong> Lever handle; a quarter turn shuts
                off water.
              </li>
              <li className="arrow-list">
                <strong>Gate valve:</strong> Wheel handle; turn clockwise until
                it stops.
              </li>
              <li className="arrow-list">
                <strong>Water meter:</strong> Usually outdoors; may be inside a
                box in the ground with a lid.
              </li>
            </ul>

            <div className="black-box">
              <p>
                If the valve is corroded, stuck, or you’re not sure it’s safe to
                force it, stop and call a professional. A broken valve can make
                an emergency worse.
              </p>
            </div>

            <h2>HOW TO SHUT OFF THE MAIN WATER SUPPLY</h2>
            <h3>Step-by-Step Emergency Shut-Off Instructions</h3>

            <p>
              Shutting off the main supply is straightforward, but it helps to
              have basic tools nearby. If you’re dealing with significant water
              intrusion, prioritize safety and avoid standing water near
              electrical hazards.
            </p>

            <h3>Tools that help you operate shut-off valves safely</h3>
            <ul>
              <li className="arrow-list">
                <strong>Flashlight:</strong> For basements, crawlspaces, or
                outdoor meter boxes.
              </li>
              <li className="arrow-list">
                <strong>Wrench:</strong> For stiff or stubborn valves (use
                caution).
              </li>
              <li className="arrow-list">
                <strong>Water meter key:</strong> Helpful for accessing and
                turning exterior shut-offs.
              </li>
            </ul>

            <h3>Step-by-step: turning off the main valve</h3>
            <ul>
              <li className="arrow-list">
                <strong>Locate the main shut-off valve</strong> near the water
                line entry point (basement, garage, or outside at the meter).
              </li>
              <li className="arrow-list">
                <strong>Turn the valve off:</strong> For a ball valve, rotate
                the lever a quarter turn until it is perpendicular to the pipe.
                For a gate valve, turn the wheel clockwise until it stops.
              </li>
              <li className="arrow-list">
                <strong>Confirm water is off</strong> by opening a faucet and
                checking that flow stops.
              </li>
            </ul>

            <h2>HOW TO SHUT OFF WATER TO INDIVIDUAL FIXTURES</h2>
            <h3>Stop a Localized Leak Without Shutting Down the Whole House</h3>

            <p>
              Some leaks are isolated to one fixture, like a toilet or sink. In
              those situations, you may be able to shut off the water at the
              fixture shut-off valve instead of shutting down your entire home.
            </p>

            <h3>Where fixture shut-off valves are located</h3>
            <ul>
              <li className="arrow-list">
                <strong>Under sinks:</strong> Usually inside the cabinet for
                both hot and cold lines.
              </li>
              <li className="arrow-list">
                <strong>Behind toilets:</strong> Typically on the wall or floor
                behind the toilet base.
              </li>
            </ul>

            <h3>When to use fixture valves instead of the main valve</h3>
            <ul>
              <li className="arrow-list">
                <strong>Minor leaks</strong> under a sink or at a supply line.
              </li>
              <li className="arrow-list">
                <strong>Toilet issues</strong> like overflow risk or running
                water you can’t stop.
              </li>
              <li className="arrow-list">
                <strong>Quick isolation</strong> while you schedule repairs and
                keep water on for the rest of the home.
              </li>
            </ul>

            <h2>WHAT TO DO IMMEDIATELY AFTER YOU SHUT OFF THE WATER</h2>
            <h3>Drain Lines, Reduce Pressure, and Protect Your System</h3>

            <h3>Drain water from pipes and turn off the water heater</h3>
            <ul>
              <li className="arrow-list">
                <strong>Open faucets</strong> throughout the home to drain
                remaining water from lines.
              </li>
              <li className="arrow-list">
                <strong>Flush toilets</strong> to empty tanks and reduce
                pressure in the system.
              </li>
              <li className="arrow-list">
                <strong>Turn off the water heater:</strong> For gas heaters, set
                the thermostat to “off” or the gas control to “pilot.” For
                electric, switch off the circuit breaker.
              </li>
            </ul>

            <h3>Document water damage for insurance claims</h3>
            <ul>
              <li className="arrow-list">
                Take photos of affected areas, damaged materials, and wet
                contents.
              </li>
              <li className="arrow-list">
                Save receipts for emergency supplies, repairs, and services.
              </li>
              <li className="arrow-list">
                Write down the date/time, suspected cause, and steps you took.
              </li>
            </ul>

            <div className="yellow-box">
              <h3>
                If you need guidance on what to do next, see{" "}
                <a
                  className="underline-link"
                  href="/safety-and-prevention/first-24-after-water-damage"
                >
                  what to do in the first 24 hours after water damage
                </a>
                .
              </h3>
            </div>

            <h2>WHEN TO CALL A PROFESSIONAL PLUMBER</h2>
            <h3>Signs You Need Expert Help Right Away</h3>

            <p>
              Some plumbing issues are simple fixes. Others need professional
              tools, diagnostics, and repair experience—especially when there’s
              hidden damage.
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Persistent leaks</strong> even after shutting off water.
              </li>
              <li className="arrow-list">
                <strong>Unusual water pressure</strong> changes throughout the
                home.
              </li>
              <li className="arrow-list">
                <strong>Water stains or damage</strong> on walls/ceilings that
                suggest hidden leaks.
              </li>
              <li className="arrow-list">
                <strong>Stuck or broken shut-off valves</strong> you can’t
                safely operate.
              </li>
            </ul>

            <h2>PREVENTION &amp; PREPAREDNESS FOR FUTURE EMERGENCIES</h2>
            <h3>Make the Next “Oh No” Moment Way Less Dramatic</h3>

            <p>
              Water emergencies are stressful, but preparedness changes the
              whole game. A few proactive steps can reduce your risk and help
              you respond faster if something does go wrong.
            </p>

            <h3>Regular maintenance to perform on shut-off valves</h3>
            <ul>
              <li className="arrow-list">
                <strong>Test annually:</strong> Make sure the valve turns
                smoothly and shuts off fully.
              </li>
              <li className="arrow-list">
                <strong>Clean and inspect:</strong> Remove debris and watch for
                corrosion around valve bodies.
              </li>
              <li className="arrow-list">
                <strong>Check for leaks:</strong> Look for moisture around the
                valve and fittings.
              </li>
            </ul>

            <h3>How smart leak detectors and auto shut-off systems work</h3>
            <ul>
              <li className="arrow-list">
                <strong>Leak detection sensors</strong> identify moisture and
                send alerts to your phone.
              </li>
              <li className="arrow-list">
                <strong>Automatic shut-off systems</strong> can close the main
                water line when a leak is detected to limit damage.
              </li>
              <li className="arrow-list">
                <strong>Flow monitoring devices</strong> detect unusual usage
                patterns that may indicate hidden leaks.
              </li>
            </ul>

            <p>
              If you’re looking for restoration support after a leak—or want to
              understand your options for preventing future damage—{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>{" "}
              can help you respond and recover with confidence.
            </p>

            <div className="black-box">
              <p>
                For 24/7 water damage help, call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  contact us online
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
