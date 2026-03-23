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
  "https://smcfireandwater.com/safety-and-prevention/before-damage-happens";

const title =
  "What to Do Before Damage Happens | Safety & Prevention Checklist (Spokane & Coeur d’Alene)";

const description =
  "Prevention checklists for water, fire, weather, and mold: shutoffs, inspections, and warning signs for homeowners and property managers in Spokane, Spokane Valley & Coeur d’Alene.";

export const metadata = {
  title,
  description,
  keywords: [
    "home damage prevention checklist",
    "water damage prevention Spokane",
    "how to prevent water damage in home",
    "shut off main water valve Spokane",
    "prevent burst pipes winter Spokane",
    "mold prevention checklist",
    "fire prevention checklist home",
    "gutter maintenance prevent basement water",
    "property maintenance checklist Spokane Valley",
    "damage prevention Coeur d’Alene",
    "ServiceMaster by Compass safety and prevention",
  ],
  alternates: { canonical },
  openGraph: {
    title,
    description:
      "Checklist-driven prevention for water, fire, weather, and mold damage — shutoffs, inspections, and warning signs for Spokane, Spokane Valley & Coeur d’Alene.",
    url: canonical,
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Safety and prevention checklist before damage happens",
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
      "Prevention checklist: shutoffs, inspections, and warning signs for water, fire, weather & mold (Spokane & CDA).",
    images: ["https://smcfireandwater.com/sub-banner.jpg"],
  },
};

// JSON-LD
export const jsonLd = [
  // Webpage entity (article-style resource)
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

  // Main article (optional but helpful for “article” OG type)
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: "What to Do Before Damage Happens",
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
        name: "Before Damage Happens",
        item: canonical,
      },
    ],
  },

  // Business entity (shared sitewide)
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
        itemOffered: { "@type": "Service", name: "Water Damage Clean Up" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Fire Damage Restoration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mold Remediation & Removal" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Weather Damage Restoration" },
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

