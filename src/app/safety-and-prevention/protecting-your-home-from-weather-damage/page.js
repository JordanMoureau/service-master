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

export default function WeatherDamagePrevention() {
  return (
    <div>
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Protecting a home from storm and weather damage"
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Protecting Your Home From Weather Damage</h1>
            <h2>STORM DAMAGE PREVENTION &amp; WEATHERPROOFING FOR SPOKANE</h2>
            <h3>
              Essential Steps to Safeguard Your Home From Wind, Water &amp; Fire
              Risk
            </h3>

            <p>
              Weather damage hits homes in Spokane and North Idaho
              year-round—windstorms, heavy rain, wildfire smoke and embers, ice,
              snow loads, and freezing temperatures. Each brings its own way of
              damaging your roof, siding, foundation, and interior. Protecting
              your home means understanding the risks and taking targeted steps
              to reduce them.
            </p>

            <p>
              At{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>
              , we respond to storm and weather emergencies every season. This
              guide gives you practical, high-impact strategies to fortify your
              home before the next big weather event—plus clear checklists and
              prevention techniques you can use anytime.
            </p>

            <div className="yellow-box">
              <h3>
                Need help after a storm? Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                for 24/7 storm damage cleanup and restoration.
              </h3>
            </div>

            <h2>COMMON TYPES OF WEATHER DAMAGE</h2>
            <h3>Wind • Water • Fire — The “Big Three” Threats</h3>

            <p>
              Weather damage usually falls into three main categories, each with
              distinct effects on your home’s structure:
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Wind Damage:</strong> Uplift on roofs, torn shingles,
                broken windows, flying debris.
              </li>
              <li className="arrow-list">
                <strong>Water Damage:</strong> Foundation seepage, basement
                flooding, roof leaks, runoff entry.
              </li>
              <li className="arrow-list">
                <strong>Fire Damage:</strong> Wildfire embers, wind-driven
                ignition sources, electrical fires.
              </li>
            </ul>

            <p>
              Understanding how each type of damage works helps you strengthen
              the most vulnerable parts of your home—your roof, foundation,
              windows, and landscape.
            </p>

            <h2>PREVENTING WIND DAMAGE</h2>
            <h3>How Wind Affects Roofs, Windows &amp; Exteriors</h3>

            <p>
              High winds create uplift on roof edges, pressure on windows and
              doors, and turn loose debris into dangerous projectiles. Weak roof
              connections, aging shingles, and unprotected windows are the most
              common failure points.
            </p>

            <p>Key wind-prevention upgrades include:</p>

            <ul>
              <li className="arrow-list">
                <strong>Reinforce roof-to-wall connections</strong> with
                hurricane clips or roof straps.
              </li>
              <li className="arrow-list">
                <strong>Upgrade to wind-rated shingles</strong> or metal roofing
                where feasible.
              </li>
              <li className="arrow-list">
                <strong>Use storm shutters or impact-resistant glass</strong> on
                vulnerable windows.
              </li>
              <li className="arrow-list">
                <strong>Secure siding and exterior fixtures</strong> to prevent
                blow-off or impact hazards.
              </li>
            </ul>

            <h3>Protecting Windows, Doors &amp; Siding</h3>

            <p>
              Windows and doors are entry points for pressure and debris. If a
              window breaks during a storm, interior pressurization can worsen
              structural damage dramatically.
            </p>

            <ul>
              <li className="arrow-list">
                Install impact-rated windows or storm shutters.
              </li>
              <li className="arrow-list">
                Reinforce garage doors with bracing kits.
              </li>
              <li className="arrow-list">
                Fasten or replace loose siding before storm season.
              </li>
              <li className="arrow-list">
                Trim trees and remove yard items that can become airborne.
              </li>
            </ul>

            <div className="black-box">
              <p>
                If you see missing shingles or damaged flashing after high
                winds, have your roof inspected quickly to prevent water
                intrusion.
              </p>
            </div>

            <h2>PREVENTING WATER DAMAGE FROM WEATHER</h2>
            <h3>Foundation, Basement &amp; Surface Water Protection</h3>

            <p>
              Weather-driven water intrusion often begins outside the home—poor
              drainage, clogged gutters, or saturated soil pushing moisture into
              basements or crawlspaces.
            </p>

            <p>High-impact water-prevention steps include:</p>

            <ul>
              <li className="arrow-list">
                <strong>Correct yard grading</strong> so soil slopes away from
                the foundation.
              </li>
              <li className="arrow-list">
                <strong>Extend downspouts 3–5 feet</strong> to redirect roof
                runoff.
              </li>
              <li className="arrow-list">
                <strong>Install a sump pump</strong> with a battery backup for
                heavy rain or high groundwater.
              </li>
              <li className="arrow-list">
                <strong>Use exterior membranes or French drains</strong> for
                persistent seepage areas.
              </li>
              <li className="arrow-list">
                <strong>Seal foundation cracks and window wells</strong> before
                the wet season.
              </li>
            </ul>

            <p>
              These steps dramatically reduce your risk of basement flooding and
              long-term foundation damage, especially during spring melt and
              heavy downpours.
            </p>

            <h3>Gutters, Downspouts &amp; Drainage Management</h3>

            <p>
              Your gutter system is your home’s first line of defense against
              weather-driven water damage. When gutters overflow, water pools
              against your foundation—leading directly to seepage.
            </p>

            <ul>
              <li className="arrow-list">
                Clean gutters at least twice a year.
              </li>
              <li className="arrow-list">
                Repair sagging or disconnected downspouts promptly.
              </li>
              <li className="arrow-list">
                Add splash blocks or extensions to divert water further away.
              </li>
              <li className="arrow-list">
                Clear yard drains after storms to prevent flooding.
              </li>
            </ul>

            <h2>REDUCING FIRE DAMAGE RISK</h2>
            <h3>Electrical &amp; Wildfire-Related Prevention</h3>

            <p>
              Fire damage from storms can occur through lightning, downed power
              lines, or wildfire embers traveling on the wind. Reducing fire
              risk starts with electrical safety and smart landscape choices.
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Inspect outlets and breakers</strong> for heat,
                flickering lights, or repeated trips.
              </li>
              <li className="arrow-list">
                <strong>Maintain defensible space</strong> by clearing dead
                vegetation and using fire-resistant plants near the home.
              </li>
              <li className="arrow-list">
                <strong>Use Class A fire-rated roofing</strong> materials when
                replacing your roof.
              </li>
              <li className="arrow-list">
                <strong>Install ember-resistant vents</strong> to reduce
                ignition risk from wind-driven embers.
              </li>
            </ul>

            <h2>STORM PREPAREDNESS</h2>
            <h3>Create an Emergency Plan Before You Need One</h3>

            <p>
              Weather emergencies are stressful—but preparation makes them safer
              and easier to manage.
            </p>

            <ul>
              <li className="arrow-list">
                Assemble a 72-hour emergency kit with food, water &amp; first
                aid.
              </li>
              <li className="arrow-list">
                Create a family communication plan and meeting point.
              </li>
              <li className="arrow-list">
                Test generators and backup power systems seasonally.
              </li>
              <li className="arrow-list">
                Document your home’s condition with photos for insurance.
              </li>
            </ul>

            <h3>Essential Emergency Supplies</h3>

            <p>Your storm-prep kit should include:</p>

            <ul>
              <li className="arrow-list">
                Battery-powered flashlight &amp; lanterns
              </li>
              <li className="arrow-list">Backup phone chargers</li>
              <li className="arrow-list">
                Portable generator or battery backup
              </li>
              <li className="arrow-list">Weather radio</li>
              <li className="arrow-list">Copies of insurance documents</li>
            </ul>

            <div className="yellow-box">
              <h3>
                If your home has weather damage, call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                for fast restoration, water extraction, and cleanup.
              </h3>
            </div>

            <h2>SEASONAL WEATHER MAINTENANCE</h2>
            <h3>Year-Round Home Protection Checklist</h3>

            <p>
              Seasonal maintenance strengthens your home’s ability to withstand
              storms:
            </p>

            <h3>Fall</h3>
            <ul>
              <li className="arrow-list">Inspect roofs and flashing</li>
              <li className="arrow-list">
                Clean gutters and remove fallen branches
              </li>
              <li className="arrow-list">
                Check attic ventilation for moisture
              </li>
            </ul>

            <h3>Spring</h3>
            <ul>
              <li className="arrow-list">
                Test sump pumps and drainage systems
              </li>
              <li className="arrow-list">
                Look for new cracks or foundation seepage
              </li>
              <li className="arrow-list">
                Clear yard debris from winter storms
              </li>
            </ul>

            <h3>Summer &amp; Winter Prep</h3>
            <ul>
              <li className="arrow-list">Service HVAC &amp; generators</li>
              <li className="arrow-list">
                Check seals around windows &amp; doors
              </li>
              <li className="arrow-list">
                Prepare for extreme heat or freezing temps
              </li>
            </ul>

            <p>
              And whenever you’re unsure whether damage is cosmetic or
              structural, a professional inspection gives clarity and peace of
              mind.
            </p>

            <p>
              Whether you're preparing for storm season or recovering from one,{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>{" "}
              is here to help protect, restore, and strengthen your home.
            </p>
          </div>

          <div className="column-two">
            <SideBarBox title="Safety & Prevention" links={Links} list={List} />
            <UncertainTo />
          </div>
        </div>
      </div>

      <RestorePeace />
    </div>
  );
}
