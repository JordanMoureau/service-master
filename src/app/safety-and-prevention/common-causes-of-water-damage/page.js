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

// --- SEO + JSON-LD ---
const canonical =
  "https://smcfireandwater.com/safety-and-prevention/common-causes-of-water-damage";

const title =
  "Common Causes of Emergency Water Damage | Spokane & North Idaho Prevention Guide";

const description =
  "Learn the most common causes of emergency water damage—pipes, appliance leaks, roof/foundation intrusion, storms, and sewer backups—plus prevention tips for Spokane & North Idaho.";

export const metadata = {
  title,
  description,
  keywords: [
    "common causes of water damage",
    "emergency water damage causes",
    "water damage prevention Spokane",
    "water mitigation Spokane",
    "burst pipe water damage Spokane",
    "appliance leak water damage",
    "roof leak water damage prevention",
    "basement water intrusion Spokane",
    "sump pump flooding prevention",
    "sewer backup prevention",
    "water damage restoration Spokane",
    "water damage North Idaho",
    "ServiceMaster by Compass water damage",
  ],
  alternates: { canonical },
  openGraph: {
    title,
    description:
      "Common causes of emergency water damage and practical prevention steps for Spokane & North Idaho homeowners and property managers.",
    url: canonical,
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Homeowner preventing emergency water damage in Spokane and North Idaho",
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
    description:
      "Common causes of emergency water damage + prevention tips for Spokane & North Idaho.",
    images: ["https://smcfireandwater.com/sub-banner.jpg"],
  },
};

// JSON-LD
const jsonLd = [
  // Webpage entity
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    about: { "@id": "https://smcfireandwater.com/#organization" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/sub-banner.jpg",
      width: 1200,
      height: 630,
    },
    breadcrumb: { "@id": `${canonical}#breadcrumb` },
  },

  // Article entity
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: "Common Causes of Emergency Water Damage and How to Prevent Them",
    description,
    mainEntityOfPage: { "@id": `${canonical}#webpage` },
    articleSection: "Safety & Prevention",
    author: { "@type": "Organization", name: "ServiceMaster by Compass" },
    publisher: {
      "@type": "Organization",
      "@id": "https://smcfireandwater.com/#organization",
      name: "ServiceMaster by Compass",
      logo: {
        "@type": "ImageObject",
        url: "https://smcfireandwater.com/logo.png",
      },
    },
    image: ["https://smcfireandwater.com/sub-banner.jpg"],
  },

  // Breadcrumbs
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smcfireandwater.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Safety & Prevention",
        item: "https://smcfireandwater.com/safety-and-prevention",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Common Causes of Water Damage",
        item: canonical,
      },
    ],
  },

  // Business entity (shared)
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://smcfireandwater.com/#organization",
    name: "ServiceMaster by Compass",
    url: "https://smcfireandwater.com",
    image: "https://smcfireandwater.com/logo.png",
    logo: "https://smcfireandwater.com/logo.png",
    telephone: "+1-509-535-5440",
    sameAs: [
      "https://www.youtube.com/channel/UCxhfBr5uexZ5FxWWnOtHEkQ",
      "https://www.facebook.com/p/ServiceMaster-by-Compass-100063756032122/",
      "https://www.linkedin.com/company/servicemaster-fire-water-restoration-by-compass",
      "https://www.instagram.com/servicemaster_by_compass",
      "https://g.co/kgs/PCuFHgp",
      "https://yelp.com/biz/servicemaster-fire-and-water-restoration-by-compass-spokane",
    ],
    areaServed: [
      { "@type": "Place", name: "Spokane, WA" },
      { "@type": "Place", name: "Spokane Valley, WA" },
      { "@type": "Place", name: "Coeur d’Alene, ID" },
      { "@type": "Place", name: "North Idaho" },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Water Damage Clean Up" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Water Damage Mitigation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sewer Backup Cleanup" },
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-509-535-5440",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
  },
];