export default function BeforeDamageHappens() {
  return (
    <div>
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Safety and prevention checklist before damage happens"
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>What to Do Before Damage Happens</h1>
            <h2>
              PREVENTION CHECKLISTS, SHUTOFFS, INSPECTIONS, AND WARNING SIGNS
            </h2>

            <p>
              Most property damage isn’t a lightning bolt from the sky. It’s a
              slow creep. A tiny drip that becomes a soaked cabinet. A slightly
              clogged gutter that becomes basement seepage. A furnace making a
              “new noise” that becomes smoke and a 2 a.m. panic spiral. Fun!
            </p>

            <p>
              This page is built for prevention-minded people: homeowners,
              property managers, and business owners who would rather spend 30
              minutes checking the right things than spend weeks dealing with
              cleanup, drying, and repairs. It’s checklist-driven on
              purpose—because when something is actually happening, nobody wants
              a novel. They want a plan.
            </p>

            <div className="yellow-box">
              <h3>Goal of This Page</h3>
              <p>
                Help you reduce the risk of fire, water, weather, and mold
                damage by knowing what to inspect, what to maintain, what to
                shut off, and what warning signs mean “act now.”
              </p>
            </div>

            <div className="black-box">
              <h2>IF YOU THINK DAMAGE IS ALREADY STARTING, DON’T GUESS</h2>
              <p>
                If you’re seeing active water, smelling smoke, noticing sudden
                discoloration, or hearing unusual system behavior, it may
                already be past “maintenance.” Learn the red flags on{" "}
                <a
                  className="underline-link"
                  href="/safety-and-prevention/when-it-becomes-an-emergency"
                >
                  When a Situation Becomes an Emergency
                </a>
                , or call{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                for immediate guidance.
              </p>
            </div>

            <h2>START HERE</h2>
            <h3>Know Your Shutoffs and Access Points</h3>

            <p>
              Before you do anything else, get familiar with the controls that
              stop damage from spreading. When something goes wrong, seconds
              matter—and “I think it’s somewhere in the basement?” is not the
              vibe.
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Main water shutoff:</strong> Locate it and confirm you
                can turn it. Tag it if needed so anyone can find it quickly.
              </li>
              <li className="arrow-list">
                <strong>Water heater shutoff:</strong> Know the valve location
                and how to power the unit off safely.
              </li>
              <li className="arrow-list">
                <strong>Electrical panel:</strong> Identify the main breaker and
                key circuits (kitchen, HVAC, sump pump, etc.).
              </li>
              <li className="arrow-list">
                <strong>Gas shutoff (if applicable):</strong> Know where it is
                and who should operate it.
              </li>
              <li className="arrow-list">
                <strong>Sump pump pit and discharge line:</strong> Know where
                the water exits and confirm it’s not blocked.
              </li>
              <li className="arrow-list">
                <strong>Attic and crawl space access:</strong> These areas hide
                leaks and moisture early—access matters for inspection.
              </li>
            </ul>

            <p>
              If you only do one thing today, do this. Knowing where shutoffs
              are can turn a major loss into a manageable repair.
            </p>

            <h2>MONTHLY CHECKLIST</h2>
            <h3>Quick Habits That Catch Problems Early</h3>

            <p>
              Monthly checks are about spotting “the beginning” instead of
              discovering “the aftermath.”
            </p>

            <ul>
              <li className="arrow-list">
                Check under sinks for moisture, warping, and staining (kitchen,
                bathrooms, laundry, utility sinks).
              </li>
              <li className="arrow-list">
                Look at ceilings and corners for discoloration, bubbling paint,
                or soft spots.
              </li>
              <li className="arrow-list">
                Listen for new plumbing noises: banging, hissing, constant
                running toilets, or water hammer.
              </li>
              <li className="arrow-list">
                Confirm bathroom fans vent properly and actually pull moisture
                (weak airflow is a sneaky mold starter).
              </li>
              <li className="arrow-list">
                Test smoke detectors and replace batteries as needed.
              </li>
              <li className="arrow-list">
                Look around exterior foundation edges for pooling water after
                rain or snowmelt.
              </li>
              <li className="arrow-list">
                Inspect visible HVAC vents for dust buildup and unusual odor
                (burning smell, musty smell, or “hot electronics” smell).
              </li>
              <li className="arrow-list">
                Check the water heater area for moisture, rust, and unusual
                sounds.
              </li>
            </ul>

            <div className="yellow-box">
              <h3>Warning Sign Rule</h3>
              <p>
                If something is changing (new smell, new stain, new sound, new
                humidity), assume it’s a clue—not a coincidence.
              </p>
            </div>

            <h2>PLUMBING AND WATER DAMAGE PREVENTION</h2>
            <h3>Where Water Damage Usually Starts</h3>

            <p>
              Water damage often begins in the most boring places: supply lines,
              appliance hoses, slow drain backups, compromised caulking, and
              “it’s probably fine” leaks. The goal is to catch water at the
              source before it soaks into materials.
            </p>

            <h3>Plumbing Checklist</h3>
            <ul>
              <li className="arrow-list">
                Replace old or bulging braided supply lines under sinks and
                toilets.
              </li>
              <li className="arrow-list">
                Inspect the dishwasher connection and the area under/around the
                unit.
              </li>
              <li className="arrow-list">
                Check washing machine hoses and the wall connections for
                seepage.
              </li>
              <li className="arrow-list">
                Verify caulking around tubs/showers is intact (gaps invite
                hidden wall moisture).
              </li>
              <li className="arrow-list">
                Watch for slow drains—this can signal a developing backup.
              </li>
              <li className="arrow-list">
                Look for warped baseboards or swelling near bathrooms and
                kitchens.
              </li>
            </ul>

            <p>
              If you suspect an active leak or a backup, visit{" "}
              <a className="underline-link" href="/residential/water-damage">
                Water Damage Restoration
              </a>{" "}
              to understand next steps and what professional drying should look
              like.
            </p>

            <h2>ROOF, GUTTERS, AND ATTIC CHECKS</h2>
            <h3>Stop Leaks Before They Become Interior Damage</h3>

            <p>
              Roofing issues often show up inside your home last—after
              insulation and decking have already taken a hit. Gutters are also
              a major culprit: when they’re clogged or disconnected, water goes
              where it shouldn’t.
            </p>

            <h3>Roof and Drainage Checklist</h3>
            <ul>
              <li className="arrow-list">
                Clean gutters and confirm downspouts move water away from the
                foundation.
              </li>
              <li className="arrow-list">
                Look for missing shingles, lifted edges, or damaged flashing
                after wind events.
              </li>
              <li className="arrow-list">
                Check the attic for damp insulation, staining, or visible
                mold-like spotting.
              </li>
              <li className="arrow-list">
                Inspect roof penetrations (vents, chimneys) where leaks commonly
                start.
              </li>
              <li className="arrow-list">
                In winter, watch for ice dams and icicle buildup along eaves.
              </li>
            </ul>

            <p>
              Weather-related loss often begins with “small” exterior failures.
              If storms have hit your area and you’re worried about impact, see{" "}
              <a className="underline-link" href="/residential/weather">
                Weather Damage Restoration
              </a>
              .
            </p>

            <h2>ELECTRICAL AND FIRE PREVENTION</h2>
            <h3>Reduce Fire Risk Before Something Sparks</h3>

            <p>
              Fire risk isn’t just candles and cooking (though those are
              classics). A lot of fire calls start with electrical overload,
              aging components, or heat-producing devices used incorrectly.
            </p>

            <h3>Fire Prevention Checklist</h3>
            <ul>
              <li className="arrow-list">
                Test smoke detectors and ensure you have coverage on every
                level.
              </li>
              <li className="arrow-list">
                Keep exits and pathways clear (especially in basements and
                garages).
              </li>
              <li className="arrow-list">
                Avoid overloading outlets and power strips—heat buildup is a
                common trigger.
              </li>
              <li className="arrow-list">
                Watch for flickering lights, hot outlets, tripping breakers, or
                burning smells.
              </li>
              <li className="arrow-list">
                Clean dryer vents and lint traps regularly (lint + heat is a bad
                combo).
              </li>
              <li className="arrow-list">
                Keep space heaters safely placed with clearance from fabrics and
                furniture.
              </li>
              <li className="arrow-list">
                Store flammables appropriately and away from ignition sources.
              </li>
            </ul>

            <p>
              If smoke, soot, or odor is already present, don’t DIY your way
              into a bigger problem. Learn more on{" "}
              <a className="underline-link" href="/residential/fire-and-smoke">
                Fire and Smoke Damage Restoration
              </a>
              .
            </p>

            <h2>HVAC, HUMIDITY, AND MOLD PREVENTION</h2>
            <h3>Keep Moisture From Becoming a Hidden Problem</h3>

            <p>
              Mold isn’t magic. It’s moisture plus time. Bathrooms, basements,
              crawl spaces, and poorly ventilated areas are common trouble
              zones. If indoor humidity stays high, materials start absorbing
              moisture—and that’s where odor and growth can follow.
            </p>

            <h3>Mold Prevention Checklist</h3>
            <ul>
              <li className="arrow-list">
                Use bathroom fans during and after showers; confirm fans
                actually vent outside.
              </li>
              <li className="arrow-list">
                Address any water intrusion immediately—wet materials shouldn’t
                stay wet.
              </li>
              <li className="arrow-list">
                Watch for musty odor, recurring condensation, or damp-feeling
                rooms.
              </li>
              <li className="arrow-list">
                Check around windows for condensation buildup and staining.
              </li>
              <li className="arrow-list">
                Inspect basements and crawl spaces for dampness or standing
                water.
              </li>
              <li className="arrow-list">
                Keep HVAC filters changed and vents unobstructed for consistent
                airflow.
              </li>
            </ul>

            <p>
              If you suspect mold or persistent moisture, visit{" "}
              <a className="underline-link" href="/residential/mold">
                Mold Damage Services
              </a>{" "}
              for remediation guidance and what proper containment should
              include.
            </p>

            <h2>SEASONAL INSPECTIONS</h2>
            <h3>What to Check Each Season</h3>

            <p>
              This is where prevention gets unfairly effective. Seasonal
              inspections align with how damage actually happens in this region.
            </p>

            <h3>Winter Prep</h3>
            <ul>
              <li className="arrow-list">
                Confirm vulnerable pipes are protected in unheated areas.
              </li>
              <li className="arrow-list">
                Verify heating systems are operating safely and consistently.
              </li>
              <li className="arrow-list">
                Watch rooflines for ice dam formation and unusual melting
                patterns.
              </li>
            </ul>

            <h3>Spring Prep</h3>
            <ul>
              <li className="arrow-list">
                Clear gutters and confirm downspouts discharge away from the
                home.
              </li>
              <li className="arrow-list">
                Check sump pumps and ensure discharge lines aren’t blocked.
              </li>
              <li className="arrow-list">
                Look for foundation seepage and moisture patterns after snowmelt
                and rain.
              </li>
            </ul>

            <h3>Summer Prep</h3>
            <ul>
              <li className="arrow-list">
                Reduce fire risk by clearing debris near structures and checking
                vents.
              </li>
              <li className="arrow-list">
                Monitor for smoke infiltration and HVAC filter loading during
                wildfire season.
              </li>
              <li className="arrow-list">
                Watch electrical systems during heat waves (trips, smells,
                overheating).
              </li>
            </ul>

            <h3>Fall Prep</h3>
            <ul>
              <li className="arrow-list">
                Clean gutters again (yes, again—leaves are relentless).
              </li>
              <li className="arrow-list">
                Inspect roof and flashing after windstorms.
              </li>
              <li className="arrow-list">
                Prepare plumbing and exterior systems for early freeze events.
              </li>
            </ul>

            <div className="yellow-box">
              <h3>Pro Tip Without the Fluff</h3>
              <p>
                The “best time” to notice a problem is when it’s still boring.
                Boring problems are cheap problems. Exciting problems are
                expensive problems. Choose boring.
              </p>
            </div>

            <h2>WARNING SIGNS THAT MEAN “ACT NOW”</h2>
            <h3>Don’t Wait for Obvious Damage</h3>

            <p>
              A lot of people wait for a dramatic moment—water pouring, smoke
              billowing, ceiling collapsing—because it’s obvious. Unfortunately,
              obvious is late. Here are warning signs that should trigger action
              sooner.
            </p>

            <ul>
              <li className="arrow-list">
                New stains on ceilings or walls, even if they’re faint or “dry”
              </li>
              <li className="arrow-list">
                Bubbling paint, warped trim, or swelling around baseboards
              </li>
              <li className="arrow-list">
                Musty odor that returns after cleaning or ventilation
              </li>
              <li className="arrow-list">
                Sudden humidity changes, condensation on windows, or
                damp-feeling rooms
              </li>
              <li className="arrow-list">
                Electrical oddities: hot outlets, frequent breaker trips,
                burning smell
              </li>
              <li className="arrow-list">
                Persistent plumbing sounds: constant running water, dripping, or
                slow drains
              </li>
              <li className="arrow-list">
                Any active water intrusion, pooling, or wet materials that stay
                wet
              </li>
            </ul>

            <p>
              Not sure whether you’re in “monitor” territory or “emergency”
              territory? Go straight to{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/when-it-becomes-an-emergency"
              >
                When a Situation Becomes an Emergency
              </a>
              . It’s designed to help you make that call quickly and safely.
            </p>

            <div className="black-box">
              <h2>WANT A FAST NEXT STEP?</h2>
              <p>
                If you’ve found warning signs or you’re dealing with active
                damage, don’t wait for it to “declare itself.” Call{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  contact us online
                </a>
                . We’ll help you figure out what’s happening and what to do
                next.
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
