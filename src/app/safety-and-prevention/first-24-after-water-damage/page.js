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
];

// --- SEO + JSON-LD ---
const canonical =
  "https://smcfireandwater.com/safety-and-prevention/first-24-after-water-damage";

const title =
  "First 24 Hours After Water Damage | Steps for Spokane & North Idaho Homes";

const description =
  "What to do in the first 24 hours after water damage: safety steps, shutoffs, documentation for insurance, drying basics, and when to call restoration pros in Spokane & North Idaho.";

export const metadata = {
  title,
  description,
  keywords: [
    "first 24 hours after water damage",
    "what to do after water damage",
    "water damage steps",
    "water mitigation Spokane",
    "emergency water damage Spokane",
    "water damage North Idaho",
    "how to shut off main water valve",
    "drying after water leak",
    "prevent mold after water damage",
    "water damage insurance documentation",
    "water damage restoration Spokane",
    "ServiceMaster by Compass water damage",
  ],
  alternates: { canonical },
  openGraph: {
    title,
    description:
      "Immediate steps after water damage: safety, shutoffs, documentation, drying, and when to call pros (Spokane & North Idaho).",
    url: canonical,
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Water damage safety steps for Spokane and North Idaho homeowners",
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
      "First 24 hours after water damage: safety, shutoffs, documentation, drying, and when to call restoration pros.",
    images: ["https://smcfireandwater.com/sub-banner.jpg"],
  },
};

