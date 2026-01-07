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
];

export default function PrepareHomeForWaterDamageEmergencies() {
  return (
    <div>
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Home emergency planning for water damage in Spokane and North Idaho"
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>
              How to Prepare Your Home for Water Damage Emergencies Before They
              Happen
            </h1>
            <h2>WATER DAMAGE EMERGENCY PREP FOR SPOKANE &amp; NORTH IDAHO</h2>
            <h3>
              Prevention Tips, Smart Upgrades, and a Simple Emergency Plan
            </h3>

            <p>
              Water damage is the kind of chaos nobody schedules. It can ruin
              floors, soak walls, destroy contents, and create mold-friendly
              conditions fast. The good news is that most water emergencies are
              preventable—or at least manageable—when you prepare ahead of time.
            </p>

            <p>
              This guide covers common causes of residential water damage,
              exterior and interior prevention steps, smart home tech that can
              catch leaks early, and a practical emergency preparedness plan so
              you’re not scrambling in the middle of a disaster.
            </p>

            <div className="yellow-box">
              <h3>
                Dealing with active water damage? Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                for 24/7 water damage mitigation in Spokane and North Idaho.
              </h3>
            </div>

            <h2>COMMON CAUSES OF RESIDENTIAL WATER DAMAGE</h2>
            <h3>Where Emergencies Usually Start</h3>

            <p>
              Most residential water damage comes from plumbing failures,
              appliance leaks, and water intrusion caused by exterior drainage
              problems or severe weather. Knowing what typically causes water
              loss helps you prevent it and respond faster when something goes
              wrong.
            </p>

            <h3>How burst pipes and appliance leaks lead to water damage</h3>
            <p>
              Burst pipes can happen during freezing temperatures, due to aging
              or corroded plumbing, or from water pressure issues. Appliance
              leaks often come from worn hoses, loose fittings, or internal
              failures in washing machines, dishwashers, water heaters, and
              refrigerators.
            </p>

            <ul>
              <li className="arrow-list">
                Inspect exposed pipes and fittings for corrosion, staining, or
                slow drips.
              </li>
              <li className="arrow-list">
                Check appliance supply lines and replace worn hoses before they
                fail.
              </li>
              <li className="arrow-list">
                Consider leak detection devices for early warnings.
              </li>
            </ul>

            <h3>Home vulnerabilities that increase flood and leak risks</h3>
            <p>
              Some homes are simply more vulnerable because of exterior
              conditions and drainage. Foundation cracks, poor grading, roof
              issues, clogged gutters, and landscaping that pushes water toward
              the structure can increase the chance of water
              intrusion—especially during heavy rain or snowmelt.
            </p>

            <h2>PROTECT YOUR HOME’S EXTERIOR FROM WATER DAMAGE</h2>
            <h3>Your First Line of Defense Is Outside</h3>

            <h3>Best practices for roof and gutter maintenance</h3>
            <p>
              Roof and gutter problems are a common source of water damage. The
              goal is to keep water moving off the roof and away from the home
              instead of letting it pool and sneak inside.
            </p>

            <ul>
              <li className="arrow-list">
                Inspect the roof at least twice a year and after major storms.
              </li>
              <li className="arrow-list">
                Look for missing shingles, damaged flashing, and soft spots
                around roof penetrations.
              </li>
              <li className="arrow-list">
                Clean gutters regularly so water can flow freely and not
                overflow onto siding or into attics.
              </li>
              <li className="arrow-list">
                Confirm downspouts discharge water away from the foundation.
              </li>
            </ul>

            <h3>
              How foundation grading and landscape design prevent water
              intrusion
            </h3>
            <p>
              Water should drain away from your foundation, not toward it.
              Proper grading, drainage solutions, and smart landscaping reduce
              the likelihood of water pooling and seeping into basements, crawl
              spaces, and lower-level walls.
            </p>

            <ul>
              <li className="arrow-list">
                Ensure the ground slopes away from the home.
              </li>
              <li className="arrow-list">
                Add downspout extensions to move water 3–5 feet away.
              </li>
              <li className="arrow-list">
                Consider drainage solutions like French drains or swales where
                water collects.
              </li>
              <li className="arrow-list">
                Avoid overwatering near the foundation and keep soil levels
                below siding.
              </li>
            </ul>

            <div className="black-box">
              <p>
                Seeing recurring dampness in a basement or crawl space? That’s
                often a drainage issue, not “just the season.” Catching it early
                prevents mold and structural damage.
              </p>
            </div>

            <h2>INTERIOR MAINTENANCE THAT PREVENTS WATER DAMAGE</h2>
            <h3>Plumbing, Appliances, and Quick Shut-Off Access</h3>

            <h3>
              How to inspect and maintain plumbing systems and appliance hoses
            </h3>
            <p>
              Interior water damage often comes from supply lines and fixtures.
              A quick routine inspection can catch small issues before they turn
              into emergencies.
            </p>

            <ul>
              <li className="arrow-list">
                Check under sinks for moisture, corrosion, or warped cabinetry.
              </li>
              <li className="arrow-list">
                Inspect toilets for leaking at the base or behind the tank.
              </li>
              <li className="arrow-list">
                Look behind washing machines and dishwashers for dampness or
                water staining.
              </li>
              <li className="arrow-list">
                Replace washing machine hoses every 3–5 years (sooner if worn or
                heavily used).
              </li>
              <li className="arrow-list">
                Watch water heaters for rust, sweating, or water in the drain
                pan.
              </li>
            </ul>

            <h3>Locate and operate water shut-off valves effectively</h3>
            <p>
              Knowing where your shut-off valves are is one of the most
              important emergency-prep steps you can take. The main shut-off is
              typically near the water meter or where the main line enters the
              home. Individual fixture shut-offs are commonly under sinks and
              behind toilets.
            </p>

            <ul>
              <li className="arrow-list">
                Find the main shut-off valve and confirm it turns smoothly.
              </li>
              <li className="arrow-list">
                Label valves so anyone in the household can use them quickly.
              </li>
              <li className="arrow-list">
                Keep a flashlight nearby if valves are in basements, garages, or
                crawl spaces.
              </li>
            </ul>

            <h2>SMART HOME TECHNOLOGY FOR LEAK DETECTION &amp; PREVENTION</h2>
            <h3>Catch Problems Early and Reduce Damage</h3>

            <h3>Benefits of water leak detection systems and sensors</h3>
            <p>
              Leak detection sensors provide early warnings so you can respond
              quickly. Placing sensors near water heaters, under sinks, behind
              appliances, and in basements adds a powerful layer of protection.
              Many modern systems send alerts to your phone, even when you’re
              away from home.
            </p>

            <h3>How automatic shut-off valves and smart sump pumps work</h3>
            <p>
              Automatic shut-off valves can detect leaks and stop the main water
              supply to reduce damage. Smart sump pumps monitor water levels and
              can activate to prevent basement flooding. Together, these tools
              help protect your home during emergencies and severe weather.
            </p>

            <div className="yellow-box">
              <h3>
                Want a clear response plan if something happens? Bookmark{" "}
                <a
                  className="underline-link"
                  href="/safety-and-prevention/first-24-after-water-damage"
                >
                  what to do in the first 24 hours after water damage
                </a>
                .
              </h3>
            </div>

            <h2>BUILD A WATER DAMAGE EMERGENCY PREPAREDNESS PLAN</h2>
            <h3>Emergency Kit, Contact List, and Simple Next Steps</h3>

            <p>
              A water emergency plan reduces panic and speeds up your response.
              Keep essentials in one place and make sure everyone in the home
              knows what to do first.
            </p>

            <h3>Emergency kit essentials and a contact list</h3>
            <p>
              Your emergency kit should include basics for power outages and
              quick response. You should also keep a contact list with emergency
              services, your insurance provider, and trusted contractors.
            </p>

            <table className="table">
              <thead>
                <tr>
                  <th>Emergency Kit Item</th>
                  <th>Purpose</th>
                  <th>Recommended Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Flashlight</td>
                  <td>Provides light during power outages</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Batteries</td>
                  <td>Powers flashlights and other devices</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>First Aid Kit</td>
                  <td>Addresses minor injuries</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Non-Perishable Food</td>
                  <td>Sustains during emergencies</td>
                  <td>3 days&apos; worth</td>
                </tr>
                <tr>
                  <td>Water</td>
                  <td>Hydration during emergencies</td>
                  <td>1 gallon per person per day</td>
                </tr>
              </tbody>
            </table>

            <h3>What homeowners need to know about insurance coverage</h3>
            <p>
              Insurance coverage can vary by policy and by the source of the
              water. Many homeowners policies often cover sudden and accidental
              water damage such as burst pipes or appliance failures. Flooding
              from natural events typically requires separate flood insurance.
              Review your policy, understand exclusions, and consider coverage
              upgrades if your home is in a flood-prone area.
            </p>

            <table className="table">
              <thead>
                <tr>
                  <th>Insurance Coverage Type</th>
                  <th>Description</th>
                  <th>Importance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Homeowners Insurance</td>
                  <td>Covers damage from burst pipes and appliance leaks</td>
                  <td>Essential for most homeowners</td>
                </tr>
                <tr>
                  <td>Flood Insurance</td>
                  <td>Covers damage from flooding events</td>
                  <td>Important in flood-prone areas</td>
                </tr>
                <tr>
                  <td>Liability Coverage</td>
                  <td>
                    Protects against claims from injuries on your property
                  </td>
                  <td>Crucial for overall protection</td>
                </tr>
              </tbody>
            </table>

            <h2>
              GET HELP WITH WATER DAMAGE PREVENTION &amp; EMERGENCY RESPONSE
            </h2>
            <h3>Support for Spokane &amp; North Idaho Homeowners</h3>

            <p>
              Prevention matters—but response matters too. If you’re seeing
              moisture, leaks, staining, or you want help assessing your risk,
              <a className="underline-link" href="/">
                {" "}
                ServiceMaster by Compass
              </a>{" "}
              can help you plan, prevent, and respond with confidence.
            </p>

            <div className="black-box">
              <p>
                For 24/7 water damage mitigation, call{" "}
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
