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
  "https://smcfireandwater.com/safety-and-prevention/water-damage-repair";

const title =
  "Water Damage Repair in Spokane, WA — What It Is and Why It Matters";

const description =
  "Water damage repair in Spokane goes beyond drying — it means replacing drywall, flooring, subfloor, insulation, and more. Learn the difference between mitigation and repair, and why one company handling both gets you home faster.";

export const metadata = {
  title,
  description,
  keywords: [
    "water damage repair Spokane",
    "water damage repair near me",
    "water damaged drywall repair Spokane",
    "flood repair Spokane",
    "water damage flooring repair Spokane",
    "water damage restoration vs repair Spokane",
    "subfloor water damage repair Spokane",
    "water damage repair company Spokane WA",
    "burst pipe repair Spokane",
    "basement flood repair Spokane",
    "water damage reconstruction Spokane",
    "ServiceMaster by Compass water damage repair",
    "water mitigation and repair Spokane",
  ],
  alternates: { canonical },
  openGraph: {
    title,
    description:
      "What does water damage repair actually include in Spokane? Drywall, flooring, subfloor, insulation — and why using one company for mitigation and repair gets you back home faster.",
    url: canonical,
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Water damage repair services in Spokane, WA — ServiceMaster by Compass",
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
      "Water damage repair in Spokane — what it includes, how it differs from restoration, and how ServiceMaster by Compass handles it all under one roof.",
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
      "https://smcfireandwater.com/safety-and-prevention/water-damage-repair#webpage",
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
        "https://smcfireandwater.com/safety-and-prevention/water-damage-repair#breadcrumb",
    },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: canonical,
        name: "Read water damage repair guide for Spokane homeowners",
      },
      {
        "@type": "CallAction",
        target: "tel:+15095355440",
        name: "Call for 24/7 water damage repair in Spokane",
      },
    ],
  },

  // Breadcrumbs
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id":
      "https://smcfireandwater.com/safety-and-prevention/water-damage-repair#breadcrumb",
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
        name: "Water Damage Repair in Spokane",
        item: canonical,
      },
    ],
  },

  // FAQ schema
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between water damage mitigation and water damage repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Water damage mitigation is the emergency phase — stopping the water, extracting it, and drying the structure. Water damage repair is what comes after: replacing the drywall, flooring, subfloor, insulation, cabinetry, and other materials that couldn't be saved. Mitigation stops the damage; repair restores your home.",
        },
      },
      {
        "@type": "Question",
        name: "What does water damage repair include in Spokane?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Water damage repair typically includes drywall replacement, flooring removal and reinstallation, subfloor repair or replacement, insulation replacement, painting, and cabinetry work. The exact scope depends on how long the water was present and how deeply it penetrated building materials.",
        },
      },
      {
        "@type": "Question",
        name: "Does insurance cover water damage repair in Spokane?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the underlying water damage event is covered — such as a burst pipe or appliance failure — most homeowners insurance policies will cover the cost of repairing or replacing damaged materials. Proper documentation from a certified restoration company is essential to a strong claim.",
        },
      },
      {
        "@type": "Question",
        name: "Why should I use the same company for mitigation and repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Using one company for both mitigation and repair eliminates the gap between phases, ensures accountability, and simplifies insurance documentation. There's no hand-off delay, no conflicting reports, and no finger-pointing if something is missed — the same team that dried your home is responsible for putting it back together.",
        },
      },
    ],
  },

  // Business / service info
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
      { "@type": "Place", name: "Coeur d'Alene, ID" },
      { "@type": "Place", name: "North Idaho" },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Water Damage Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Water Damage Restoration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Flood Repair Spokane" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Drywall Water Damage Repair",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Water Damage Flooring Repair",
        },
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

