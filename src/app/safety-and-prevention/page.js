"use client";

import RestorePeace from "../components/RestoringPeace";
import SideBarBox from "../components/SideBarBox";
import UncertainTo from "../components/UncertaintyTo";

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

export default function SafetyAndPrevention() {
  return (
    <div>
      <div className="top-image">
        <img src="/sub-banner.jpg" />
      </div>
      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Safety &amp; Prevention for Your Home</h1>
            <h2>WATER DAMAGE PREVENTION &amp; FIRE SAFETY IN SPOKANE</h2>
            <h3>
              Practical Steps to Protect Your Home Before Disaster Strikes
            </h3>

            <p>
              When it comes to water and fire damage, the most affordable and
              least stressful restoration job is the one that never has to
              happen. At{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>
              , we see every day how quickly a small leak or a forgotten pan on
              the stove can turn into major damage. That&apos;s why we&apos;re
              just as committed to prevention and safety as we are to
              restoration.
            </p>

            <p>
              This Safety &amp; Prevention guide is designed for Spokane and
              North Idaho homeowners who want clear, practical steps to reduce
              the risk of water and fire damage. We&apos;ll walk you through
              common causes of damage in our region, simple DIY checks you can
              do in under an hour, and when it&apos;s time to call in a
              professional. Think of it as a game plan to protect your home,
              your belongings, and your peace of mind.
            </p>

            <div className="yellow-box">
              <h3>
                Want help assessing your home&apos;s risk? Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  contact us online
                </a>{" "}
                to schedule a safety and prevention walkthrough.
              </h3>
            </div>

            <h2>UNDERSTANDING WATER DAMAGE RISKS AT HOME</h2>
            <h3>Why Water Damage Is So Common in Spokane Homes</h3>

            <p>
              Between winter freezes, aging plumbing, and basements that like to
              collect moisture, water damage is one of the most common issues
              we&apos;re called out to handle. The challenge with water is that
              it doesn&apos;t just &quot;get things wet&quot;—it seeps into
              building materials, weakens structures, and creates the perfect
              environment for mold growth if it&apos;s not addressed quickly and
              correctly.
            </p>

            <p>The most frequent sources of water damage we see include:</p>

            <ul>
              <li className="arrow-list">
                Burst or frozen pipes during cold snaps
              </li>
              <li className="arrow-list">
                Leaking water heaters, washing machines, dishwashers, or ice
                maker lines
              </li>
              <li className="arrow-list">
                Basement or crawlspace seepage after heavy rain or snowmelt
              </li>
              <li className="arrow-list">
                Clogged or damaged gutters that send water straight to your
                foundation
              </li>
              <li className="arrow-list">
                Slow, hidden leaks in walls, under sinks, or around showers and
                tubs
              </li>
            </ul>

            <p>
              The good news? Most of these issues give you small warning signs
              before they turn into full-blown disasters. The key is knowing
              where to look—and what not to ignore.
            </p>

            <h3>Simple Signs You Should Never Ignore</h3>

            <ul>
              <li className="arrow-list">
                New stains on ceilings or walls that seem to grow or darken
              </li>
              <li className="arrow-list">
                Soft, spongy, or warped areas in flooring near sinks,
                dishwashers, or tubs
              </li>
              <li className="arrow-list">
                A musty or &quot;damp basement&quot; smell that doesn&apos;t go
                away
              </li>
              <li className="arrow-list">
                Efflorescence (white, chalky residue) on foundation walls
              </li>
              <li className="arrow-list">
                Unexpected increases in your water bill with no obvious reason
              </li>
            </ul>

            <p>
              If you&apos;re seeing these signs now, you may already have an
              active leak or moisture issue. That&apos;s the time to act—before
              mold and structural damage complicate the situation.
            </p>

            <h2>PREVENTING WATER DAMAGE BEFORE IT STARTS</h2>
            <h3>High-Impact Maintenance Tasks for Homeowners</h3>

            <p>
              You don&apos;t have to overhaul your whole house to reduce water
              damage risk. A few targeted habits and seasonal checks go a long
              way. Here are some of the most effective prevention steps you can
              take as a homeowner:
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Test and learn your main water shutoff.</strong> Make
                sure everyone in the home knows where it is and how to turn it
                off in an emergency.
              </li>
              <li className="arrow-list">
                <strong>Inspect visible plumbing twice a year.</strong> Check
                under sinks, behind toilets, and around appliances for drips,
                corrosion, and swollen or cracked supply lines.
              </li>
              <li className="arrow-list">
                <strong>Clean gutters and downspouts seasonally.</strong> Keep
                water flowing away from your roof and foundation, not into your
                basement.
              </li>
              <li className="arrow-list">
                <strong>Test your sump pump.</strong> Pour water into the pit to
                confirm it turns on and pumps out correctly—especially before
                spring thaw.
              </li>
              <li className="arrow-list">
                <strong>Replace old rubber hoses.</strong> Upgrade washing
                machine and dishwasher supply lines to braided stainless-steel
                lines as recommended by the manufacturer.
              </li>
            </ul>

            <h3>Using Technology to Catch Leaks Early</h3>

            <p>
              Smart leak detectors and automatic shutoff valves are becoming
              more affordable and can dramatically reduce the amount of damage
              from a leak. Strategically placed, they act like round-the-clock
              lookouts in the highest-risk areas of your home.
            </p>

            <ul>
              <li className="arrow-list">
                Place leak sensors under sinks, near the water heater, behind
                the washing machine, and under refrigerator or dishwasher lines.
              </li>
              <li className="arrow-list">
                Consider an automatic shutoff valve on your main line that can
                close when a major leak is detected.
              </li>
              <li className="arrow-list">
                Test batteries and Wi-Fi connectivity on a set schedule (for
                example, at the start of each season).
              </li>
            </ul>

            <div className="black-box">
              <p>
                Already discovered standing water or a spreading leak? Shut off
                the water if it&apos;s safe to do so and call{" "}
                <a className="underline-link" href="tel:15095355440">
                  ServiceMaster by Compass at (509) 535-5440
                </a>{" "}
                for 24/7 emergency water mitigation.
              </p>
            </div>

            <h2>PROTECTING PIPES DURING SPOKANE WINTERS</h2>
            <h3>How to Reduce the Risk of Frozen or Burst Pipes</h3>

            <p>
              Our cold winters are tough on plumbing systems—especially in
              unheated crawlspaces, garages, and exterior walls. When water
              freezes inside a pipe, it expands and can cause the pipe to crack
              or burst, sending gallons of water into your home once it thaws.
            </p>

            <p>Before the first hard freeze, walk through your home and:</p>

            <ul>
              <li className="arrow-list">
                Identify pipes that run through unheated or poorly insulated
                areas.
              </li>
              <li className="arrow-list">
                Add foam pipe insulation or heat tape where recommended.
              </li>
              <li className="arrow-list">
                Disconnect and drain outdoor hoses and shut off exterior hose
                bibs if possible.
              </li>
              <li className="arrow-list">
                Keep cabinet doors under sinks slightly open on very cold nights
                to let warm air circulate.
              </li>
              <li className="arrow-list">
                During extreme cold, allow faucets on vulnerable runs to drip
                slightly to keep water moving.
              </li>
            </ul>

            <p>
              If you turn on a faucet and only get a trickle during cold
              weather, you may have a frozen section of pipe. Turn off the
              water, avoid using open flames to thaw anything, and consider
              contacting a professional before the pipe fails.
            </p>

            <h2>FIRE SAFETY BASICS EVERY HOME NEEDS</h2>
            <h3>
              Three Layers of Defense: Detection, Suppression &amp; Escape
            </h3>

            <p>
              Fire safety at home comes down to three main layers working
              together:
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Detection:</strong> Smoke alarms that wake you up and
                give you time to react.
              </li>
              <li className="arrow-list">
                <strong>Suppression:</strong> The right fire extinguishers in
                the right locations for small, controllable fires.
              </li>
              <li className="arrow-list">
                <strong>Escape:</strong> A simple, practiced plan so everyone
                knows how to get out quickly and safely.
              </li>
            </ul>

            <h3>Smoke Alarms: Placement, Testing &amp; Replacement</h3>

            <p>
              Working smoke alarms cut the risk of dying in a home fire
              significantly. But they only help if they&apos;re installed
              correctly and maintained.
            </p>

            <ul>
              <li className="arrow-list">
                Install alarms inside every bedroom, outside each sleeping area,
                and on every level of your home (including the basement).
              </li>
              <li className="arrow-list">
                Test alarms monthly using the test button, and replace batteries
                at least once a year unless using sealed 10-year models.
              </li>
              <li className="arrow-list">
                Replace the alarm units themselves according to manufacturer
                guidelines—typically every 8–10 years.
              </li>
              <li className="arrow-list">
                Consider interconnected alarms so when one sounds, they all do.
              </li>
            </ul>

            <h3>Fire Extinguishers: What to Buy and Where to Put Them</h3>

            <p>
              A fire extinguisher can be invaluable for small, contained fires—
              but you need the right type, in the right place, and you should
              never put yourself at risk to save property.
            </p>

            <ul>
              <li className="arrow-list">
                Choose a multi-purpose class ABC extinguisher for general home
                use.
              </li>
              <li className="arrow-list">
                Mount extinguishers where they are visible and easy to reach:
                the kitchen, near the garage or mechanical room, and close to an
                exit.
              </li>
              <li className="arrow-list">
                Check the pressure gauge monthly and ensure the pin and tamper
                seal are intact.
              </li>
              <li className="arrow-list">
                Learn and teach the PASS method: Pull, Aim, Squeeze, Sweep.
              </li>
            </ul>

            <p>
              If a fire is spreading quickly, producing heavy smoke, or blocking
              your exit, do not attempt to fight it. Evacuate immediately and
              call 911.
            </p>

            <h2>PREVENTING KITCHEN, ELECTRICAL &amp; WILDFIRE-RELATED FIRES</h2>
            <h3>Staying Safe in the Kitchen</h3>

            <p>
              Cooking is one of the leading causes of home fires. The most
              common culprit? Unattended cooking on the stovetop.
            </p>

            <ul>
              <li className="arrow-list">
                Stay in the kitchen when frying, grilling, or broiling food.
              </li>
              <li className="arrow-list">
                Keep flammable items like towels, paper products, and curtains
                away from the stovetop.
              </li>
              <li className="arrow-list">
                Clean grease from stovetops, ovens, and range hoods regularly.
              </li>
              <li className="arrow-list">
                Keep a lid nearby to smother small pan fires—slide it on and
                turn off the burner. Never throw water on a grease fire.
              </li>
            </ul>

            <h3>Electrical and Heating Safety</h3>

            <p>
              Older wiring, overloaded circuits, and space heaters can all
              become fire hazards if not used carefully.
            </p>

            <ul>
              <li className="arrow-list">
                Avoid daisy-chaining power strips or overloading outlets.
              </li>
              <li className="arrow-list">
                Replace damaged or frayed cords immediately.
              </li>
              <li className="arrow-list">
                Keep space heaters at least three feet away from anything that
                can burn, and never run them unattended or while you sleep.
              </li>
              <li className="arrow-list">
                Have an electrician evaluate frequent breaker trips, flickering
                lights, or warm outlets.
              </li>
            </ul>

            <h3>Wildfire Season Considerations for Spokane-Area Homes</h3>

            <p>
              During wildfire season, ember showers and poor air quality add a
              new layer of risk, even if the flames are miles away.
            </p>

            <ul>
              <li className="arrow-list">
                Create defensible space by clearing dry vegetation and debris
                away from structures.
              </li>
              <li className="arrow-list">
                Clean roofs and gutters of dry leaves and pine needles.
              </li>
              <li className="arrow-list">
                Screen exterior vents with appropriate mesh to reduce ember
                intrusion.
              </li>
              <li className="arrow-list">
                Prepare a simple &quot;go bag&quot; and know local evacuation
                routes and alert systems.
              </li>
            </ul>

            <h2>
              HOW SERVICEMASTER BY COMPASS SUPPORTS PREVENTION &amp; SAFETY
            </h2>
            <h3>Prevention-Focused Inspections &amp; Consultations</h3>

            <p>
              As a local restoration company, we don&apos;t just show up after
              something goes wrong—we also help homeowners spot risks before
              they turn into emergencies. Our team can walk your home with a
              restoration-focused eye and point out:
            </p>

            <ul>
              <li className="arrow-list">
                Plumbing and appliance setups that are more likely to fail
              </li>
              <li className="arrow-list">
                Basement, crawlspace, and drainage issues that increase flood
                risk
              </li>
              <li className="arrow-list">
                Fire safety gaps, from missing alarms to extinguisher placement
              </li>
              <li className="arrow-list">
                Seasonal vulnerabilities related to winter freezes or wildfire
                conditions
              </li>
            </ul>

            <p>
              From there, we can recommend practical upgrades, maintenance
              routines, and, when needed, professional services to help you
              lower your overall risk.
            </p>

            <h3>24/7 Emergency Mitigation When Prevention Isn&apos;t Enough</h3>

            <p>
              Even with great prevention, accidents and unexpected failures can
              still happen. When they do, fast, professional mitigation makes a
              huge difference in how much the loss ultimately costs and how long
              you&apos;re displaced from your home.
            </p>

            <ul>
              <li className="arrow-list">
                Rapid response for water extraction and structural drying
              </li>
              <li className="arrow-list">
                Smoke and soot cleanup to protect surfaces and indoor air
                quality
              </li>
              <li className="arrow-list">
                Mold remediation when moisture has been present too long
              </li>
              <li className="arrow-list">
                Coordination through the restoration and reconstruction phases
              </li>
            </ul>

            <p>
              Our technicians follow industry-standard procedures to help
              minimize secondary damage and protect as much of your home and
              belongings as possible.
            </p>

            <h3>Helping You Navigate Insurance Claims</h3>

            <p>
              Insurance paperwork and adjuster visits can feel overwhelming,
              especially when you&apos;re already dealing with a stressful
              event. ServiceMaster by Compass can help document the damage,
              explain recommended mitigation steps, and provide the information
              your insurance carrier needs to process your claim.
            </p>

            <p>
              While we don&apos;t decide what your policy will cover, we do work
              to make the process clearer and less overwhelming so you can focus
              on getting life back to normal.
            </p>

            <div className="yellow-box">
              <h3>
                Ready to take the next step toward a safer home? Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  reach out online
                </a>{" "}
                to schedule a safety and prevention visit in Spokane or North
                Idaho.
              </h3>
            </div>

            <h2>SAFETY &amp; PREVENTION FAQ</h2>
            <h3>How Often Should I Test Smoke Detectors?</h3>

            <p>
              Test smoke detectors once a month and note the date somewhere
              simple, like your phone or a home maintenance checklist. Replace
              the batteries at least once a year, and replace the units
              themselves according to the manufacturer&apos;s guidelines, or any
              time they fail a test or show signs of malfunction.
            </p>

            <h3>How Quickly Can Mold Start After Water Damage?</h3>

            <p>
              Under the right conditions, mold can begin to grow within 24–48
              hours of a water intrusion. That&apos;s why it&apos;s critical to
              start drying and dehumidifying as soon as possible after a leak,
              overflow, or flood—especially in basements and other low-vented
              areas. If you see visible mold, smell a persistent musty odor, or
              have a large affected area, it&apos;s time to bring in
              professionals.
            </p>

            <h3>
              When Should I Call a Professional Instead of Handling It Myself?
            </h3>

            <p>
              DIY is great for small, early-stage issues—like tightening a loose
              fitting or cleaning out gutters. Call a professional when:
            </p>

            <ul>
              <li className="arrow-list">
                Water has affected multiple rooms, levels, or your basement.
              </li>
              <li className="arrow-list">
                You&apos;re dealing with sewage, contaminated water, or strong
                odors.
              </li>
              <li className="arrow-list">
                Smoke has traveled beyond the original fire area.
              </li>
              <li className="arrow-list">
                You see visible mold growth larger than a minor patch.
              </li>
              <li className="arrow-list">
                You&apos;re unsure what building materials are wet or how far
                the damage extends.
              </li>
            </ul>

            <p>
              In those situations, having trained, certified technicians on your
              side helps protect both your home and your health.
            </p>

            <p>
              Whether you&apos;re just starting to think about prevention or
              you&apos;re dealing with an active water or fire emergency,{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>{" "}
              is here to help you plan, prepare, and recover with confidence.
            </p>
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
