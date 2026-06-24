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
  "https://smcfireandwater.com/safety-and-prevention/does-homeowners-insurance-cover-water-damage-spokane";

const title =
  "Does Homeowners Insurance Cover Water Damage in Spokane? What You Need to Know";

const description =
  "Learn what homeowners insurance covers for water damage in Spokane and North Idaho — burst pipes, flooding, sewer backup, and what's typically excluded. Know your policy before disaster strikes.";

export const metadata = {
  title,
  description,
  keywords: [
    "does homeowners insurance cover water damage",
    "water damage insurance claim Spokane",
    "homeowners insurance water damage Spokane",
    "what does insurance cover water damage",
    "water damage restoration cost Spokane",
    "flood insurance Spokane",
    "sewer backup insurance coverage",
    "burst pipe insurance claim",
    "water damage North Idaho insurance",
    "ServiceMaster by Compass water damage",
    "water mitigation Spokane",
    "insurance claim water damage documentation",
  ],
  alternates: { canonical },
  openGraph: {
    title,
    description:
      "What does homeowners insurance actually cover for water damage in Spokane? Burst pipes, flooding, sewer backup — and what's excluded.",
    url: canonical,
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Homeowners insurance and water damage coverage guide for Spokane and North Idaho",
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
      "Does homeowners insurance cover water damage in Spokane? Know what's covered, what's excluded, and how to file a strong claim.",
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
      "https://smcfireandwater.com/safety-and-prevention/does-homeowners-insurance-cover-water-damage-spokane#webpage",
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
        "https://smcfireandwater.com/safety-and-prevention/does-homeowners-insurance-cover-water-damage-spokane#breadcrumb",
    },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: canonical,
        name: "Read water damage insurance guide",
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
      "https://smcfireandwater.com/safety-and-prevention/does-homeowners-insurance-cover-water-damage-spokane#breadcrumb",
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
        name: "Does Homeowners Insurance Cover Water Damage in Spokane?",
        item: canonical,
      },
    ],
  },

  // FAQ schema for insurance questions
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does homeowners insurance cover water damage from a burst pipe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases, yes. Sudden and accidental water damage from a burst pipe is typically covered under a standard homeowners insurance policy. However, damage from a pipe that has been leaking slowly over time — considered a maintenance issue — is usually not covered.",
        },
      },
      {
        "@type": "Question",
        name: "Does homeowners insurance cover flood damage in Spokane?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Standard homeowners insurance does not cover flooding from external sources like rising rivers, storm surge, or surface water. Flood insurance is purchased separately through the National Flood Insurance Program (NFIP) or a private insurer.",
        },
      },
      {
        "@type": "Question",
        name: "Is sewer backup covered by homeowners insurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sewer backup is not covered under most standard policies. Many insurers offer sewer backup coverage as an optional endorsement that can be added to your policy for an additional premium.",
        },
      },
      {
        "@type": "Question",
        name: "How do I file a water damage insurance claim in Spokane?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Document all damage with photos and video immediately, then contact your insurance provider to open a claim. A certified water damage restoration company can help you stabilize the property, prevent further damage, and provide documentation that supports your claim.",
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

export default function DoesHomeownersInsuranceCoverWaterDamageSpokane() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Homeowners insurance and water damage coverage guide for Spokane and North Idaho"
        />
      </div>

      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>
              Does Homeowners Insurance Cover Water Damage in Spokane? What You
              Need to Know
            </h1>
            <h2>
              WATER DAMAGE INSURANCE COVERAGE FOR SPOKANE &amp; NORTH IDAHO
              HOMEOWNERS
            </h2>
            <h3>What's Covered, What's Not, and How to File a Strong Claim</h3>

            <p>
              Water damage is stressful enough on its own. Then comes the
              question everyone dreads: is this covered? The honest answer is —
              it depends on how the damage happened, and most homeowners don't
              know the difference until they're already in the middle of a
              claim.
            </p>

            <p>
              This guide breaks down what standard homeowners insurance
              typically covers for water damage in Spokane and North Idaho,
              what's usually excluded, and how to position your claim so you're
              not leaving money on the table.
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

            <h2>
              WHAT DOES HOMEOWNERS INSURANCE TYPICALLY COVER FOR WATER DAMAGE?
            </h2>
            <h3>Sudden and Accidental Damage Is Usually Covered</h3>

            <p>
              The key phrase in most homeowners policies is "sudden and
              accidental." If water damage happened quickly and without warning,
              there's a good chance your standard policy has you covered. If it
              developed gradually over time, that's a different story.
            </p>

            <h3>
              Water damage scenarios typically covered by homeowners insurance
            </h3>
            <ul>
              <li className="arrow-list">
                <strong>Burst pipes:</strong> A pipe that freezes and bursts
                overnight is generally considered sudden and accidental. Most
                standard policies cover the resulting water damage to your
                walls, floors, and belongings.
              </li>
              <li className="arrow-list">
                <strong>Appliance failures:</strong> A washing machine hose that
                fails unexpectedly, a water heater that cracks, or a dishwasher
                that malfunctions and floods your kitchen are typically covered
                events.
              </li>
              <li className="arrow-list">
                <strong>Accidental overflow:</strong> A bathtub or sink that
                overflows and damages flooring or ceilings below is usually
                covered as long as it wasn't due to neglect.
              </li>
              <li className="arrow-list">
                <strong>Roof leaks from storm damage:</strong> If a storm causes
                direct damage to your roof and water enters as a result, the
                water damage is typically covered alongside the roof repair.
              </li>
            </ul>

            <div className="black-box">
              <p>
                When in doubt, call your insurer first — and call a restoration
                company to stabilize the damage so it doesn't get worse while
                you wait. Call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                for immediate help.
              </p>
            </div>

            <h2>WHAT IS NOT COVERED BY STANDARD HOMEOWNERS INSURANCE?</h2>
            <h3>The Exclusions That Catch Most Spokane Homeowners Off Guard</h3>

            <p>
              Standard homeowners insurance has significant gaps when it comes
              to water damage. Knowing these exclusions before you need them is
              the difference between a covered claim and an out-of-pocket
              nightmare.
            </p>

            <h3>Common water damage exclusions in standard policies</h3>
            <ul>
              <li className="arrow-list">
                <strong>Flooding from external sources:</strong> Rising rivers,
                storm surge, surface water, and ground flooding are not covered
                by standard homeowners insurance. Flood insurance is a separate
                policy entirely.
              </li>
              <li className="arrow-list">
                <strong>Gradual leaks and maintenance issues:</strong> A slow
                drip under a sink that causes mold and rot over months is
                typically denied as a maintenance failure, not a sudden event.
                Insurers expect homeowners to address issues as they arise.
              </li>
              <li className="arrow-list">
                <strong>Sewer and drain backup:</strong> Water backing up
                through a floor drain or toilet due to a sewer line issue is
                excluded in most standard policies. This is usually available as
                a separate endorsement.
              </li>
              <li className="arrow-list">
                <strong>Groundwater and seepage:</strong> Water seeping through
                a foundation, basement walls, or a crawl space is generally
                excluded as a moisture or structural issue rather than a covered
                water event.
              </li>
              <li className="arrow-list">
                <strong>Mold remediation (in some cases):</strong> If mold
                results from a covered water event, some policies include mold
                remediation — but many cap the coverage or exclude it if the
                mold developed due to delayed response.
              </li>
            </ul>

            <h2>FLOOD INSURANCE IN SPOKANE: A SEPARATE POLICY</h2>
            <h3>When You Need More Than a Standard Homeowners Policy</h3>

            <p>
              If your property is in or near a floodplain — or you simply want
              protection against external flooding — you'll need a separate
              flood insurance policy. In Spokane and North Idaho, spring
              snowmelt and heavy rain events can create flooding risks that a
              standard homeowners policy won't touch.
            </p>

            <h3>
              Flood insurance options for Spokane and North Idaho homeowners
            </h3>
            <ul>
              <li className="arrow-list">
                <strong>National Flood Insurance Program (NFIP):</strong>{" "}
                Federally backed flood insurance available to homeowners in
                participating communities. Covers the structure and, with a
                separate policy, personal contents.
              </li>
              <li className="arrow-list">
                <strong>Private flood insurance:</strong> Private insurers
                sometimes offer broader coverage or faster claims processing
                than the NFIP. Worth comparing if you're in a higher-risk area.
              </li>
              <li className="arrow-list">
                <strong>Sewer backup endorsements:</strong> Ask your current
                insurer about adding a sewer or water backup rider to your
                existing policy — it's often surprisingly affordable and covers
                a common and expensive event.
              </li>
            </ul>

            <div className="yellow-box">
              <h3>
                Not sure what your policy covers? Review your declarations page
                and contact your agent before you need to file a claim. And if
                damage has already happened, call{" "}
                <a className="underline-link" href="tel:15095355440">
                  (509) 535-5440
                </a>{" "}
                — we work with all major insurers.
              </h3>
            </div>

            <h2>HOW TO FILE A WATER DAMAGE INSURANCE CLAIM IN SPOKANE</h2>
            <h3>Steps That Help Your Claim Go Smoothly</h3>

            <p>
              Filing a water damage claim doesn't have to be a fight — but it
              does require documentation, prompt action, and knowing what your
              adjuster will be looking for. Here's how to set yourself up for
              the best possible outcome.
            </p>

            <h3>Step one: Document everything before cleanup begins</h3>
            <ul>
              <li className="arrow-list">
                Take photos and video of every affected room, wall, floor, and
                ceiling before anything is moved or dried.
              </li>
              <li className="arrow-list">
                Capture the source of the damage if visible — the burst pipe,
                the failed appliance, the roof opening.
              </li>
              <li className="arrow-list">
                Create a written list of damaged belongings with estimated
                values.
              </li>
            </ul>

            <h3>Step two: Prevent further damage — but don't over-repair</h3>
            <ul>
              <li className="arrow-list">
                You have an obligation under most policies to take reasonable
                steps to prevent additional damage. Start drying, remove
                standing water, and cover roof openings if safe to do so.
              </li>
              <li className="arrow-list">
                Do not make permanent repairs before your adjuster has
                inspected. Temporary mitigation is expected — major
                reconstruction before inspection can complicate your claim.
              </li>
            </ul>

            <h3>Step three: Contact your insurer promptly</h3>
            <ul>
              <li className="arrow-list">
                Report the damage as soon as possible. Most policies require
                timely notification — delays can give insurers grounds to reduce
                or deny a claim.
              </li>
              <li className="arrow-list">
                Ask for your claim number and the name of your assigned
                adjuster. Keep notes on every conversation.
              </li>
              <li className="arrow-list">
                Request a copy of your full policy if you don't have one — you
                have a right to know exactly what you're covered for.
              </li>
            </ul>

            <h3>Step four: Bring in a certified restoration company</h3>
            <ul>
              <li className="arrow-list">
                A professional restoration company provides documented moisture
                readings, drying logs, and written reports — all of which
                support your claim and demonstrate the scope of damage.
              </li>
              <li className="arrow-list">
                Restoration professionals work alongside adjusters regularly and
                understand what documentation insurers need.
              </li>
              <li className="arrow-list">
                Acting fast on mitigation also demonstrates good faith to your
                insurer, which can support a stronger claim outcome.
              </li>
            </ul>

            <h2>WATER DAMAGE COVERAGE: QUICK REFERENCE</h2>
            <h3>What's Typically Covered vs. Excluded</h3>

            <table className="table">
              <thead>
                <tr>
                  <th>Water Damage Type</th>
                  <th>Typically Covered?</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Burst pipe (sudden)</td>
                  <td>Yes</td>
                  <td>Must be sudden, not a known slow leak</td>
                </tr>
                <tr>
                  <td>Appliance failure</td>
                  <td>Yes</td>
                  <td>Unexpected malfunction, not wear and tear</td>
                </tr>
                <tr>
                  <td>Storm-related roof leak</td>
                  <td>Yes</td>
                  <td>Must result from direct storm damage</td>
                </tr>
                <tr>
                  <td>Gradual / slow leak</td>
                  <td>No</td>
                  <td>Considered a maintenance failure</td>
                </tr>
                <tr>
                  <td>Flooding (external)</td>
                  <td>No</td>
                  <td>Requires separate flood insurance</td>
                </tr>
                <tr>
                  <td>Sewer / drain backup</td>
                  <td>No (usually)</td>
                  <td>Available as endorsement on many policies</td>
                </tr>
                <tr>
                  <td>Foundation / groundwater seepage</td>
                  <td>No</td>
                  <td>Structural / moisture issue, not a covered event</td>
                </tr>
              </tbody>
            </table>

            <h2>
              WATER DAMAGE RESTORATION IN SPOKANE &amp; NORTH IDAHO — WE WORK
              WITH YOUR INSURANCE
            </h2>
            <h3>Fast Response. Thorough Documentation. All Major Insurers.</h3>

            <p>
              Navigating a water damage insurance claim is easier when you have
              a restoration partner who understands the process. At{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>
              , we provide thorough moisture documentation, professional drying
              and mitigation, and clear written reports that support your claim
              from day one.
            </p>

            <p>
              We work with all major insurance providers and can be on-site
              quickly to stabilize your home and start the restoration process —
              so you're not waiting, worrying, or watching the damage spread.
            </p>

            <div className="black-box">
              <p>
                For 24/7 help with water damage in Spokane or North Idaho, call{" "}
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