export default function CommonCausesEmergencyWaterDamage() {
  return (
    <div>
      <JsonLd data={jsonLd} />
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Homeowner preventing emergency water damage in Spokane and North Idaho"
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>
              Common Causes of Emergency Water Damage and How to Prevent Them
            </h1>
            <h2>WATER DAMAGE PREVENTION TIPS FOR SPOKANE &amp; NORTH IDAHO</h2>
            <h3>
              Know What Causes Water Damage So You Can Stop It Before It Starts
            </h3>

            <p>
              Emergency water damage can hit fast and spread faster. It can
              destroy floors, soak walls, ruin contents, and create
              mold-friendly conditions in as little as 24–48 hours. The good
              news: most water damage comes from a handful of predictable
              sources, and prevention is often simpler than people think.
            </p>

            <p>
              This guide covers the most common causes of water damage—leaking
              pipes, appliance failures, roof and foundation issues, and weather
              events—along with practical prevention strategies and what to do
              immediately if damage occurs.
            </p>

            <div className="yellow-box">
              <h3>
                Dealing with active water damage right now? Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                for 24/7 water damage mitigation in Spokane and North Idaho.
              </h3>
            </div>

            <h2>WHAT ARE THE MOST COMMON CAUSES OF HOME WATER DAMAGE?</h2>
            <h3>
              The Big Four: Pipes, Appliances, Roof/Foundation, and Weather
            </h3>

            <p>
              Water damage usually comes from one of four sources: plumbing
              failures, appliance leaks, exterior intrusion (roof, gutters,
              grading, foundation), or major weather-related events.
              Understanding how these issues start helps you catch problems
              early and reduce the chance of an emergency.
            </p>

            <h3>How leaking and burst pipes lead to water damage</h3>
            <p>
              Pipes can fail slowly or suddenly. Small leaks often come from
              corrosion, worn fittings, or aging materials. Burst pipes are more
              likely during freezing temperatures, thaw cycles, or high pressure
              events. Either way, water can travel into walls, ceilings, and
              floors before you even realize what’s happening.
            </p>

            <ul>
              <li className="arrow-list">
                Watch for stains, bubbling paint, damp drywall, or musty odors.
              </li>
              <li className="arrow-list">
                Pay attention to sudden pressure changes or unexplained water
                use.
              </li>
              <li className="arrow-list">
                Know where your shut-off valve is (seriously—future you will
                thank you).
              </li>
            </ul>

            <h3>Appliance failures that commonly cause water damage</h3>
            <p>
              Appliances that use water can leak from hoses, supply lines,
              seals, or internal corrosion. Washing machines, dishwashers,
              refrigerators with ice makers, and water heaters are some of the
              most common offenders.
            </p>

            <ul>
              <li className="arrow-list">
                Inspect hoses and connections regularly for bulges, rust, or
                moisture.
              </li>
              <li className="arrow-list">
                Replace worn supply lines (especially older rubber hoses).
              </li>
              <li className="arrow-list">
                Check around water heaters for rust, sweating, or water in the
                drain pan.
              </li>
            </ul>

            <h2>
              ROOF &amp; EXTERIOR ISSUES THAT CAUSE EMERGENCY WATER DAMAGE
            </h2>
            <h3>Keeping Water Outside Where It Belongs</h3>

            <p>
              Roof and exterior drainage problems can turn normal rain and
              snowmelt into interior damage. Clogged gutters, damaged shingles,
              and foundation drainage failures can send water into attics,
              walls, and basements.
            </p>

            <h3>Signs and causes of roof leaks</h3>
            <p>
              Roof leaks are sneaky. They often show up as ceiling staining,
              damp attic insulation, or musty smells. Common causes include
              damaged flashing, missing shingles, and gutters that overflow back
              toward the home.
            </p>

            <ul>
              <li className="arrow-list">
                Look for water stains on ceilings, walls, and around vents or
                chimneys.
              </li>
              <li className="arrow-list">
                Check for missing, curling, or damaged shingles after storms.
              </li>
              <li className="arrow-list">
                Clean gutters and downspouts so water can drain away properly.
              </li>
            </ul>

            <h3>
              How poor basement and foundation maintenance leads to water
              intrusion
            </h3>
            <p>
              Foundation cracks, poor grading, and weak drainage systems can
              push water toward your home and into lower levels. Basements and
              crawlspaces are especially vulnerable during heavy rain and
              snowmelt.
            </p>

            <ul>
              <li className="arrow-list">
                Check for dampness, musty odors, or mold spots in basements and
                crawlspaces.
              </li>
              <li className="arrow-list">
                Look for cracks in foundation walls or floors and address them
                quickly.
              </li>
              <li className="arrow-list">
                Make sure soil slopes away from the home and downspouts
                discharge 3–5 feet away.
              </li>
              <li className="arrow-list">
                Consider sump pumps and drainage solutions if water intrusion is
                recurring.
              </li>
            </ul>

            <h2>
              NATURAL DISASTERS &amp; WEATHER EVENTS THAT CAUSE WATER DAMAGE
            </h2>
            <h3>Flooding, Storms, and Sewer Backups</h3>

            <p>
              Severe weather can overwhelm drainage systems and introduce water
              quickly—sometimes in ways you can’t fully control. That’s why
              preparedness matters: you can’t stop the rain, but you can reduce
              how easily it gets inside.
            </p>

            <h3>How flooding and storm damage create emergency water loss</h3>
            <p>
              Heavy rain, rapid snowmelt, and wind-driven intrusion can saturate
              the ground and push water toward foundations. When systems can’t
              keep up, water can enter basements, crawlspaces, and lower-level
              living spaces.
            </p>

            <ul>
              <li className="arrow-list">
                Keep gutters and downspouts clear and functioning.
              </li>
              <li className="arrow-list">
                Test sump pumps and backup power before storm season.
              </li>
              <li className="arrow-list">
                Move stored items off basement floors and onto shelving.
              </li>
            </ul>

            <h3>Risks of sewer backups and clogged drains</h3>
            <p>
              Sewer backups are a serious health risk and can cause extensive
              damage quickly. They can be triggered by heavy rainfall,
              blockages, grease buildup, or tree root intrusion in sewer lines.
            </p>

            <ul>
              <li className="arrow-list">
                Avoid flushing wipes and inappropriate items (even “flushable”
                ones).
              </li>
              <li className="arrow-list">
                Keep drains maintained and address slow drains early.
              </li>
              <li className="arrow-list">
                Consider backflow prevention devices if your area is prone to
                backups.
              </li>
            </ul>

            <h2>EFFECTIVE STRATEGIES FOR PREVENTING WATER DAMAGE</h2>
            <h3>Proactive Steps That Actually Reduce Risk</h3>

            <h3>
              How regular inspections and maintenance prevent water damage
            </h3>
            <p>
              Routine checks are one of the most effective prevention tools you
              have. Regular maintenance helps you spot leaks, worn connections,
              and early warning signs before they become emergencies.
            </p>

            <ul>
              <li className="arrow-list">
                Inspect plumbing, appliance supply lines, and shut-off valves
                routinely.
              </li>
              <li className="arrow-list">
                Check roofs, flashing, and gutters seasonally and after storms.
              </li>
              <li className="arrow-list">
                Monitor basements and crawlspaces for dampness or musty odors.
              </li>
            </ul>

            <h3>Smart technologies that help detect and prevent leaks</h3>
            <p>
              Smart leak detectors, flow monitors, and automatic shut-off valves
              add an extra layer of protection by alerting you quickly and, in
              some cases, stopping water before damage spreads.
            </p>

            <ul>
              <li className="arrow-list">
                Leak sensors can be placed under sinks, near water heaters, and
                behind appliances.
              </li>
              <li className="arrow-list">
                Flow monitors can detect unusual water usage that may indicate
                hidden leaks.
              </li>
              <li className="arrow-list">
                Automatic shut-off systems can stop the main water line when a
                leak is detected.
              </li>
            </ul>

            <div className="black-box">
              <p>
                If you’re dealing with repeated moisture, unexplained dampness,
                or recurring leaks, moisture mapping and professional drying can
                prevent long-term damage.
              </p>
            </div>

            <h2>HOME IMPROVEMENTS THAT REDUCE EMERGENCY WATER DAMAGE RISK</h2>
            <h3>Structural Protection That Pays Off</h3>

            <h3>
              Waterproofing and drainage solutions for basements and foundations
            </h3>
            <p>
              Waterproofing and drainage improvements help protect lower levels
              and reduce the likelihood of water intrusion during storms or
              snowmelt. Options include sealing cracks, improving drainage, sump
              pumps, and systems like French drains.
            </p>

            <h3>Pipe insulation and winterization to prevent burst pipes</h3>
            <p>
              Frozen pipes are one of the most common winter emergencies.
              Insulating vulnerable lines and winterizing outdoor plumbing helps
              keep water moving and reduces freezing risk.
            </p>

            <ul>
              <li className="arrow-list">
                Insulate pipes in unheated basements, crawlspaces, garages, and
                exterior walls.
              </li>
              <li className="arrow-list">
                Drain and shut off outdoor spigots and irrigation lines before
                hard freezes.
              </li>
              <li className="arrow-list">
                Open cabinet doors on very cold nights to allow warm air
                circulation.
              </li>
            </ul>

            <h2>WHAT TO DO IMMEDIATELY AFTER WATER DAMAGE OCCURS</h2>
            <h3>First Steps to Limit Damage and Stay Safe</h3>

            <p>
              If water damage happens, quick action helps prevent secondary
              damage like mold growth and structural deterioration.
            </p>

            <h3>First steps after discovering water damage</h3>
            <ul>
              <li className="arrow-list">
                If safe, turn off electricity in affected areas and stop the
                water source.
              </li>
              <li className="arrow-list">
                Document damage with photos and video for insurance purposes.
              </li>
              <li className="arrow-list">
                Remove standing water and start drying affected areas quickly.
              </li>
              <li className="arrow-list">
                Keep airflow moving with fans and reduce humidity with
                dehumidifiers.
              </li>
            </ul>

            <h3>When to contact professionals for water damage restoration</h3>
            <ul>
              <li className="arrow-list">
                Significant flooding or water spread into walls, floors,
                ceilings, or insulation.
              </li>
              <li className="arrow-list">
                Suspected mold or musty odors that persist during drying.
              </li>
              <li className="arrow-list">
                Contaminated water (gray water or sewage) or any health risk
                concerns.
              </li>
              <li className="arrow-list">
                Structural instability or electrical hazards.
              </li>
            </ul>

            <div className="yellow-box">
              <h3>
                Not sure what to do first? Start here:{" "}
                <a
                  className="underline-link"
                  href="/safety-and-prevention/first-24-after-water-damage"
                >
                  what to do in the first 24 hours after water damage
                </a>
                .
              </h3>
            </div>

            <h2>WATER DAMAGE PREVENTION STRATEGIES AT A GLANCE</h2>
            <h3>Quick Reference Table</h3>

            <table className="table">
              <thead>
                <tr>
                  <th>Prevention Strategy</th>
                  <th>Description</th>
                  <th>Benefits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Regular Inspections</td>
                  <td>
                    Routine checks of plumbing, roof, gutters, and appliances
                  </td>
                  <td>Early detection of issues</td>
                </tr>
                <tr>
                  <td>Smart Technologies</td>
                  <td>
                    Leak sensors, flow monitors, and automatic shut-off valves
                  </td>
                  <td>Immediate alerts and damage prevention</td>
                </tr>
                <tr>
                  <td>Waterproofing Solutions</td>
                  <td>
                    Sealing cracks, drainage systems, sump pumps, and exterior
                    grading
                  </td>
                  <td>Protection against water intrusion</td>
                </tr>
              </tbody>
            </table>

            <p>
              Water damage can be devastating, but it’s often preventable.
              Understanding common causes and staying proactive helps protect
              your property, reduce health risks, and avoid expensive repairs.
            </p>

            <p>
              If you’re experiencing water damage—or want help assessing risk—{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>{" "}
              is here to help homeowners in Spokane and North Idaho respond,
              recover, and restore with confidence.
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
