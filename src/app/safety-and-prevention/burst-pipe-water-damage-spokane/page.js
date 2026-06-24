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

// --- SEO + JSON-LD ---
const canonical =
  "https://smcfireandwater.com/safety-and-prevention/burst-pipe-water-damage-spokane";

const title = "Burst Pipe Water Damage in Spokane | Emergency Cleanup";

const description =
  "A burst pipe can soak walls, floors, and ceilings fast. Learn what to do after pipe leak water damage and when to call Spokane water cleanup professionals.";

export const metadata = {
  title,
  description,
  keywords: [
    "burst pipe water damage Spokane",
    "burst pipe cleanup Spokane",
    "pipe leak water damage Spokane",
    "emergency water extraction Spokane",
    "frozen pipe water damage Spokane",
    "water damage restoration Spokane",
    "pipe burst cleanup Spokane",
    "water removal Spokane",
    "emergency water cleanup Spokane",
    "broken pipe water damage Spokane",
    "water damage from leaking pipe",
    "burst pipe water damage Coeur d’Alene",
    "ServiceMaster by Compass burst pipe cleanup",
  ],
  alternates: { canonical },
  openGraph: {
    title,
    description:
      "A burst pipe can release water quickly into walls, ceilings, flooring, and insulation. Learn what to do first and when to call for emergency water cleanup in Spokane.",
    url: canonical,
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Burst pipe water damage cleanup in Spokane",
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
      "Learn what to do after a burst pipe in Spokane, including shutting off water, avoiding hazards, water extraction, and professional drying.",
    images: ["https://smcfireandwater.com/sub-banner.jpg"],
  },
};

// JSON-LD
export const jsonLd = [
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
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: "Burst Pipe Water Damage in Spokane",
    description,
    mainEntityOfPage: { "@id": `${canonical}#webpage` },
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
    articleSection: "Safety & Prevention",
  },
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
        name: "Burst Pipe Water Damage in Spokane",
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://smcfireandwater.com/#organization",
    name: "ServiceMaster by Compass",
    url: "https://smcfireandwater.com",
    image: "https://smcfireandwater.com/logo.png",
    logo: "https://smcfireandwater.com/logo.png",
    telephone: "+1-509-646-7488",
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
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Burst Pipe Water Damage Cleanup",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Water Extraction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Water Damage Restoration",
        },
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-509-646-7488",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
  },
];

