import Image from "next/image";

import RestorePeace from "../../components/RestoringPeace";
import SideBarBox from "../../components/SideBarBox";
import UncertainTo from "../../components/UncertaintyTo";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/safety-and-prevention/repairing-burst-pipes`;

const title = "Burst Pipe Repair & Water Damage Cleanup | Spokane";

const description =
  "Learn what to do when a pipe bursts, how emergency repairs work, and how to prevent water damage in Spokane and Coeur d’Alene homes.";

export const metadata = {
  title,
  description,

  alternates: {
    canonical,
  },

  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: `${siteUrl}/sub-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Emergency burst pipe repair and water damage restoration",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/sub-banner.jpg`],
  },
};

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

export default function BurstPipeRepair() {
  return (
    <main>
      <div className="top-image">
        <Image
          src="/sub-banner.jpg"
          alt="Repairing burst pipes in a Spokane home"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Repairing Burst Pipes</h1>

            <h2>EMERGENCY PIPE BURSTS, FREEZE DAMAGE &amp; RESTORATION</h2>

            <h3>What To Do When a Pipe Bursts in Your Spokane Home</h3>

            <p>
              A burst pipe isn’t just a plumbing problem—it&apos;s an emergency
              that can flood a home in minutes. Water rushes into walls,
              ceilings, and flooring, causing structural damage and creating
              ideal conditions for mold within 24–48 hours. At{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>
              , we help Spokane-area homeowners respond quickly and safely when
              a pipe ruptures, providing emergency water mitigation, cleanup,
              and guidance toward permanent repairs.
            </p>

            <p>
              This guide walks you through the immediate emergency steps, the
              safest temporary fixes, how permanent repairs are handled for
              copper, PEX, and PVC pipes, and what to expect during water damage
              restoration. We also cover prevention strategies so you’re less
              likely to face this nightmare again.
            </p>

            <div className="yellow-box">
              <h3>
                Have an active leak right now? Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                for 24/7 emergency burst pipe help.
              </h3>
            </div>

            <h2>IMMEDIATE STEPS WHEN A PIPE BURSTS</h2>

            <h3>Stop the Water. Stay Safe. Limit Damage.</h3>

            <p>
              A burst pipe moves FAST. Gallons of water can spill into your home
              in a matter of minutes. Taking quick action reduces the severity
              of water damage and makes restoration faster and more affordable.
              Here’s your emergency checklist:
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Turn off the main water supply.</strong> Stopping the
                flow is priority #1.
              </li>

              <li className="arrow-list">
                <strong>Shut off electricity</strong> to affected rooms if water
                is near outlets or appliances.
              </li>

              <li className="arrow-list">
                <strong>Move valuables and electronics</strong> out of the wet
                area immediately.
              </li>

              <li className="arrow-list">
                <strong>Contain water</strong> using towels, buckets, or
                anything absorbent you can grab.
              </li>

              <li className="arrow-list">
                <strong>Apply a temporary patch</strong> only if it’s safe to
                get near the pipe.
              </li>

              <li className="arrow-list">
                <strong>Call emergency restoration</strong> if the leak is
                large, inside walls, or still spreading.
              </li>
            </ul>

            <div className="black-box">
              <p>
                If water is near electrical outlets—or you can’t safely reach
                the shutoff—evacuate the area and call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                immediately. Your safety comes first.
              </p>
            </div>

            <h2>FINDING &amp; USING THE MAIN WATER SHUTOFF</h2>

            <h3>Where It Typically Is &amp; How to Close It</h3>

            <p>
              Most Spokane-area homes have their shutoff in one of these
              locations:
            </p>

            <ul>
              <li className="arrow-list">
                In the basement near the front foundation wall
              </li>

              <li className="arrow-list">
                Inside a utility room near the water heater
              </li>

              <li className="arrow-list">
                In crawlspaces or on exterior walls in older homes
              </li>

              <li className="arrow-list">
                At the outdoor meter box (HOA or municipal access)
              </li>
            </ul>

            <p>
              Ball valves turn with a simple quarter-turn. Gate valves may
              require several turns. If the valve is stuck, don’t force it—you
              can break it and worsen the situation.
            </p>

            <h2>TEMPORARY FIXES FOR A BURST PIPE</h2>

            <h3>Short-Term Solutions Until Permanent Repairs</h3>

            <p>
              Temporary fixes buy time but are not a substitute for professional
              repair. Common emergency solutions include:
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Epoxy putty:</strong> Works on wet surfaces and forms a
                hardened seal.
              </li>

              <li className="arrow-list">
                <strong>Rubber patch + hose clamp:</strong> Compresses rubber
                over a crack or split.
              </li>

              <li className="arrow-list">
                <strong>Pipe repair tape:</strong> Creates a wrapped seal, best
                for hairline cracks.
              </li>
            </ul>

            <p>
              These fixes usually last hours to days. They stabilize the
              situation so restoration can begin and a plumber can perform
              permanent repairs.
            </p>

            <h2>PERMANENT PIPE REPAIRS</h2>

            <h3>How Copper, PEX &amp; PVC Pipes Are Professionally Repaired</h3>

            <p>
              The correct repair method depends on the pipe material and the
              severity of the damage.
            </p>

            <h3>Copper Pipe Repairs</h3>

            <ul>
              <li className="arrow-list">
                <strong>Soldering:</strong> The most durable method when done
                correctly.
              </li>

              <li className="arrow-list">
                <strong>Compression fittings:</strong> No flame required, ideal
                for tight spaces.
              </li>

              <li className="arrow-list">
                <strong>Push-fit connectors:</strong> Fast installation and no
                heat involved.
              </li>
            </ul>

            <p>
              If the pipe shows corrosion or multiple failures, replacing a full
              section may be the safest long-term solution.
            </p>

            <h3>PEX Pipe Repairs</h3>

            <ul>
              <li className="arrow-list">
                <strong>Crimp or expansion fittings</strong> depending on your
                home’s PEX system.
              </li>

              <li className="arrow-list">
                Replacement of damaged runs for freeze-prone areas.
              </li>
            </ul>

            <h3>PVC Pipe Repairs</h3>

            <ul>
              <li className="arrow-list">
                <strong>Solvent-weld joints:</strong> Permanent and strong when
                installed correctly.
              </li>

              <li className="arrow-list">
                <strong>Mechanical couplings:</strong> Ideal when space is tight
                or moisture is present.
              </li>
            </ul>

            <h2>WATER DAMAGE CLEANUP AFTER A BURST PIPE</h2>

            <h3>Why Fast Drying Matters</h3>

            <p>
              Burst pipes cause more damage than most homeowners expect. Water
              travels behind walls, under flooring, and into insulation. Mold
              grows quickly if drying isn’t immediate.
            </p>

            <ul>
              <li className="arrow-list">Extract standing water</li>

              <li className="arrow-list">
                Set up high-capacity air movers &amp; dehumidifiers
              </li>

              <li className="arrow-list">
                Remove soaked drywall, carpet, padding &amp; insulation
              </li>

              <li className="arrow-list">
                Sanitize surfaces to prevent microbial growth
              </li>

              <li className="arrow-list">
                Monitor moisture until materials are fully dry
              </li>
            </ul>

            <p>
              Professional drying reduces long-term structural damage and is
              often required for insurance-covered restoration.
            </p>

            <h2>INSURANCE CLAIM HELP</h2>

            <h3>Document Everything</h3>

            <p>
              Burst pipes are usually covered under homeowners insurance if the
              cause is sudden and accidental. Insurers expect:
            </p>

            <ul>
              <li className="arrow-list">Photos and videos of all damage</li>

              <li className="arrow-list">
                Proof you acted quickly to mitigate further damage
              </li>

              <li className="arrow-list">
                Professional moisture readings and drying logs
              </li>

              <li className="arrow-list">
                Estimates for repairs and restoration
              </li>
            </ul>

            <p>
              Our team helps document and communicate with adjusters to make the
              process easier.
            </p>

            <div className="yellow-box">
              <h3>
                Need emergency drying or repair support? Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                for rapid dispatch.
              </h3>
            </div>

            <h2>PREVENTING FUTURE BURST PIPES</h2>

            <h3>Simple Upgrades That Make a Big Difference</h3>

            <ul>
              <li className="arrow-list">
                Insulate exposed pipes in crawlspaces &amp; basements
              </li>

              <li className="arrow-list">
                Install heat tape in freeze-prone areas
              </li>

              <li className="arrow-list">
                Add a pressure regulator to prevent pipe stress
              </li>

              <li className="arrow-list">
                Use smart leak detectors with auto-shutoff
              </li>

              <li className="arrow-list">
                Disconnect outdoor hoses before winter
              </li>
            </ul>

            <p>
              Prevention is always cheaper than emergency restoration—especially
              during severe cold snaps.
            </p>

            <p>
              Whether you&apos;re facing an active burst pipe or want to
              strengthen your home&apos;s defenses,{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>{" "}
              is here to help you prevent, repair, and restore with confidence.
            </p>
          </div>

          <aside
            className="column-two"
            aria-label="Safety and prevention resources"
          >
            <SideBarBox title="Safety & Prevention" links={Links} list={List} />

            <UncertainTo />
          </aside>
        </div>
      </div>

      <RestorePeace />
    </main>
  );
}