export default function WaterDamageRepairSpokane() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Water damage repair services in Spokane, WA — ServiceMaster by Compass"
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>
              Water Damage Repair in Spokane, WA — What It Is and Why It Matters
            </h1>
            <h2>
              WATER DAMAGE REPAIR VS. RESTORATION: WHAT SPOKANE HOMEOWNERS NEED
              TO KNOW
            </h2>
            <h3>
              From Emergency Drying to Full Reconstruction — One Company, Start
              to Finish
            </h3>

            <p>
              When water damages your home, most people think of the emergency
              response — the extraction, the fans, the drying equipment. But
              once the moisture is gone, the real question becomes: what happens
              to everything that got ruined? Drywall doesn&apos;t dry out and
              bounce back. Subfloor that absorbed standing water doesn&apos;t
              return to normal on its own. Insulation, flooring, cabinetry —
              these materials often need to be removed and replaced, not just
              dried.
            </p>

            <p>
              That&apos;s water damage repair. And in Spokane, where frozen
              pipes, spring snowmelt, and basement flooding are among the most
              common causes of home water damage, knowing the full scope of what
              repair involves — and who handles it — makes a significant
              difference in how fast you get your home back.
            </p>

            <div className="yellow-box">
              <h3>
                Dealing with water damage right now? Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                for 24/7 emergency response and water damage repair in Spokane
                and surrounding areas.
              </h3>
            </div>

            <h2>MITIGATION VS. REPAIR: WHAT&apos;S THE DIFFERENCE?</h2>
            <h3>Two Phases. One Complete Recovery.</h3>

            <p>
              Water damage recovery happens in two distinct phases, and
              confusing them is one of the most common reasons Spokane
              homeowners end up frustrated mid-process.
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Mitigation</strong> is the emergency phase. It starts
                the moment you call — water extraction, structural drying,
                dehumidification, and moisture monitoring. The goal is to stop
                the damage from spreading and get the structure dry as quickly
                as possible. Mitigation does not restore your home to its
                pre-loss condition. It stabilizes it.
              </li>
              <li className="arrow-list">
                <strong>Repair (reconstruction)</strong> is what comes after.
                Once the structure is dry and the adjuster has documented the
                scope, repair begins — replacing the drywall that was cut out,
                reinstalling flooring, rebuilding subfloor, replacing insulation
                in walls and crawl spaces, repainting, and restoring cabinetry
                or built-ins that sustained damage. This is what makes your home
                look and function the way it did before.
              </li>
            </ul>

            <p>
              Both phases are essential. Mitigation without repair leaves you
              living in a gutted house. Repair without proper mitigation risks
              trapping moisture inside walls and creating a mold problem months
              later.
            </p>

            <h2>WHAT DOES WATER DAMAGE REPAIR ACTUALLY INCLUDE?</h2>
            <h3>The Materials and Systems Most Commonly Affected</h3>

            <p>
              The scope of water damage repair depends on the source of the
              water, how long it was present, and how deeply it penetrated your
              home&apos;s materials. Here&apos;s what repair most commonly
              involves in Spokane homes.
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Drywall replacement:</strong> Drywall that has been wet
                long enough to swell, crumble, or develop microbial growth
                cannot be salvaged. Affected sections are cut out during
                mitigation and must be replaced, taped, mudded, and painted to
                match. Water-damaged drywall repair is one of the most common
                repair line items after any residential water event.
              </li>
              <li className="arrow-list">
                <strong>Flooring removal and reinstallation:</strong> Hardwood,
                laminate, and engineered flooring that has buckled, warped, or
                delaminated needs to be removed entirely. Tile and vinyl may
                survive depending on the subfloor condition underneath. Carpet
                and pad are almost always removed and replaced after significant
                water exposure.
              </li>
              <li className="arrow-list">
                <strong>Subfloor repair or replacement:</strong> The subfloor is
                often the most overlooked — and most critical — part of water
                damage repair. Plywood and OSB subfloor that absorbed standing
                water can swell, delaminate, and lose structural integrity. If
                it isn&apos;t properly dried or replaced, you&apos;ll have soft
                spots, squeaks, and potential mold issues regardless of what
                flooring goes on top.
              </li>
              <li className="arrow-list">
                <strong>Insulation replacement:</strong> Batt insulation in
                walls, floors, and crawl spaces absorbs water readily and holds
                it — often long after the surrounding structure appears dry. Wet
                insulation must be removed and replaced; attempting to dry it in
                place is one of the most reliable ways to end up with a mold
                problem.
              </li>
              <li className="arrow-list">
                <strong>Painting and finishing:</strong> Once structural repairs
                are complete, the affected areas need to be primed, painted, and
                finished to match the surrounding space. Water stains on
                ceilings and walls require stain-blocking primer before paint to
                prevent bleed-through.
              </li>
              <li className="arrow-list">
                <strong>Cabinetry and millwork:</strong> Kitchen and bathroom
                cabinets that sat in standing water — or were directly sprayed
                from a burst pipe — often sustain damage to their frames,
                shelving, and finish. Depending on the extent, repair or
                replacement may be warranted.
              </li>
            </ul>

            <div className="black-box">
              <p>
                Not sure what your home needs after water damage? Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                — we&apos;ll assess the full scope and walk you through every
                step.
              </p>
            </div>

            <h2>
              WHY USING THE SAME COMPANY FOR MITIGATION AND REPAIR MATTERS
            </h2>
            <h3>No Hand-Off. No Gap. No Surprises.</h3>

            <p>
              One of the most common frustrations Spokane homeowners experience
              after water damage is the gap between companies. A mitigation crew
              dries the home, hands off a report, and leaves — then the
              homeowner has to find a separate contractor to do the actual
              repairs. That gap creates real problems.
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Accountability gaps:</strong> If a repair contractor
                discovers additional damage that the mitigation crew didn&apos;t
                document, there&apos;s no clear owner. Disputes about scope,
                moisture readings, and what was or wasn&apos;t dried become
                common — and they slow everything down.
              </li>
              <li className="arrow-list">
                <strong>Documentation inconsistencies:</strong> Insurance claims
                require a continuous, consistent record from event to
                completion. When two companies are involved, their reports may
                conflict — which gives adjusters grounds to question scope and
                reduce payouts.
              </li>
              <li className="arrow-list">
                <strong>Scheduling delays:</strong> Coordinating between a
                mitigation company and a separate repair contractor adds weeks
                to your timeline. When one company handles both phases, the
                transition is seamless — repair begins as soon as drying
                standards are met.
              </li>
              <li className="arrow-list">
                <strong>Single point of contact:</strong> One company, one
                project manager, one phone number. You know exactly who to call
                and who is responsible for the full outcome.
              </li>
            </ul>

            <p>
              At ServiceMaster by Compass, we handle both mitigation and repair
              — which means the team that dried your home is the same team that
              puts it back together.
            </p>

            <h2>COMMON CAUSES OF WATER DAMAGE REPAIR IN SPOKANE</h2>
            <h3>Why Spokane Homes Are Particularly Vulnerable</h3>

            <p>
              Spokane&apos;s climate creates a predictable cycle of water damage
              risks throughout the year. Understanding them helps homeowners act
              faster — and faster action almost always means less repair.
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Frozen and burst pipes:</strong> Spokane winters
                regularly push temperatures well below freezing. Pipes in
                exterior walls, unheated crawl spaces, and garages are
                particularly vulnerable. When a pipe bursts, water can flow for
                hours before it&apos;s discovered — saturating walls, subfloor,
                and ceilings across multiple rooms. Burst pipe repair is one of
                our most common winter calls.
              </li>
              <li className="arrow-list">
                <strong>Spring snowmelt and basement flooding:</strong>{" "}
                Spokane&apos;s significant snowpack doesn&apos;t disappear
                overnight. As temperatures rise in March and April, saturated
                soil pushes water against foundations and through basement
                walls. Basement flood repair — including subfloor, insulation,
                and drywall in finished lower levels — is a consistent spring
                service call across the Spokane area.
              </li>
              <li className="arrow-list">
                <strong>Ice dams and roof leaks:</strong> Ice dams form when
                heat escapes through the roof and melts snow that then refreezes
                at the eaves. The resulting ice backup forces water under
                shingles and into attic spaces, where it saturates insulation
                and drips through to ceilings and walls below. Interior repair
                after ice dam damage typically involves ceiling drywall, attic
                insulation, and painting.
              </li>
              <li className="arrow-list">
                <strong>Appliance and plumbing failures:</strong> Water heater
                failures, washing machine hose blowouts, and dishwasher leaks
                are year-round events. In finished basements and multi-story
                homes, the damage often travels — a second-floor washing machine
                leak can saturate the subfloor and appear in the ceiling of the
                room below before it&apos;s detected.
              </li>
              <li className="arrow-list">
                <strong>Sewer backup:</strong> Aging sewer infrastructure in
                some Spokane neighborhoods makes sewer backup a real risk —
                especially after heavy rain or snowmelt events that overwhelm
                municipal systems. Sewer backup repair involves not just the
                structural materials but proper sanitization and odor treatment.
              </li>
            </ul>

            <h2>WATER DAMAGE REPAIR AND YOUR INSURANCE CLAIM</h2>
            <h3>Documentation That Supports Full Recovery</h3>

            <p>
              If your water damage event is covered by homeowners insurance —
              burst pipe, appliance failure, storm roof damage — the cost of
              repair is typically included in your claim alongside mitigation
              costs. But the strength of that claim depends heavily on
              documentation.
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Scope of loss reports:</strong> A certified restoration
                company provides written documentation of every affected area,
                every material removed, and every system that requires repair.
                This becomes the foundation of your claim and the benchmark
                against which repair costs are measured.
              </li>
              <li className="arrow-list">
                <strong>Moisture logs and drying records:</strong> Drying
                documentation — daily moisture readings across all affected
                areas — establishes that mitigation was thorough and that repair
                is appropriate rather than premature. Adjusters rely on this
                data to approve reconstruction scope.
              </li>
              <li className="arrow-list">
                <strong>
                  Repair estimates aligned with insurance standards:
                </strong>{" "}
                We prepare repair estimates using industry-standard pricing
                tools that insurers recognize, which reduces friction and
                back-and-forth during the claims process.
              </li>
              <li className="arrow-list">
                <strong>Working directly with your adjuster:</strong> We
                communicate with your insurance adjuster throughout the process
                — answering questions, providing supplemental documentation, and
                ensuring the approved scope reflects the actual damage.
              </li>
            </ul>

            <div className="yellow-box">
              <h3>
                We work with all major insurance carriers serving Spokane. Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                and we&apos;ll help you navigate the claims process from first
                call to final walkthrough.
              </h3>
            </div>

            <h2>WATER DAMAGE REPAIR SCOPE: QUICK REFERENCE</h2>
            <h3>What Gets Repaired After Common Spokane Water Events</h3>

            <table className="table">
              <thead>
                <tr>
                  <th>Water Event</th>
                  <th>Typical Repair Scope</th>
                  <th>Key Considerations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Burst pipe</td>
                  <td>Drywall, insulation, flooring, painting</td>
                  <td>Scope depends on how long water ran before detection</td>
                </tr>
                <tr>
                  <td>Basement flooding / snowmelt</td>
                  <td>Subfloor, drywall, insulation, flooring, cabinetry</td>
                  <td>Finished basements require full reconstruction</td>
                </tr>
                <tr>
                  <td>Ice dam</td>
                  <td>Ceiling drywall, attic insulation, painting</td>
                  <td>Attic moisture must be fully remediated before repair</td>
                </tr>
                <tr>
                  <td>Appliance failure</td>
                  <td>Subfloor, flooring, ceiling below (if multi-story)</td>
                  <td>Check for water migration to adjacent rooms</td>
                </tr>
                <tr>
                  <td>Roof leak / storm damage</td>
                  <td>Ceiling drywall, insulation, painting</td>
                  <td>Roof must be addressed before interior repair begins</td>
                </tr>
                <tr>
                  <td>Sewer backup</td>
                  <td>Flooring, drywall, subfloor, full sanitization</td>
                  <td>
                    Category 3 water — requires certified biohazard handling
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>WATER DAMAGE REPAIR IN SPOKANE — SERVICEMASTER BY COMPASS</h2>
            <h3>Certified. Local. Start to Finish.</h3>

            <p>
              At{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>
              , we handle the full recovery — from 24/7 emergency response and
              water extraction through complete reconstruction and final
              walkthrough. Our team is IICRC-certified, locally based in
              Spokane, and experienced with the specific water damage patterns
              that affect homes in this region.
            </p>

            <p>
              We serve Spokane, Spokane Valley, Liberty Lake, Cheney, and
              surrounding communities. Whether you&apos;re dealing with the
              aftermath of a burst pipe, a flooded basement, or storm damage,
              we&apos;ll assess the full scope, document everything your insurer
              needs, and restore your home to its pre-loss condition — with one
              team, one point of contact, and no gap between mitigation and
              repair.
            </p>

            <div className="black-box">
              <p>
                For 24/7 water damage repair in Spokane, call{" "}
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