export default function BurstPipeWaterDamageSpokane() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Burst pipe water damage cleanup in Spokane"
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Burst Pipe Water Damage in Spokane</h1>
            <h2>
              WHAT TO DO AFTER A BROKEN PIPE, FROZEN PIPE, OR PLUMBING LEAK
            </h2>

            <p>
              A burst pipe can cause a shocking amount of water damage in a very
              short amount of time. One broken supply line, frozen pipe, failed
              fitting, or plumbing leak can soak flooring, walls, ceilings,
              cabinets, insulation, and personal belongings before you have even
              finished saying, “Wait, why do I hear water?”
            </p>

            <p>
              In Spokane, Spokane Valley, Coeur d’Alene, and the surrounding
              Inland Northwest, burst pipe water damage is especially common
              during freezing weather, rapid temperature swings, and winter
              storms. But pipes can fail any time of year because of age,
              corrosion, pressure issues, appliance connections, or accidental
              damage.
            </p>

            <div className="yellow-box">
              <h3>Quick Answer</h3>
              <p>
                If a pipe bursts, shut off the water supply if you can do so
                safely, avoid electrical hazards, move valuables away from the
                affected area, document the damage, and call a professional
                water damage restoration team for extraction and drying. Visible
                water is only part of the problem—moisture can spread under
                flooring, behind walls, and into insulation fast.
              </p>
            </div>

            <div className="black-box">
              <h2>DEALING WITH A BURST PIPE NOW?</h2>
              <p>
                If water is actively leaking or has already soaked walls,
                ceilings, or flooring, call{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  contact ServiceMaster by Compass
                </a>
                . Fast water extraction and drying can help limit damage and
                reduce how far moisture spreads.
              </p>
            </div>

            <h2>WHAT CAUSES BURST PIPE WATER DAMAGE?</h2>

            <p>
              Burst pipe damage is not always dramatic at first. Sometimes it is
              an obvious break with water pouring through a ceiling. Other
              times, it starts as a hidden leak inside a wall, crawl space,
              basement, or cabinet. Either way, the water needs to be stopped
              and the affected materials need to be inspected.
            </p>

            <h3>Frozen Pipes</h3>
            <p>
              Freezing temperatures are one of the most common causes of burst
              pipes in the Spokane area. When water freezes inside a pipe, it
              can expand and create pressure. The pipe may split, crack, or fail
              at a weak point. Sometimes the damage is not obvious until the
              pipe thaws and water starts flowing again.
            </p>

            <h3>Aging or Corroded Plumbing</h3>
            <p>
              Older plumbing systems can become more vulnerable over time.
              Corrosion, worn fittings, weakened joints, and aging supply lines
              can all increase the risk of leaks or sudden failures.
            </p>

            <h3>High Water Pressure</h3>
            <p>
              Excessive water pressure can strain pipes, valves, and appliance
              connections. Over time, that pressure may contribute to leaks,
              ruptures, or failed fittings.
            </p>

            <h3>Appliance and Fixture Connections</h3>
            <p>
              Washing machines, dishwashers, refrigerators, toilets, sinks,
              water heaters, and ice makers all rely on water supply
              connections. If a hose, valve, or fitting fails, water can spread
              quickly through the nearby room and into adjacent materials.
            </p>

            <h3>Accidental Damage</h3>
            <p>
              Renovations, drilling, moving appliances, or impact damage can
              crack or puncture plumbing lines. Even a small pipe leak can cause
              major water damage if it runs unnoticed.
            </p>

            <p>
              For more causes of water damage around the home, visit{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/common-causes-of-water-damage"
              >
                Common Causes of Water Damage
              </a>
              .
            </p>

            <h2>WHAT TO DO IMMEDIATELY AFTER A PIPE BURSTS</h2>

            <p>
              The first few minutes matter. Your goal is to stop more water from
              entering the property, avoid hazards, and begin documenting what
              happened. Do not worry about making the situation look perfect.
              This is not a magazine shoot. This is triage.
            </p>

            <h3>1. Shut Off the Water</h3>
            <p>
              If you know where the fixture shutoff or main water shutoff is,
              turn the water off immediately. For a sink or toilet leak, a local
              shutoff may stop the problem. For a pipe break inside a wall,
              ceiling, basement, or crawl space, you may need to turn off the
              main water supply.
            </p>

            <p>
              If you need help finding or using your shutoff, read{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/how-to-turn-off-water"
              >
                How to Turn Off Your Main Water
              </a>
              .
            </p>

            <h3>2. Avoid Electrical Hazards</h3>
            <p>
              If water is near outlets, light fixtures, appliances, cords, a
              breaker panel, or anything plugged in, stay out of the affected
              area. Water and electricity are dangerous together. Do not walk
              through standing water if electrical systems may be involved.
            </p>

            <h3>3. Move Belongings if It Is Safe</h3>
            <p>
              If the area is safe to enter, move dry or lightly affected items
              away from the water. Focus on documents, electronics, furniture,
              rugs, and sentimental items. Do not lift heavy soaked materials or
              disturb anything that could be unsafe.
            </p>

            <h3>4. Document the Damage</h3>
            <p>
              Take photos and videos before moving too much, if you can do so
              safely. Capture the source of the water, affected rooms, wet
              flooring, damaged ceilings, soaked belongings, and any visible
              plumbing failure.
            </p>

            <h3>5. Call for Water Extraction and Drying</h3>
            <p>
              A burst pipe can send water into building materials fast. Even
              after the visible water is cleaned up, moisture may remain behind
              walls, under flooring, inside cabinets, above ceilings, and in
              insulation. Professional drying helps reduce the risk of ongoing
              damage.
            </p>

            <p>
              For immediate water cleanup information, visit{" "}
              <a className="underline-link" href="/residential/water-damage">
                Water Damage Restoration
              </a>
              .
            </p>

            <h2>WHERE WATER HIDES AFTER A BURST PIPE</h2>

            <p>
              Burst pipe damage is sneaky because water follows gravity, seams,
              cavities, and whatever annoying path it can find. A leak on an
              upper level can travel through ceilings, wall cavities, floors,
              insulation, and trim before it becomes obvious.
            </p>

            <h3>Common Hidden Moisture Areas</h3>
            <ul>
              <li className="arrow-list">Behind drywall and baseboards</li>
              <li className="arrow-list">Under carpet and carpet padding</li>
              <li className="arrow-list">
                Below laminate, vinyl, or wood flooring
              </li>
              <li className="arrow-list">Inside ceiling cavities</li>
              <li className="arrow-list">Inside cabinets and vanities</li>
              <li className="arrow-list">Around insulation and framing</li>
              <li className="arrow-list">
                Behind appliances and plumbing fixtures
              </li>
              <li className="arrow-list">
                Inside basements, crawl spaces, and utility rooms
              </li>
            </ul>

            <div className="yellow-box">
              <h3>Do Not Trust “Looks Dry”</h3>
              <p>
                If water came from a burst pipe, moisture may remain inside
                materials even after the surface looks better. Moisture readings
                help confirm whether affected areas are actually drying.
              </p>
            </div>

            <h2>
              WHY PROFESSIONAL DRYING MATTERS AFTER PIPE LEAK WATER DAMAGE
            </h2>

            <p>
              Towels, fans, and a shop vac may help with small surface water,
              but they are not a full drying plan for soaked building materials.
              After a burst pipe, water can move into materials that need
              controlled drying and monitoring.
            </p>

            <p>
              A professional water damage restoration team can inspect the
              affected areas, remove standing water, identify hidden moisture,
              set drying equipment, and monitor progress. This is especially
              important when water has reached drywall, flooring, cabinets,
              insulation, ceilings, or structural materials.
            </p>

            <h3>Professional Cleanup May Include:</h3>
            <ul>
              <li className="arrow-list">Inspection and moisture mapping</li>
              <li className="arrow-list">Water extraction</li>
              <li className="arrow-list">
                Removal of unsalvageable wet materials
              </li>
              <li className="arrow-list">Air movers and dehumidifiers</li>
              <li className="arrow-list">Ongoing moisture monitoring</li>
              <li className="arrow-list">
                Cleaning and deodorizing affected areas
              </li>
              <li className="arrow-list">Restoration planning after drying</li>
            </ul>

            <p>
              To understand the timing after water damage, see{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/first-24-after-water-damage"
              >
                The First 24 Hours After Water Damage
              </a>
              .
            </p>

            <h2>WHEN A BURST PIPE BECOMES AN EMERGENCY</h2>

            <p>
              Most burst pipe situations should be treated as urgent because
              water can spread quickly. Some situations are especially serious
              and should not wait.
            </p>

            <h3>Call for Emergency Help If:</h3>
            <ul>
              <li className="arrow-list">
                Water is actively leaking or spreading
              </li>
              <li className="arrow-list">
                Water is coming through a ceiling or wall
              </li>
              <li className="arrow-list">Standing water is present</li>
              <li className="arrow-list">Water is near electrical systems</li>
              <li className="arrow-list">
                Carpet, padding, drywall, or insulation is soaked
              </li>
              <li className="arrow-list">
                The leak happened while you were away
              </li>
              <li className="arrow-list">The source of the water is unknown</li>
              <li className="arrow-list">
                Multiple rooms or levels are affected
              </li>
            </ul>

            <p>
              If you are not sure whether your situation is urgent, visit{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/when-it-becomes-an-emergency"
              >
                When a Situation Becomes an Emergency
              </a>
              .
            </p>

            <h2>BURST PIPES IN BASEMENTS, CEILINGS, AND WALLS</h2>

            <h3>Basement Pipe Leaks</h3>
            <p>
              Basements often contain water heaters, utility lines, laundry
              connections, and exposed plumbing. A burst pipe in a basement can
              affect flooring, stored belongings, framing, and finished walls.
              If the water has reached carpet, drywall, or insulation, drying
              should begin quickly.
            </p>

            <p>
              If your basement is affected, read{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/basement-water-damage-spokane"
              >
                Basement Water Damage in Spokane
              </a>
              .
            </p>

            <h3>Ceiling Leaks From Burst Pipes</h3>
            <p>
              When a pipe breaks above a ceiling, water can collect before it
              breaks through. Bulging drywall, staining, dripping, sagging, or
              sudden ceiling damage may mean water is trapped above you. Do not
              stand directly under sagging materials.
            </p>

            <h3>Wall Cavity Leaks</h3>
            <p>
              Pipes inside walls can leak for a while before the damage becomes
              visible. Watch for bubbling paint, soft drywall, warped
              baseboards, new stains, or a sudden musty smell. Hidden water
              damage should be inspected before it spreads further.
            </p>

            <p>
              For more warning signs, visit{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/signs-of-hidden-water-damage"
              >
                Signs of Hidden Water Damage
              </a>
              .
            </p>

            <h2>HOW TO HELP PREVENT FROZEN AND BURST PIPES</h2>

            <p>
              You cannot prevent every plumbing failure, but you can lower the
              risk—especially during cold weather. Spokane winters have a way of
              finding the weak spots in a building. Rude, but consistent.
            </p>

            <h3>Burst Pipe Prevention Checklist</h3>
            <ul>
              <li className="arrow-list">
                Insulate pipes in unheated areas like garages, crawl spaces, and
                exterior walls.
              </li>
              <li className="arrow-list">
                Disconnect outdoor hoses before freezing weather.
              </li>
              <li className="arrow-list">
                Keep indoor temperatures consistent during cold snaps.
              </li>
              <li className="arrow-list">
                Open cabinet doors under sinks on exterior walls during extreme
                cold.
              </li>
              <li className="arrow-list">
                Know where your main water shutoff is located.
              </li>
              <li className="arrow-list">
                Replace old or worn appliance hoses and supply lines.
              </li>
              <li className="arrow-list">
                Watch for low water pressure, dripping sounds, stains, or
                unexplained moisture.
              </li>
              <li className="arrow-list">
                Have vulnerable plumbing inspected before winter if you have had
                issues before.
              </li>
            </ul>

            <p>
              For more prevention guidance, read{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/repairing-burst-pipes"
              >
                Repairing Burst Pipes
              </a>{" "}
              and{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/protecting-your-home-from-water-damage"
              >
                Protecting Your Home From Water Damage
              </a>
              .
            </p>

            <h2>DOES INSURANCE COVER BURST PIPE WATER DAMAGE?</h2>

            <p>
              Insurance coverage depends on your policy and the cause of the
              damage. Many policies treat sudden and accidental plumbing
              failures differently than long-term leaks, neglected maintenance,
              or outside flooding. The important thing is to document the
              damage, stop the source if possible, and contact your insurance
              provider with questions about your specific coverage.
            </p>

            <p>
              Restoration documentation can be helpful during the claims process
              because it shows affected areas, drying steps, and moisture
              conditions. Take photos, keep records, and do not throw away
              damaged materials unless your insurance provider or restoration
              team advises you to do so.
            </p>

            <p>
              For local insurance guidance, read{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/does-homeowners-insurance-cover-water-damage-spokane"
              >
                Does Homeowners Insurance Cover Water Damage in Spokane?
              </a>
              .
            </p>

            <h2>BURST PIPE WATER DAMAGE CLEANUP IN SPOKANE</h2>

            <p>
              A burst pipe can feel chaotic, but the right first steps make a
              real difference. Shut off the water, avoid electrical hazards,
              protect valuables only if it is safe, document the damage, and get
              the affected areas inspected and dried properly.
            </p>

            <p>
              ServiceMaster by Compass helps homeowners, property owners, and
              businesses in Spokane, Spokane Valley, Coeur d’Alene, and nearby
              communities respond to burst pipe water damage with water
              extraction, drying, cleanup, and restoration support.
            </p>

            <div className="black-box">
              <h2>GET HELP AFTER A BURST PIPE</h2>
              <p>
                If a broken pipe has soaked your home or business, call{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  contact us online
                </a>
                . We’ll help you stop the water damage from becoming a bigger
                problem.
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
