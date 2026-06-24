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
  "https://smcfireandwater.com/safety-and-prevention/basement-water-damage-spokane";

const title = "Basement Water Damage in Spokane | What to Do First";

const description =
  "Dealing with basement water damage in Spokane? Learn what to do first, when to call for water removal, and how professional drying helps protect your home.";

export const metadata = {
  title,
  description,
  keywords: [
    "basement water damage Spokane",
    "basement flooding Spokane",
    "flooded basement cleanup Spokane",
    "water in basement Spokane",
    "basement water removal Spokane",
    "basement flood cleanup Spokane",
    "water damage restoration Spokane",
    "water extraction Spokane",
    "emergency water damage Spokane",
    "foundation seepage Spokane",
    "sump pump failure Spokane",
    "basement water damage Coeur d’Alene",
    "ServiceMaster by Compass basement water damage",
  ],
  alternates: { canonical },
  openGraph: {
    title,
    description:
      "Basement water damage can spread quickly through flooring, walls, insulation, and stored belongings. Learn what to do first and when to call for professional water removal in Spokane.",
    url: canonical,
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Basement water damage cleanup in Spokane",
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
      "Learn what to do after basement water damage in Spokane, including safety steps, water removal, drying, and when to call restoration professionals.",
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
    headline: "Basement Water Damage in Spokane",
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
        name: "Basement Water Damage in Spokane",
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
          name: "Basement Water Damage Cleanup",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Water Damage Restoration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Water Extraction",
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

export default function BasementWaterDamageSpokane() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Basement water damage cleanup in Spokane"
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Basement Water Damage in Spokane</h1>
            <h2>
              WHAT TO DO WHEN YOUR BASEMENT FLOODS, LEAKS, OR STARTS TAKING ON
              WATER
            </h2>

            <p>
              Basement water damage has a special talent for showing up at the
              worst possible time. After heavy rain, rapid snowmelt, a sump pump
              failure, a plumbing leak, or water seeping through a foundation,
              your basement can go from “probably fine” to “why is the floor
              making ocean noises?” very quickly.
            </p>

            <p>
              If you find water in your basement, the first steps matter. The
              faster you stop the source, protect yourself, remove standing
              water, and start professional drying, the better your chances are
              of preventing damage to flooring, drywall, insulation, framing,
              belongings, and indoor air quality.
            </p>

            <div className="yellow-box">
              <h3>Quick Answer</h3>
              <p>
                If your basement has standing water, active seepage, wet
                drywall, soaked carpet, or water near electrical systems, treat
                it as an urgent water damage situation. Stop the source if you
                can do so safely, avoid contaminated water, move valuables only
                if safe, and call a professional water damage restoration team
                for extraction, drying, and moisture inspection.
              </p>
            </div>

            <div className="black-box">
              <h2>NEED BASEMENT WATER REMOVAL NOW?</h2>
              <p>
                If water is actively entering your basement or you already have
                standing water, call{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  contact ServiceMaster by Compass
                </a>
                . Basement water damage can spread behind walls, under flooring,
                and into hidden materials faster than it looks.
              </p>
            </div>

            <h2>COMMON CAUSES OF BASEMENT WATER DAMAGE IN SPOKANE</h2>

            <p>
              Basements in Spokane, Spokane Valley, and the surrounding Inland
              Northwest can take on water for several reasons. Sometimes it is a
              sudden plumbing failure. Other times, it is a slow drainage or
              foundation issue that finally becomes obvious during rain,
              thawing, or a storm.
            </p>

            <h3>Heavy Rain and Poor Drainage</h3>
            <p>
              When gutters are clogged, downspouts discharge too close to the
              foundation, or the yard slopes toward the home, water can collect
              around the basement walls. Once the soil becomes saturated, that
              pressure can push moisture through cracks, joints, window wells,
              or weak points in the foundation.
            </p>

            <h3>Snowmelt and Freeze-Thaw Cycles</h3>
            <p>
              Snowmelt can be sneaky. A slow thaw may not seem dramatic, but it
              can keep the ground wet for long periods. If drainage is poor or
              the foundation already has vulnerable areas, water can begin
              seeping into the basement before homeowners realize there is a
              problem.
            </p>

            <h3>Sump Pump Failure</h3>
            <p>
              A sump pump is supposed to move water away before it becomes a
              basement flood. If the pump fails, loses power, becomes clogged,
              or cannot keep up with incoming water, the basement can take on
              water quickly.
            </p>

            <h3>Burst Pipes and Plumbing Leaks</h3>
            <p>
              Not all basement water damage comes from outside. Broken pipes,
              leaking supply lines, failed water heaters, appliance leaks, and
              drain backups can all release water into a basement. If the water
              source is plumbing-related, shut off the water supply if you can
              do so safely.
            </p>

            <p>
              For pipe-specific cleanup guidance, see{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/burst-pipe-water-damage-spokane"
              >
                Burst Pipe Water Damage in Spokane
              </a>
              .
            </p>

            <h2>WHAT TO DO FIRST WHEN YOUR BASEMENT HAS WATER DAMAGE</h2>

            <p>
              When you discover water in the basement, do not start by grabbing
              towels and charging in like a heroic mop wizard. Start with
              safety. Basement water can involve electricity, structural
              materials, contaminated water, and hidden damage.
            </p>

            <h3>1. Stay Out if Water Is Near Electricity</h3>
            <p>
              If standing water is near outlets, cords, appliances, the
              electrical panel, or anything plugged in, do not enter the water.
              Leave the area and call for professional help. Water and
              electricity are not a “let’s see what happens” situation.
            </p>

            <h3>2. Stop the Water Source if You Can</h3>
            <p>
              If the water is coming from a plumbing line, appliance, toilet,
              water heater, or pipe, shut off the water at the source or at the
              main shutoff. If you are not sure where the main water shutoff is,
              review{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/how-to-turn-off-water"
              >
                How to Turn Off Your Main Water
              </a>
              .
            </p>

            <h3>3. Avoid Contact With Contaminated Water</h3>
            <p>
              If water may involve sewage, drain backup, floodwater, or water
              that has passed through unknown materials, avoid contact. Do not
              let children or pets enter the area. Basement water is not always
              clean, even if it looks clear.
            </p>

            <p>
              If you are dealing with sewage or drain backup, read{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/safe-sewer-backup-protocols"
              >
                Safe Sewer Backup Protocols
              </a>
              .
            </p>

            <h3>4. Move Valuables Only if It Is Safe</h3>
            <p>
              If the area is safe to enter, move dry or lightly affected
              belongings out of the basement. Focus on documents, electronics,
              sentimental items, and anything sitting directly on the floor. Do
              not lift heavy soaked materials or walk through water if you are
              unsure about contamination or electrical risk.
            </p>

            <h3>5. Call for Water Extraction and Drying</h3>
            <p>
              Basement water damage often needs more than surface cleanup.
              Carpet padding, drywall, trim, insulation, subflooring, and
              framing can hold moisture even after the visible water is gone.
              Professional water extraction and drying equipment help remove
              water from affected materials and reduce the risk of lingering
              damage.
            </p>

            <h2>WHY BASEMENT WATER DAMAGE NEEDS PROFESSIONAL DRYING</h2>

            <p>
              The biggest mistake with basement water damage is assuming that
              “dry to the touch” means dry. It does not. Basement materials can
              trap moisture behind finished walls, under flooring, inside
              insulation, and along baseboards.
            </p>

            <p>
              Professional restoration teams use moisture meters, extraction
              equipment, air movers, and dehumidifiers to identify and dry
              affected materials. That matters because hidden moisture can
              create ongoing odor, staining, swelling, material breakdown, and
              secondary damage.
            </p>

            <h3>Materials That Can Hold Hidden Moisture</h3>
            <ul>
              <li className="arrow-list">Carpet and carpet padding</li>
              <li className="arrow-list">Drywall and baseboards</li>
              <li className="arrow-list">Insulation behind finished walls</li>
              <li className="arrow-list">Laminate and engineered flooring</li>
              <li className="arrow-list">Wood framing and sill plates</li>
              <li className="arrow-list">
                Stored boxes, furniture, and fabrics
              </li>
              <li className="arrow-list">
                Crawl space or utility room materials
              </li>
            </ul>

            <div className="yellow-box">
              <h3>Don’t Trust the Surface</h3>
              <p>
                If water reached walls, flooring, or stored materials, the
                surface may look better before the structure is actually dry.
                Moisture readings help confirm what is happening underneath and
                behind what you can see.
              </p>
            </div>

            <h2>WHEN BASEMENT WATER DAMAGE BECOMES AN EMERGENCY</h2>

            <p>
              Some basement water problems can be monitored briefly. Others need
              immediate action. If water is active, spreading, contaminated, or
              close to electrical systems, do not wait.
            </p>

            <h3>Call for Emergency Help If You Notice:</h3>
            <ul>
              <li className="arrow-list">Standing water in the basement</li>
              <li className="arrow-list">
                Water near electrical outlets or panels
              </li>
              <li className="arrow-list">
                Wet carpet, padding, drywall, or insulation
              </li>
              <li className="arrow-list">
                Sewage, drain backup, or contaminated water
              </li>
              <li className="arrow-list">
                Water entering through walls or window wells
              </li>
              <li className="arrow-list">
                A failed sump pump during rain or snowmelt
              </li>
              <li className="arrow-list">
                A burst pipe, water heater leak, or appliance leak
              </li>
              <li className="arrow-list">
                Musty odor after water has been present
              </li>
            </ul>

            <p>
              If you are unsure whether the situation is urgent, visit{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/when-it-becomes-an-emergency"
              >
                When a Situation Becomes an Emergency
              </a>
              . When in doubt, it is safer to ask early than to discover hidden
              water damage later.
            </p>

            <h2>HOW BASEMENT WATER DAMAGE CLEANUP WORKS</h2>

            <p>
              Every basement water damage job is different, but the cleanup
              process usually follows the same general path: safety, inspection,
              extraction, drying, monitoring, and restoration planning.
            </p>

            <h3>Inspection and Moisture Mapping</h3>
            <p>
              A restoration team checks where the water came from, how far it
              spread, what materials were affected, and whether moisture has
              moved behind finished surfaces. This helps determine what needs to
              be dried, removed, cleaned, or monitored.
            </p>

            <h3>Water Extraction</h3>
            <p>
              Standing water and excess moisture are removed using extraction
              equipment. Removing water quickly helps reduce how deeply moisture
              moves into flooring, drywall, and structural materials.
            </p>

            <h3>Drying and Dehumidification</h3>
            <p>
              Air movers and dehumidifiers are used to dry affected areas.
              Because basements naturally tend to hold more moisture than upper
              levels, controlled drying is especially important.
            </p>

            <h3>Monitoring</h3>
            <p>
              Drying should be monitored with moisture readings. This helps
              confirm whether materials are actually drying instead of just
              looking better on the surface.
            </p>

            <h3>Cleaning and Restoration Planning</h3>
            <p>
              Once the area is dry, damaged materials can be addressed.
              Depending on the situation, this may involve cleaning,
              deodorizing, removing unsalvageable materials, or planning
              repairs.
            </p>

            <p>
              For a broader look at professional cleanup, visit{" "}
              <a className="underline-link" href="/residential/water-damage">
                Water Damage Restoration
              </a>
              .
            </p>

            <h2>HOW TO HELP PREVENT BASEMENT WATER DAMAGE</h2>

            <p>
              You cannot prevent every basement leak or flood, but you can
              reduce risk. Basement water prevention is mostly about drainage,
              maintenance, plumbing awareness, and catching small warning signs
              before they become expensive little gremlins.
            </p>

            <h3>Basement Water Prevention Checklist</h3>
            <ul>
              <li className="arrow-list">
                Clean gutters and confirm downspouts move water away from the
                foundation.
              </li>
              <li className="arrow-list">
                Check the grading around your home so water does not flow toward
                basement walls.
              </li>
              <li className="arrow-list">
                Test your sump pump before heavy rain or spring thaw.
              </li>
              <li className="arrow-list">
                Keep window wells clear and make sure they drain properly.
              </li>
              <li className="arrow-list">
                Inspect basement walls and floors for cracks, staining, or
                recurring dampness.
              </li>
              <li className="arrow-list">
                Store belongings in plastic bins instead of cardboard boxes on
                the floor.
              </li>
              <li className="arrow-list">
                Watch for musty smells, damp air, or water stains after storms.
              </li>
              <li className="arrow-list">
                Know where your main water shutoff is before a pipe leak
                happens.
              </li>
            </ul>

            <p>
              For more regional prevention tips, see{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/seasonal-risks-spokane-coeur-dalene"
              >
                Seasonal Risks in Spokane & Coeur d’Alene
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

            <h2>DOES INSURANCE COVER BASEMENT WATER DAMAGE?</h2>

            <p>
              Insurance coverage depends on the cause of the basement water
              damage and the details of your policy. Sudden plumbing failures
              may be handled differently than groundwater seepage, drain backup,
              or flooding from outside the home.
            </p>

            <p>
              If you are dealing with basement water damage, document the
              situation with photos, keep records of what happened, and contact
              your insurance provider with questions about coverage. A
              restoration company can help document affected materials and the
              drying process.
            </p>

            <p>
              For more on coverage questions, read{" "}
              <a
                className="underline-link"
                href="/safety-and-prevention/does-homeowners-insurance-cover-water-damage-spokane"
              >
                Does Homeowners Insurance Cover Water Damage in Spokane?
              </a>
            </p>

            <h2>BASEMENT WATER DAMAGE CLEANUP IN SPOKANE</h2>

            <p>
              Basement water damage is stressful, but fast action makes a real
              difference. The sooner water is removed and affected materials are
              properly dried, the better your chances of limiting damage and
              protecting your home.
            </p>

            <p>
              ServiceMaster by Compass helps homeowners and property owners in
              Spokane, Spokane Valley, Coeur d’Alene, and nearby areas respond
              to water damage with inspection, extraction, drying, and
              restoration support.
            </p>

            <div className="black-box">
              <h2>GET HELP WITH BASEMENT WATER DAMAGE</h2>
              <p>
                If your basement is wet, flooded, or showing signs of hidden
                moisture, call{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                or{" "}
                <a className="underline-link" href="/contact">
                  contact us online
                </a>
                . We’ll help you figure out what happened, what needs to be
                dried, and what to do next.
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