// JSON-LD
const jsonLd = [
  // Page entity
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id":
      "https://smcfireandwater.com/safety-and-prevention/first-24-after-water-damage#webpage",
    url: canonical,
    name: title,
    description: description,
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    about: { "@id": "https://smcfireandwater.com/#organization" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/sub-banner.jpg",
      width: 1200,
      height: 630,
    },
    breadcrumb: {
      "@id":
        "https://smcfireandwater.com/safety-and-prevention/first-24-after-water-damage#breadcrumb",
    },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: canonical,
        name: "Read first 24 hour steps",
      },
      {
        "@type": "CallAction",
        target: "tel:+15095355440",
        name: "Call for 24/7 water damage help",
      },
    ],
  },

  // Breadcrumbs
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id":
      "https://smcfireandwater.com/safety-and-prevention/first-24-after-water-damage#breadcrumb",
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
        name: "First 24 Hours After Water Damage",
        item: canonical,
      },
    ],
  },

  // Business / service info for rich results
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
        itemOffered: { "@type": "Service", name: "Water Damage Mitigation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Water Damage Clean Up" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Structural Drying" },
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

export default function First24HoursAfterWaterDamage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Water damage safety steps for Spokane and North Idaho homeowners"
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>
              What to Do in the First 24 Hours After Water Damage in Your Home
            </h1>
            <h2>IMMEDIATE WATER DAMAGE STEPS FOR SPOKANE &amp; NORTH IDAHO</h2>
            <h3>Safety, Damage Control, and What to Do Next</h3>

            <p>
              Water damage is one of those “how is this real life right now?”
              moments. It’s overwhelming, it spreads fast, and the clock starts
              ticking immediately. The first 24 hours are critical for reducing
              damage, protecting your health, and preventing issues like mold
              growth and structural deterioration.
            </p>

            <p>
              This guide covers what to do right away—how to prioritize safety,
              stop the water source, document damage for insurance, begin safe
              drying, and recognize when it’s time to call professionals.
            </p>

            <div className="yellow-box">
              <h3>
                Need help fast? Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                for 24/7 water damage mitigation in Spokane and North Idaho.
              </h3>
            </div>

            <h2>WHY IMMEDIATE ACTIONS ARE CRITICAL AFTER WATER DAMAGE</h2>
            <h3>Prevent Mold, Reduce Repairs, and Protect Your Home</h3>

            <p>
              Water doesn’t politely stay in one place. It seeps into drywall,
              flooring, insulation, baseboards, cabinets, and structural
              materials. If it isn’t removed quickly, the damage expands—and so
              does the cost to fix it.
            </p>

            <h3>How water damage leads to mold growth and health risks</h3>
            <p>
              Moisture creates ideal conditions for mold, which can begin
              developing within 24 to 48 hours. Mold spores thrive in damp
              environments and may trigger respiratory irritation, allergic
              reactions, and other health concerns—especially for kids, older
              adults, and anyone with asthma or sensitivities. Drying affected
              areas quickly is one of the best ways to reduce risk.
            </p>

            <h3>The structural and property impacts of delayed response</h3>
            <p>
              Waiting too long can lead to sagging ceilings, warped flooring,
              rotting wood, and weakened walls. In severe cases, water can
              compromise foundational elements and create hidden damage behind
              surfaces. Fast action protects the integrity of your home and can
              keep a manageable situation from turning into a full rebuild.
            </p>

            <h2>HOW TO PRIORITIZE SAFETY IN THE FIRST 24 HOURS</h2>
            <h3>Utilities, Structural Checks, and Personal Protection</h3>

            <p>
              Before you start cleanup, make sure the space is safe to enter.
              Water damage can introduce electrical hazards, contaminated water,
              and unstable building materials.
            </p>

            <h3>Which utilities should be turned off to prevent hazards?</h3>
            <p>
              If you can do so safely, shut off these utilities to reduce risk:
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Electricity:</strong> Turn off power at the main breaker
                to prevent shocks or electrical fire risk.
              </li>
              <li className="arrow-list">
                <strong>Gas:</strong> Shut off the gas supply if water has
                reached appliances or you suspect a leak.
              </li>
              <li className="arrow-list">
                <strong>Water supply:</strong> Stop the main water line to
                prevent continued flooding.
              </li>
            </ul>

            <h3>
              How to assess structural integrity and avoid electrical dangers
            </h3>
            <ul>
              <li className="arrow-list">
                Look for sagging ceilings, bulging drywall, or warped walls and
                floors.
              </li>
              <li className="arrow-list">
                Identify pooled water areas—heavy saturation can weaken
                materials.
              </li>
              <li className="arrow-list">
                Wear protective gear: gloves, boots, and a mask if contamination
                or debris is present.
              </li>
              <li className="arrow-list">
                Avoid stepping into water if outlets, cords, or electrical
                panels may be affected.
              </li>
            </ul>

            <div className="black-box">
              <p>
                If you are unsure whether the area is electrically safe, do not
                enter. Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                and we can help you assess next steps.
              </p>
            </div>

            <h2>STOP AND CONTROL THE WATER SOURCE IMMEDIATELY</h2>
            <h3>Prevent More Damage Before Cleanup Starts</h3>

            <p>
              The fastest way to reduce loss is to stop the water source.
              Sometimes it’s obvious. Sometimes it’s a sneaky little drip that
              turned into a big problem behind a wall.
            </p>

            <h3>How to identify common water damage sources</h3>
            <ul>
              <li className="arrow-list">
                <strong>Burst pipes:</strong> Sudden water flow, new pooling,
                wet drywall, or water sounds inside walls.
              </li>
              <li className="arrow-list">
                <strong>Leaking appliances:</strong> Check around washing
                machines, refrigerators, dishwashers, and water heaters.
              </li>
              <li className="arrow-list">
                <strong>Roof leaks:</strong> Look for ceiling stains, attic
                dampness, or dripping after storms or snowmelt.
              </li>
            </ul>

            <h3>Temporary measures to halt water flow safely</h3>
            <ul>
              <li className="arrow-list">
                Use towels and buckets to catch drips and reduce spread.
              </li>
              <li className="arrow-list">
                Apply waterproof tape to small leaks as a very short-term patch.
              </li>
              <li className="arrow-list">
                If flooding is active or the source is unclear, contact a water
                damage restoration company immediately.
              </li>
            </ul>

            <h2>DOCUMENT WATER DAMAGE FOR INSURANCE CLAIMS</h2>
            <h3>Photos, Video, and Inventory That Actually Help</h3>

            <p>
              Documentation is one of the most important steps you can take
              early. It supports your claim, reduces confusion, and helps prove
              the scope of damage.
            </p>

            <h3>
              What types of photos and videos best capture damage evidence?
            </h3>
            <ul>
              <li className="arrow-list">
                Take wide shots of each room to show the overall impact.
              </li>
              <li className="arrow-list">
                Take close-ups of damaged materials, stains, swelling, and wet
                contents.
              </li>
              <li className="arrow-list">
                Record a walkthrough video from the entry point through every
                affected area.
              </li>
            </ul>

            <h3>Create a detailed inventory and keep records</h3>
            <ul>
              <li className="arrow-list">
                List damaged items: furniture, rugs, electronics, clothing,
                children’s items, and stored goods.
              </li>
              <li className="arrow-list">
                Keep receipts for emergency supplies and temporary fixes.
              </li>
              <li className="arrow-list">
                Save all emails, claim numbers, estimates, and restoration
                documentation in one place.
              </li>
            </ul>

            <h2>WHEN TO CONTACT PROFESSIONALS AND YOUR INSURANCE COMPANY</h2>
            <h3>Know When DIY Stops Being Smart</h3>

            <p>
              Some water damage is manageable. Some water damage is “this needs
              equipment and a plan.” The trick is knowing which one you’re in
              before mold and structural issues have time to show up.
            </p>

            <h3>When you need a certified water damage restoration company</h3>
            <ul>
              <li className="arrow-list">
                The affected area is large or water has entered walls, floors,
                insulation, or ceilings.
              </li>
              <li className="arrow-list">
                The water may be contaminated (gray water or sewage).
              </li>
              <li className="arrow-list">
                You suspect mold growth or cannot dry the area quickly.
              </li>
              <li className="arrow-list">
                There is any electrical risk or structural instability.
              </li>
            </ul>

            <h3>How to notify your insurance provider promptly</h3>
            <ul>
              <li className="arrow-list">
                Share what happened and when it started (as best as you know).
              </li>
              <li className="arrow-list">
                Provide photos, videos, and your inventory list.
              </li>
              <li className="arrow-list">
                Give contact details and keep notes on who you spoke with.
              </li>
            </ul>

            <div className="yellow-box">
              <h3>
                If you&apos;re filing a claim and need clear documentation, call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                — we can help you stabilize the situation and document the
                damage properly.
              </h3>
            </div>

            <h2>INITIAL WATER REMOVAL AND DRYING YOU CAN SAFELY PERFORM</h2>
            <h3>Remove Standing Water and Start Drying Fast</h3>

            <p>
              Once the source is controlled and the area is safe, water removal
              and drying should begin immediately. Your goal is to reduce
              moisture fast, increase airflow, and keep humidity low.
            </p>

            <h3>How to remove standing water and increase airflow</h3>
            <ul>
              <li className="arrow-list">
                Use a wet/dry vacuum to remove standing water (only if the water
                is not contaminated and power is safe).
              </li>
              <li className="arrow-list">
                Set up fans to move air across wet surfaces and toward exits.
              </li>
              <li className="arrow-list">
                Use dehumidifiers to reduce indoor humidity and speed drying.
              </li>
              <li className="arrow-list">
                Open windows when weather allows, but avoid bringing in damp
                outside air.
              </li>
            </ul>

            <h3>Precautions to prevent mold during drying and disinfection</h3>
            <ul>
              <li className="arrow-list">
                Keep indoor humidity below 50% when possible.
              </li>
              <li className="arrow-list">
                Clean hard surfaces with water and detergent.
              </li>
              <li className="arrow-list">
                Check daily for musty smells, spotting, or new discoloration.
              </li>
              <li className="arrow-list">
                Remove and discard porous items that cannot be dried quickly.
              </li>
            </ul>

            <h2>COMMON WATER DAMAGE SOURCES &amp; CONTROL MEASURES</h2>
            <h3>Quick Reference Table</h3>

            <table className="table">
              <thead>
                <tr>
                  <th>Water Damage Source</th>
                  <th>Control Measure</th>
                  <th>Effectiveness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Burst Pipes</td>
                  <td>Shut off main water supply</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Leaking Appliances</td>
                  <td>Seal leaks temporarily</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>Roof Leaks</td>
                  <td>Use buckets to catch water</td>
                  <td>Low</td>
                </tr>
              </tbody>
            </table>

            <h2>HELP AFTER WATER DAMAGE IN SPOKANE &amp; NORTH IDAHO</h2>
            <h3>Fast Mitigation Helps Prevent Bigger Problems</h3>

            <p>
              The first 24 hours matter. If you’re dealing with active water,
              soaked materials, or damage you can’t fully see yet, it’s smart to
              bring in trained restoration professionals with proper drying and
              moisture monitoring equipment.
            </p>

            <p>
              At{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>
              , our team helps homeowners stabilize water loss quickly, dry and
              dehumidify the structure, and prevent avoidable secondary damage.
            </p>

            <div className="black-box">
              <p>
                For 24/7 help, call{" "}
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
